import { pgTable, text, timestamp, boolean } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

// ----------------------
// USER TABLE
// ----------------------
export const user = pgTable("user", {
    id: text("id").primaryKey(),
    name: text("name").notNull(),
    email: text("email").notNull().unique(),

    // Better Auth expects a boolean here
    emailVerified: boolean("emailVerified")
        .notNull()
        .default(false),

    image: text("image"),

    createdAt: timestamp("createdAt", { mode: "date" })
        .default(sql`now()`)
        .notNull(),

    updatedAt: timestamp("updatedAt", { mode: "date" })
        .default(sql`now()`)
        .notNull(),
});

// ----------------------
// SESSION TABLE
// ----------------------
export const session = pgTable("session", {
    id: text("id").primaryKey(),

    // Better Auth auto-creates this
    token: text("token").notNull(),

    expiresAt: timestamp("expiresAt", { mode: "date" }).notNull(),
    ipAddress: text("ipAddress"),
    userAgent: text("userAgent"),

    userId: text("userId")
        .notNull()
        .references(() => user.id),

    createdAt: timestamp("createdAt", { mode: "date" })
        .default(sql`now()`)
        .notNull(),

    updatedAt: timestamp("updatedAt", { mode: "date" })
        .default(sql`now()`)
        .notNull(),
});

// ----------------------
// ACCOUNT TABLE
// ----------------------
export const account = pgTable("account", {
    id: text("id").primaryKey(),
    accountId: text("accountId").notNull(),
    providerId: text("providerId").notNull(),

    userId: text("userId")
        .notNull()
        .references(() => user.id),

    accessToken: text("accessToken"),
    refreshToken: text("refreshToken"),
    idToken: text("idToken"),
    expiresAt: timestamp("expiresAt", { mode: "date" }),
    password: text("password"),

    createdAt: timestamp("createdAt", { mode: "date" })
        .default(sql`now()`)
        .notNull(),

    updatedAt: timestamp("updatedAt", { mode: "date" })
        .default(sql`now()`)
        .notNull(),
});

// ----------------------
// VERIFICATION TABLE
// ----------------------
export const verification = pgTable("verification", {
    id: text("id").primaryKey(),

    identifier: text("identifier").notNull(),
    value: text("value").notNull(),
    expiresAt: timestamp("expiresAt", { mode: "date" }).notNull(),

    createdAt: timestamp("createdAt", { mode: "date" })
        .default(sql`now()`)
        .notNull(),

    updatedAt: timestamp("updatedAt", { mode: "date" })
        .default(sql`now()`)
        .notNull(),
});
