"use client"

import client from '@/lib/client'
import { polygon } from 'thirdweb/chains';
import { ConnectButton, useActiveAccount } from 'thirdweb/react'

import {
  inAppWallet,
  createWallet,
} from "thirdweb/wallets";

const wallets = [
  inAppWallet({
    auth: {
      options: [
        "discord",
        "telegram",
        "google",
        "email",
        "phone",
      ],
    },
  }),
  createWallet("io.metamask"),
  createWallet("app.phantom"),
  createWallet("com.coinbase.wallet"),
  createWallet("com.binance"),
  createWallet("org.uniswap"),
];

export default function ConnectWallet() {
  const activeAccount = useActiveAccount()

  console.log(activeAccount?.address)
  return (
    <ConnectButton
      chain={polygon}
      client={client}
      wallets={wallets}
      connectModal={{
        size: 'wide',
        titleIcon: 'icon',
        termsOfServiceUrl: 'tos',
        privacyPolicyUrl: ''
      }}
      locale='en_US'
      appMetadata={{
        name: 'JarsNFT',
        description: 'JarsNFT is a platform for creating, buying, and selling NFTs.',
        url: 'https://jarsnft.com',
      }}
      connectButton={{
        label: 'Connect Wallet',
        style: {
          color: 'white',
          fontSize: '14px',
          borderRadius: '5px',
          minWidth: '100px',
          height: '46px',
          background: '#9333ea'
        }
      }}
      detailsButton={{
        connectedAccountAvatarUrl: `https://api.dicebear.com/9.x/thumbs/svg?seed=${activeAccount?.address}`,
        style: {
          color: 'white',
          minWidth: '130px',
          height: '46px',
          borderRadius: '5px',
          borderColor: 'rgba(147, 51, 234, 0.4)',
          background: 'rgba(147, 51, 234, 0.3)'
        }
      }}
      detailsModal={{
        connectedAccountAvatarUrl: `https://api.dicebear.com/9.x/thumbs/svg?seed=${activeAccount?.address}`,
      }}
      switchButton={{
        style: {
          color: 'white',
          fontSize: '14px',
          borderRadius: '5px',
          minWidth: '100px',
          height: '46px',
          background: '#9333ea'
        }
      }}
    />
  )
}
