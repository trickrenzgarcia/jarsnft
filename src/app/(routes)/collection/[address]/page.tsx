import jars from "@/lib/api";
import NFTCards from "../_components/NFTCards";
import { notFound } from "next/navigation";
import NFTBanner from "../_components/NFTBanner";
import { NFTsProvider } from '@/components/(providers)';

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
      <NFTBanner address={address} collection={collection} />
      <div className="flex w-full items-center">
        <section className="relative m-14">
          <NFTsProvider>
            <NFTCards contractAddress={address}/>
          </NFTsProvider>
        </section>
      </div>
    </main>
  );
}
