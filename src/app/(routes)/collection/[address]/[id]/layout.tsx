import React from "react";
import { Metadata } from "next";
import jars from "@/lib/api";
import NFTProvider from "@/components/(providers)/nft-provider";

type NFTProps = {
  params: {
    address: string;
    id: string;
  };
  children: React.ReactNode;
};

type PageParams = Omit<NFTProps, "children">;

export async function generateMetadata({ params: { address, id } }: PageParams): Promise<Metadata> {
  const nft = await jars.getNFTByTokenId(address, id);

  if (!nft.name || !nft.collection.name) {
    return {
      title: `Page Not Found | JarsNFT`,
    };
  }

  return {
    title: `${nft.name} - ${nft.collection.name} | JarsNFT`,
    description: nft.description,
    keywords: [nft.name, nft.collection.name, "NFT", "JarsNFT"],
  };
}

export default function NFTLayout({ children, params: { address, id } }: NFTProps) {
  return (
    <NFTProvider address={address} tokenId={id}>
      {children}
    </NFTProvider>
  );
}
