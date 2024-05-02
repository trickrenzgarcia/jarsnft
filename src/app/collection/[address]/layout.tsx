import { Navbar } from "@/components/(layout)";
import { Suspense } from "react";
import NFTBannerMetadata from "../_components/NFTBannerMetadata";
import { Separator } from "@/components/ui/separator";
import PriceRangeValue from "../_components/PriceRangeValue";
import { Metadata } from "next";
import { jars } from "@/lib/core/api";
import { notFound } from "next/navigation";

type CollectionParams = {
  params: { address: string };
  children: React.ReactNode;
};

export async function generateMetadata({
  params: { address },
}: CollectionParams): Promise<Metadata> {
  const collection = await jars.getContractMetadata(address);

  if (!collection) {
    return {
      title: `Page Not Found | JarsNFT`,
    };
  }

  return {
    title: `${collection.name} ${collection.symbol && `(${collection.symbol})`} | JarsNFT`,
  };
}

export default async function CollectionLayout({
  params: { address },
  children,
}: CollectionParams) {
  const collection = await jars.getCollection(address);

  if (!collection) {
    notFound();
  }

  return (
    <main>
      <header>
        <Navbar />
      </header>
      <Suspense fallback={<LoadingMetadata />}>
        <NFTBannerMetadata address={address} collection={collection} />
      </Suspense>
      <div className="flex w-full items-start">
        <section className="relative p-6">{children}</section>
      </div>
    </main>
  );
}

function LoadingMetadata() {
  return <div>Loading...s</div>;
}
