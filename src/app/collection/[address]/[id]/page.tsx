import NftCard from "./NftCard";
import { CLIENT_URL } from "@/lib/ctx";

type NFTProps = {
  params: {
    address: string;
    id: string;
  };
};

export default async function NFTDetails({
  params: { address, id },
}: NFTProps) {
  const resLikes = await fetch(`${CLIENT_URL}/api/likes?contract=${address}&token_id=${id}`, {
    cache: "no-cache",
    next: {
      tags: ["likes", "follow", "unfollow"]
    }
  });

  const { data }: { data: { count: number }} = await resLikes.json();
  return (
    <main className="container pb-20">
      <NftCard 
        address={address} 
        id={id} 
        likes={data}
      />
    </main>
  );
}
