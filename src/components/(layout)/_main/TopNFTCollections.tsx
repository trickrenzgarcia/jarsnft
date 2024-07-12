import { Suspense } from "react";
import { TopNFTCollectionsTable } from "@/components/(interfaces)";

export default async function TopNFTCollections() {
  return (
    <section>
      <h1 className="mb-3 text-left text-2xl font-bold">Top NFT Collections</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <TopNFTCollectionsTable />
      </Suspense>
    </section>
  );
}
