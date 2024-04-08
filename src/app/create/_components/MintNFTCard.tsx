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
import { set, z } from "zod";
import { Input } from "@/components/ui/input";
import { useDropzone } from "react-dropzone";
import React, {
  useState,
  useCallback,
  useEffect,
  useRef,
  useMemo,
} from "react";
import { cn, shortenFileName } from "@/lib/utils";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useContract, useMintNFT, useSDK } from "@thirdweb-dev/react";
import {
  Dropdown,
  Link,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { jars } from "@/lib/core/api";
import { AlchemyContractsForOwner } from "@/lib/core/types";

const mintSchema = z.object({});

type FormMintNft = z.infer<typeof mintSchema>;

export default function MintNFTCard() {
  // const { contract } = useContract();
  // const { } = useMintNFT(contract);
  const [collections, setCollections] = useState<AlchemyContractsForOwner>();

  useEffect(() => {
    const fetchCollections = async () => {
      const collections = await jars.getContractsForOwner(
        "0x18a583Eb4D800ACc57067274e6b496db7Bd7E1Fd",
      );
      setCollections(collections);
    };

    fetchCollections();
  }, []);

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
          <form
            onSubmit={form.handleSubmit(submitMintNft)}
            className="flex flex-col items-center"
          >
            <Dropdown backdrop="blur">
              <DropdownTrigger>
                <Button
                  variant="outline"
                  className="flex h-fit w-[384px] min-w-[300px] items-center justify-start gap-3 md:w-[420px] lg:w-[500px] xl:w-[600px]"
                >
                  <div className="flex h-[60px] w-[60px] items-center justify-center rounded-md bg-muted">
                    <PlusIcon className="h-[24px] w-[24px]" />
                  </div>
                  <div className="flex flex-col items-start">
                    <h2 className="text-medium">Choose a collection</h2>
                    <h3 className="text-xs text-foreground">
                      Sepolia | ERC-721
                    </h3>
                  </div>
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                variant="faded"
                aria-label="Static Actions"
                className="w-[384px] min-w-[300px] md:w-[420px] lg:w-[500px] xl:w-[600px]"
              >
                <DropdownItem key="new">New file</DropdownItem>
                <DropdownItem key="copy">Copy link</DropdownItem>
                <DropdownItem key="edit">Edit file</DropdownItem>
                <DropdownItem
                  key="delete"
                  className="text-danger"
                  color="danger"
                >
                  Delete file
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Button type="submit">Mint</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
