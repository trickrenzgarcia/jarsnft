import { TrendingCollectionsJSON } from "@/types/simple-hash";

const API_URL = process.env.SIMPLEHASH_API_URL!;
const API_KEY = process.env.SIMPLEHASH_API_KEY!;

const apiRequest = async <TData>(endPoint: string, options?: RequestInit) => {
  try {
    const res = await fetch(`${API_URL}${endPoint}`, {
      headers: {
        "X-API-KEY": API_KEY,
        "Content-Type": "application/json",
      },
      ...options,
    });
    const data = (await res.json()) as TData;
    return data;
  } catch (err) {
    console.error(err);
    throw new Error(`Failed to fetch data from ${API_URL}${endPoint}`);
  }
};

export const getTrendingNFTs = async () => {
  const data = await apiRequest<TrendingCollectionsJSON>(
    "nfts/collections/trending?chains=polygon&limit=10"
  );
  return data;
};
