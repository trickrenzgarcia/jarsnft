"use client"

import Image from 'next/image'
import ConnectWallet from '../buttons/connect-wallet'
import { useActiveAccount } from 'thirdweb/react'
import Link from 'next/link'
import ProfileButton from '../buttons/profile'

function NavTitle() {
  return (
    <Link href='/'>
      <div className='flex items-center gap-1'>
        <Image src="/placeholder.svg" alt='' width={30} height={30} className='invert'/>
        <h1 className='text-lg font-bold'>JarsNFT</h1>
      </div>
    </Link>
  )
}

export default function NavBar() {
  const activeAccount = useActiveAccount()

  return (
    <div className='flex items-center justify-between border-b py-2 px-4 bg-navbg'>
      <NavTitle />

      <div className='flex items-center'>
        <ConnectWallet
          connectModal={{
            size: 'wide',
            titleIcon: 'icon',
            termsOfServiceUrl: 'tos',
            privacyPolicyUrl: ''
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
              borderColor: 'rgba(147, 51, 234, 0.2)',
              background: 'rgba(147, 51, 234, 0.2)'
            },
            render: () => <></>
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

        {activeAccount?.address && <ProfileButton />}
      </div>
    </div>
  )
}
