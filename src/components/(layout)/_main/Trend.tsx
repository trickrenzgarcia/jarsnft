
import { CollectionData } from "@/types";
import NFTCarousel from "./NFTCarousel";

export default function Trend({
  category,
  collections,
}: {
  category: string;
  collections: CollectionData[];
}) {
  return (
    <div className="my-12">
      <p className="mb-12 text-2xl font-bold">Trending in {category}</p>
      <div className="px-0 md:px-10">
        <NFTCarousel collections={collections} />
      </div>
    </div>
  );
}
