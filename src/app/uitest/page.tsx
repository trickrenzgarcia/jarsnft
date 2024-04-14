import { SocialLinkButtons } from "@/components/(interfaces)";
import BuyButton from "./BuyButton";

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center min-h-[100vh]">
      <BuyButton nftImageLink="/assets/ex1.png" nftName="MutantApeYacht #27046" nftCollectionName="Mutant Ape Yacht Club"
        isVerified={true} lastSalePrice={1.5} nftPrice={5.188} nftQuantity={1} nftPriceInDollars={11784.28}
        userBalance={2.4} networkChain="Polygon" />
      <SocialLinkButtons />
    </div>
  )
}