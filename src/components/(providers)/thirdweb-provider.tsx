"use client"

import {
  ThirdwebProvider as ThirdwebProviderLayout,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  trustWallet,
  bloctoWallet,
  phantomWallet,
  safeWallet
} from "@thirdweb-dev/react";
import { Sepolia } from '@thirdweb-dev/chains'
import { env } from '@/lib/env.mjs';

export default function ThirdwebProvider({ children } : { children: React.ReactNode }) {

  return (
    <ThirdwebProviderLayout
      activeChain={Sepolia}
      clientId="2c570ac5995e3d8c067e868aa87a13fe"
      secretKey="NjoqpdzbYOAjrTYR_rr-fcRi3F0HKXqF5bQzk9sZ8LexTD9Yz2eg2tFdmqrozGnfwP5UNiwi4zgOnVSrmZjJLQ"
      supportedWallets={[
        metamaskWallet({ recommended: true }),
        coinbaseWallet({ recommended: true }),
        walletConnect(),
        trustWallet(),
        bloctoWallet(),
        phantomWallet(),
        safeWallet()
      ]}
    >
      {children}
    </ThirdwebProviderLayout>
  )
}