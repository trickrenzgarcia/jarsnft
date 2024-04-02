"use server";

import { jars } from "@/lib/core/api";
import { revalidateTag } from "next/cache";

export async function createContract(contractAddress: string) {
  const uploadedContract = await jars.deployNFTCollection(contractAddress);

  revalidateTag("metadata");

  return uploadedContract;
}
