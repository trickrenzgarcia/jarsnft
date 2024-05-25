"use client"

import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button";
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
import { type DirectListingV3, type NFT, ThirdwebNftMedia, Web3Button, useBalance, type EnglishAuction } from '@thirdweb-dev/react';
import { MdVerified } from 'react-icons/md';
import { NFT_MARKETPLACE } from '@/types/constant';
import { LoginWelcomeScreen } from '@/components/(interfaces)/ConnectWeb3';
import { toast } from 'sonner';
import { getMaticPriceInPHP } from '@/lib/core/coingecko';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { revalidatePath } from 'next/cache';

type BuyButtonProps = {
  nft: NFT | undefined;
  listings: DirectListingV3[] | undefined;
  auctionListing: EnglishAuction[] | undefined;
}

export default function BuyButton({ nft, listings, auctionListing }: BuyButtonProps) {
  const router = useRouter();
  const { collection, marketPlaceContract } = useNftContext();
  const [buyState, setBuyState] = useState<'idle' | 'confirmation' | 'success'>('idle');
  const [amountInPhp, setAmountInPhp] = useState<string>("");
  const { data: balance, isLoading: loadingBalance } = useBalance();
  const [isListed, setIsListed] = useState<"none" | "direct" | "auction">("none");

  useEffect(() => {
    if(listings?.[0]) {
      setIsListed("direct");
    } else if(auctionListing?.[0]) {
      setIsListed("auction");
    } else {
      setIsListed("none");
    }
  }, [listings, auctionListing])

  useEffect(() => {
    if (listings && listings[0]) {
      getMaticPriceInPHP(listings[0].currencyValuePerToken.displayValue).then((result) => {
        setAmountInPhp(result);
      });
    } else if(auctionListing && auctionListing[0]) {
      getMaticPriceInPHP(auctionListing[0].buyoutCurrencyValue.displayValue).then((result) => {
        setAmountInPhp(result);
      });
    }
  }, [listings, auctionListing])

  const buyListing = async () => {
    let txResult;

    if(auctionListing?.[0]) {
      setBuyState('confirmation');
      txResult = await marketPlaceContract?.englishAuctions.buyoutAuction(
        auctionListing[0].id
      ).then((data) => {
        setBuyState("success");
        revalidatePath("/me");
        toast.success("You have successfully bought the NFT.", {
          description: `${nft?.metadata.name} has been added to your profile.`,
          position: "bottom-right",
          duration: 2000,
          onAutoClose(toast) {
            setBuyState('idle');
            router.refresh();
          },
        });
      }).catch((e: Error) => {
        setBuyState('idle');
        if(e.message.includes("Reason: missing revert data in call exception; Transaction reverted without a reason string")) {
          toast.error("Failed!", {
            description: `Insufficient funds for nft price.`,
            position: "bottom-right",
          })
        } else if(e.message.includes("Reason: user rejected transaction")) {
          toast.error("Failed!", {
            description: "The user denied the transaction or the transaction failed. Please try again.",
            position: "bottom-right",
          });
        } else {
          toast.error("Failed!", {
            description: "An error occurred while processing your request. Please try again.",
            position: "bottom-right",
          });
        }
      });
    } else if (listings?.[0]) {
      setBuyState('confirmation');
      txResult = await marketPlaceContract?.directListings.buyFromListing(
        listings[0].id,
        1
      ).then((data) => {
        console.log("success");
        setBuyState("success");
      }).catch((e: Error) => {
        setBuyState('idle');
        if(e.message.includes("Reason: missing revert data in call exception; Transaction reverted without a reason string")) {
          toast.error("Failed!", {
            description: `Insufficient funds for nft price.`,
            position: "bottom-right",
          })
        } else if(e.message.includes("Reason: user rejected transaction")) {
          toast.error("Failed!", {
            description: "The user denied the transaction or the transaction failed. Please try again.",
            position: "bottom-right",
          });
        } else {
          toast.error("Failed!", {
            description: "An error occurred while processing your request. Please try again.",
            position: "bottom-right",
          });
        }
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

      <AlertDialogContent className="min-w-[420px] w-[500px] p-0">
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
          <div className="flex justify-between text-xl font-bold px-4">
            <p>You pay</p>
            {listings && listings[0] ? (
              <p>
                {listings?.[0].currencyValuePerToken.displayValue} {listings?.[0].currencyValuePerToken.symbol}
              </p>
            ): auctionListing && auctionListing[0] ? (
              <p>
                {auctionListing[0].buyoutCurrencyValue.displayValue} {auctionListing[0].buyoutCurrencyValue.symbol}
              </p>
            ) : (
              <p>N/A</p>
            )}
            
          </div>
          <div className="flex justify-between px-4">
            <p className='text-gray-500'>For 1 NFT</p>
            <p className='text-gray-500'>PHP {amountInPhp}</p>
          </div>
          <div className="flex justify-between my-6 px-4">
            <p>Your MATIC balance</p>
            <p>{balance ? `${parseFloat(balance.displayValue).toFixed(3)} ${balance.symbol}` : "Not Logged In" }</p>
          </div>

          {/* Buy button action */}
          <Web3Button
            contractAddress={NFT_MARKETPLACE}
            action={async () => buyListing()}
            isDisabled={isListed === "none"}
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
