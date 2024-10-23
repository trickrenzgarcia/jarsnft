"use client";

import { NFT_MARKETPLACE } from "@/lib/constant";
import { Web3Button, useCreateAuctionListing } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { useRouter } from "next/navigation";
import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { addDays, format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { LoginWelcomeScreen } from "@/components/(interfaces)";
import { createTxHash } from "@/actions/createTxHash";
import { useContractContext, useMarketPlaceContext, useNFTContext } from '@/components/hooks/use-context';

type CreateAuctionProps = {
  sellState: "idle" | "confirmation" | "success";
  setSellState: React.Dispatch<React.SetStateAction<"idle" | "confirmation" | "success">>;
};

const AuctionFormSchema = z
  .object({
    nftContractAddress: z.string().refine((value) => ethers.utils.isAddress(value), {
      message: "Invalid Address",
    }),
    tokenId: z.string().min(1),
    startTimestamp: z.date(),
    endTimestamp: z.date(),
    floorPrice: z
      .string()
      .min(1, { message: "Minimum bid price is required" })
      .refine((value) => parseFloat(value) > 0, {
        message: "Minimum bid price must be greater than 0.",
      }),
    buyoutPrice: z
      .string()
      .min(1, { message: "Buyout price is required" })
      .refine((value) => parseFloat(value) > 0, {
        message: "Buyout price must be greater than 0.",
      }),
  })
  .refine((data) => data.endTimestamp > data.startTimestamp, {
    message: "Must later than start.",
    path: ["endTimestamp"], // set the path of the error
  });

export default function CreateAuction({ sellState, setSellState }: CreateAuctionProps) {
  const router = useRouter();
  const { contract } = useContractContext()
  const { marketPlaceContract } = useMarketPlaceContext()
  const { nft, address, tokenId } = useNFTContext()

  const { mutateAsync: createAuctionListing } = useCreateAuctionListing(marketPlaceContract);

  const form = useForm<z.infer<typeof AuctionFormSchema>>({
    resolver: zodResolver(AuctionFormSchema),
    defaultValues: {
      nftContractAddress: address,
      tokenId: tokenId,
      startTimestamp: new Date(),
      endTimestamp: new Date(),
      floorPrice: "0",
      buyoutPrice: "0",
    },
  });

  async function checkAndProvideApproval() {
    const hasApproval = await contract?.call("isApprovedForAll", [nft?.owner, NFT_MARKETPLACE]);

    if (!hasApproval) {
      const txResult = await contract?.call("setApprovalForAll", [NFT_MARKETPLACE, true]);

      if (txResult) {
        console.log("Approval provided");
      }
    }

    return true;
  }

  async function handleOnSubmit(data: z.infer<typeof AuctionFormSchema>) {
    setSellState("confirmation");
    await checkAndProvideApproval();
    const txResult = await createAuctionListing({
      assetContractAddress: data.nftContractAddress,
      tokenId: data.tokenId,
      buyoutBidAmount: data.buyoutPrice,
      minimumBidAmount: data.floorPrice,
      startTimestamp: new Date(data.startTimestamp),
      endTimestamp: new Date(data.endTimestamp),
    })
      .then(async (data) => {
        await createTxHash("NewAuction", data.receipt.transactionHash);
        // success state
        setSellState("success");
        toast.success("Success!", {
          description: "Your NFT has been listed to the marketplace.",
          position: "bottom-right",
          duration: 2000,
          onAutoClose(toast) {
            setSellState("idle");
            router.refresh();
          },
        });
      })
      .catch((e: Error) => {
        // error state
        setSellState("idle");
        if (e.message.includes("Reason: missing revert data in call exception; Transaction reverted without a reason string")) {
          toast.error("Failed!", {
            description: `Insufficient funds for gas.`,
            position: "bottom-right",
          });
        } else if (e.message.includes("Reason: user rejected transaction")) {
          toast.error("Failed!", {
            description: "The user denied the transaction or the transaction failed. Please try again.",
            position: "bottom-right",
          });
        }
      });

    return txResult;
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const invalidChars = ["+", "-", "e", "E"];
    if (invalidChars.includes(event.key)) {
      event.preventDefault();
    }
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    const paste = event.clipboardData.getData("text");
    if (/[eE\+\-\*\/]/.test(paste)) {
      event.preventDefault();
    }
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleOnSubmit)}>
          <div className="mb-5 flex justify-between">
            <FormField
              control={form.control}
              name="startTimestamp"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Listing starts on</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn("w-[200px] pl-3 text-left font-normal", !field.value && "text-muted-foreground")}
                          disabled={sellState != "idle"}
                        >
                          {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => {
                          const today = new Date();
                          today.setHours(0, 0, 0, 0);
                          return date < today;
                        }}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="endTimestamp"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Listing ends on</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn("w-[200px] pl-3 text-left font-normal", !field.value && "text-muted-foreground")}
                          disabled={sellState != "idle"}
                        >
                          {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => {
                          const startsOn = form.getValues("startTimestamp");
                          return date < startsOn;
                        }}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="floorPrice"
            render={({ field }) => (
              <FormItem className="mb-5 flex flex-col">
                <FormLabel>Start bid from</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="0.0 MATIC"
                    {...field}
                    onKeyDown={handleKeyDown}
                    onPaste={handlePaste}
                    className="input-class"
                    disabled={sellState != "idle"}
                  />
                </FormControl>
                <FormMessage className="text-red-600" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="buyoutPrice"
            render={({ field }) => (
              <FormItem className="mb-5 flex flex-col">
                <FormLabel>Buyout price</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="0.0 MATIC"
                    {...field}
                    onKeyDown={handleKeyDown}
                    onPaste={handlePaste}
                    className="input-class"
                    disabled={sellState != "idle"}
                  />
                </FormControl>
                <FormMessage className="text-red-600" />
              </FormItem>
            )}
          />

          <Web3Button
            contractAddress={NFT_MARKETPLACE}
            action={async () => {
              await form.handleSubmit(handleOnSubmit)();
            }}
            onSuccess={(txResult) => {
              console.log("Success", txResult);
            }}
            style={{
              width: "100%",
              fontSize: "14px",
            }}
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
            CONFIRM AND SELL
          </Web3Button>
        </form>
      </Form>
    </div>
  );
}
