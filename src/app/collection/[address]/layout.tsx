import { Navbar } from "@/components/(layout)";
import { Metadata } from "next";
import { jars } from "@/lib/core/api";


type CollectionParams = {
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

export default async function CollectionLayout({ children }: { children: React.ReactNode }) {

  return (
    <main>
      <header>
        <Navbar />
      </header>
      {children}
    </main>
  );
}