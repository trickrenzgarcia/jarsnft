'use client'

import React from 'react'
import { ThirdwebProvider as ThirdwebProviderV4 } from "@thirdweb-dev/react"
import { Polygon } from '@thirdweb-dev/chains'

export default function ThirdwebProvider(
  { children }: Readonly<{ children: React.ReactNode }>
) {
  return (
    <ThirdwebProviderV4
      activeChain={Polygon}
      clientId={process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}
      secretKey={process.env.NEXT_PUBLIC_THIRDWEB_API_KEY}
      authConfig={{
        domain: process.env.NEXT_PUBLIC_THIRDWEB_AUTH_DOMAIN,
        authUrl: '/api/auth'
      }}
    >
      {children}
    </ThirdwebProviderV4>
  )
}
