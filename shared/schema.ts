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

export const applications = pgTable("applications", {
  id: serial("id").primaryKey(),
  // Personal Information
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  address: text("address").notNull(),
  city: text("city").notNull(),
  state: text("state").notNull(),
  zipCode: text("zip_code").notNull(),
  
  // Household Information
  adults: text("adults").notNull(),
  children: text("children").notNull(),
  childrenAges: text("children_ages"),
  otherPets: text("other_pets").notNull(),
  otherPetsDescription: text("other_pets_description"),
  
  // Housing Information
  housingType: text("housing_type").notNull(),
  ownRent: text("own_rent").notNull(),
  yardType: text("yard_type").notNull(),
  yardSize: text("yard_size").notNull(),
  fenced: text("fenced").notNull(),
  
  // Puppy Preferences
  puppyGender: text("puppy_gender").notNull(),
  puppyColor: text("puppy_color").notNull(),
  specificLitter: text("specific_litter"),
  timeline: text("timeline").notNull(),
  
  // Experience & Care
  previousExperience: text("previous_experience").notNull(),
  experienceDescription: text("experience_description"),
  dailySchedule: text("daily_schedule").notNull(),
  exercisePlan: text("exercise_plan").notNull(),
  trainingApproach: text("training_approach").notNull(),
  veterinarian: text("veterinarian").notNull(),
  vetPhone: text("vet_phone"),
  
  // References
  reference1Name: text("reference1_name"),
  reference1Phone: text("reference1_phone"),
  reference2Name: text("reference2_name"),
  reference2Phone: text("reference2_phone"),
  
  // Additional Information
  whyLabrador: text("why_labrador").notNull(),
  whyOnTheBluff: text("why_on_the_bluff").notNull(),
  additionalInfo: text("additional_info"),
  
  // Agreements
  homeVisitAgreed: boolean("home_visit_agreed").notNull().default(false),
  contractAgreed: boolean("contract_agreed").notNull().default(false),
  
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

export const insertApplicationSchema = createInsertSchema(applications).omit({
  id: true,
  status: true,
  createdAt: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertInquiry = z.infer<typeof insertInquirySchema>;
export type Inquiry = typeof inquiries.$inferSelect;
export type InsertDogFoodOrder = z.infer<typeof insertDogFoodOrderSchema>;
export type DogFoodOrder = typeof dogFoodOrders.$inferSelect;
export type InsertApplication = z.infer<typeof insertApplicationSchema>;
export type Application = typeof applications.$inferSelect;
export type LoginData = z.infer<typeof loginSchema>;
