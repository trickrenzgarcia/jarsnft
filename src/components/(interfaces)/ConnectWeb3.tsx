"use client"

import { fetchApi } from '@/lib/ctx'
import { ConnectWallet, Web3Button, darkTheme, lightTheme, useAuth, useLogin } from '@thirdweb-dev/react'
import React, { useEffect, useState, memo } from 'react'
import { LoginButton } from '.'
import { signIn, signOut, useSession } from 'next-auth/react'
import { Button } from '../ui/button'
import Spline from "@splinetool/react-spline"

type UserResponse = {
  success: boolean,
  user: any
}

const ConnectWeb3 = () => {
  const { data } = useSession()
  console.log(data)
  return (
    <div>
      <ConnectWallet
        theme={darkTheme({
          colors: {
            accentText: "#A519D7"
          }
        })}
        btnTitle="Login"
        modalTitle="JarsNFT"
        auth={{
          async onLogin(token) {
            console.log("Authorization ", token)
          },
          onLogout() {
              
          },
        }}
        switchToActiveChain={true}
        showThirdwebBranding={false}
        welcomeScreen={() => <LoginWelcomeScreen />}
        modalTitleIconUrl=''
      />
    </div>
  )
}


const LoginWelcomeScreen = () => {
  return (
    <div className='w-full'>
      <video
        className='w-full h-auto opacity-50'
        preload='false'
        playsInline
        loop
        muted
        // @ts-ignore
        autoPlay="autoplay"
        src='/assets/rocket.mp4'
      >
      </video>
    </div>
  )
}

export default memo(ConnectWeb3)