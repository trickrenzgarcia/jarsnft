import fakeCollection from "@/lib/json/fake-collection.json";
import { NFTCollection } from "@/types";

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

export function getCollections() {
  const response = fakeCollection.result.data.collections as NFTCollection[];
  return response;
}
