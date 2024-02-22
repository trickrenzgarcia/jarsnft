"use server";

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
