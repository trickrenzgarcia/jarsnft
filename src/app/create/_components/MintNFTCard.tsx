"use client";

import { ethers } from "ethers"; // ethers v5^

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { useDropzone } from "react-dropzone";
import React, { useState, useCallback, useEffect, useRef } from "react";
import { cn, shortenFileName } from "@/lib/utils";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useSDK } from "@thirdweb-dev/react";
import { Button } from "@/components/ui/button";

const mintSchema = z.object({});

type FormMintNft = z.infer<typeof mintSchema>;

export default function MintNFTCard() {
  const sdk = useSDK();

  const form = useForm<FormMintNft>({
    resolver: zodResolver(mintSchema),
    defaultValues: {},
  });

  const submitMintNft = async (data: FormMintNft) => {
    console.log("Minting NFT", data);
  };

  return (
    <Card className="w-full max-w-[800px]">
      <CardHeader>
        <CardTitle>Mint</CardTitle>
        <CardDescription>
          Mint your NFT by uploading an image and entering the metadata.
        </CardDescription>
      </CardHeader>
      <CardContent className="px-5">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(submitMintNft)}>
            <Button type="submit">Mint</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
