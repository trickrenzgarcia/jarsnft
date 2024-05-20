"use client"

import React, { useEffect, useState } from 'react'
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
import { useNftContext } from './nft-provider';
import Image from 'next/image';
import { type DirectListingV3, type NFT, ThirdwebNftMedia, Web3Button, useBalance } from '@thirdweb-dev/react';
import { MdVerified } from 'react-icons/md';
import { NFT_MARKETPLACE } from '@/types/constant';
import { LoginWelcomeScreen } from '@/components/(interfaces)/ConnectWeb3';
import { toast } from 'sonner';
import { getMaticPriceInPHP } from '@/lib/core/coingecko';

type BuyButtonProps = {
  nft: NFT | undefined;
  listings: DirectListingV3[]
}

export default function BuyButton({ nft, listings }: BuyButtonProps) {
  const { collection, marketPlaceContract } = useNftContext();
  const [buyState, setBuyState] = useState<'idle' | 'confirmation' | 'success'>('idle');
  const [amountInPhp, setAmountInPhp] = useState<string>("");
  const { data: balance, isLoading: loadingBalance } = useBalance();

  useEffect(() => {
    if (listings && listings[0]) {
      getMaticPriceInPHP(listings[0].currencyValuePerToken.displayValue).then((result) => {
        setAmountInPhp(result);
      });
    }
  }, [])

  const buyListing = async () => {
    let txResult;

    if (listings?.[0]) {
      setBuyState('confirmation');
      txResult = await marketPlaceContract?.directListings.buyFromListing(
        listings[0].id,
        1
      ).then(() => {
        console.log("success");
      }).catch((e) => {
        setBuyState('idle');
        toast.error("Failed!", {
          description: "The user denied the transaction or the transaction failed. Please try again.",
          position: "bottom-right",
          closeButton: true,
        });
      });
    } else {
      throw new Error("No listing found");
    }
    
    return txResult;
  }

  return (
    <AlertDialog>

      {/* Trigger Button */}
      <AlertDialogTrigger asChild>
        <Button className="w-full">Buy Now</Button>
      </AlertDialogTrigger>

      <AlertDialogContent className="min-w-[420px] w-[550px] p-0">
        {/* Header */}
        <AlertDialogHeader className="px-8 pt-8">
          <div className='flex justify-between items-center'>
            <AlertDialogTitle className="text-2xl font-bold">Checkout</AlertDialogTitle>
            <AlertDialogCancel className='rounded-full' disabled={buyState != "idle"}>x</AlertDialogCancel>
          </div>
          
          <AlertDialogDescription>
            Verify your purchase here. Click &quot;CONFIRM AND PAY&quot; to proceed.
          </AlertDialogDescription>
        </AlertDialogHeader>

        {/* Body */}
        <div className="flex justify-between px-8 py-4 gap-5">
          {nft && (
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
          <div className="flex justify-between text-xl font-bold px-4">
            <p>You pay</p>
            <p>{listings[0].currencyValuePerToken.displayValue} {listings[0].currencyValuePerToken.symbol}</p>
          </div>
          <div className="flex justify-between px-4">
            <p className='text-gray-500'>For 1 NFT</p>
            <p className='text-gray-500'>PHP {amountInPhp}</p>
          </div>
          <div className="flex justify-between my-6 px-4">
            <p>Your MATIC balance</p>
            <p>{balance ? `${parseFloat(balance.displayValue).toFixed(3)} ${balance.symbol}` : "..." }</p>
          </div>

          {/* Buy button action */}
          <Web3Button
            contractAddress={NFT_MARKETPLACE}
            action={async () => buyListing()}
            isDisabled={!listings || !listings[0]}
            connectWallet={{
              btnTitle: "Connect Wallet",
              modalTitle: "JarsNFT",
              showThirdwebBranding: false,
              welcomeScreen: () => <LoginWelcomeScreen />,
              style: {
                paddingTop: "12px",
                paddingBottom: "12px",
                minWidth: "100px",
                maxHeight: "53px",
              },
              modalTitleIconUrl: "",
            }}>
              Confirm and Pay
            </Web3Button>
        </AlertDialogFooter>
      </AlertDialogContent>

    </AlertDialog>
  )
}
