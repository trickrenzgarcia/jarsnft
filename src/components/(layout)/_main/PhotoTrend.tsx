import { CollectionData } from "@/utils/getCollections";
import NFTCarousel from "./NFTCarousel";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import CategoryTrend from "./CategoryTrend";

export default function PhotoTrend({ collections }: { collections: CollectionData[] }) {
  return (
    <>
      <div className="mx-5 md:mx-10">
        <CategoryTrend name={"Photography"} link="/category/photography" />
        <div className="px-0">
          <NFTCarousel collections={collections} />
        </div>
      </div>
    </>
  );
}
