import { Separator } from "@/components/ui/separator";
import {
  ArtTrend,
  BuySellNFT,
  NFTCategories,
  PhotoTrend,
  TradeHero,
} from "./_components";
import { Suspense } from "react";
import { NFTCard } from "./_types";
import { jars } from "@/lib/core/api";

export default async function TradePage() {
  //const buySellCollections = await jars.getNFTCollections();

  return ( <></>
    // <main className="container">
    //   <TradeHero />

    //   <Separator className="h-[2px] w-full" />

    //   <Suspense fallback={<div>Loading...</div>}>
    //     <BuySellNFT collections={buySellCollections} />
    //   </Suspense>

    //   <Separator className="h-[2px] w-full" />

    //   <Suspense fallback={<div>Loading...</div>}>
    //     <ArtTrend collections={artTrendCollections} />
    //   </Suspense>

    //   <Separator className="h-[2px] w-full" />

    //   <Suspense fallback={<div>Loading...</div>}>
    //     <PhotoTrend collections={photosCollections} />
    //   </Suspense>

    //   <Separator className="h-[2px] w-full" />

    //   <Suspense fallback={<div>Loading...</div>}>
    //     <NFTCategories />
    //   </Suspense>
    // </main>
  );
}
