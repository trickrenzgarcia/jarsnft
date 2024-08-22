import { CollectionData } from "@/utils/getCollections";
import NFTCarousel from "./NFTCarousel";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import CategoryTrend from "./CategoryTrend";

export default function PhotoTrend({ collections }: { collections: CollectionData[] }) {
  return (
    <>
      <div>
        <CategoryTrend name={"Photography"} />
        <div className="px-0">
          <NFTCarousel collections={collections} />
        </div>
      </div>
    </>
  );
}
