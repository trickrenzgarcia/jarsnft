import React from 'react'
import { CollectionContext } from './context'
import { NFTCollection } from '@/types'

interface ProviderProps {
  children: React.ReactNode,
  value: NFTCollection | undefined
}

export default function CollectionProvider({ children, value }: ProviderProps) {
  return (
    <CollectionContext.Provider value={value}>
      {children}
    </CollectionContext.Provider>
  )
}