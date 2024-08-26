import { CollectionData } from "@/utils/getCollections";
import NFTCarousel from "./NFTCarousel";
import CategoryTrend from "./CategoryTrend";

export default function ArtTrend({ collections }: { collections: CollectionData[] }) {
  return (
    <>
      <div className="mx-5 md:mx-10">
        <CategoryTrend name={"Art"} link="/category/arts" />
        <div className="px-0">
          <NFTCarousel collections={collections} />
        </div>
      </div>
    </>
  );
}
