ALTER TABLE "bridger-app_post" ALTER COLUMN "id" SET DATA TYPE uuid;--> statement-breakpoint
ALTER TABLE "bridger-app_post" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();--> statement-breakpoint
ALTER TABLE "bridger-app_post" ALTER COLUMN "id" DROP IDENTITY;