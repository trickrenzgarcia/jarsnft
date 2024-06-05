import { CLIENT_URL } from "@/lib/ctx";

export async function getNFTViews(contractAddress: string, tokenId: string) {
  const res = await fetch(`${CLIENT_URL}/api/nft_views?contract=${contractAddress}&token_id=${tokenId}`, {
    cache: "no-cache",
    next: {
      tags: ["views"]
    }
  });
  const { data }: { data: { view_count: number }} = await res.json();
  return data;
}