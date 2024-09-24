"use server";

import jars from "@/lib/api";
import { revalidateTag } from "next/cache";

type UserUpdateData = {
  name: string;
  email: string;
};

const updateUser = async (address: string, userData: UserUpdateData) => {
  await jars.updateUser(address, userData);
  revalidateTag("user");
};

export default updateUser;
