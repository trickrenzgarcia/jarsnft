
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
      <div className="flex items-center justify-between gap-2">
        <p className="max-[490px]:text-lg text-2xl font-bold">Trending in {category}</p>
        <Button variant="ghost" className="font-bold text-sm lg:text-md leading-md rounded-xl dark:bg-[#1b1b1b] py-4 hover:bg-[#252525] lg:px-6 ">
          <Link href={link}>View {category}</Link>
        </Button>
      </div>
      <div className="my-12 px-0 md:px-10">
        <NFTCarousel collections={collections} />
      </div>
    </div>
  );
}
