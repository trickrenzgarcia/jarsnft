import { jars } from "@/lib/core/api";
import NftCard from "./NftCard";

type NFTProps = {
  params: {
    address: string;
    id: string;
  };
};

export default async function NFTDetails({
  params: { address, id },
}: NFTProps) {
  const resLikes = await fetch(`http://localhost:3000/api/likes?contract=${address}&token_id=${id}`, {
    cache: "no-cache",
    next: {
      tags: ["likes"]
    }
  });

  const { data }: { data: { count: number }} = await resLikes.json();
  return (
    <main className="container pb-20">
      <NftCard address={address} id={id} likes={data} />
    </main>
  );
}
