import React from 'react'
import NftProvider from './nft-provider';
import { Metadata } from 'next';
import { ThirdwebSDK } from '@thirdweb-dev/sdk';
import { Sepolia } from "@thirdweb-dev/chains"
import { jars } from '@/lib/core/api';

type NFTProps = {
  params: {
    address: string;
    id: string;
  };
  children: React.ReactNode;
};

type PageParams = Omit<NFTProps, 'children'>;

export async function generateMetadata({ params: { address, id }}: PageParams)
: Promise<Metadata> {
  const nft = await jars.getNFTByTokenId(address, id);
  
  if(!nft.name || !nft.collection.name) {
    return {
      title: `Page Not Found | JarsNFT`
    };
  }

  return {
    title: `${nft.name} - ${nft.collection.name} | JarsNFT`
  };
}

export default function NFTLayout({ children, params: { address, id } }: NFTProps) {
  return <NftProvider address={address} id={id}>{children}</NftProvider>
}
