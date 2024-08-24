import { Navbar, Footer } from "@/components/(layout)";
import { Hero, PopularCollections, ArtTrend, NFTCategories, PhotoTrend, PFPTrend } from "@/components/(layout)/_main";
import { Separator } from "@/components/ui/separator";
import { Suspense } from "react";
import * as getCollections from "@/utils/getCollections";

export default async function Home() {
  const artTrendCollections = await getCollections.getCollectionsByCategory("art");
  const photosCollections = await getCollections.getCollectionsByCategory("photography");
  const pfpCollections = await getCollections.getCollectionsByCategory("pfp");

  return (
    <main className="bg-background">
      <Navbar />
      <Hero />

      <div className="container my-10 space-y-10">
        <PopularCollections />

        {/* <TopNFTCollections /> */}

        <Separator className="h-[2px] w-full" />

        <Suspense fallback={<div>Loading...</div>}>
          <ArtTrend collections={artTrendCollections} />
        </Suspense>

        <Separator className="h-[2px] w-full" />

        <Suspense fallback={<div>Loading...</div>}>
          <PhotoTrend collections={photosCollections} />
        </Suspense>

        <Separator className="h-[2px] w-full" />

        <Suspense fallback={<div>Loading...</div>}>
          <PFPTrend collections={pfpCollections} />
        </Suspense>

        <Separator className="h-[2px] w-full" />

        <Suspense fallback={<div>Loading...</div>}>
          <NFTCategories />
        </Suspense>
      </div>

      <Footer />
    </main>
  );
}
