"use client"

import { fetchApi } from '@/lib/ctx'
import { ConnectWallet, Web3Button, useAuth, useLogin } from '@thirdweb-dev/react'
import React, { useEffect, useState } from 'react'
import { LoginButton } from '.'
import { signIn, signOut, useSession } from 'next-auth/react'
import { Button } from '../ui/button'

type UserResponse = {
  success: boolean,
  user: any
}

export default function ConnectWeb3() {
  const { login, isLoading } = useLogin()
  const auth = useAuth()
  const { data } = useSession()
  useEffect(() => {
    console.log(data)
  }, [])

  return (
    <div>
      <ConnectWallet 
        btnTitle='Connect Wallet'
        auth={{
          onLogin(token) {
            console.log("Authorization ", token)
          },
        }}
        
      />
    </div>
  )
}