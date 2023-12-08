"use server";
import prisma from "@/db";
import { MachineModel } from "@prisma/client";

export default async function sendForm(batchForm: any) {
  try {
    const postData = await prisma.batch.create({
      data: {
        model: batchForm.model as MachineModel,
        deliveryDate: batchForm.deliveryDate,
        quantity: batchForm.quantity,
        licenseLevel: batchForm.licenseLevel,
        comment: batchForm.comment,
      },
    });
    console.log("success", postData);
  } catch (error) {
    console.error("Error creating sample data:", error);
  }
}
