import { Navbar, Footer } from "@/components/(layout)";
import { Metadata } from "next";
import { jars } from "@/lib/core/api";
import CollectionProvider from "../_components/CollectionProvider";

type CollectionParams = {
  children: React.ReactNode;
  params: { address: string };
};

export async function generateMetadata({
  params: { address },
}: CollectionParams): Promise<Metadata> {
  const collection = await jars.getCollection(address);

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
  children,
  params: { address },
}: CollectionParams) {
  return (
    <main>
      <Navbar />
      <CollectionProvider address={address}>{children}</CollectionProvider>
      <Footer />
    </main>
  );
}
