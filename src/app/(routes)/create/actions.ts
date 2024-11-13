"use server";

import { JarsAPI } from "@/lib/api";
import { revalidatePath, revalidateTag } from "next/cache";

const jars = new JarsAPI({
  secretKey: process.env.JWT_TOKEN,
});

export async function createContract(contractAddress: string, owner: string, category: "art" | "photography" | "pfp" | "gaming") {
  const uploadedContract = await jars.deployNFTCollection(contractAddress, owner, category);

  revalidateTag("metadata");
  revalidatePath("/");
  return uploadedContract;
}
