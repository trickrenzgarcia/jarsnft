'use client'

import { use } from 'react'
import { MarketPlaceContext, ListingsContext, NFTsContext } from '@/components/(providers)'

export function useMarketPlaceContext() {
  const context = use(MarketPlaceContext)

  if(context === undefined) {
    throw new Error('useMarketPlace must be used within the MarketPlaceProvider.')
  }
  
  return context;
}

export function useListingsContext() {
  const context = use(ListingsContext)

  if(context === undefined) {
    throw new Error('useListings must be used within the ListingsProvider.')
  }

  return context
}

export function useNFTsContext() {
  const context = use(NFTsContext)

  if(context === undefined) {
    throw new Error('useNFTsContext must be used within the NFTsProvider.')
  }

  return context
}