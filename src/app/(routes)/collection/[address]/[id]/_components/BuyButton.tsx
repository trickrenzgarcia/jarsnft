"use client";

import React, { useEffect, useState } from "react";
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
import { type DirectListingV3, type NFT, ThirdwebNftMedia, Web3Button, useBalance, type EnglishAuction } from "@thirdweb-dev/react";
import { MdOutlineClose, MdVerified } from "react-icons/md";
import { NFT_MARKETPLACE } from "@/lib/constant";
import { LoginWelcomeScreen } from "@/components/(interfaces)";
import { toast } from "sonner";
import { getMaticPriceInPHP } from "@/lib/coingecko";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createTxHash } from "@/actions/createTxHash";
import { useContractContext, useMarketPlaceContext } from "@/components/hooks/use-context";

type BuyButtonProps = {
  nft: NFT | undefined;
  listings: DirectListingV3[] | undefined;
  auctionListing: EnglishAuction[] | undefined;
};

export default function BuyButton({ nft, listings, auctionListing }: BuyButtonProps) {
  const router = useRouter();
  const { collection } = useContractContext();
  const { marketPlaceContract } = useMarketPlaceContext();
  const [buyState, setBuyState] = useState<"idle" | "confirmation" | "success">("idle");
  const [amountInPhp, setAmountInPhp] = useState<string>("");
  const { data: balance, isLoading: loadingBalance } = useBalance();
  const [isListed, setIsListed] = useState<"none" | "direct" | "auction">("none");

  useEffect(() => {
    if (listings?.[0]) {
      setIsListed("direct");
    } else if (auctionListing?.[0]) {
      setIsListed("auction");
    } else {
      setIsListed("none");
    }
  }, [listings, auctionListing]);

  useEffect(() => {
    if (listings && listings[0]) {
      getMaticPriceInPHP(listings[0].currencyValuePerToken.displayValue).then((result) => {
        setAmountInPhp(result);
      });
    } else if (auctionListing && auctionListing[0]) {
      getMaticPriceInPHP(auctionListing[0].buyoutCurrencyValue.displayValue).then((result) => {
        setAmountInPhp(result);
      });
    }
  }, [listings, auctionListing]);

  const buyListing = async () => {
    let txResult;

    if (auctionListing?.[0]) {
      setBuyState("confirmation");
      txResult = await marketPlaceContract?.englishAuctions
        .buyoutAuction(auctionListing[0].id)
        .then(async (data) => {
          await createTxHash("NewSale", data.receipt.transactionHash);
          setBuyState("success");
          revalidatePath("/me", "page");
          toast.success("You have successfully bought the NFT.", {
            description: `${nft?.metadata.name} has been added to your profile.`,
            position: "bottom-right",
            duration: 2000,
            onAutoClose(toast) {
              setBuyState("idle");
              router.refresh();
            },
          });
        })
        .catch((e: Error) => {
          setBuyState("idle");
          if (e.message.includes("Reason: missing revert data in call exception; Transaction reverted without a reason string")) {
            toast.error("Failed!", {
              description: `Insufficient funds for nft price.`,
              position: "bottom-right",
            });
          } else if (e.message.includes("Reason: user rejected transaction")) {
            toast.error("Failed!", {
              description: "The user denied the transaction or the transaction failed. Please try again.",
              position: "bottom-right",
            });
          }
        });
    } else if (listings?.[0]) {
      setBuyState("confirmation");
      txResult = await marketPlaceContract?.directListings
        .buyFromListing(listings[0].id, 1)
        .then(async (data) => {
          await createTxHash("NewSale", data.receipt.transactionHash);
          setBuyState("success");
          revalidatePath("/me", "page");
          toast.success("You have successfully bought the NFT.", {
            description: `${nft?.metadata.name} has been added to your profile.`,
            position: "bottom-right",
            duration: 2000,
            onAutoClose(toast) {
              setBuyState("idle");
              router.refresh();
            },
          });
        })
        .catch((e: Error) => {
          setBuyState("idle");
          if (e.message.includes("Reason: missing revert data in call exception; Transaction reverted without a reason string")) {
            toast.error("Failed!", {
              description: `Insufficient funds for nft price.`,
              position: "bottom-right",
            });
          } else if (e.message.includes("Reason: user rejected transaction")) {
            toast.error("Failed!", {
              description: "The user denied the transaction or the transaction failed. Please try again.",
              position: "bottom-right",
            });
          }
        });
    } else {
      throw new Error("No listing found");
    }

    return txResult;
  };

  return (
    <AlertDialog>
      {/* Trigger Button */}
      <AlertDialogTrigger asChild>
        <Button className="h-[3rem] w-full text-lg font-semibold">Buy Now</Button>
      </AlertDialogTrigger>

      <AlertDialogContent className="w-4/5 p-0 sm:w-[500px] sm:min-w-[420px]">
        {/* Header */}
        <AlertDialogHeader className="px-8 pt-8">
          <div className="flex items-center justify-between">
            <AlertDialogTitle className="text-2xl font-bold">Checkout</AlertDialogTitle>
            <AlertDialogCancel className="rounded-full" disabled={buyState != "idle"}>
              <MdOutlineClose className="size-5" />
            </AlertDialogCancel>
          </div>

          <AlertDialogDescription className="hidden sm:block">
            Verify your purchase here. Click &quot;CONFIRM AND PAY&quot; to proceed.
          </AlertDialogDescription>
        </AlertDialogHeader>

        {/* Body */}
        <div className="flex justify-center gap-5 px-8 py-4 sm:justify-between">
          {(nft?.metadata.image && (
            <ThirdwebNftMedia
              metadata={nft.metadata}
              width="100px"
              height="100px"
              style={{
                maxWidth: "100px",
                maxHeight: "100px",
                minWidth: "100px",
                minHeight: "100px",
                objectFit: "cover",
              }}
              requireInteraction
              className="rounded-lg border border-accent bg-accent/50"
            />
          )) || (
            <Image
              src="/assets/placeholder/nft_placeholder.svg"
              width={100}
              height={100}
              alt="image of an NFT"
              className="rounded-lg border border-accent bg-accent/50"
            />
          )}

          <div className="hidden w-full flex-col gap-2 py-4 sm:flex">
            <h1 className="text-xl font-bold">{nft?.metadata.name}</h1>
            <p className="flex items-center gap-1 text-sm text-gray-400">
              {collection.name}
              <MdVerified className="text-blue-500" />
            </p>
          </div>
        </div>

        {/* Footer */}
        <AlertDialogFooter className="flex flex-col rounded-b-lg rounded-t-3xl bg-neutral-200 px-6 py-8 dark:bg-neutral-800 sm:flex-col sm:space-x-0">
          <div className="flex justify-between px-4 text-base font-bold sm:text-xl">
            <p>You pay</p>
            {listings && listings[0] ? (
              <p>{listings?.[0].currencyValuePerToken.displayValue} POL</p>
            ) : auctionListing && auctionListing[0] ? (
              <p>{auctionListing[0].buyoutCurrencyValue.displayValue} POL</p>
            ) : (
              <p>N/A</p>
            )}
          </div>
          <div className="flex justify-between px-4 text-xs sm:text-base">
            <p className="text-gray-500">For 1 NFT</p>
            <p className="text-gray-500">PHP {amountInPhp}</p>
          </div>
          <div className="my-6 flex justify-between px-4 text-xs sm:text-base">
            <p>Your POL balance:</p>
            <p>{balance ? `${parseFloat(balance.displayValue).toFixed(3)} POL` : "Not Logged In"}</p>
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
            }}
          >
            Confirm and Pay
          </Web3Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
