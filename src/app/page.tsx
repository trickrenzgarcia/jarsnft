import {
  Navbar,
  Footer,
} from "@/components/(layout)";
import {
  Hero,
  PopularCollections,
  ArtTrend,
  NFTCategories,
  PhotoTrend,
  PFPTrend,
} from "@/components/(layout)/_main";
import { Separator } from "@/components/ui/separator";
import { Suspense } from "react";
import * as getCollections from "@/utils/getCollections";
import { BASE_URL } from "@/lib/ctx";

async function getCollectionsByCategoryAPI(category: getCollections.Category) {
  const response = await fetch(`${BASE_URL}/collections/trending?category=${category}&page=${1}&limit=${50}`);
  const { collections } = await response.json();
  const nfts = collections.map((nft: any) => nft);
  return nfts;
}

export default async function Home() {
  // can't build while fetching at the same time in same URL localhost:3000
  // const artTrendCollections =
  //   await getCollections.getCollectionsByCategory("art");
  // const photosCollections =
  //   await getCollections.getCollectionsByCategory("photography");
  // const pfpCollections = await getCollections.getCollectionsByCategory("pfp");

  // for building purposes, localhost:5000 is used instead
  const artTrendCollections = await getCollectionsByCategoryAPI("art");
  const photosCollections = await getCollectionsByCategoryAPI("photography");
  const pfpCollections = await getCollectionsByCategoryAPI("pfp");

  return (
    <main className="bg-background">
      <Navbar />
      <Hero />

      <div className="container my-20 space-y-10">
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
