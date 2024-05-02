import { Suspense } from "react";
import { TopNFTCollectionsTable } from "../(interfaces)";

export default async function TopNFTCollections() {
  return (
    <section className="my-16 px-0 sm:px-5 md:px-16">
      <h1 className="mb-3 text-2xl font-bold text-left">
        Top NFT Collections
      </h1>
      <Suspense fallback={<div>Loading...</div>}>
        <TopNFTCollectionsTable />
      </Suspense>
    </section>
  );
}
