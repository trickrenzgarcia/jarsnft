import { use } from "react";
import NFTCarousel from "./NFTCarousel";
import { jars } from "@/lib/core/api";

async function getNFTCollections() {
  return (
    await fetch("http://localhost:5000/deploy/nft-collection", {
      // cache: "no-store",
    })
  ).json();
}

function NFTContentWrapper({ title }: { title: string }) {
  // const nftCollections = await jars.getNFTCollections();
  const nftCollections = use(getNFTCollections());

  return (
    <section>
      <h2 className="mb-3 text-left text-2xl font-bold">{title}</h2>

      <NFTCarousel nftCollections={nftCollections} />
    </section>
  );
}

export default NFTContentWrapper;
