import { pgTable, serial, text, timestamp, integer } from "drizzle-orm/pg-core";

export const reservations = pgTable("reservations", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  date: timestamp("date").notNull(),
  time: text("time").notNull(),
  guests: integer("guests").notNull(),
  notes: text("notes"),
  createdAt: timestamp("created_at").defaultNow(),
});
