import fakeCollection from "@/lib/json/fake-collection.json";
import { GetUserResponse, MetadataSchema, NFTCollection } from "@/types";
import { env } from "./env.mjs";

const BASE_URL =
  process.env.NODE_ENV === "development"
    ? env.NEXT_PUBLIC_BACKEND_URL
    : env.NEXT_PUBLIC_BACKEND_URL;

export async function fetchApi(url: string) {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      accept: "application/json",
    },
    cache: "no-store",
  });
  const data = await response.json();
  return data as GetUserResponse;
}

export async function fetchFromAPI(url: URL, cacheTime?: number) {
  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
    next: {
      revalidate: cacheTime || 60 * 60 * 24,
    },
  };

  const response = await fetch(url.toString(), options);
  const data = await response.json();

  return data;
}

export async function getCollections() {
  const response = await fetch(`${BASE_URL}/collections`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = (await response.json()) as NFTCollection[];
  return data || null;
}

export async function getMetadata(contract: string) {
  const response = await fetch(`${BASE_URL}/metadata/${contract}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = (await response.json()) as MetadataSchema;
  return data || null;
}
