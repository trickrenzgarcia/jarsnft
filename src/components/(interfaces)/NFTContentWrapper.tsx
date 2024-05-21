import NFTCarousel from "./NFTCarousel";
import { jars } from "@/lib/core/api";

async function NFTContentWrapper({ title }: { title: string }) {
  const nftCollections = await jars.getNFTCollections();

  return (
    <section>
      <h2 className="mb-3 text-left text-2xl font-bold">{title}</h2>

      <NFTCarousel nftCollections={nftCollections} />
    </section>
  );
}

export default NFTContentWrapper;
