"use client"

import { ConnectWeb3 } from '@/components/(interfaces)';
import { LoginWelcomeScreen } from '@/components/(interfaces)/ConnectWeb3';
import { NFT_MARKETPLACE } from '@/types/constant';
import { NFT, ThirdwebNftMedia, Web3Button, useContract, useMetadata, useNFT, useValidDirectListings } from '@thirdweb-dev/react';
import React from 'react'

type Props = {
  tokenContract: string, 
  tokenId: string,
}

export default function Client({ tokenContract, tokenId }: Props) {
  const { contract: nftContract } = useContract(tokenContract);
  const { data: nft, isLoading: loadingNft } = useNFT(nftContract, tokenId);
  const { contract: marketPlaceContract } = useContract("0x69b05D8ed116Bb160B8a268a4315D2767123eFA1", "marketplace-v3");
  const { data: listings, isLoading: loadingListings } = useValidDirectListings(marketPlaceContract, {
    count: 100,
    start: 0,
    tokenContract: tokenContract,
    tokenId: tokenId
  });

  if(loadingNft) return <>Loading nft...</>;

  if(loadingListings) return <>Loading listings...</>;

  console.log(nft);

  async function buyListing() {
    let txResult;

    if(listings?.[0]){
      txResult = await marketPlaceContract?.directListings.buyFromListing(
        listings[0].id,
        1
      );
    } else {
      throw new Error("No listing found");
    }
    
    return txResult;
  }

  if(nft){
    return (
      <div>
        {listings?.map((listing, i) => (
          <div key={listing.currencyContractAddress+"/"+listing.tokenId}>
            <ThirdwebNftMedia
              metadata={nft.metadata}
              width='300px'
              height='300px'
            />
          </div>
        ))}

        {/* Display Price of the nft */}
        {listings && listings[0] ? (
          <div>
            <p>{listings[0]?.currencyValuePerToken.displayValue}</p>
            <p>{listings[0]?.currencyValuePerToken.symbol}</p>
          </div>
        ) : (
          <div>Not listed</div>
        )}

        {/* Buy button */}
        <Web3Button
        contractAddress={NFT_MARKETPLACE}
        action={async () => buyListing()}
        isDisabled={!listings || !listings[0]}
        connectWallet={{
          btnTitle: "Connect Wallet",
          modalTitle: "JarsNFT",
          showThirdwebBranding: false,
          welcomeScreen: () => <LoginWelcomeScreen />,
          style: {
            paddingTop: "12px",
            paddingBottom: "12px",
            minWidth: "100px",
            maxHeight: "53px",
          },
          modalTitleIconUrl: "",
        }}
        style={{
          display: (!listings || !listings[0]) ? "none" : "block",
        }}
        >Buy at asking price</Web3Button>
      </div>
    )
  }
  

}
