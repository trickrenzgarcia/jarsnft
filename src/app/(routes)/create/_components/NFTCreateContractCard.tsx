"use client";

import { ethers } from "ethers"; // ethers v5^

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { useDropzone } from "react-dropzone";
import React, { useState, useCallback, useEffect, useRef } from "react";
import { FaRegImage } from "react-icons/fa";
import { cn, getShortenedURLParam, shortenFileName } from "@/lib/utils";
import { ImSpinner9 } from "react-icons/im"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { ACCEPTED_IMAGE_TYPES } from "@/lib/constant";
import { FaExclamationCircle } from "react-icons/fa";
import { Textarea } from "@/components/ui/textarea";
import { useSDK } from "@thirdweb-dev/react";
import { RadioGroup } from "@nextui-org/react";
import { Separator } from "@/components/ui/separator";
import { FaCheck } from "react-icons/fa";
import { ProfileQuery } from "@/types/users";
import { createContract } from "../actions";
import { NFTCollection } from "@/types";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Category from "./Category";
import { Loader2 } from 'lucide-react';

type NFTCreateContractCardProps = {
  user: ProfileQuery;
  title: string;
  description: string;
};

const ethAddressSchema = z
  .string()
  .refine((value) => ethers.utils.isAddress(value), {
    message: "Input is not a valid address or ENS name.",
  });

const ContractSchema = z.object({
  name: z
    .string()
    .min(1, "Required field.")
    .max(100, "Name must be less than 100 characters."),
  image: z.instanceof(File, {
    message: "Required field.",
  }),
  symbol: z.string().optional(),
  description: z.string().optional(),
  app_uri: z.string().optional(),
  external_link: z.string().optional(),
  fee_recipient: ethAddressSchema,
  seller_fee_basis_points: z
    .string()
    .regex(
      /^(100(\.0{1,3})?|0+(\.\d{1,3})?|([1-9]?\d(\.\d{1,3})?))$/,
      "Invalid percentage.",
    ),
  primary_sale_recipient: ethAddressSchema,
  trusted_forwarders: z.array(z.string()).optional(),
  category: z.enum(["art", "photography", "pfp"], {
    required_error: "You need to select an nft category."
  }),
});

type FormContract = z.infer<typeof ContractSchema>;

