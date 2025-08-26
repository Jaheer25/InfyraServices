import {
  users,
  contacts,
  businessRegistrations,
  type User,
  type UpsertUser,
  type InsertContact,
  type Contact,
  type InsertBusinessRegistration,
  type BusinessRegistration,
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

// Interface for storage operations
export interface IStorage {
  // User operations for Replit Auth
  getUser(id: string): Promise<User | undefined>;
  upsertUser(user: UpsertUser): Promise<User>;
  
  // Contact form operations
  createContact(contact: InsertContact): Promise<Contact>;
  
  // Business registration operations
  createBusinessRegistration(registration: InsertBusinessRegistration): Promise<BusinessRegistration>;
}

export class DatabaseStorage implements IStorage {
  // User operations for Replit Auth
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async upsertUser(userData: UpsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(userData)
      .onConflictDoUpdate({
        target: users.id,
        set: {
          ...userData,
          updatedAt: new Date(),
        },
      })
      .returning();
    return user;
  }

  // Contact form operations
  async createContact(contactData: InsertContact): Promise<Contact> {
    const [contact] = await db
      .insert(contacts)
      .values(contactData)
      .returning();
    return contact;
  }

  // Business registration operations
  async createBusinessRegistration(registrationData: InsertBusinessRegistration): Promise<BusinessRegistration> {
    const [registration] = await db
      .insert(businessRegistrations)
      .values(registrationData)
      .returning();
    return registration;
  }
}

export const storage = new DatabaseStorage();
