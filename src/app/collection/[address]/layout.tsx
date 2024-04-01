import { Navbar } from "@/components/(layout)";
import { Suspense } from "react";
import NFTBannerMetadata from "../_components/NFTBannerMetadata";
import { env } from "@/lib/env.mjs";
import { getMetadata } from "@/lib/ctx";
import { notFound } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { Input } from "@nextui-org/react";
import PriceRangeValue from "../_components/PriceRangeValue";
import { jars } from "@/lib/core/api";

// For better user experience SSG (Static Site Generation)
// Fast loading
export async function generateStaticParams() {
  const metadatas = await jars.getNFTCollections();

  return metadatas.map((data) => ({
    address: data.contract,
  }));
}

type CollectionParams = {
  params: { address: string };
  children: React.ReactNode;
};

export default async function CollectionLayout({
  params: { address },
  children,
}: CollectionParams) {
  const metadata = await jars.getContractMetadata(address);

  return (
    <main>
      <header>
        <Navbar />
      </header>
      <Suspense fallback={<LoadingMetadata />}>
        <NFTBannerMetadata address={address} metadata={metadata} />
      </Suspense>
      <div className="flex w-full items-start">
        <section className="sticky left-0 top-[100px] hidden h-auto w-[380px] min-w-[380px] overflow-y-auto border-r border-zinc-800 px-6 md:block">
          <Separator className="my-3 w-full bg-zinc-800" />
          <div className="">
            <PriceRangeValue />
          </div>
        </section>
        <section className="relative p-6">{children}</section>
      </div>
    </main>
  );
}

function LoadingMetadata() {
  return <div>Loading...</div>;
}
