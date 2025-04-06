ALTER TABLE "bridger-app_pages" ADD COLUMN "isRootpage" boolean DEFAULT false NOT NULL;--> statement-breakpoint
ALTER TABLE "bridger-app_pages" DROP COLUMN "isRootpagee";