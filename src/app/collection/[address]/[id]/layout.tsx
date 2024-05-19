import React from 'react'
import NftProvider from './nft-provider';

type NFTProps = {
  params: {
    address: string;
    id: string;
  };
  children: React.ReactNode;
};

export default function NFTLayout({ children, params: { address, id } }: NFTProps) {
  return <NftProvider address={address} id={id}>{children}</NftProvider>
}
