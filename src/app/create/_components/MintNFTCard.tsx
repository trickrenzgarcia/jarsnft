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
import { cn, ipfsToCfIpfs, shortenFileName, truncate } from "@/lib/utils";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import {
  useAddress,
  useContract,
  useMintNFT,
  useSDK,
} from "@thirdweb-dev/react";
import {
  Dropdown,
  Link,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { Button } from "@/components/ui/button";
import { Check, ChevronsUpDown, PlusIcon } from "lucide-react";
import { RxDashboard } from "react-icons/rx";
import { jars } from "@/lib/core/api";
import { ContractForOwner } from "@/lib/core/types";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useUserContext } from "@/components/(providers)";
import Image from "next/image";
import { useRouter } from "next/navigation";

const mintSchema = z.object({
  collection: z.string().min(1),
});

type FormMintNft = z.infer<typeof mintSchema>;

export default function MintNFTCard() {
  const router = useRouter();
  const { user, isLoading, isLoggedIn } = useUserContext();
  // const { contract } = useContract();
  // const { } = useMintNFT(contract);
  const [contracts, setContracts] = useState<ContractForOwner[]>([]);
  const [open, setOpen] = useState(false);
  const [selectedContract, setSelectedContract] = useState<
    ContractForOwner | undefined
  >(undefined);

  useEffect(() => {
    const fetchCollections = async () => {
      if (user) {
        const collections = await jars.getContractsForOwner(user.address);
        setContracts(collections.contracts);
      }
    };
    fetchCollections();
  }, [user]);

  const form = useForm<FormMintNft>({
    resolver: zodResolver(mintSchema),
    defaultValues: {},
  });

  const submitMintNft = async (data: FormMintNft) => {
    console.log("Minting NFT", data);
    console.log("Collection", contracts);
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
            <FormField
              control={form.control}
              name="collection"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Choose a collection</FormLabel>
                  <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          role="combobox"
                          variant="outline"
                          className="flex h-fit w-[384px] min-w-[300px] items-center justify-start gap-3 md:w-[420px] lg:w-[500px] xl:w-[600px]"
                        >
                          {selectedContract ? (
                            <>
                              <div className="relative flex h-[60px] w-[60px] items-center justify-center rounded-md bg-muted">
                                <Image
                                  src={ipfsToCfIpfs(
                                    selectedContract.image.originalUrl,
                                  )}
                                  fill
                                  style={{ objectFit: "cover" }}
                                  alt={selectedContract.name}
                                  className="absolute h-[60px] w-[60px] rounded-md"
                                />
                              </div>
                              <div className="flex flex-col items-start">
                                <h2 className="text-medium">
                                  {truncate(selectedContract.name, 26)}
                                </h2>
                                <h3 className="text-xs font-light text-foreground">
                                  {selectedContract.tokenType}
                                </h3>
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="flex h-[60px] w-[60px] items-center justify-center rounded-md bg-muted">
                                <RxDashboard className="h-[24px] w-[24px]" />
                              </div>
                              <div className="flex flex-col items-start">
                                <h2 className="text-medium">
                                  Choose a collection
                                </h2>
                              </div>
                            </>
                          )}
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-[384px] min-w-[300px] items-center justify-start gap-3 bg-background md:w-[420px] lg:w-[500px] xl:w-[600px]">
                      {contracts.map((contract) => (
                        <Button
                          variant="ghost"
                          className="flex h-fit w-full justify-start gap-3"
                          onClick={() => {
                            form.setValue("collection", contract.address);
                            setSelectedContract(contract);
                            setOpen(false);
                          }}
                        >
                          <div className="relative flex h-[60px] w-[60px] rounded-md bg-muted">
                            <Image
                              src={ipfsToCfIpfs(contract.image.originalUrl)}
                              alt={contract.name}
                              style={{ objectFit: "cover" }}
                              fill
                              className="absolute h-24 w-24 rounded-md"
                            />
                          </div>
                          <div className="flex flex-col items-start">
                            <h2 className="text-medium">
                              {truncate(contract.name, 26)}
                            </h2>
                            <h3 className="text-xs font-light text-foreground">
                              {contract.tokenType}
                            </h3>
                          </div>
                        </Button>
                      ))}
                      <Button
                        variant="ghost"
                        className="flex h-fit w-full justify-start gap-3"
                        onClick={() => {
                          router.push("/create/deploy-contract");
                          setOpen(false);
                        }}
                      >
                        <div className="flex h-[60px] w-[60px] items-center justify-center rounded-md bg-muted">
                          <PlusIcon className="h-[24px] w-[24px]" />
                        </div>
                        <div className="flex flex-col items-start">
                          <h2 className="text-medium">
                            Create a new collection
                          </h2>
                        </div>
                      </Button>
                    </PopoverContent>
                  </Popover>
                </FormItem>
              )}
            />

            <Button type="submit">Mint</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
