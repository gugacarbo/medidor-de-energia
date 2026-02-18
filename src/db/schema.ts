import { integer, jsonb, pgTable } from "drizzle-orm/pg-core";

export const energyLogTable = pgTable("energy_log", {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	data: jsonb("data").notNull(),
});
