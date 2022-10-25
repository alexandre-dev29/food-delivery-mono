/*
  Warnings:

  - You are about to drop the column `profileId` on the `FileEntity` table. All the data in the column will be lost.
  - You are about to drop the column `profileId` on the `Users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Profile` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[profilePictureId]` on the table `Profile` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `profilePictureId` to the `Profile` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "FileEntity" DROP CONSTRAINT "FileEntity_profileId_fkey";

-- DropForeignKey
ALTER TABLE "Users" DROP CONSTRAINT "Users_profileId_fkey";

-- DropIndex
DROP INDEX "FileEntity_profileId_key";

-- DropIndex
DROP INDEX "Users_profileId_key";

-- AlterTable
ALTER TABLE "FileEntity" DROP COLUMN "profileId";

-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "profilePictureId" TEXT NOT NULL,
ADD COLUMN     "userId" TEXT;

-- AlterTable
ALTER TABLE "Users" DROP COLUMN "profileId";

-- CreateIndex
CREATE UNIQUE INDEX "Profile_userId_key" ON "Profile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_profilePictureId_key" ON "Profile"("profilePictureId");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("idUser") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_profilePictureId_fkey" FOREIGN KEY ("profilePictureId") REFERENCES "FileEntity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
