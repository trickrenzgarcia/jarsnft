import * as getCollections from "@/utils/getCollections";
import NFTCarousel from "./NFTCarousel";
import { BASE_URL } from "@/lib/ctx";

async function NFTContentWrapper({ title }: { title: string }) {
  // can't build while fetching at the same time in same URL localhost:3000
  // const nftCollections = await getCollections.getPopularCollections();

  // for building purposes, this is used instead localhost:5000
  const response = fetch(`${BASE_URL}/collections/popular`);
  const data = (await response).json();
  const nftCollections = await data;

  return (
    <section>
      <h2 className="mb-3 text-left text-2xl font-bold">{title}</h2>

      <NFTCarousel nftCollections={nftCollections} />
    </section>
  );
}

export default NFTContentWrapper;
