import { boolean, integer, pgTable, text } from 'drizzle-orm/pg-core';
import { timestamps } from './_timestamps.js';

export const users = pgTable('users', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  firstName: text('first_name').notNull(),
  lastName: text('last_name').notNull(),
  isActive: boolean('is_active').notNull().default(true),
  ...timestamps,
});

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
