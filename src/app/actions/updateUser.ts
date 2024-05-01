"use server";

import { jars } from "@/lib/core/api";
import { revalidateTag } from "next/cache";

type UserUpdateData = {
  name: string;
  email: string;
};

const updateUser = async (address: string, userData: UserUpdateData) => {
  const data = await jars.updateUser(address, userData);
  revalidateTag("user");
  return data;
};

export default updateUser;
