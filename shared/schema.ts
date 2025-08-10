import { pgTable, text, serial, timestamp, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  role: text("role").notNull().default("admin"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  preferredColor: text("preferred_color").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const dogFoodOrders = pgTable("dog_food_orders", {
  id: serial("id").primaryKey(),
  customerName: text("customer_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  address: text("address").notNull(),
  productId: text("product_id").notNull(),
  productName: text("product_name").notNull(),
  productPrice: integer("product_price").notNull(),
  quantity: integer("quantity").notNull(),
  totalAmount: integer("total_amount").notNull(),
  dogName: text("dog_name").notNull(),
  dogAge: text("dog_age").notNull(),
  dogWeight: text("dog_weight").notNull(),
  pickupDate: text("pickup_date").notNull(),
  pickupTime: text("pickup_time").notNull(),
  notes: text("notes"),
  status: text("status").notNull().default("pending"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

export const insertInquirySchema = createInsertSchema(inquiries).pick({
  firstName: true,
  lastName: true,
  email: true,
  phone: true,
  preferredColor: true,
  message: true,
});

export const insertDogFoodOrderSchema = createInsertSchema(dogFoodOrders).pick({
  customerName: true,
  email: true,
  phone: true,
  address: true,
  productId: true,
  productName: true,
  productPrice: true,
  quantity: true,
  totalAmount: true,
  dogName: true,
  dogAge: true,
  dogWeight: true,
  pickupDate: true,
  pickupTime: true,
  notes: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertInquiry = z.infer<typeof insertInquirySchema>;
export type Inquiry = typeof inquiries.$inferSelect;
export type InsertDogFoodOrder = z.infer<typeof insertDogFoodOrderSchema>;
export type DogFoodOrder = typeof dogFoodOrders.$inferSelect;
export type LoginData = z.infer<typeof loginSchema>;
