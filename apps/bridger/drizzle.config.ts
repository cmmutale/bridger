import { type Config } from "drizzle-kit";

// import { env } from "~/env";

export default {
  schema: "./src/server/db/schema.ts",
  dialect: "sqlite",
  dbCredentials: {
    url: process.env.DATABASE_URL as string,
  },
  tablesFilter: ["bridger_*"],
} satisfies Config;
