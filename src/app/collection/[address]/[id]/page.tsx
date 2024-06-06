import { getNFTLikes } from "@/utils/getNFTLikes";
import { getNFTViews } from "@/utils/getNFTViews";
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
  const likes = await getNFTLikes(address, id);
  const views = await getNFTViews(address, id);
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
