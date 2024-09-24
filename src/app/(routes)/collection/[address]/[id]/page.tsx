import { NftCard } from "./_components";
import jars from "@/lib/api";
import { notFound } from "next/navigation";


type NFTProps = {
  params: {
    address: string;
    id: string;
  };
};

export default async function NFTDetails({
  params: { address, id },
}: NFTProps) {
  const nft = await jars.getNFTByTokenId(address, id);
  const views = await jars.nft.getNftViews(address, id);
  const likes = await jars.getFavoriteCount(address, id);
  if(!nft.name) {
    notFound();
  }

  return (
    <main className="container pb-20">
      <NftCard 
        address={address} 
        id={id} 
        likes={likes}
        views={views}
      />
    </main>
  );
}
