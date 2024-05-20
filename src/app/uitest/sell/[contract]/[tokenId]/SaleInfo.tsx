"use client"

import { NFT_MARKETPLACE } from '@/types/constant';
import { Web3Button, useContract, useCreateDirectListing } from '@thirdweb-dev/react';
import type { NFT as TypeNFT } from '@thirdweb-dev/sdk'
import React from 'react'
import { useForm } from 'react-hook-form';

type Props = {
  nft: TypeNFT | undefined;
  tokenContract: string;
}

type DirectListingFormData = {
  nftContractAddress: string;
  tokenId: string;
  price: string;
  startDate: Date;
  endDate: Date;
}

export default function SaleInfo({ nft, tokenContract }: Props) {
  const { contract: marketplace } = useContract(NFT_MARKETPLACE, "marketplace-v3");
  
  const { contract: nftCollection } = useContract(tokenContract);

  const { mutateAsync: createDirectListing } = useCreateDirectListing(marketplace);


  async function checkAndProvideApproval() {
    const hasApproval = await nftCollection?.call(
      "isApprovedForAll",
      [nft?.owner, NFT_MARKETPLACE]
    );

    if(!hasApproval) {
      const txResult = await nftCollection?.call(
        "setApprovalForAll",
        [NFT_MARKETPLACE, true]
      );

      if(txResult) {
        console.log("Approval granted");
      }
    }
    return true;
  }
  
  const { register: registerDirect, handleSubmit: handleSubmitDirect } = useForm<DirectListingFormData>({
    defaultValues: {
      nftContractAddress: tokenContract,
      tokenId: nft?.metadata.id,
      price: "0",
      startDate: new Date(),
      endDate: new Date(),
    }
  });

  async function handleOnSubmitDirect(data: DirectListingFormData) {
    await checkAndProvideApproval();
    const txResult = await createDirectListing({
      assetContractAddress: data.nftContractAddress,
      tokenId: data.tokenId,
      pricePerToken: data.price,
      startTimestamp: new Date(data.startDate),
      endTimestamp: new Date(data.endDate),
    });

    return txResult;
  }

  return (
    <div>
      <h1>Sale Info</h1>
      <input 
        type="datetime-local" placeholder='Select Start Date and Time'
        {...registerDirect("startDate")}
      />
      <input 
        type="datetime-local" placeholder='Select End Date and Time'
        {...registerDirect("endDate")}
      />
      <input 
        type="number"
        placeholder="0.00"
        {...registerDirect("price")}
      />
      <Web3Button
        contractAddress={NFT_MARKETPLACE}
        action={async () => {
          await handleSubmitDirect(handleOnSubmitDirect)();
        }}
        onSuccess={(txResult) => {
          // Push to nft route
          // router.push(`/collection/${tokenContract}/${nft?.metadata.id}`);
          // or show success message state
        }}
        >Create Direct Listing</Web3Button>
    </div>
  )
}
