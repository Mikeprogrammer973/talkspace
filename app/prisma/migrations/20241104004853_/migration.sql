/*
  Warnings:

  - The `accessibilbity` column on the `Preference` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `content` column on the `Preference` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `ntf_follower` column on the `Preference` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `ntf_mention` column on the `Preference` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `ntf_like` column on the `Preference` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `ntf_comment` column on the `Preference` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `ntf_msg` column on the `Preference` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `ntf_follow_req` column on the `Preference` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Preference" DROP COLUMN "accessibilbity",
ADD COLUMN     "accessibilbity" TEXT[],
DROP COLUMN "content",
ADD COLUMN     "content" TEXT[],
DROP COLUMN "ntf_follower",
ADD COLUMN     "ntf_follower" TEXT[],
DROP COLUMN "ntf_mention",
ADD COLUMN     "ntf_mention" TEXT[],
DROP COLUMN "ntf_like",
ADD COLUMN     "ntf_like" TEXT[],
DROP COLUMN "ntf_comment",
ADD COLUMN     "ntf_comment" TEXT[],
DROP COLUMN "ntf_msg",
ADD COLUMN     "ntf_msg" TEXT[],
DROP COLUMN "ntf_follow_req",
ADD COLUMN     "ntf_follow_req" TEXT[];
