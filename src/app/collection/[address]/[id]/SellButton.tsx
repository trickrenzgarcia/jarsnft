"use client"

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useNftContext } from './nft-provider';
import { type NFT, useContract, useCreateDirectListing, ThirdwebNftMedia } from '@thirdweb-dev/react';
import { NFT_MARKETPLACE } from '@/types/constant';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogFooter,
} from "@/components/ui/alert-dialog";
import { MdVerified } from 'react-icons/md';
import { Card, CardBody, Tab, Tabs } from '@nextui-org/react';
import CreateDirectListing from './CreateDirectListing';
import CreateAuction from './CreateAuction';
import Image from 'next/image';

type SellButtonProps = {
  nft: NFT | undefined;
  contractAddress: string;
}

export default function SellButton({ nft }: SellButtonProps) {
  const router = useRouter();
  const { collection } = useNftContext();
  const [sellState, setSellState] = useState<'idle' | 'confirmation' | 'success'>('idle');

  return (
    <AlertDialog>

      {/* Trigger Sell Button */}
      <AlertDialogTrigger asChild>
        <Button className='w-full'>Sell</Button>
      </AlertDialogTrigger>

      <AlertDialogContent className='min-w-[420px] w-[500px] p-0'>
        {/* Header */}
        <AlertDialogHeader className='px-8 pt-8'>
          <div className='flex justify-between items-center'>
            <AlertDialogTitle className="text-2xl font-bold">Sell</AlertDialogTitle>
            <AlertDialogCancel className='rounded-full' disabled={sellState != "idle"}>x</AlertDialogCancel>
          </div>
          <AlertDialogDescription>
            Enter the price of the item. Click &quot;CONFIRM AND SELL&quot; to
            proceed.
          </AlertDialogDescription>
        </AlertDialogHeader>

        {/* Body */}
        <div className="flex justify-between px-8 py-4 gap-5">
          {nft?.metadata.image && (
            <ThirdwebNftMedia
              metadata={nft.metadata}
              width='100px'
              height='100px'
              style={{
                maxWidth: '100px',
                maxHeight: '100px',
                minWidth: '100px',
                minHeight: '100px',
              }}
              requireInteraction
              className="rounded-lg bg-accent/50 border border-accent"
            />
          ) || (
            <Image
              src="/assets/placeholder/nft_placeholder.svg"
              width={100}
              height={100}
              alt="image of an NFT"
              className='rounded-lg bg-accent/50 border border-accent'
            />
          )}

          <div className="flex flex-col py-4 w-full gap-2">
            <h1 className='text-xl font-bold'>{nft?.metadata.name}</h1>
            <p className='text-sm text-gray-400 flex gap-1 items-center'>
              {collection.name}
              <MdVerified className=' text-blue-500' />
            </p>
          </div>
        </div>

        {/* Footer */}
        <AlertDialogFooter className="flex sm:flex-col sm:space-x-0 bg-neutral-200 dark:bg-neutral-800 rounded-t-3xl rounded-b-lg px-6 py-8">
          <Tabs variant="underlined" aria-label='Options'>
            <Tab key="direct" title="Direct Listing">
              <CreateDirectListing sellState={sellState} setSellState={setSellState} />
            </Tab>
            <Tab key="auction" title="Auction">
              <CreateAuction sellState={sellState} setSellState={setSellState} />
            </Tab>
          </Tabs>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
