import { CollectionData } from "@/utils/getCollections";
import NFTCarousel from "./NFTCarousel";

export default function ArtTrend({
  collections,
}: {
  collections: CollectionData[];
}) {
  return (
    <>
      <div>
        <p className="mb-12 text-xl font-bold">Trending in Art</p>
        <div className="px-0 md:px-10">
          <NFTCarousel collections={collections} />
        </div>
      </div>
    </>
  );
}
