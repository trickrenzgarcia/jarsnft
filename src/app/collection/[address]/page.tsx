import { jars } from "@/lib/core/api";
import NFTCards from "../_components/NFTCards";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import NFTBannerMetadata from "../_components/NFTBannerMetadata";

type CollectionParams = {
  params: { address: string };
};

export default async function CollectionPage({
  params: { address },
}: CollectionParams) {
  const collection = await jars.getCollection(address);

  if (!collection) {
    notFound();
  }

  return (
    <main>
      <Suspense fallback={<></>}>
        <NFTBannerMetadata address={address} collection={collection} />
      </Suspense>
      <div className="flex w-full items-start">
        <section className="relative p-6">
          <NFTCards address={address} />
        </section>
      </div>
    </main>
  );
}


