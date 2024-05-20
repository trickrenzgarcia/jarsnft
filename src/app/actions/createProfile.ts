"use server";

import { jars } from "@/lib/core/api";
import { revalidatePath, revalidateTag } from "next/cache";

const createProfile = async (address: string) => {
  await jars.createProfile(address);
  revalidateTag("user");
  revalidatePath("/");
};

export default createProfile;
