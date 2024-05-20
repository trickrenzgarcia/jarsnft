"use client"

import { NFT_MARKETPLACE } from '@/types/constant';
import { useContract, useCreateDirectListing } from '@thirdweb-dev/react';
import React, { useState } from 'react'
import { useNftContext } from './nft-provider';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ethers } from 'ethers';

import { addDays, format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

type CreateDirectListingProps = {
  sellState: 'idle' | 'confirmation' | 'success';
  setSellState: React.Dispatch<React.SetStateAction<"idle" | "confirmation" | "success">>;
}

const DirectListingFormSchema = z.object({
  nftContractAddress: z.string().refine((value) => ethers.utils.isAddress(value), {
    message: "Invalid Address"
  }),
  tokenId: z.string().min(1),
  price: z.string().min(1),
  startTimestamp: z.date(),
  endTimestamp: z.date()
}).refine(data => data.endTimestamp > data.startTimestamp, {
  message: "Must later than start.",
  path: ["endTimestamp"] // set the path of the error
})

export default function CreateDirectListing({ sellState, setSellState }: CreateDirectListingProps) {
  const { nft, marketPlaceContract, collection, contractAddress, tokenId } = useNftContext();

  const { contract: nftCollection } = useContract(contractAddress);

  const { mutateAsync: createDirectListing } = useCreateDirectListing(marketPlaceContract);

  const form = useForm<z.infer<typeof DirectListingFormSchema>>({
    resolver: zodResolver(DirectListingFormSchema),
    defaultValues: {
      nftContractAddress: contractAddress,
      tokenId: nft?.metadata.id,
      price: "0",
      startTimestamp: new Date(),
      endTimestamp: addDays(new Date(), 1)
    }
  });

  function addDays(date: Date, days: number) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + 1);
    return newDate;
  }

  async function checkAndProvideApproval() {
    const hasApproval = await nftCollection?.call(
      "isApprovedForAll",
      [nft?.owner, NFT_MARKETPLACE]
    );

    if(!hasApproval) {
      const txResult = await nftCollection?.call(
        "setApprovalForAll",
        [NFT_MARKETPLACE, true]
      );

      if(txResult) {
        console.log("Approval provided")
      }
    }

    return true;
  }

  async function handleOnSubmit(data: z.infer<typeof DirectListingFormSchema>) {

    console.log(data.startTimestamp);
    // await checkAndProvideApproval();
    // const txResult = await createDirectListing({
    //   assetContractAddress: data.nftContractAddress,
    //   tokenId: data.tokenId,
    //   pricePerToken: data.price,
    //   startTimestamp: new Date(data.startTimestamp),
    //   endTimestamp: new Date(data.endTimestamp)
    // });

    // return txResult;
  }


  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleOnSubmit)}>

          <div className='flex justify-between'>
            <FormField
              control={form.control}
              name="startTimestamp"
              render={({ field }) => (
                <FormItem className='flex flex-col'>
                  <FormLabel>Listing starts on</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[200px] pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
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
                          today.setHours(0,0,0,0);
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
                <FormItem className='flex flex-col'>
                  <FormLabel>Listing ends on</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[200px] pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
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
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          

          <FormField 
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem className='flex flex-col'>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input placeholder="0.0" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
      
    </div>
  )
}
