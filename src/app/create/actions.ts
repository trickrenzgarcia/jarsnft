"use server";

import { jars } from "@/lib/core/api";
import { revalidateTag } from "next/cache";

export async function createContract(contractAddress: string, owner: string) {
  const uploadedContract = await jars.deployNFTCollection(
    contractAddress,
    owner,
  );

  revalidateTag("metadata");

  return uploadedContract;
}
