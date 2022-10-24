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
    "roleRoleId" TEXT,
    "isPhoneConfirmed" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "AuthUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Role" (
    "roleId" TEXT NOT NULL,
    "userRole" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("roleId")
);

-- CreateTable
CREATE TABLE "Users" (
    "idUser" TEXT NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,
    "userName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "profileId" TEXT,

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

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("profileId")
);

-- CreateTable
CREATE TABLE "UserAdresses" (
    "idAdresse" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "adressName" TEXT NOT NULL,
    "longitude" TEXT NOT NULL,
    "latitude" TEXT NOT NULL,
    "elevation" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserAdresses_pkey" PRIMARY KEY ("idAdresse")
);

-- CreateTable
CREATE TABLE "FileEntity" (
    "id" TEXT NOT NULL,
    "fileName" TEXT NOT NULL,
    "fileUrl" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "profileId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FileEntity_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_profileId_key" ON "Users"("profileId");

-- CreateIndex
CREATE UNIQUE INDEX "FileEntity_profileId_key" ON "FileEntity"("profileId");

-- AddForeignKey
ALTER TABLE "AuthUser" ADD CONSTRAINT "AuthUser_roleRoleId_fkey" FOREIGN KEY ("roleRoleId") REFERENCES "Role"("roleId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("profileId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserAdresses" ADD CONSTRAINT "UserAdresses_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("idUser") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FileEntity" ADD CONSTRAINT "FileEntity_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("profileId") ON DELETE RESTRICT ON UPDATE CASCADE;
