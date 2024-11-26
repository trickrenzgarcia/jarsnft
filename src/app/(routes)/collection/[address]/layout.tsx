import { Navbar, Footer } from "@/components/(layout)";
import { Metadata } from "next";
import jars from "@/lib/api";
import { MarketPlaceProvider, ListingsProvider, ContractProvider } from "@/components/(providers)";

type CollectionParams = {
  children: React.ReactNode;
  params: { address: string };
};

export async function generateMetadata({ params: { address } }: CollectionParams): Promise<Metadata> {
  const collection = await jars.getCollection(address);

  if (!collection) {
    return {
      title: `Page Not Found | JarsNFT`,
    };
  }

  return {
    title: `${collection.name} ${collection.symbol && `(${collection.symbol})`} | JarsNFT`,
    description: collection.description,
    keywords: [collection.name, collection.symbol, "NFT", "JarsNFT"],
  };
}

export default async function CollectionLayout({ children, params: { address } }: CollectionParams) {
  return (
    <main>
      <Navbar />
      <ContractProvider address={address}>
        <MarketPlaceProvider>
          <ListingsProvider address={address}>{children}</ListingsProvider>
        </MarketPlaceProvider>
      </ContractProvider>
      <Footer />
    </main>
  );
}
