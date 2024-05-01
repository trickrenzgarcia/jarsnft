"use server";

import { jars } from "@/lib/core/api";
import { revalidateTag } from "next/cache";

const createProfile = async (address: string) => {
  await jars.createProfile(address);
  revalidateTag("user");
};

export default createProfile;
