import * as getCollections from "@/utils/getCollections";
import NFTCarousel from "./NFTCarousel";

async function NFTContentWrapper({ title }: { title: string }) {
  const nftCollections = await getCollections.getPopularCollections();

  return (
    <section>
      <h2 className="mb-3 text-left text-2xl font-bold lg:text-4xl">{title}</h2>
      <NFTCarousel nftCollections={nftCollections} />
    </section>
  );
}

export default NFTContentWrapper;
