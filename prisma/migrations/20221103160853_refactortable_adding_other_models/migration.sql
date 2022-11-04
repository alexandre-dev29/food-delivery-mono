/*
  Warnings:

  - You are about to drop the column `profileId` on the `FileEntity` table. All the data in the column will be lost.
  - You are about to drop the `UserAdresses` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[fileEntityId]` on the table `Profile` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "FileEntity" DROP CONSTRAINT "FileEntity_profileId_fkey";

-- DropForeignKey
ALTER TABLE "UserAdresses" DROP CONSTRAINT "UserAdresses_userId_fkey";

-- DropIndex
DROP INDEX "FileEntity_profileId_key";

-- AlterTable
ALTER TABLE "FileEntity" DROP COLUMN "profileId";

-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "fileEntityId" TEXT;

-- DropTable
DROP TABLE "UserAdresses";

-- CreateTable
CREATE TABLE "Adresses" (
    "idAdresse" TEXT NOT NULL,
    "userId" TEXT,
    "restaurantId" TEXT,
    "adressName" TEXT NOT NULL,
    "longitude" TEXT NOT NULL,
    "latitude" TEXT NOT NULL,
    "elevation" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Adresses_pkey" PRIMARY KEY ("idAdresse")
);

-- CreateTable
CREATE TABLE "Restaurants" (
    "idRestaurant" TEXT NOT NULL,
    "restauDescription" TEXT NOT NULL,
    "restauName" TEXT NOT NULL,
    "creationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "fileEntityId" TEXT NOT NULL,

    CONSTRAINT "Restaurants_pkey" PRIMARY KEY ("idRestaurant")
);

-- CreateTable
CREATE TABLE "RestauUsers" (
    "idRestauUser" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "refreshToken" TEXT NOT NULL,
    "userFullName" TEXT NOT NULL,
    "restauId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "roleId" TEXT NOT NULL,

    CONSTRAINT "RestauUsers_pkey" PRIMARY KEY ("idRestauUser")
);

-- CreateTable
CREATE TABLE "ImagesSecondary" (
    "id" TEXT NOT NULL,
    "fileName" TEXT NOT NULL,
    "fileUrl" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "restaurantsId" TEXT,

    CONSTRAINT "ImagesSecondary_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Profile_fileEntityId_key" ON "Profile"("fileEntityId");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_fileEntityId_fkey" FOREIGN KEY ("fileEntityId") REFERENCES "FileEntity"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Adresses" ADD CONSTRAINT "Adresses_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("idUser") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Adresses" ADD CONSTRAINT "Adresses_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurants"("idRestaurant") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Restaurants" ADD CONSTRAINT "Restaurants_fileEntityId_fkey" FOREIGN KEY ("fileEntityId") REFERENCES "FileEntity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RestauUsers" ADD CONSTRAINT "RestauUsers_restauId_fkey" FOREIGN KEY ("restauId") REFERENCES "Restaurants"("idRestaurant") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RestauUsers" ADD CONSTRAINT "RestauUsers_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("roleId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImagesSecondary" ADD CONSTRAINT "ImagesSecondary_restaurantsId_fkey" FOREIGN KEY ("restaurantsId") REFERENCES "Restaurants"("idRestaurant") ON DELETE SET NULL ON UPDATE CASCADE;
