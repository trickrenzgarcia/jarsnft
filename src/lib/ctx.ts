import fakeCollection from "@/lib/json/fake-collection.json";
import { GetUserResponse, NFTCollection } from "@/types";

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
  await new Promise((resolve, reject) => setTimeout(resolve, 2000));
  const response = fakeCollection.result.data.collections as NFTCollection[];
  return response;
}
