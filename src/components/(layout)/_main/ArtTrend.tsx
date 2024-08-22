import { CollectionData } from "@/utils/getCollections";
import NFTCarousel from "./NFTCarousel";
import CategoryTrend from "./CategoryTrend";

export default function ArtTrend({ collections }: { collections: CollectionData[] }) {
  return (
    <>
      <div>
        <CategoryTrend name={"art"} />
        <div className="px-0">
          <NFTCarousel collections={collections} />
        </div>
      </div>
    </>
  );
}
