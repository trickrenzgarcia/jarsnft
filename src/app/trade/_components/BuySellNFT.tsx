import { useMedia } from "react-use";
import { NFTCard } from "../_types";
import NFTCarousel from "./NFTCarousel";
import { NFTCollection } from "@/lib/core/types";

export default function BuySellNFT({
  collections,
}: {
  collections: NFTCollection[];
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
