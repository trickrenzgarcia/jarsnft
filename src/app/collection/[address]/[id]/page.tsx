import { jars } from "@/lib/core/api";
import NftCard from "./NftCard";
import { notFound } from "next/navigation";

type NFTProps = {
  params: {
    address: string;
    id: string;
  };
};

export default async function NFTDetails({ params: { address, id } }: NFTProps) {

  const nft = await jars.getNFTByTokenId(address, id);

  if(!nft.name || !nft.collection.name || !nft.token_id) {
    notFound();
  }

  return (
    <main className="container">
      <NftCard address={address} id={id} />
    </main>
  );
}
