/*
  Warnings:

  - A unique constraint covering the columns `[preferenceId]` on the table `Profile` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `preferenceId` to the `Profile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "preferenceId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Preference" (
    "id" SERIAL NOT NULL,
    "language" TEXT NOT NULL,
    "region_format" TEXT NOT NULL,
    "theme" TEXT NOT NULL,
    "accessibilbity" TEXT,
    "font_size" TEXT NOT NULL,
    "content" TEXT,
    "private" BOOLEAN NOT NULL,
    "ntf_follower" TEXT,
    "ntf_mention" TEXT,
    "ntf_like" TEXT,
    "ntf_comment" TEXT,
    "ntf_msg" TEXT,
    "ntf_follow_req" TEXT,

    CONSTRAINT "Preference_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Profile_preferenceId_key" ON "Profile"("preferenceId");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_preferenceId_fkey" FOREIGN KEY ("preferenceId") REFERENCES "Preference"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
