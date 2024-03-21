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
import { shortenFileName } from "@/lib/utils";
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

type NFTCreateContractCardProps = {
  title: string;
  description: string;
};



const FormContractSchema = z.object({
  name: z.string().min(1),
  image: z.object({
    type: z.string().refine(
      (value) =>
        ACCEPTED_IMAGE_TYPES.includes(value.split("/")[1]),
    ),
    size: z.number().min(0, {
      message: "File size must be greater than 0.",
    }).refine(
      (value) => value <= 10000000,
      {
        message: `Max file size is ${10000000} bytes.`,
      }
    ),
  }),
  symbol: z.string().optional(),
  description: z.string().optional(),
  app_uri: z.string().min(1),
  external_link: z.string().min(1),
  fee_recipient: z.string().min(1),
  seller_fee_basis_points: z.number().min(0).max(100),
  primary_sale_recipient: z.string().min(1),
  trusted_forwarders: z.array(z.string()).optional(),
});

export default function NFTCreateContractCard({
  title,
  description,
}: NFTCreateContractCardProps) {
  const [uploadImage, setUploadImage] = useState<string | null>(null);
  const [fileName, setFileName] = useState("");

  const form = useForm<z.infer<typeof FormContractSchema>>({
    resolver: zodResolver(FormContractSchema),
    defaultValues: {
      name: "",
      image: {
        type: "",
        size: 0,
      },
      symbol: "",
      description: "",
      app_uri: "",
      external_link: "",
      fee_recipient: "",
      seller_fee_basis_points: 0,
      primary_sale_recipient: "",
      trusted_forwarders: [],
    },
  });

  function onSubmitCreateContract(data: z.infer<typeof FormContractSchema>) {
    console.log(data.image);
    console.log("Hello");
  }

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (
        acceptedFiles.length > 0 &&
        acceptedFiles[0].type.startsWith("image/")
      ) {
        const file = acceptedFiles[0];
        const reader = new FileReader();
        reader.onload = (event: ProgressEvent<FileReader>) => {
          setUploadImage(event.target?.result?.toString() || "");
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
    [setUploadImage, setFileName]
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
          <form onSubmit={form.handleSubmit(onSubmitCreateContract)}>
            <FormField
              control={form.control}
              name="image.type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Logo</FormLabel>
                  <FormControl>
                    <Input type="file" accept="image/*"  {...field} />
                  </FormControl>
                  <FormDescription>
                    <div
                      className="cursor-pointer h-[150px] flex gap-3 items-center p-5 rounded-md border border-dashed hover:border-solid dark:hover:border-gray-500"
                      {...getRootProps()}
                      onClick={(event) => {
                        event.preventDefault();
                        const fileInput = document.getElementById(
                          "picture"
                        ) as HTMLInputElement;
                        fileInput.click();
                      }}
                    >
                      <Avatar className="w-[98px] h-[98px] rounded-md">
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
                              You may change this after deploying your contract.
                            </p>
                            <p className="text-sm">
                              Recommended size: 350 x 350. File types: JPG, PNG,
                              SVG, or GIF
                            </p>
                          </span>
                        )}
                      </div>
                    </div>
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">Create</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}




{/* <Input
  {...getInputProps()}
  {...field}
  id="picture"
  className="w-full h-full"
  type="file"
  accept="image/*"
  onChange={handleImageOnChange}
  style={{ display: "none" }}
/> */}