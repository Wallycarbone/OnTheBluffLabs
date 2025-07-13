import { users, inquiries, type User, type InsertUser, type Inquiry, type InsertInquiry, type LoginData } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  validateLogin(loginData: LoginData): Promise<User | null>;
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
  getInquiries(): Promise<Inquiry[]>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async validateLogin(loginData: LoginData): Promise<User | null> {
    const [user] = await db
      .select()
      .from(users)
      .where(eq(users.username, loginData.username));
    
    if (!user) {
      return null;
    }
    
    // Simple password comparison (in production, use hashed passwords)
    if (user.password === loginData.password) {
      return user;
    }
    
    return null;
  }

  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const [inquiry] = await db
      .insert(inquiries)
      .values(insertInquiry)
      .returning();
    return inquiry;
  }

  async getInquiries(): Promise<Inquiry[]> {
    const inquiryList = await db
      .select()
      .from(inquiries)
      .orderBy(inquiries.createdAt);
    return inquiryList;
  }
}

export const storage = new DatabaseStorage();
