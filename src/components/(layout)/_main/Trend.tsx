
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
        <p className="text-sm lg:text-4xl font-bold">Trending in {category}</p>
        <Button className="font-bold text-sm lg:text-md leading-md rounded-xl light:hover:bg-[#252525] py-4 lg:px-6 ">
          <Link href={link}>View {category}</Link>
        </Button>
      </div>
      <div className="my-12 px-0 md:px-10">
        <NFTCarousel collections={collections} />
      </div>
    </div>
  );
}
