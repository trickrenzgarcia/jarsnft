"use client"

import { NFT_MARKETPLACE } from '@/lib/constant'
import { type DirectListingV3, type EnglishAuction, useContract, useValidDirectListings, useValidEnglishAuctions } from '@thirdweb-dev/react'
import { createContext, ReactNode, use, useMemo } from 'react'

type Props = {
  children: ReactNode;
  address: string;
}

export type ListingsContext = {
  directListings: DirectListingV3[] | undefined;
  auctionListings: EnglishAuction[] | undefined;
  loadingDirectListings: boolean;
  loadingAuctionListings: boolean;
}

export const ListingsContext = createContext<ListingsContext | undefined>(undefined)

function ListingsProvider({ children, address }: Props) {
  const { contract: marketPlaceContract } = useContract(NFT_MARKETPLACE, "marketplace-v3")

  const { data: directListings, isLoading: loadingDirectListings } = useValidDirectListings(marketPlaceContract, {
    tokenContract: address
  })

  const { data: auctionListings, isLoading: loadingAuctionListings } = useValidEnglishAuctions(marketPlaceContract, {
    tokenContract: address
  })

  const listings = useMemo(() => {
    return {
      directListings,
      auctionListings,
      loadingDirectListings,
      loadingAuctionListings,
    }
  }, [directListings, auctionListings, loadingDirectListings, loadingAuctionListings])

  return <ListingsContext.Provider value={listings}>{children}</ListingsContext.Provider>
}


export default ListingsProvider;