/*
  Warnings:

  - Changed the type of `licenseLevel` on the `batch` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "LicenseLevel" AS ENUM ('LEVEL_0', 'LEVEL_1', 'LEVEL_2', 'LEVEL_3', 'LEVEL_4', 'LEVEL_5', 'LEVEL_6', 'LEVEL_7', 'LEVEL_8', 'LEVEL_9');

-- AlterTable
ALTER TABLE "batch" DROP COLUMN "licenseLevel",
ADD COLUMN     "licenseLevel" "LicenseLevel" NOT NULL;
