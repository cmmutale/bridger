import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().min(1), // Change from .url() to .min(1) temporarily
    USER_SEED_ID: z.string().min(1),
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
  },

  client: {},

  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    NODE_ENV: process.env.NODE_ENV,
    USER_SEED_ID: process.env.USER_SEED_ID,
  },
  
  // For debugging, you might want to enable this
  skipValidation: process.env.NODE_ENV === "test" || process.env.NODE_ENV === "production" || !!process.env.SKIP_ENV_VALIDATION,
  
  emptyStringAsUndefined: true,
});