import { sql } from "drizzle-orm";
import { index, pgTableCreator } from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name) => `bridger-app_${name}`);

export const posts = createTable(
    "post",
    (d) => ({
        id: d.uuid().primaryKey().defaultRandom(), // This is fine for UUID
        name: d.varchar({ length: 256 }),
        createdAt: d
            .timestamp({ withTimezone: true })
            .default(sql`CURRENT_TIMESTAMP`)
            .notNull(),
        updatedAt: d.timestamp({ withTimezone: true }).$onUpdate(() => new Date()),
    }),
    (t) => [index("name_idx").on(t.name)],
);

export const projects = createTable(
    "projects",
    (d) => ({
        id: d.uuid().primaryKey().defaultRandom(), // This is fine for UUID
        userId: d.text().notNull(),
        name: d.text().notNull(),
        description: d.text(),
        published: d.boolean().notNull().default(false),
        createdAt: d
            .timestamp({ withTimezone: true })
            .default(sql`CURRENT_TIMESTAMP`)
            .notNull(),
        updatedAt: d.timestamp({ withTimezone: true }).$onUpdate(() => new Date()),
    }),
    (t) => [index("project_name_idx").on(t.name)]
);

export const pages = createTable(
    "pages",
    (d) => ({
        id: d.uuid().primaryKey().defaultRandom(), // This is fine for UUID
        projectId: d.uuid().notNull().references(() => projects.id),
        title: d.text(),
        slug: d.text().notNull(),
        isRootpage: d.boolean().notNull().default(false), // Fixed typo from isRootpagee
        description: d.text(),
        published: d.boolean().notNull().default(false),
        createdAt: d
            .timestamp({ withTimezone: true })
            .default(sql`CURRENT_TIMESTAMP`)
            .notNull(),
        updatedAt: d.timestamp({ withTimezone: true }).$onUpdate(() => new Date()),
        content: d.jsonb().notNull(),
    }),
    (t) => [index("pages_title_idx").on(t.title)]
);

export const domains = createTable(
    "domains",
    (d) => ({
        id: d.uuid().primaryKey().defaultRandom(), // This is fine for UUID
        projectId: d.uuid().notNull().references(() => projects.id),
        domain: d.text().notNull(),
        verified: d.boolean().default(false),
        createdAt: d
            .timestamp({ withTimezone: true })
            .default(sql`CURRENT_TIMESTAMP`)
            .notNull(),
    }),
    (t) => [index("domain_idx").on(t.domain)]
);