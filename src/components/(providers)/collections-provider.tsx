"use client"

import React from 'react'
import { CollectionsContext } from './context'
import { NFTCollection } from '@/types'

interface ProviderProps {
  children: React.ReactNode,
  value: NFTCollection[] | undefined
}

export default function CollectionsProvider({ children, value }: ProviderProps) {
  return (
    <CollectionsContext.Provider value={value}>
      {children}
    </CollectionsContext.Provider>
  )
}
