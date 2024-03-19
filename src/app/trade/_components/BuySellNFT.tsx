"use client"
import { useMedia } from "react-use"
import { NFTCard } from "../_types";
import NFTCarousel from "./NFTCarousel";

export default function BuySellNFT({ collections }: { collections: NFTCard[] }) {

  return (
    <>
      <div className="mt-14 mb-20">
        <p className="font-bold text-xl mb-12">Buy & Sell NFTs</p>

        <div className="px-0 md:px-10">
          <NFTCarousel
            align="start"
            collections={collections}
            withExtra 
          />
        </div>

      </div>
    </>
  );
}
