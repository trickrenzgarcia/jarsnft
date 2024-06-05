import { CLIENT_URL } from "@/lib/ctx";

export async function getNFTLikes(contractAddress: string, tokenId: string) {
  const res = await fetch(`${CLIENT_URL}/api/likes?contract=${contractAddress}&token_id=${tokenId}`, {
    cache: "no-cache",
    next: {
      tags: ["likes", "follow", "unfollow"]
    }
  });
  const { data }: { data: { count: number }} = await res.json();
  return data;
}