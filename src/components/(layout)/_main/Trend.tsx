
import { CollectionData } from "@/types";
import NFTCarousel from "./NFTCarousel";
import CategoryTrend from "./CategoryTrend";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Trend({
  category,
  collections,
  link,
}: {
  category: string;
  collections: CollectionData[];
  link: string;
}) {
  return (
    <div className="my-12">
      <div className="flex">
        <p className="mb-12 text-2xl font-bold">Trending in {category}</p>
        <Button variant="ghost" className="lg:text-md leading-md ml-auto rounded-xl bg-[#1b1b1b] py-4 text-sm font-bold hover:bg-[#252525] lg:px-6 ">
          <Link href={link}>View Category</Link>
        </Button>
      </div>
      <div className="px-0 md:px-10">
        <NFTCarousel collections={collections} />
      </div>
    </div>
  );
}
