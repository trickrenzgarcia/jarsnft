"use client"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Web3Button, useCancelDirectListing, useCancelEnglishAuction } from "@thirdweb-dev/react";
import { DirectListingV3, EnglishAuction, NFT } from "@thirdweb-dev/sdk"
import { useNftContext } from "./nft-provider";
import { useEffect, useState } from "react";
import { NFT_MARKETPLACE } from "@/types/constant";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type CancelListingButtonProps = {
  nft: NFT | undefined;
  listings: DirectListingV3[] | undefined;
  auctionListing: EnglishAuction[] | undefined;
  contractAddress: string | undefined;
}

export default function CancelListingButton({ listings, auctionListing}: CancelListingButtonProps) {
  const [cancelState, setCancelState] = useState<"idle" | "confirmation" | "success">("idle");
  const { marketPlaceContract } = useNftContext();
  const router = useRouter();

  const { 
    mutateAsync: cancelEnglishAuction, 
    isLoading: loadingCancelEnglishAuction, 
    error: errorCancelEnglishAuction } = useCancelEnglishAuction(marketPlaceContract)

  const { 
    mutateAsync: cancelDirectListing, 
    isLoading: loadingCancelDirectListing, 
    error: errorCancelDirectListing } = useCancelDirectListing(marketPlaceContract);

  useEffect(() => {

  }, []);

  async function submitCancelRequest() {
    setCancelState("confirmation");
    if(listings && listings[0]) {
      const txResult = await cancelDirectListing(listings[0].id)
      .then((data) => {
        setCancelState("success");
        toast.success("Listed nft has been cancelled!", {
          description: "Successfully cancelled from the marketplace.",
          position: "bottom-right",
          duration: 2000,
          onAutoClose(toast) {
            setCancelState("idle");
            router.refresh();
          },
        });
      })
      .catch((e: Error) => {
        setCancelState("idle");
        if (
          e.message.includes(
            "Reason: missing revert data in call exception; Transaction reverted without a reason string",
          )
        ) {
          toast.error("Failed!", {
            description: `Insufficient funds for gas.`,
            position: "bottom-right",
          });
        } else if (e.message.includes("Reason: user rejected transaction")) {
          toast.error("Failed!", {
            description:
              "The user denied the transaction or the transaction failed. Please try again.",
            position: "bottom-right",
          });
        } else {
          toast.error("Failed!", {
            description:
              "An error occurred while processing your request. Please try again.",
            position: "bottom-right",
          });
        }
      })
      return txResult;
    } else if(auctionListing && auctionListing[0]) {
      const txResult = await cancelEnglishAuction(auctionListing[0].id)
      .then((data) => {
        setCancelState("success");
        toast.success("Auction nft has been cancelled!", {
          description: "Successfully cancelled from the marketplace.",
          position: "bottom-right",
          duration: 2000,
          onAutoClose(toast) {
            setCancelState("idle");
            router.refresh();
          },
        });
      })
      .catch((e: Error) => {
        setCancelState("idle");
        if (
          e.message.includes(
            "Reason: missing revert data in call exception; Transaction reverted without a reason string",
          )
        ) {
          toast.error("Failed!", {
            description: `Insufficient funds for gas.`,
            position: "bottom-right",
          });
        } else if (e.message.includes("Reason: user rejected transaction")) {
          toast.error("Failed!", {
            description:
              "The user denied the transaction or the transaction failed. Please try again.",
            position: "bottom-right",
          });
        } else {
          toast.error("Failed!", {
            description:
              "An error occurred while processing your request. Please try again.",
            position: "bottom-right",
          });
        }
      })
      return txResult;
    } else {
      setCancelState("idle");
      return;
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="h-[3] w-full text-lg font-semibold">
          Cancel {listings && listings[0] ? "Listing" : auctionListing && auctionListing[0] ? "Auction" : null}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className="flex items-center justify-between">
            <AlertDialogTitle className="text-lg font-bold">
              Do you want to cancel your {listings && listings[0] ? "listing" : auctionListing && auctionListing[0] ? "auction" : null} item?
            </AlertDialogTitle>
            <AlertDialogCancel
              className="rounded-full"
              disabled={cancelState != "idle"}
            >
              x
            </AlertDialogCancel>
          </div>
          <AlertDialogDescription>
            <ul className="px-4 text-start">
              <li className="list-disc">This action required wallet confirmation.</li>
              <li className="list-disc">An english auctions cannot be canceled if a bid has been placed.</li>
              <li className="list-disc">Direct listings can be canceled at any time, (unless the listing has already been sold).</li>
            </ul>
          
          </AlertDialogDescription>
        </AlertDialogHeader>
        <Web3Button
          contractAddress={NFT_MARKETPLACE}
          action={async () => {
            await submitCancelRequest();
          }}
          >Cancel {listings && listings[0] ? "Listing" : auctionListing && auctionListing[0] ? "Auction" : null}</Web3Button>
      </AlertDialogContent>
    </AlertDialog>
  )
}
