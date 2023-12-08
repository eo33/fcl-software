-- CreateEnum
CREATE TYPE "Model" AS ENUM ('model_1', 'model_2', 'model_3');

-- CreateTable
CREATE TABLE "batch" (
    "id" TEXT NOT NULL,
    "model" "Model" NOT NULL,
    "deliveryDate" TIMESTAMP(3) NOT NULL,
    "quantity" INTEGER NOT NULL,
    "licenseLevel" INTEGER NOT NULL,
    "comment" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "batch_pkey" PRIMARY KEY ("id")
);
