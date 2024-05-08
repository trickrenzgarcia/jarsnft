import NFTCarousel from "./NFTCarousel";
import { NFTCollection } from "@/lib/core/types";
import { jars } from "@/lib/core/api";
import { NFTContentSkeleton } from "../(skeletons)";
import { Suspense } from "react";

async function NFTContentWrapper({ title }: { title: string }) {
  const nftCollections = await jars.getNFTCollections();

  return (
    <section>
      <h2 className="mb-3 text-2xl font-bold text-left">
        {title}
      </h2>

      <NFTCarousel nftCollections={nftCollections} />
    </section>
  );
}

export default NFTContentWrapper;
