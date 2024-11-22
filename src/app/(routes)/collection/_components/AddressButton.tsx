"use client"

import { Button } from '@/components/ui/button'
import { polygonScan, shortenWalletAddress } from '@/lib/utils';
import { ExternalLinkIcon, LinkIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react'

type Props = {
  address: string;
}

export default function AddressButton({ address }: Props) {
  return (
    <p
      className='flex gap-1 items-center text-[11px] bg-[#F3F3F3] dark:bg-[#272727] text-[#272727] dark:text-[#F3F3F3] py-1 px-2 border-muted-foreground rounded-sm w-fit cursor-pointer'
      onClick={() => {
        const url = polygonScan(address);
        window.open(url, "_blank", "noopener,noreferrer");
      }}
    >
      {shortenWalletAddress(address)} <ExternalLinkIcon className='h-4 w-4' />
    </p>
  )
}
