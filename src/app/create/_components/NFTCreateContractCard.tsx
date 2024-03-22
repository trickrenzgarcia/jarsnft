"use client";

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
import { Accept, useDropzone } from "react-dropzone";
import Image from "next/image";
import React, { useState, useCallback } from "react";
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
import { Button } from "@/components/ui/button";
import { ACCEPTED_IMAGE_TYPES } from "@/types/constant";
import { FaExclamationCircle } from "react-icons/fa";
import { Textarea } from "@/components/ui/textarea";

type NFTCreateContractCardProps = {
  title: string;
  description: string;
};

const ContractSchema = z.object({
  name: z.string().min(1, {
    message: "Required field.",
  }).max(100, { message: "Name must be less than 100 characters."}),
  image: z.instanceof(File, {
    message: "Required field.",
  }),
  symbol: z.string().optional(),
  description: z.string().optional(),
  // app_uri: z.string().min(1),
  // external_link: z.string().min(1),
  fee_recipient: z.string().min(1),
  // seller_fee_basis_points: z.number().min(0).max(100),
  // primary_sale_recipient: z.string().min(1),
  // trusted_forwarders: z.array(z.string()).optional(),
});

type FormContract = z.infer<typeof ContractSchema>;

export default function NFTCreateContractCard({
  title,
  description,
}: NFTCreateContractCardProps) {
  const [uploadImage, setUploadImage] = useState<string | null>(null);
  const [fileName, setFileName] = useState("");

  const form = useForm<FormContract>({
    resolver: zodResolver(ContractSchema),
    defaultValues: {
      //name: "",
      image: undefined,
      symbol: "",
      // description: "",
      // app_uri: "",
      // external_link: "",
      // fee_recipient: "",
      // seller_fee_basis_points: 0,
      // primary_sale_recipient: "",
      // trusted_forwarders: [],
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

  function submitCreateContract(data: FormContract) {
    console.log(data, "Submitted!");
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
                  <FormLabel className="font-bold flex items-center gap-1">Logo Image</FormLabel>
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
            <div className="grid grid-cols-12 gap-3 pt-5">
              <div className="col-span-9 md:col-span-10">
                <FormField 
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold flex items-center gap-1">Name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          id="name"
                          placeholder="Enter the name of your NFT contract"
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
                      <FormLabel className="font-bold flex items-center gap-1">Symbol</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          id="symbol"
                          placeholder="HAV"
                        />
                      </FormControl>

                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="pt-5">
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold flex items-center gap-1">Description</FormLabel>
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

            <div className="pt-5">
              <FormField
                control={form.control}
                name="fee_recipient"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold flex items-center gap-1">Royalties</FormLabel>
                    <FormDescription className="text-sm">Determine the address that should receive the revenue from royalties earned from secondary sales of the assets.</FormDescription>
                    <FormControl>
                      <Input
                        {...field}
                        id="fee_recipient"
                        placeholder=""
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            
            <Button type="submit">Create</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
