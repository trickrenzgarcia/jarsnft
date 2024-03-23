"use client";

import { ethers } from 'ethers'; // ethers v5^

import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Input } from "@/components/ui/input";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import React, { useState, useCallback, useEffect } from "react";
import { FaRegImage } from "react-icons/fa";
import { cn, shortenFileName } from "@/lib/utils";
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
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button";
import { ACCEPTED_IMAGE_TYPES } from "@/types/constant";
import { FaExclamationCircle } from "react-icons/fa";
import { Textarea } from "@/components/ui/textarea";
import { useAddress, useContract, useSDK } from "@thirdweb-dev/react";
import { CreateNFTCollectionDialog } from "./CreateNFTCollectionDialog";
import { Spinner } from '@nextui-org/react';

type NFTCreateContractCardProps = {
  title: string;
  description: string;
};

const ethAddressSchema = z.string().refine((value) => ethers.utils.isAddress(value), {
  message: "Input is not a valid address or ENS name."
})

const ContractSchema = z.object({
  name: z.string().min(1, "Required field.").max(100, "Name must be less than 100 characters."),
  image: z.instanceof(File, {
    message: "Required field.",
  }),
  symbol: z.string().optional(),
  description: z.string().optional(),
  app_uri: z.string().optional(),
  external_link: z.string().optional(),
  fee_recipient: ethAddressSchema,
  seller_fee_basis_points: z.string().regex(/^(100(\.0{1,3})?|0+(\.\d{1,3})?|([1-9]?\d(\.\d{1,3})?))$/, "Invalid percentage."),
  primary_sale_recipient: ethAddressSchema,
  trusted_forwarders: z.array(z.string()).optional(),
});

type FormContract = z.infer<typeof ContractSchema>;

