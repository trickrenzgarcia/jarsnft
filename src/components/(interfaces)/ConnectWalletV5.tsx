"use client"
import { ConnectButton, darkTheme, lightTheme } from "thirdweb/react";
import React from 'react'
import { createWallet, inAppWallet } from "thirdweb/wallets";
import { client } from "@/lib/thirdweb-sdk";
import { useTheme } from "next-themes";
import { generatePayload, isLoggedIn, login, logout } from "@/actions/login";
import { polygon } from "thirdweb/chains"
import LoginWelcomeScreen from "./LoginWelcomeScreen";

const walletsWithAuth = [inAppWallet({
  auth: {
    options: ["discord", "google"]
  }
})]

export default function ConnectWallet() {
  const light = lightTheme()
  const dark = darkTheme()
  const {theme} = useTheme()
  const recommendedWallets = [
    createWallet("io.metamask"),
    createWallet("com.coinbase.wallet"),
  ]
  const wallets = [
    createWallet("io.metamask"),
    createWallet("com.coinbase.wallet"),
    createWallet("com.roninchain.wallet"),
    createWallet("com.binance"),
    createWallet("org.uniswap"),
    createWallet("com.bitget.web3"),
    createWallet("com.okex.wallet"),
    createWallet("com.bybit"),
  ]
  return (
    <div>
      <ConnectButton
        client={client}
        wallets={wallets}
        recommendedWallets={recommendedWallets}
        auth={{
          isLoggedIn: async (address) => {
            return await isLoggedIn()
          },
          doLogin: async (params) => {
            console.log('logging in', params)
            
            await login(params)
          },
          getLoginPayload: async ({ address }) =>
            generatePayload({ address }),
          doLogout: async () => {
            console.log("logging out!");
            await logout();
          },
        }}
        theme={theme === 'light' ? light : dark}
        connectButton={{
          label: 'Connect',
          style: {
            paddingTop: '12px',
            paddingBottom: '12px',
            minWidth: '100px',
            maxHeight: '53px'
          },
        }}
        connectModal={{
          title: 'JarsNFT',
          welcomeScreen: () => <LoginWelcomeScreen />
        }}
        detailsButton={{ 
          style: {
            paddingTop: '12px',
            paddingBottom: '12px',
            minWidth: '100px',
            maxHeight: '53px'
          }
        }}
        autoConnect
        signInButton={{
          style: {
            paddingTop: '12px',
            paddingBottom: '12px',
            minWidth: '100px',
            maxHeight: '53px'
          },
        }}
        chain={polygon}
      />
    </div>
  )
}