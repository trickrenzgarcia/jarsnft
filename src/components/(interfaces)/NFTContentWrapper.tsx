import React from "react";
import NFTCarousel from "./NFTCarousel";
import { NFTCollection } from "@/types";
import { getCollections } from "@/lib/ctx";

async function NFTContentWrapper({ title }: { title: string }) {
  const collections = await getCollections();

  return (
    <section>
      <h2 className="mb-3 text-center text-2xl font-bold md:text-left">
        {title}
      </h2>
      <NFTCarousel collections={collections} />
    </section>
  );
}

export default NFTContentWrapper;
