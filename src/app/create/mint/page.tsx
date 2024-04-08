import { jars } from "@/lib/core/api";
import MintNFTCard from "../_components/MintNFTCard";

export default async function MintingPage() {
  return (
    <main className="mx-auto flex w-full flex-col justify-center gap-5 md:flex-row md:py-8">
      <MintNFTCard />
    </main>
  );
}
