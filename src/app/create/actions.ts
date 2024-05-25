"use server";

import { jars } from "@/lib/core/api";
import { revalidatePath, revalidateTag } from "next/cache";

export async function createContract(contractAddress: string, owner: string) {
  const uploadedContract = await jars.deployNFTCollection(
    contractAddress,
    owner,
  );

  revalidateTag("metadata");
  revalidatePath("/");
  return uploadedContract;
}