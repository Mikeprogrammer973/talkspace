-- AlterTable
ALTER TABLE "User" ADD COLUMN     "verificationCode" TEXT,
ADD COLUMN     "verified" BOOLEAN NOT NULL DEFAULT false;
