import { NFTCard as NFTCardType } from "../_types";
import NFTCarousel from "./NFTCarousel";

export default function PhotoTrend({
  collections,
}: {
  collections: NFTCardType[];
}) {
  return (
    <>
      <div className="mb-20 mt-14">
        <p className="mb-12 text-xl font-bold">Trending in Photography</p>
        <div className="px-0 md:px-10">
          <NFTCarousel collections={collections} />
        </div>
      </div>
    </>
  );
}
