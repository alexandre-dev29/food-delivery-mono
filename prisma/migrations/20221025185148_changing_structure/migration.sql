/*
  Warnings:

  - You are about to drop the column `profilePictureId` on the `Profile` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[profileId]` on the table `FileEntity` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `profileId` to the `FileEntity` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_profilePictureId_fkey";

-- DropIndex
DROP INDEX "Profile_profilePictureId_key";

-- AlterTable
ALTER TABLE "FileEntity" ADD COLUMN     "profileId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "profilePictureId";

-- CreateIndex
CREATE UNIQUE INDEX "FileEntity_profileId_key" ON "FileEntity"("profileId");

-- AddForeignKey
ALTER TABLE "FileEntity" ADD CONSTRAINT "FileEntity_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("profileId") ON DELETE RESTRICT ON UPDATE CASCADE;
