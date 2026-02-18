import { integer, jsonb, pgTable, timestamp } from "drizzle-orm/pg-core";

export const energyLogTable = pgTable("energy_log", {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	data: jsonb("data").notNull(),
	createdAt: timestamp("createdAt").notNull().defaultNow(),
});
