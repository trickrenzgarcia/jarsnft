import { NFT_MARKETPLACE } from "@/lib/constant";
import { ContractEvent, useContract, useContractEvents, useNFTs } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import Image from "next/image";
import Link from "next/link";

export default function NotificationResult({ event }: { event: ContractEvent<any> }) {
  const { contract: marketplaceContract, isLoading: loadingMarketplace, isError: errorMarketplace } = useContract(NFT_MARKETPLACE, "marketplace-v3");
  const { data: sales, isLoading: loadingSales, isError: errorSales } = useContractEvents(marketplaceContract, "NewSale");
  const { contract: nftContract } = useContract(event.data.assetContract, "nft-collection");
  const { data: nfts, isError, isLoading: loadingNFTs } = useNFTs(nftContract);
  const nft = nfts?.find((nft) => nft.metadata.id === event.data.tokenId.toString());
  const filteredSale = sales?.find((sale) => sale.data.assetContract === event.data.assetContract);

  return (
    // (Suggestion: Linked directly to the nft they bid)
    <Link href={`/collection/${event.data.assetContract}/${nft?.metadata.id}`} key={event.transaction.transactionHash}>
      <div className="hover:bg-current/75 mb-2 flex items-center gap-4">
        <Image src={(nft?.metadata.image as string) || "/assets/image_not_found.jpg"} alt="Pic" height={40} width={40} />
        <div>
          <p className="text-sm font-semibold">You have won the bidding!</p>
          <div className="flex items-center justify-between">
            {nft && <p className="text-xs text-gray-400 dark:text-gray-500">{nft?.metadata.name}</p>}
            {filteredSale && <p className="text-xs text-gray-400 dark:text-gray-500">Bid: {ethers.utils.formatEther(filteredSale?.data.totalPricePaid)} POL</p>}
          </div>
        </div>
        {/* when user lost the bidding */}
        {/* <div>
                      <p className="text-sm font-semibold">Sorry! Someone else won the bidding.</p>
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-gray-400 dark:text-gray-500">NFT Item</p>
                        <p className="text-xs text-gray-400 dark:text-gray-500">Bid: 0.1 POL</p>
                      </div>
                    </div> */}
        {/* when notification is unread */}
        {/* <div>
                      <p className="text-sm font-extrabold">You have won the bidding</p>
                      <div className="flex items-center justify-between font-bold">
                        <p className="text-xs text-gray-400 dark:text-gray-500">NFT Item</p>
                        <p className="text-xs text-gray-400 dark:text-gray-500">Bid: 0.1 POL</p>
                      </div>
                    </div> */}
      </div>
    </Link>
  );
}
