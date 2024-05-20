import { NFTCard as NFTCardType } from "../_types";
import NFTCarousel from "./NFTCarousel";

export default function PFPTrend({
  collections,
}: {
  collections: NFTCardType[];
}) {
  return (
    <>
      <div>
        <p className="mb-12 text-xl font-bold">Trending in Profile Picture</p>
        <div className="px-0 md:px-10">
          <NFTCarousel collections={collections} />
        </div>
      </div>
    </>
  );
}
