import { MultiCollectionContextProps } from '@/types'
import React from 'react'
import { MultiCollectionContext } from './context'

interface MultiCollectionProps {
  children: React.ReactNode,
  value: MultiCollectionContextProps
}

export default function MultiCollectionProvider({ children, value }: MultiCollectionProps) {
  return (
    <MultiCollectionContext.Provider value={value}>
      {children}
    </MultiCollectionContext.Provider>
  )
}
