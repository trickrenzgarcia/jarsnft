"use server";

import { BASE_URL } from "@/lib/ctx";
import { revalidateTag } from "next/cache";

import { JarsAPI } from "@/lib/core/api";

const jars = new JarsAPI(BASE_URL, {
  secretKey: process.env.JWT_AUTH_TOKEN as string,
});

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
