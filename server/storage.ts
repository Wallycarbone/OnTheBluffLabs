import { users, inquiries, dogFoodOrders, type User, type InsertUser, type Inquiry, type InsertInquiry, type DogFoodOrder, type InsertDogFoodOrder, type LoginData } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";
import bcrypt from "bcryptjs";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createAdminUser(username: string, password: string): Promise<User>;
  validateLogin(loginData: LoginData): Promise<User | null>;
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
  getInquiries(): Promise<Inquiry[]>;
  getAllUsers(): Promise<User[]>;
  createDogFoodOrder(order: InsertDogFoodOrder): Promise<DogFoodOrder>;
  getDogFoodOrders(): Promise<DogFoodOrder[]>;
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
    // Hash the password before storing
    const hashedPassword = await bcrypt.hash(insertUser.password, 10);
    const [user] = await db
      .insert(users)
      .values({
        ...insertUser,
        password: hashedPassword
      })
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
    
    // Compare hashed password
    const isValidPassword = await bcrypt.compare(loginData.password, user.password);
    if (isValidPassword) {
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

  async createDogFoodOrder(insertOrder: InsertDogFoodOrder): Promise<DogFoodOrder> {
    const [order] = await db
      .insert(dogFoodOrders)
      .values(insertOrder)
      .returning();
    return order;
  }

  async getDogFoodOrders(): Promise<DogFoodOrder[]> {
    const orderList = await db
      .select()
      .from(dogFoodOrders)
      .orderBy(dogFoodOrders.createdAt);
    return orderList;
  }

  async createAdminUser(username: string, password: string): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const [user] = await db
      .insert(users)
      .values({
        username,
        password: hashedPassword,
        role: 'admin'
      })
      .returning();
    return user;
  }

  async getAllUsers(): Promise<User[]> {
    const allUsers = await db.select().from(users);
    return allUsers.map(user => ({
      ...user,
      password: '[HIDDEN]' // Don't expose passwords
    }));
  }
}

export const storage = new DatabaseStorage();
