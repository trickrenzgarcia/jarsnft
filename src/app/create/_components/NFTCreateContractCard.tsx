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
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
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
import { ACCEPTED_IMAGE_TYPES } from "@/types/constant";
import { FaExclamationCircle } from "react-icons/fa";
import { Textarea } from "@/components/ui/textarea";
import { useSDK } from "@thirdweb-dev/react";
import { Divider, Spinner } from "@nextui-org/react";
import { useUserContext } from "@/components/(providers)";
import { Separator } from "@/components/ui/separator";
import { FaCheck } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";
import { IoMdRefresh } from "react-icons/io";
import { ProfileQuery } from "@/types/users";
import { jars } from "@/lib/core/api";
import { createContract } from "../actions";
import { NFTCollection } from "@/lib/core/types";
import { useRouter } from "next/navigation";
import Link from "next/link";

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
        app_uri: "https://jarsnft.vercel.app/",
        fee_recipient: data.fee_recipient,
        description: data.description,
        platform_fee_basis_points: 100,
        seller_fee_basis_points: seller_fee_basis_points,
      });

      setContractError(false);

      setContractState("accepted");

      if (processContractAddress?.includes("0x")) {
        setContractState("completed");
        setContractAddress(processContractAddress);
        const newCollection = await createContract(
          processContractAddress,
          user.address,
        );
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
            href="/insights/what-is-a-smart-contract"
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

            <div className="my-4 flex justify-center rounded-md border md:my-0 md:justify-end md:border-0">
              <div className="flex">
                <Button type="submit" className="my-2 md:my-6">
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
                      <div className="flex items-start gap-2">
                        <div className="flex items-center justify-center rounded-full bg-default p-1">
                          {contractState === "ongoing" ? (
                            <Spinner size="sm" />
                          ) : contractError === true ? (
                            <div className="flex h-5 w-5 items-center justify-center">
                              <MdErrorOutline className="text-danger" />
                            </div>
                          ) : (
                            <div className="flex h-5 w-5 items-center justify-center">
                              <FaCheck />
                            </div>
                          )}
                        </div>
                        <h2 className="text-lg">Accepting transaction</h2>
                      </div>
                      <div className="flex h-32 pl-3">
                        <Separator orientation="vertical" className="w-[2px]" />
                        <div className="ml-5 h-fit rounded-lg border p-3">
                          <p className="text-justify">
                            Wait for the wallet to be popup, it will be asked to
                            pay gas fees and sign in your order to deploy your
                            contract on the blockchain.
                          </p>
                          {contractError && (
                            <div className="flex gap-3">
                              <Button
                                className="flex gap-1 bg-danger"
                                onClick={(e) => {
                                  form.handleSubmit(submitCreateContract)();
                                  setContractError(false);
                                  setContractState("ongoing");
                                }}
                              >
                                <IoMdRefresh className="text-xl" />
                                Retry
                              </Button>
                              <AlertDialogCancel
                                onClick={(e) => {
                                  setContractError(false);
                                  setContractState("idle");
                                }}
                              >
                                Close
                              </AlertDialogCancel>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="flex items-center justify-center rounded-full bg-default p-1">
                          {contractState === "accepted" ? (
                            <Spinner size="sm" />
                          ) : contractState === "completed" ? (
                            <div className="flex h-5 w-5 items-center justify-center">
                              <FaCheck />
                            </div>
                          ) : contractError === true ? (
                            <div className="flex h-5 w-5 items-center justify-center">
                              <MdErrorOutline />
                            </div>
                          ) : (
                            <div className="h-5 w-5" />
                          )}
                        </div>
                        <h2 className="text-lg">Deploying your contract</h2>
                      </div>
                      <div className="flex h-28 pl-3">
                        <Separator orientation="vertical" className="w-[2px]" />
                        <div className="ml-5 h-fit w-full rounded-lg border p-3">
                          <p className="text-justify">
                            It may take some time for the transaction to be
                            processed.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="flex items-center justify-center rounded-full bg-default p-1">
                          {contractState === "completed" ? (
                            <div className="flex h-5 w-5 items-center justify-center">
                              <FaCheck />
                            </div>
                          ) : (
                            <div className="h-5 w-5" />
                          )}
                        </div>
                        <h2 className="text-lg">Created NFT Collection.</h2>
                      </div>
                      {contractState === "completed" && (
                        <div className="flex pl-3">
                          <div className="ml-5 flex h-fit w-full flex-col gap-3 rounded-lg border p-3">
                            <p className="text-justify">
                              Your NFT Collection has been created successfully.
                            </p>

                            {createdCollection && (
                                <Button
                                  className="flex gap-3"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    router.push(
                                      `/collection/${createdCollection.contract}`,
                                    );
                                  }}
                                >
                                  Go to NFT Collection <FaExternalLinkAlt />
                                </Button>
                              ) && (
                                <Button
                                  onClick={(e) => {
                                    e.preventDefault();
                                    router.push(`/`);
                                  }}
                                >
                                  Back to marketplace
                                </Button>
                              )}
                          </div>
                        </div>
                      )}
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
