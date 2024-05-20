import {
  Navbar,
  Hero,
  Footer,
  PopularCollections,
  TopNFTCollections,
} from "@/components/(layout)";
import {
  ArtTrend,
  NFTCategories,
  PhotoTrend,
  PFPTrend,
} from "@/app/_trade/_components";
import { Separator } from "@/components/ui/separator";
import { Suspense } from "react";
import * as getCollections from "@/utils/getCollections";

export default async function Home() {
  const artTrendCollections = await getCollections.getArtCollections();
  const photosCollections = await getCollections.getPhotosCollections();

  return (
    <main className="bg-background">
      <Navbar />
      <Hero />

      <div className="container my-20 space-y-10">
        <PopularCollections />
        <TopNFTCollections />

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
          <PFPTrend collections={photosCollections} />
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
