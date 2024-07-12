import { CollectionData } from "@/utils/getCollections";
import NFTCarousel from "./NFTCarousel";

export default function BuySellNFT({
  collections,
}: {
  collections: CollectionData[];
}) {
  return (
    <>
      <div className="mb-20 mt-14">
        <p className="mb-12 text-xl font-bold">Buy & Sell NFTs</p>

        <div className="px-0 md:px-10">
          <NFTCarousel align="start" collections={collections} withExtra />
        </div>
      </div>
    </>
  );
}
