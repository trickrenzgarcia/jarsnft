import { NFTContentWrapper } from "@/components/(interfaces)";
import { NFTContentSkeleton } from "../(skeletons)";
import { Suspense } from "react";

export default async function PopularCollections() {
  return (
    <section className="my-16 px-16">
      <Suspense fallback={<NFTContentSkeleton />}>
        <NFTContentWrapper title="Popular Collection" />
      </Suspense>
    </section>
  );
}
