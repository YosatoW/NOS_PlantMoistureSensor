import { boolean, integer, pgTable, timestamp, real } from "drizzle-orm/pg-core";

export const plantSensor = pgTable("Plant Sensor", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  moisture: integer('moisture').notNull(),
  temperature: real('temperature').notNull(),
  timestamp: timestamp('timestamp').defaultNow().notNull(),
  simulated: boolean('simulated').default(false).notNull(),
});