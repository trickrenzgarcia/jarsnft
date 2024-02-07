"use client"

import { fetchApi } from '@/lib/ctx'
import { ConnectWallet, Web3Button, useLogin } from '@thirdweb-dev/react'
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

  return (
    <div>
      <ConnectWallet 
        btnTitle='ConnectWeb3'
        auth={{
          onLogin(token) {
            console.log(token)
          },
        }}
      />
    </div>
  )
}