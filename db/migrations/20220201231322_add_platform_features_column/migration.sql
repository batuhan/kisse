-- CreateEnum
CREATE TYPE "PlatformFeatures" AS ENUM ('STRIPE_CONNECT', 'GOOGLE_ANALYTICS', 'WEBHOOKS', 'NOTION_LINKS', 'WORKFLOWS', 'CRYPTOCURRENCIES', 'ASSETS', 'ASSETS_SUBSCRIPTIONS', 'DONATIONS', 'VIDEO_UPLOAD');

-- AlterTable
ALTER TABLE "Organization" ADD COLUMN     "platformFeatures" "PlatformFeatures"[];