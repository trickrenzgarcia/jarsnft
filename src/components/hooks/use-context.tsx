'use client'

import { use } from 'react'
import { 
  MarketPlaceContext,
  ListingsContext,
  NFTContext,
  NFTsContext,
  ContractContext
} from '@/components/(providers)'

export function useContractContext() {
  const context = use(ContractContext)

  if(context === undefined) {
    throw new Error('useContractContext must be used within the ContractProvider.')
  }
  
  return context;
}

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

export function useNFTContext() {
  const context = use(NFTContext)

  if(context === undefined) {
    throw new Error('useNFTContext must be used within the NFTProvider.')
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