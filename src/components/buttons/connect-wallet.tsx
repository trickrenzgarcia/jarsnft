"use client"

import client from '@/lib/client'
import { polygon } from 'thirdweb/chains';
import { 
  ConnectButton,
  type ConnectButton_connectModalOptions,
  type ConnectButton_detailsButtonOptions,
  type ConnectButton_detailsModalOptions,
  type ConnectButton_connectButtonOptions,
  type Theme
} from 'thirdweb/react'

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

export type ConnectWalletProps = {
  connectModal?: ConnectButton_connectModalOptions;
  connectButton?: ConnectButton_connectButtonOptions;
  detailsModal?: ConnectButton_detailsModalOptions;
  detailsButton?: ConnectButton_detailsButtonOptions;
  switchButton?: {
    label?: string;
    style?: React.CSSProperties;
    className?: string;
  };
  signInButton?: {
    label?: string;
    style?: React.CSSProperties;
    className?: string;
  };
  theme?: "dark" | "light" | Theme;
}

export default function ConnectWallet({ 
  connectModal,
  connectButton,
  detailsModal,
  detailsButton,
  switchButton,
  signInButton,
  theme 
}: ConnectWalletProps) {

  return (
    <ConnectButton
      chain={polygon}
      client={client}
      wallets={wallets}
      connectModal={connectModal}
      locale='en_US'
      appMetadata={{
        name: 'JarsNFT',
        description: 'JarsNFT is a platform for creating, buying, and selling NFTs.',
        url: 'https://jarsnft.com',
      }}
      connectButton={connectButton}
      detailsButton={detailsButton}
      detailsModal={detailsModal}
      switchButton={switchButton}
      signInButton={signInButton}
      theme={theme}
      onConnect={(wallet) => {
        const address = wallet.getAccount()
        console.log(`Connected to ${address}`)
      }}
    />
  )
}
