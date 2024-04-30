"use server";

import { BASE_URL } from "@/lib/ctx";
import { revalidateTag } from "next/cache";

import { JarsAPI } from "@/lib/core/api";

const jars = new JarsAPI(BASE_URL, {
  secretKey: process.env.JWT_AUTH_TOKEN as string,
});

export const updateUser = async (formData: FormData) => {
  const rawFormData = {
    address: formData.get("address") as string,
    name: formData.get("name") as string,
    email: formData.get("email") as string,
  };
  const { address, email, name } = rawFormData;

  console.log(rawFormData);

  const updatedUser = await jars.updateUser(address, {
    name: name,
    email: email
  });

  console.log("updatedUser", updatedUser);
  revalidateTag("user");
};

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
