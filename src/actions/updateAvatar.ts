"use server";

import jars from "@/lib/api";
import { revalidatePath, revalidateTag } from "next/cache";

type UserUpdateData = {
  name: string;
  email: string;
};

const updateAvatar = async (address: string, image_url: string) => {
  await jars.updateUserAvatar(address, image_url);
  revalidateTag("user");
  revalidateTag("profile");
  revalidateTag("getUserProfile");
  revalidatePath("/me", "page");
  revalidatePath("/", "layout");
};

export default updateAvatar;
