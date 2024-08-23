import { CollectionData } from "@/utils/getCollections";
import NFTCarousel from "./NFTCarousel";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import CategoryTrend from "./CategoryTrend";

export default function PFPTrend({ collections }: { collections: CollectionData[] }) {
  return (
    <>
      <div className="mx-10">
        <CategoryTrend name={"Profile Picture"} link="/category/pfp" />
        <div className="px-0">
          <NFTCarousel collections={collections} />
        </div>
      </div>
    </>
  );
}
