import { NFTContentWrapper } from "@/components/(interfaces)";
import { NFTContentSkeleton } from "@/components/(skeletons)";
import { Suspense } from "react";

export default async function PopularCollections() {
  return (
    <section>
      <Suspense fallback={<NFTContentSkeleton />}>
        <NFTContentWrapper title="Popular Collections" />
      </Suspense>
    </section>
  );
}
