"use client"

import ConnectWallet from '../buttons/connect-wallet'
import { useActiveAccount } from 'thirdweb/react'
import ProfileButton from '../buttons/profile'
import { NavMenu } from './nav-menu'
import { NavTitle } from './nav-title'
import NavChains from './nav-chains'


export default function NavBar() {
  const activeAccount = useActiveAccount()

  return (
    <div className='flex items-center justify-between py-2 px-4 bg-navbg'>
      <div className='flex items-center gap-4'>
        <NavTitle />
        <NavChains />
        <NavMenu />
      </div>
      

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
              height: '40px',
              background: '#3b82f6',
              fontWeight: 'bold'
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
            render() {
              return <></>
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

        {activeAccount?.address && <ProfileButton />}
      </div>
    </div>
  )
}
