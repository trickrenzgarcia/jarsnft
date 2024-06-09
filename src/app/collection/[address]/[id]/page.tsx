import { getNFTLikes } from "@/utils/getNFTLikes";
import { getNFTViews } from "@/utils/getNFTViews";
import { NftCard } from "./_components";
import { jars } from "@/lib/core/api";
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
  const [likes, views] = await Promise.all([
    getNFTLikes(address, id),
    getNFTViews(address, id)]
  );

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
