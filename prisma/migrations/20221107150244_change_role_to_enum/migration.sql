-- CreateEnum
CREATE TYPE "Role" AS ENUM ('SuperAdmin', 'User', 'RestaurantUser', 'RestaurantAdmin');

-- CreateTable
CREATE TABLE "AuthUser" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" VARCHAR(60) NOT NULL,
    "refreshToken" TEXT,
    "phoneNumber" VARCHAR(20) NOT NULL,
    "password" VARCHAR(100) NOT NULL,
    "username" VARCHAR(100) NOT NULL,
    "isPhoneConfirmed" BOOLEAN NOT NULL DEFAULT false,
    "role" "Role" NOT NULL DEFAULT 'User',

    CONSTRAINT "AuthUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Users" (
    "idUser" TEXT NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,
    "userName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("idUser")
);

-- CreateTable
CREATE TABLE "Profile" (
    "profileId" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "dateOfBirth" TIMESTAMP(3),
    "placeOfBirth" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "fileEntityId" TEXT,
    "userId" TEXT,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("profileId")
);

-- CreateTable
CREATE TABLE "FileEntity" (
    "id" TEXT NOT NULL,
    "fileName" TEXT NOT NULL,
    "fileUrl" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FileEntity_pkey" PRIMARY KEY ("id")
);

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
    "refreshToken" TEXT,
    "userFullName" TEXT NOT NULL,
    "restauId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'RestaurantUser',

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

-- CreateIndex
CREATE UNIQUE INDEX "Profile_userId_key" ON "Profile"("userId");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_fileEntityId_fkey" FOREIGN KEY ("fileEntityId") REFERENCES "FileEntity"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("idUser") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Adresses" ADD CONSTRAINT "Adresses_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("idUser") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Adresses" ADD CONSTRAINT "Adresses_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurants"("idRestaurant") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Restaurants" ADD CONSTRAINT "Restaurants_fileEntityId_fkey" FOREIGN KEY ("fileEntityId") REFERENCES "FileEntity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RestauUsers" ADD CONSTRAINT "RestauUsers_restauId_fkey" FOREIGN KEY ("restauId") REFERENCES "Restaurants"("idRestaurant") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImagesSecondary" ADD CONSTRAINT "ImagesSecondary_restaurantsId_fkey" FOREIGN KEY ("restaurantsId") REFERENCES "Restaurants"("idRestaurant") ON DELETE SET NULL ON UPDATE CASCADE;
