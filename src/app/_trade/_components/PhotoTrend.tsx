import { CollectionData } from "@/utils/getCollections";
import NFTCarousel from "./NFTCarousel";

export default function PhotoTrend({
  collections,
}: {
  collections: CollectionData[];
}) {
  return (
    <>
      <div>
        <p className="mb-12 text-xl font-bold">Trending in Photography</p>
        <div className="px-0 md:px-10">
          <NFTCarousel collections={collections} />
        </div>
      </div>
    </>
  );
}
