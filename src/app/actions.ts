"use server";

import { updateUser } from "@/lib/ctx";
import { revalidateTag } from "next/cache";

export const addLikes = async (amount: number) => {
  if (!amount) return;

  await fetch("http://localhost:3000/api/likes", {
    method: "POST",
    cache: "no-cache",
    body: JSON.stringify({
      amount,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  revalidateTag("likes");
};

export async function createUser(formData: FormData) {

  const rawFormData = {
    address: formData.get('address'),
    name: formData.get('name'),
    email: formData.get('email'),
    is_listed: true
  }

  // mutate data
  const updated = await updateUser(rawFormData);
  
  return updated;
  // revalidate cache
}
