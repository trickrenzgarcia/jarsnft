"use client";

import { BigNumber, ethers } from "ethers"; // ethers v5^

import { TxResult } from "@/types/tx";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { useDropzone } from "react-dropzone";
import React, { useState, useCallback, useEffect, useRef, useMemo } from "react";
import { cn, ipfsToHttps, shortenFileName, truncate } from "@/lib/utils";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useAddress, useContract, useMintNFT, useSDK } from "@thirdweb-dev/react";
import { Dropdown, Link, DropdownTrigger, DropdownMenu, DropdownItem, Accordion, AccordionItem, Spinner } from "@nextui-org/react";
import { Button } from "@/components/ui/button";
import { Check, ChevronsUpDown, Loader2, PlusIcon } from "lucide-react";
import { RxDashboard } from "react-icons/rx";
import { JarsAPI } from "@/lib/api";
import { ContractForOwner, JarsContract, NFTCollection } from "@/types";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useUserContext } from "@/components/(providers)";
import Image from "next/image";
import { Image as NextUIImage } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";
import { sdk } from "@/lib/sdk";
import { Textarea } from "@/components/ui/textarea";
import { ACCEPTED_IMAGE_TYPES } from "@/lib/constant";
import { MdPermMedia } from "react-icons/md";
import {
  AlertDialogTrigger,
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { IoCheckmarkCircle } from "react-icons/io5";
import { MdOutlineNearbyError } from "react-icons/md";
import { FiShare } from "react-icons/fi";
import { TooltipMsg } from "@/components/(interfaces)";
import { createTxHash } from "@/actions/createTxHash";
import useCollectionsByOwner from '@/hooks/useCollectionsByOwner';
import NoConnectedWallet from '../../me/_components/NoConnectedWallet';

const mintSchema = z.object({
  collection: z.string().refine((value) => ethers.utils.isAddress(value), {
    message: "Invalid collection address.",
  }),
  name: z.string().min(1),
  description: z.string().optional(),
  image: z.instanceof(File, {
    message: "Required field.",
  }),
  animation_url: z.string().optional(),
  external_url: z.string().optional(),
  background_color: z.string().optional(),
  attributes: z
    .array(
      z.object({
        trait_type: z.any().optional(),
        value: z.any().optional(),
      }),
    )
    .optional(),
  properties: z
    .array(
      z.object({
        key: z.string().optional(),
        value: z.string().optional(),
      }),
    )
    .optional(),
});

type FormMintNft = z.infer<typeof mintSchema>;

export default function MintNFTCard() {
  const router = useRouter();
  const { user, isLoading: isLoadingUser, isLoggedIn } = useUserContext();
  const address = useAddress();
  const { collections, isLoading: isLoadingCollections, isError: isErrorCollections, errorMessage } = useCollectionsByOwner();
  const [open, setOpen] = useState(false);
  const [uploadedMedia, setUploadedMedia] = useState<string | null>(null);
  const [uploadedFileName, setUploadedFileName] = useState<string>("");
  const [imageFileUrl, setImageFileUrl] = useState<string>("");
  const [selectedContract, setSelectedContract] = useState<NFTCollection | undefined>();
  const [attributes, setAttributes] = useState<{ trait_type: string; value: string }[]>([{ trait_type: "", value: "" }]);
  const [mintState, setMintState] = useState<{
    state: "idle" | "loading" | "error" | "process" | "success";
    message: string;
  }>({
    state: "idle",
    message: "idle",
  });
  const [nftTokenId, setNftTokenId] = useState<string>("");
  const ref = useRef<HTMLButtonElement>(null);
  const { contract } = useContract(selectedContract?.contract);
  const { mutateAsync: mintNft, isLoading: mintLoading, error: mintError } = useMintNFT(contract);
  const form = useForm<FormMintNft>({
    resolver: zodResolver(mintSchema),
    defaultValues: {
      collection: "",
      name: "",
      image: undefined,
      description: "",
      animation_url: "",
      external_url: "",
      background_color: "",
      attributes: [],
      properties: [],
    },
  });

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0 && acceptedFiles[0].type.startsWith("image/")) {
        const file = acceptedFiles[0];

        if (!ACCEPTED_IMAGE_TYPES.includes(file.type)) {
          toast.error("Invalid image type. Please upload a valid image file.", {
            position: "top-center",
            closeButton: true,
          });
          return;
        }

        const reader = new FileReader();
        reader.onload = (e: ProgressEvent<FileReader>) => {
          setUploadedMedia(e.target?.result?.toString() || "");
          form.setValue("image", file);
          const fileURL = URL.createObjectURL(file);
          setImageFileUrl(fileURL);
        };
        reader.readAsDataURL(file);
        setUploadedFileName(shortenFileName(file.name));
      } else {
        toast.error("Invalid file type. Please upload an image file.", {
          position: "top-center",
          closeButton: true,
        });
      }
    },
    [form],
  );

  const { getInputProps, getRootProps, isDragActive } = useDropzone({ onDrop });

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        setUploadedMedia(e.target?.result?.toString() || "");
        form.setValue("image", file);
        const fileURL = URL.createObjectURL(file);
        setImageFileUrl(fileURL);
      };

      reader.readAsDataURL(file);
      setUploadedFileName(shortenFileName(file.name));
    } else {
      toast.error("Invalid file type. Please upload an image file.", {
        position: "top-center",
        closeButton: true,
      });
    }
  };

  const submitMintNft = async (data: FormMintNft) => {
    if (mintState.state === "idle") {
      ref.current?.click();
    }

    const imageNft = new File([data.image], data.image.name, {
      type: data.image.type,
    });
    if (data.attributes) {
      data.attributes = data.attributes.filter((attr) => attr.trait_type && attr.value);
    }
    setMintState({ state: "loading", message: "Accepting transaction" });
    mintNft(
      {
        metadata: {
          name: data.name,
          image: imageNft,
          description: data.description,
          animation_url: data.animation_url,
          external_url: data.external_url,
          background_color: data.background_color,
          attributes: data.attributes,
          properties: data.properties,
        },
        to: user.address,
      },
      {
        async onSuccess(data: TxResult, variables, context) {
          setNftTokenId(data.id.toString());
          setMintState({
            state: "success",
            message: "NFT minted successfully",
          });
          await createTxHash("TokensMinted", data.receipt.transactionHash);
        },
      },
    )
      .then((settled) => {
        setMintState({ state: "success", message: "NFT minted successfully" });
      })
      .catch((error) => {
        setMintState({ state: "error", message: error.message });
      });
  };

  if(!address) {
    return <NoConnectedWallet />
  }

  return (
    <Card className="w-full overflow-hidden p-8">
      <CardHeader className="p-0 pb-4">
        <CardTitle>Create an NFT</CardTitle>
        <CardDescription>Mint your NFT by uploading an image and entering the metadata.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(submitMintNft)} className="space-y-4">
            <FormField
              control={form.control}
              name="collection"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-md font-semibold">
                    <span className="text-red-400">*</span>Choose a collection
                  </FormLabel>
                  <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button role="combobox" variant="outline" className="flex h-fit w-full min-w-[300px] items-center justify-start gap-3">
                          {selectedContract ? (
                            <>
                              <div className="relative flex h-[60px] w-[60px] items-center justify-center rounded-md bg-muted">
                                <Image
                                  src={selectedContract.image.replace("ipfs://", process.env.NEXT_PUBLIC_IPFS_GATEWAY) || ""}
                                  fill
                                  style={{ objectFit: "cover" }}
                                  alt={selectedContract.name}
                                  className="absolute h-[60px] w-[60px] rounded-md"
                                />
                              </div>
                              <div className="flex flex-col items-center">
                                <h2 className="text-medium">{truncate(selectedContract.name, 26)}</h2>
                                <h3 className="text-xs font-light text-foreground">ERC-721</h3>
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="flex h-[60px] w-[60px] items-center justify-center rounded-md bg-muted">
                                <RxDashboard className="h-[24px] w-[24px]" />
                              </div>
                              <div className="flex flex-col items-start">
                                <h2 className="text-medium">Choose a collection</h2>
                              </div>
                            </>
                          )}
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="max-h-[400px] w-[384px] min-w-[300px] items-center justify-start gap-3 overflow-y-scroll scroll-smooth bg-background md:w-[420px] lg:w-[500px] xl:w-[600px]">
                      {isLoadingCollections && (
                        <Button variant="ghost" className="flex h-fit w-full justify-start gap-3">
                          <Skeleton className="h-[60px] w-[60px] rounded-md" />
                          <div className="flex flex-col items-start gap-1">
                            <Skeleton className="h-5 w-28" />
                            <Skeleton className="h-4 w-20" />
                          </div>
                        </Button>
                      )}
                      {!isLoadingCollections && (
                        <Button
                          variant="ghost"
                          className="flex h-fit w-full justify-start gap-3"
                          onClick={() => {
                            router.push("/create/deploy-contract");
                            setOpen(false);
                          }}
                        >
                          <div className="flex h-[60px] w-[60px] select-none items-center justify-center rounded-md bg-muted">
                            <PlusIcon className="h-[24px] w-[24px]" />
                          </div>
                          <div className="flex select-none flex-col items-start">
                            <h2 className="text-medium">Create a new collection</h2>
                          </div>
                        </Button>
                      )}
                      {collections && collections.map((col, i) => (
                        <Button
                          variant="ghost"
                          className="flex h-fit w-full justify-start gap-3"
                          onClick={() => {
                            form.setValue("collection", col.contract);
                            setSelectedContract(collections[i]);
                            setOpen(false);
                          }}
                          key={i}
                        >
                          <div className="relative flex h-[60px] w-[60px] select-none rounded-md bg-muted">
                            <Image
                              src={ipfsToHttps(col.image) || ""}
                              alt={col.name}
                              style={{ objectFit: "cover" }}
                              fill
                              className="absolute h-24 w-24 rounded-md"
                            />
                          </div>
                          <div className="flex select-none flex-col items-start">
                            <h2 className="text-medium">{truncate(col.name, 26)}</h2>
                            <h3 className="text-xs font-light text-foreground">POLYGON [ERC-721]</h3>
                          </div>
                        </Button>
                      ))}
                    </PopoverContent>
                  </Popover>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-md flex items-center gap-1 font-semibold">
                    <span className="text-red-400">*</span>Media
                  </FormLabel>
                  <FormControl>
                    <>
                      <Input
                        {...getInputProps()}
                        {...form.register("image")}
                        id="media"
                        className="h-[100px] w-[100px]"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        style={{ display: "none" }}
                      />
                      <div className={cn("flex h-fit max-w-[600px] gap-2")}>
                        <div
                          className={cn(
                            "flex h-[150px] w-[150px] cursor-pointer items-center justify-center rounded-md bg-muted lg:h-[250px] lg:w-[250px]",
                            uploadedMedia && "border bg-background hover:border-accent",
                          )}
                          {...getRootProps()}
                          onClick={(e) => {
                            e.preventDefault();
                            const fileInput = document.getElementById("media") as HTMLInputElement;
                            fileInput?.click();
                          }}
                        >
                          {uploadedMedia ? (
                            <NextUIImage
                              isBlurred
                              src={uploadedMedia || ""}
                              alt={uploadedFileName}
                              style={{ objectFit: "cover" }}
                              className="z-0 h-full max-h-[150px] w-full max-w-[150px] rounded-md lg:max-h-[250px] lg:max-w-[250px]"
                            />
                          ) : (
                            <div className="flex h-[150px] max-h-[150px] w-[150px] max-w-[150px] items-center justify-center rounded-md border bg-muted hover:border-accent lg:h-[250px] lg:max-h-[250px] lg:w-[250px] lg:max-w-[250px]">
                              <MdPermMedia className="h-6 w-6 lg:h-8 lg:w-8" />
                            </div>
                          )}
                        </div>
                        <div className="flex flex-col self-center">
                          <h2 className="text-sm font-bold">{shortenFileName(uploadedFileName) || "Drag and drop or click to upload"}</h2>
                          {!uploadedFileName && <p className="text-xs">Recommended size: 350 x 350. File types: JPG, PNG, SVG, or GIF</p>}
                        </div>
                      </div>
                    </>
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-md flex items-center gap-1 font-semibold">
                    <span className="text-red-400">*</span>Name
                  </FormLabel>
                  <FormControl>
                    <Input {...field} className="flex h-fit min-w-[300px]" />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-md flex items-center gap-1 font-semibold">Description</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      id="description"
                      placeholder="Enter the description of your NFT (Optional)"
                      className="flex h-fit min-w-[300px]"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="attributes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-md flex items-center gap-1 font-semibold">Properties</FormLabel>
                  <FormControl>
                    <div className="flex flex-col">
                      {attributes.map((attribute, i) => (
                        <div key={i} className="flex items-center justify-between">
                          <div className="flex flex-col">
                            <Input
                              {...form.register(`attributes.${i}.trait_type` as const)}
                              className="my-4 max-w-[300px]"
                              placeholder="trait_type"
                            />
                            <Input {...form.register(`attributes.${i}.value` as const)} className="my-4 max-w-[300px]" placeholder="value" />
                          </div>
                          <Button
                            variant="destructive"
                            type="button"
                            onClick={() => setAttributes(attributes.filter((_, index) => index !== i))}
                            className=""
                          >
                            X
                          </Button>
                        </div>
                      ))}
                      <Button
                        className="mt-4 min-w-[300px] self-center"
                        variant="outline"
                        type="button"
                        onClick={() => setAttributes([...attributes, { trait_type: "", value: "" }])}
                      >
                        Add Property
                      </Button>
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="flex justify-center pt-8">
              <Button type="submit" className="my-4 min-w-[300px]">
                Mint
              </Button>
            </div>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button ref={ref} className="hidden">
                  Alert Mint
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <div className="flex flex-col gap-5">
                    <section className="flex items-center gap-4">
                      <div className="flex h-[100px] w-[100px] items-center justify-center rounded-md border bg-muted">
                        <NextUIImage
                          src={imageFileUrl}
                          isBlurred
                          width={100}
                          height={100}
                          alt="jars"
                          className="z-0 h-full max-h-[100px] w-full max-w-[100px] rounded-md"
                        />
                        {mintState.state === "loading" && (
                          <div className="absolute flex h-full max-h-[100px] w-full max-w-[100px] items-center justify-center rounded-md bg-black/50">
                            <Spinner size="sm" />
                          </div>
                        )}
                      </div>
                      <div className="flex flex-col items-start">
                        <h2 className="text-lg font-bold">{form.getValues("name").toString()}</h2>
                        <h2 className="text-sm font-semibold">ERC-721</h2>
                        <h3 className="text-sm font-semibold text-blue-600 text-foreground">{selectedContract?.name}</h3>
                      </div>
                    </section>
                    <section>
                      <Card>
                        <CardHeader>
                          <CardTitle>
                            {mintState.state === "loading" ? "Minting NFT" : mintState.state === "success" ? "NFT Minted" : "Error"}
                          </CardTitle>
                          <CardDescription>
                            <div className="flex w-full flex-col">
                              <p className="flex items-center gap-1 text-sm">
                                {mintState.state === "loading" ? (
                                  <Loader2 className="animate-spin" />
                                ) : mintState.state === "process" || mintState.state === "success" ? (
                                  <IoCheckmarkCircle className="text-success" />
                                ) : (
                                  mintState.state === "error" && <MdOutlineNearbyError className="text-danger" />
                                )}{" "}
                                Accepting transaction.
                              </p>
                              <p className="flex items-center gap-1 text-sm">
                                {mintState.state === "process" ? (
                                  <Loader2 className="animate-spin" />
                                ) : mintState.state === "success" ? (
                                  <IoCheckmarkCircle className="text-success" />
                                ) : (
                                  mintState.state === "error" && <MdOutlineNearbyError className="text-danger" />
                                )}{" "}
                                Nft minted {mintState.state === "success" ? "successfully" : mintState.state === "error" ? "failed" : "processing"}.
                              </p>
                            </div>
                          </CardDescription>
                        </CardHeader>
                        <CardContent></CardContent>
                      </Card>
                    </section>
                  </div>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  {mintState.state === "error" && (
                    <>
                      <Button
                        onClick={(e) => {
                          e.preventDefault();
                          form.handleSubmit(submitMintNft)();
                        }}
                      >
                        Try Again
                      </Button>
                      <AlertDialogCancel
                        onClick={() => {
                          setMintState({ state: "idle", message: "idle" });
                        }}
                      >
                        Cancel
                      </AlertDialogCancel>
                    </>
                  )}

                  {mintState.state === "success" && (
                    <div className="flex w-full justify-between">
                      <TooltipMsg message="Share">
                        <Button variant="ghost" >
                          <FiShare />
                        </Button>
                      </TooltipMsg>
                      <div className="flex gap-4">
                        <AlertDialogCancel
                          onClick={(e) => {
                            setMintState({ state: "idle", message: "idle" });
                            setAttributes([{ trait_type: "", value: "" }]);
                            setSelectedContract(undefined);
                            setImageFileUrl("");
                            setUploadedMedia(null);
                            setUploadedFileName("");
                            setOpen(false);
                            form.reset();
                          }}
                        >
                          Create more
                        </AlertDialogCancel>
                        <Button
                          variant="default"
                          className="bg-blue-400"
                          onClick={() => {
                            router.push(`/collection/${selectedContract?.contract}`); // ${nftTokenId}
                          }}
                        >
                          Go to NFT
                        </Button>
                      </div>
                    </div>
                  )}
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