export default function NFTCreateContractCard({
  title,
  description,
}: NFTCreateContractCardProps) {
  const address = useAddress();
  const sdk = useSDK();
  const [uploadImage, setUploadImage] = useState<string | null>(null);
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if(address) {
      form.setValue("fee_recipient", address);
      form.setValue("primary_sale_recipient", address);
    }
  }, [address])

  const form = useForm<FormContract>({
    resolver: zodResolver(ContractSchema),
    defaultValues: {
      name: "",
      image: undefined,
      symbol: "",
      description: "",
      app_uri: "",
      external_link: "",
      fee_recipient: address,
      seller_fee_basis_points: "0.00",
      primary_sale_recipient: address,
      trusted_forwarders: [],
    }
  });

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (
        acceptedFiles.length > 0 &&
        acceptedFiles[0].type.startsWith("image/")
      ) {
        const file = acceptedFiles[0];

        // Check MIME type
        if(!ACCEPTED_IMAGE_TYPES.includes(file.type)) {
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
    [setUploadImage, setFileName, form]
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
  const initials = words.map(word => word.charAt(0).toUpperCase());
  const acronym = initials.join("");

  if(acronym.length > 0) {
    form.setValue("symbol", acronym);
  } else {
    form.setValue("symbol", "");
  }
  

  const submitCreateContract = async (data: FormContract) => {
    const seller_fee_basis_points = parseFloat(data.seller_fee_basis_points) * 100;
    const image = new File([data.image], data.image.name, { type: data.image.type })
    try {
      setLoading(true);
      const contractAddress = await sdk?.deployer.deployNFTCollection({
        name: data.name,
        image: image,
        primary_sale_recipient: data.primary_sale_recipient,
        symbol: data.symbol,
        platform_fee_recipient: address,
        external_link: data.external_link,
        app_uri: data.app_uri,
        fee_recipient: data.fee_recipient,
        description: data.description,
        platform_fee_basis_points: seller_fee_basis_points,
        seller_fee_basis_points: seller_fee_basis_points,
        trusted_forwarders: data.trusted_forwarders,
      });
    } catch (error) {
      //await submitCreateContract(data)
      setLoading(false);
    }
  }

  return (
    <Card className="max-w-[640px]">
      <CardHeader>
        <CardTitle className="text-lg md:text-2xl lg:text-3xl font-bold">
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="px-5">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(submitCreateContract)}>
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold flex items-center gap-1 text-md"><span className="text-red-400">*</span>Logo Image</FormLabel>
                  <FormControl>
                    <>
                      <Input
                        {...getInputProps()}
                        {...form.register("image")}
                        //ref={form.register("image").ref}
                        id="picture"
                        className="w-full h-full"
                        type="file"
                        accept="image/*"
                        onChange={handleImageOnChange}
                        style={{ display: "none" }}
                      />
                      <div
                        className={cn("cursor-pointer h-[150px] flex gap-3 items-center p-5 rounded-md border border-dashed ", form.formState.errors.image ? "border-solid border-red-500" : "hover:border-solid dark:hover:border-gray-500")}
                        {...getRootProps()}
                        onClick={(event) => {
                          event.preventDefault();
                          const fileInput = document.getElementById(
                            "picture"
                          ) as HTMLInputElement;
                          fileInput.click();
                        }}
                      >
                        <Avatar className="w-[98px] h-[98px] rounded-md border">
                          {uploadImage ? (
                            <AvatarImage
                              className="aspect-auto"
                              src={uploadImage}
                              alt="@image_collection"
                            />
                          ) : (
                            <AvatarFallback className="w-[98px] h-[98px] rounded-md">
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
                      <FormLabel className="font-semibold flex items-center gap-1 text-md"><span className="text-red-400">*</span>Name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          id="name"
                          placeholder="Collection Name"
                          className={cn(form.formState.errors.name && "border-red-500")}
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
                      <FormLabel className="font-semibold flex items-center gap-1 text-md">Symbol</FormLabel>
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
                    <FormLabel className="font-semibold flex items-center gap-1 text-md">Description</FormLabel>
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

            <div className="pt-8 grid grid-cols-12 gap-3">
              <div className="col-span-8 md:col-span-9">
                <FormField
                  control={form.control}
                  name="fee_recipient"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold flex items-center gap-1 text-md">Royalties</FormLabel>
                      <FormDescription className="text-sm italic">Determine the address that should receive the revenue from royalties earned from secondary sales of the assets.</FormDescription>
                      <FormLabel className="font-semibold flex items-center gap-1"><span className="text-red-400">*</span>Recipient Address </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          id="fee_recipient"
                          placeholder="address"
                          className={cn(form.formState.errors.fee_recipient && "border-red-500")}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-4 md:col-span-3 flex items-end">
                <FormField
                  control={form.control}
                  name="seller_fee_basis_points"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold flex items-center gap-1">Percentage</FormLabel>
                      <FormControl>
                        <div className="flex items-center">
                          <Input
                            {...form.register("seller_fee_basis_points")}
                            id="seller_fee_basis_points"
                            placeholder="0.00"
                            maxLength={5}
                            onChange={handlePercentageChange}
                            className={cn(form.formState.errors.seller_fee_basis_points && "border-red-500")}
                            onKeyDown={(e) => {
                              if(e.key === ' ') {
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
                    <FormLabel className="font-semibold flex items-center gap-1 text-md">Primary Sale Recipient</FormLabel>
                    <FormDescription className="text-sm italic">Determine the address that should receive the revenue from the primary sale of the assets.</FormDescription>
                    <FormLabel className="font-semibold flex items-center gap-1"><span className="text-red-400">*</span>Recipient Address </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        id="primary_sale_recipient"
                        placeholder="address"
                        className={cn(form.formState.errors.primary_sale_recipient && "border-red-500")}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div className='flex justify-end'>
              <Button type="submit">Create Collection</Button>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="outline" id="submitDialog" style={{ display: "none" }}>Open Dialog</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      {loading && (<Spinner />)}
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    {!loading && (<AlertDialogCancel>Cancel</AlertDialogCancel>)}
                    <AlertDialogAction disabled={loading}>Continue</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
            
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
