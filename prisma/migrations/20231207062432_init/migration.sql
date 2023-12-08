/*
  Warnings:

  - The primary key for the `batch` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `batch` table. All the data in the column will be lost.
  - The required column `serialNumber` was added to the `batch` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Changed the type of `model` on the `batch` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "MachineModel" AS ENUM ('MODEL_1', 'MODEL_2', 'MODEL_3');

-- AlterTable
ALTER TABLE "batch" DROP CONSTRAINT "batch_pkey",
DROP COLUMN "id",
ADD COLUMN     "serialNumber" TEXT NOT NULL,
DROP COLUMN "model",
ADD COLUMN     "model" "MachineModel" NOT NULL,
ADD CONSTRAINT "batch_pkey" PRIMARY KEY ("serialNumber");

-- DropEnum
DROP TYPE "Model";