export default function NFTCreateContractCard({
  user: { user, isLoading, isLoggedIn },
  title,
  description,
}: NFTCreateContractCardProps) {
  const sdk = useSDK();
  const router = useRouter();
  const [uploadImage, setUploadImage] = useState<string | null>(null);
  const [fileName, setFileName] = useState("");
  const [contractState, setContractState] = useState<
    "idle" | "ongoing" | "accepted" | "completed"
  >("idle");
  const [contractError, setContractError] = useState<boolean>(false);
  const [contractAddress, setContractAddress] = useState<string | undefined>(
    "",
  );
  const [createdCollection, setCreatedCollection] = useState<
    NFTCollection | undefined
  >(undefined);
  const ref = useRef<HTMLButtonElement>(null);

  const form = useForm<FormContract>({
    resolver: zodResolver(ContractSchema),
    defaultValues: {
      name: "",
      image: undefined,
      symbol: "",
      description: "",
      app_uri: "",
      external_link: "",
      fee_recipient: user.address,
      seller_fee_basis_points: "0.00",
      primary_sale_recipient: user.address,
      trusted_forwarders: [],
    },
  });

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (
        acceptedFiles.length > 0 &&
        acceptedFiles[0].type.startsWith("image/")
      ) {
        const file = acceptedFiles[0];

        // Check MIME type
        if (!ACCEPTED_IMAGE_TYPES.includes(file.type)) {
          toast.error("Invalid file type. Please upload an image file.", {
            position: "top-center",
            closeButton: true,
          });
          return;
        }

        const reader = new FileReader();
        reader.onload = (event: ProgressEvent<FileReader>) => {
          setUploadImage(event.target?.result?.toString() || "");
          form.setValue("image", file);
        };
        reader.readAsDataURL(file);
        setFileName(file.name);
      } else {
        toast.error("Invalid file type. Please upload an image file.", {
          position: "top-center",
          closeButton: true,
        });
      }
    },
    [setUploadImage, setFileName, form],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });

  const handleImageOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const file = event.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (event: ProgressEvent<FileReader>) => {
        setUploadImage(event.target?.result?.toString() || "");
        form.setValue("image", file);
      };
      reader.readAsDataURL(file);
      setFileName(file.name);
    } else {
      toast.error("Invalid file type. Please upload an image file.", {
        position: "top-center",
        closeButton: true,
      });
    }
  };

  function handlePercentageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = e.target.value.trim(); // Trim whitespace

    // Check if the input value is empty
    if (inputValue === "") {
      return; // Do nothing if the input is empty
    }

    // Regular expression to match any character from A-Z or any special character
    const regex = /^[A-Za-z!@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]*$/;

    // Check if the input value is alphabetic or contains special characters
    if (regex.test(inputValue)) {
      e.target.value = "0.00";
      return;
    }

    // Convert the input value to a number
    const inputValueAsNumber = parseFloat(inputValue);

    // Check if the input value is a number and greater than 100.0
    if (!isNaN(inputValueAsNumber) && inputValueAsNumber > 100.0) {
      e.target.value = "100.0";
      return;
    }
  }

  const name = form.watch("name");
  const words = name.split(" ");
  const initials = words.map((word) => word.charAt(0).toUpperCase());
  const acronym = initials.join("");

  useEffect(() => {
    if (acronym.length !== 0) {
      form.setValue("symbol", acronym);
    } else {
      form.setValue("symbol", form.getValues("symbol")?.toUpperCase());
    }
  }, [acronym, form]);

  const submitCreateContract = async (data: FormContract) => {
    ref.current?.click();
    setContractState("ongoing");
    const seller_fee_basis_points: number =
      parseFloat(data.seller_fee_basis_points) * 100;
    const image = new File([data.image], data.image.name, {
      type: data.image.type,
    });
    try {
      const processContractAddress = await sdk?.deployer.deployNFTCollection({
        name: data.name,
        image: image,
        primary_sale_recipient: data.primary_sale_recipient,
        symbol: data.symbol,
        platform_fee_recipient: process.env.PLATFORM_ADDRESS,
        external_link: data.external_link,
        app_uri: "https://jarsnft.com",
        fee_recipient: data.fee_recipient,
        description: data.description,
        platform_fee_basis_points: 100,
        seller_fee_basis_points: seller_fee_basis_points,
        trusted_forwarders: undefined,
      })

      setContractError(false);

      setContractState("accepted");

      if (processContractAddress?.includes("0x")) {
        setContractAddress(processContractAddress);
        const newCollection = await createContract(
          processContractAddress,
          user.data.address,
          data.category
        );
        setContractState("completed");
        setCreatedCollection(newCollection);
        toast.success("Contract deployed successfully!", {
          position: "top-center",
          closeButton: true,
        });
      }
    } catch (error) {
      setContractState("idle");
      setContractError(true);
    }
  };

  return (
    <Card className="max-w-[640px]">
      <CardHeader>
        <CardTitle className="text-lg font-bold md:text-2xl lg:text-3xl">
          {title}
        </CardTitle>
        <CardDescription>
          {description}
          <Link
            href="/insights/what-are-smart-contracts"
            className="ml-1 text-blue-400 hover:text-blue-500"
            target="_blank"
          >
            What is contract?
          </Link>
        </CardDescription>
      </CardHeader>
      <CardContent className="px-5">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(submitCreateContract)}>
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-md flex items-center gap-1 font-semibold">
                    <span className="text-red-400">*</span>Logo Image
                  </FormLabel>
                  <FormControl>
                    <>
                      <Input
                        {...getInputProps()}
                        {...form.register("image")}
                        //ref={form.register("image").ref}
                        id="picture"
                        className="h-full w-full"
                        type="file"
                        accept="image/*"
                        onChange={handleImageOnChange}
                        style={{ display: "none" }}
                      />
                      <div
                        className={cn(
                          "flex h-[150px] cursor-pointer items-center gap-3 rounded-md border border-dashed p-5 ",
                          form.formState.errors.image
                            ? "border-solid border-red-500"
                            : "hover:border-solid dark:hover:border-gray-500",
                        )}
                        {...getRootProps()}
                        onClick={(event) => {
                          event.preventDefault();
                          const fileInput = document.getElementById(
                            "picture",
                          ) as HTMLInputElement;
                          fileInput.click();
                        }}
                      >
                        <Avatar className="h-[98px] w-[98px] rounded-md border">
                          {uploadImage ? (
                            <AvatarImage
                              className="aspect-auto"
                              src={uploadImage}
                              alt="@image_collection"
                            />
                          ) : (
                            <AvatarFallback className="h-[98px] w-[98px] rounded-md">
                              <FaRegImage />
                            </AvatarFallback>
                          )}
                        </Avatar>
                        <div className="flex flex-col">
                          <h2 className="text-sm font-bold">
                            {shortenFileName(fileName) ||
                              "Drag and drop or click to upload"}
                          </h2>
                          {!fileName && (
                            <span>
                              <p className="text-sm">
                                You may change this after deploying your
                                contract.
                              </p>
                              <p className="text-sm">
                                Recommended size: 350 x 350. File types: JPG,
                                PNG, SVG, or GIF
                              </p>
                            </span>
                          )}
                        </div>
                      </div>
                    </>
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="grid grid-cols-12 gap-3 pt-8">
              <div className="col-span-9 md:col-span-10">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-md flex items-center gap-1 font-semibold">
                        <span className="text-red-400">*</span>Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          id="name"
                          placeholder="Collection Name"
                          className={cn(
                            form.formState.errors.name && "border-red-500",
                          )}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-3 md:col-span-2">
                <FormField
                  control={form.control}
                  name="symbol"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-md flex items-center gap-1 font-semibold">
                        Symbol
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          id="symbol"
                          placeholder="(Optional)"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="pt-8">
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-md flex items-center gap-1 font-semibold">
                      Description
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        id="description"
                        placeholder="Enter the description of your NFT contract (Optional)"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-12 gap-3 pt-8">
              <div className="col-span-8 md:col-span-9">
                <FormField
                  control={form.control}
                  name="fee_recipient"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-md flex items-center gap-1 font-semibold">
                        Royalties
                      </FormLabel>
                      <FormDescription className="text-sm italic">
                        Determine the address that should receive the revenue
                        from royalties earned from secondary sales of the
                        assets.
                      </FormDescription>
                      <FormLabel className="flex items-center gap-1 font-semibold">
                        <span className="text-red-400">*</span>Recipient Address{" "}
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          id="fee_recipient"
                          placeholder="address"
                          className={cn(
                            form.formState.errors.fee_recipient &&
                              "border-red-500",
                          )}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-4 flex items-end md:col-span-3">
                <FormField
                  control={form.control}
                  name="seller_fee_basis_points"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-1 font-semibold">
                        Percentage
                      </FormLabel>
                      <FormControl>
                        <div className="flex items-center">
                          <Input
                            {...form.register("seller_fee_basis_points")}
                            id="seller_fee_basis_points"
                            placeholder="0.00"
                            maxLength={5}
                            onChange={handlePercentageChange}
                            className={cn(
                              form.formState.errors.seller_fee_basis_points &&
                                "border-red-500",
                            )}
                            onKeyDown={(e) => {
                              if (e.key === " ") {
                                e.preventDefault();
                                return;
                              }
                            }}
                          />
                          <span className="p-1">%</span>
                        </div>
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="pt-8">
              <FormField
                control={form.control}
                name="primary_sale_recipient"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-md flex items-center gap-1 font-semibold">
                      Primary Sale Recipient
                    </FormLabel>
                    <FormDescription className="text-sm italic">
                      Determine the address that should receive the revenue from
                      the primary sale of the assets.
                    </FormDescription>
                    <FormLabel className="flex items-center gap-1 font-semibold">
                      <span className="text-red-400">*</span>Recipient Address{" "}
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        id="primary_sale_recipient"
                        placeholder="address"
                        className={cn(
                          form.formState.errors.primary_sale_recipient &&
                            "border-red-500",
                        )}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div className="pt-8">
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-md flex items-center gap-1 font-semibold">
                      <span className="text-red-400">*</span>Select NFT Category
                    </FormLabel>
                        <FormControl>
                            <RadioGroup 
                            orientation="horizontal"
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >

                          <FormItem>
                            <FormControl>
                              <Category value="art">
                                Art
                              </Category>
                            </FormControl>
                          </FormItem>

                          <FormItem>
                            <FormControl>
                              <Category value="photography">
                                Photography
                              </Category>
                            </FormControl>
                          </FormItem>

                          <FormItem>
                            <FormControl>
                              <Category value="pfp">
                                Profile Picture
                              </Category>
                            </FormControl>
                          </FormItem>

                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="my-4 flex justify-center rounded-md border md:my-0 md:justify-end md:border-0">
              <div className="flex">
                <Button type="submit" className="my-2 md:my-6 w-[384px] min-w-[300px] md:w-[420px] lg:w-[500px] xl:w-[600px] ">
                  Create Collection
                </Button>
              </div>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button className="hidden" id="submitDialog" ref={ref}>
                    Open
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogDescription>
                      <div className="flex flex-col w-full">
                        <div className="relative flex items-center gap-4">
                          <div className="relative w-[120px] h-[120px] border rounded-lg">
                            <Image 
                              src={uploadImage || "/jars_muted.png"}                                                            
                              alt="Collection Image"
                              fill
                              style={{ objectFit: "cover" }}
                              className="rounded-lg"
                            />
                            {(contractState !== "completed" && contractError == false) && (
                              <div className="absolute rounded-lg w-full h-full flex items-center justify-center bg-black/45">
                              <ImSpinner9 className="animate-spin text-2xl" />   
                            </div> 
                            )}
                            
                          </div>
                          
                          <div className="flex flex-col items-start">
                            <h1>Collection: <span className="font-bold">{form.getValues("name")}</span></h1>
                            <h1>Symbol: <span className="font-bold">{form.getValues("symbol")}</span></h1>
                            <h1>Creators Fee: <span className="font-bold">{form.getValues("seller_fee_basis_points")}%</span></h1>
                          </div>
                        </div>
                        <Separator className="my-5" orientation="horizontal" />
                        {contractState === "ongoing" && (
                          <div className="w-full flex items-start justify-center">
                            <ImSpinner9 className="animate-spin" />
                            <p className="text-center">Kindly await confirmation of the transaction at your designated wallet address.</p>
                          </div>
                        )}
                        {contractError && (
                          <div className="w-full flex flex-col items-start justify-center">
                            <div className="flex items-start">
                              <FaExclamationCircle className="text-danger mt-1" />
                              <p className="text-center">An error occurred while processing the transaction. Please try again.</p>
                            </div>
                            <div className="w-full flex items-center justify-end gap-2">
                              <AlertDialogCancel
                                onClick={(e) => {
                                  setContractError(false);
                                  setContractState("idle");
                                }}
                              >
                                Close
                              </AlertDialogCancel>
                            </div>
                          </div>
                        )}
                        {contractState === "accepted" && (
                          <div className="w-full flex items-start justify-center">
                            <ImSpinner9 className="animate-spin" />
                            <p className="text-center">Transaction accepted. Processing your contract...</p>
                          </div>
                        )}
                        {contractState === "completed" && (
                          <div className="w-full flex flex-col items-start justify-center">
                            <div className="flex items-center gap-2">
                              <FaCheck className="text-success mt-1" />
                              <p className="text-center">Contract successfully deployed.</p>
                            </div>
                            <div className="w-full flex items-center justify-end gap-2 mt-5">
                              <Button
                                type="button"
                                onClick={(e) => {
                                  e.preventDefault();
                                  router.push(`/`);
                                }}
                                variant="link"
                              >
                                To Marketplace
                              </Button>
                              <Button
                                type="button"
                                className="flex gap-3"
                                disabled={!createdCollection}
                                onClick={(e) => {
                                  e.preventDefault();
                                  router.push(
                                    `/collection/${createdCollection?.contract}`,
                                  );
                                }}
                              >
                                Go to New Collection {createdCollection ? <FaExternalLinkAlt /> : <Loader2 className='animate-spin' />}
                              </Button>
                              
                            </div>
                          </div>
                        )}
                      </div>
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
