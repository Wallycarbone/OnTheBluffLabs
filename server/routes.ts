import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertInquirySchema, loginSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Create a new inquiry
  app.post("/api/inquiries", async (req, res) => {
    try {
      const inquiry = insertInquirySchema.parse(req.body);
      const createdInquiry = await storage.createInquiry(inquiry);
      res.json(createdInquiry);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          message: "Validation error",
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          message: "Internal server error" 
        });
      }
    }
  });

  // Get all inquiries
  app.get("/api/inquiries", async (req, res) => {
    try {
      const inquiries = await storage.getInquiries();
      res.json(inquiries);
    } catch (error) {
      res.status(500).json({ 
        message: "Internal server error" 
      });
    }
  });

  // Authentication routes
  app.post("/api/auth/login", async (req, res) => {
    try {
      const loginData = loginSchema.parse(req.body);
      const user = await storage.validateLogin(loginData);
      
      if (!user) {
        return res.status(401).json({ 
          message: "Invalid credentials" 
        });
      }
      
      res.json({ 
        user: {
          id: user.id,
          username: user.username,
          role: user.role
        },
        token: "simple-token"
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Validation error",
          errors: error.errors 
        });
      }
      res.status(500).json({ 
        message: "Login failed" 
      });
    }
  });

  app.post("/api/auth/logout", async (req, res) => {
    res.json({ message: "Logged out successfully" });
  });

  // Quick login test endpoint - GET request to test from browser
  app.get('/api/quick-login-test', async (req, res) => {
    try {
      const result = await storage.validateLogin({ username: 'admin', password: 'admin123' });
      if (result) {
        res.json({ success: true, message: 'Login test successful', user: { id: result.id, username: result.username, role: result.role } });
      } else {
        res.status(401).json({ success: false, message: 'Login test failed' });
      }
    } catch (error) {
      console.error('Quick login test error:', error);
      res.status(500).json({ success: false, message: 'Server error during login test' });
    }
  });

  // Create new admin user endpoint
  app.post('/api/admin/create-user', async (req, res) => {
    try {
      const { username, password } = req.body;
      
      if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
      }

      // Check if username already exists
      const existingUser = await storage.getUserByUsername(username);
      if (existingUser) {
        return res.status(409).json({ message: 'Username already exists' });
      }

      const newUser = await storage.createAdminUser(username, password);
      res.json({ 
        success: true, 
        message: 'Admin user created successfully',
        user: { id: newUser.id, username: newUser.username, role: newUser.role }
      });
    } catch (error) {
      console.error('Error creating admin user:', error);
      res.status(500).json({ message: 'Failed to create admin user' });
    }
  });

  // List all users (admin only)
  app.get('/api/admin/users', async (req, res) => {
    try {
      const users = await storage.getAllUsers();
      res.json({ users });
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ message: 'Failed to fetch users' });
    }
  });

  // File editor endpoints for admin
  app.get('/api/admin/files/:filepath(*)', (req, res) => {
    try {
      const filePath = req.params.filepath;
      const fs = require('fs');
      const path = require('path');
      
      const fullPath = path.join(process.cwd(), filePath);
      
      // Security check - only allow editing specific files
      const allowedPaths = [
        'client/src/components/',
        'client/src/pages/',
      ];
      
      const isAllowed = allowedPaths.some(allowed => filePath.startsWith(allowed));
      if (!isAllowed) {
        return res.status(403).json({ message: 'File access not allowed' });
      }
      
      if (fs.existsSync(fullPath)) {
        const content = fs.readFileSync(fullPath, 'utf8');
        res.type('text/plain').send(content);
      } else {
        res.status(404).json({ message: 'File not found' });
      }
    } catch (error) {
      console.error('Error reading file:', error);
      res.status(500).json({ message: 'Failed to read file' });
    }
  });

  app.put('/api/admin/files/:filepath(*)', (req, res) => {
    try {
      const filePath = req.params.filepath;
      const fs = require('fs');
      const path = require('path');
      
      const fullPath = path.join(process.cwd(), filePath);
      
      // Security check - only allow editing specific files
      const allowedPaths = [
        'client/src/components/',
        'client/src/pages/',
      ];
      
      const isAllowed = allowedPaths.some(allowed => filePath.startsWith(allowed));
      if (!isAllowed) {
        return res.status(403).json({ message: 'File access not allowed' });
      }
      
      fs.writeFileSync(fullPath, req.body);
      res.json({ message: 'File saved successfully' });
    } catch (error) {
      console.error('Error saving file:', error);
      res.status(500).json({ message: 'Failed to save file' });
    }
  });

  // User creation endpoint (for seeding admin user)
  app.post("/api/users", async (req, res) => {
    try {
      const userData = insertUserSchema.parse(req.body);
      const user = await storage.createUser(userData);
      res.json({ 
        id: user.id,
        username: user.username,
        role: user.role 
      });
    } catch (error) {
      console.error("Error creating user:", error);
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Validation error",
          errors: error.errors 
        });
      }
      res.status(500).json({ 
        message: "Failed to create user",
        error: error.message 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
