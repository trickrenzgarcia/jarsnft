import { jars } from "@/lib/core/api";
import NFTCards from "../_components/NFTCards";
import { notFound } from "next/navigation";

type CollectionParams = {
  params: { address: string };
};

export default async function CollectionPage({
  params: { address },
}: CollectionParams) {
  return (
    <main className="h-[1000px]">
      <NFTCards address={address} />
    </main>
  );
}
