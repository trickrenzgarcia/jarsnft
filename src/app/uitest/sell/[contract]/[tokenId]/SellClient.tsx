"use client"

import { ThirdwebNftMedia, useAddress, useContract, useOwnedNFTs } from "@thirdweb-dev/react"
import type { NFT as TypeNFT } from "@thirdweb-dev/sdk";
import { useMemo, useState } from "react";
import SaleInfo from "./SaleInfo";

type Props = {
  tokenContract: string, 
  tokenId: string,
}

export default function SellClient({ tokenContract, tokenId }: Props) {
  const { contract } = useContract(tokenContract);
  const address = useAddress();

  // Only the owner of the token can sell it
  const { data, isLoading } = useOwnedNFTs(contract, address);

  const [selectedNFT, setSelectedNFT] = useState<TypeNFT>();

  useMemo(() => {
    if (data) {
      const nft = data.find((nft) => nft.metadata.id === tokenId);
      if (nft) {
        setSelectedNFT(nft);
      }
    }
  }, [data]);


  return (
    <div>
      <h1>Sell nft</h1>
      {selectedNFT && (
        <ThirdwebNftMedia
          metadata={selectedNFT.metadata}
          width="300px"
          height="300px"
          style={{ backgroundColor: "black"}}
        />
      )}

      {/* Sell info */}
      <SaleInfo nft={selectedNFT} tokenContract={tokenContract} />
    </div>
  )
}