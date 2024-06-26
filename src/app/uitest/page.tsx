import { SocialLinkButtons } from "@/components/(interfaces)";
import BuyButton from "./BuyButton";
import SellButton from "./SellButton";
import PurchaseComplete from "./PurchaseComplete";

export default function Page() {
  return (
    <div className="flex min-h-[100vh] flex-col items-center justify-center">
      <BuyButton
        nftImageLink="/assets/ex1.png"
        nftName="MutantApeYacht #27046"
        nftCollectionName="Mutant Ape Yacht Club"
        isVerified={true}
        lastSalePrice={1.5}
        nftPrice={5.188}
        nftQuantity={1}
        nftPriceInDollars={11784.28}
        userBalance={2.4}
        networkChain="Polygon"
      />

      <SellButton
        nftImageLink="/assets/ex1.png"
        nftName="MutantApeYacht #27046"
        nftCollectionName="Mutant Ape Yacht Club"
        isVerified={true}
        lastSalePrice={1.5}
      />

      <PurchaseComplete
        nftImageLink="/assets/ex1.png"
        nftName="MutantApeYacht #27046"
        nftCollectionName="Mutant Ape Yacht Club"
        transactionID="0x584f...5147"
        viewItemLink="/"
      />

      <SocialLinkButtons />
    </div>
  );
}
