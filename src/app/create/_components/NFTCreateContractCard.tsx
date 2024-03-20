"use client"

import {
    Card,
    CardContent,
    CardHeader,
    CardFooter,
    CardTitle,
    CardDescription,
} from "@/components/ui/card"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

import { Input } from "@/components/ui/input"
import Image from "next/image"
import React, { useState } from "react"
import { FaRegImage } from "react-icons/fa";

type NFTCreateContractCardProps = {
    title: string,
    description: string
}

export default function NFTCreateContractCard({ title, description }: NFTCreateContractCardProps) {
  const [uploadImage, setUploadImage] = useState(null);
  const [fileName, setFileName] = useState("");

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadImage(event.target.result);
      };
      reader.readAsDataURL(file);
      setFileName(file.name);
    }
  };

  return (
    <Card className="max-w-[640px]">
        <CardHeader>
            <CardTitle className='text-lg md:text-2xl lg:text-3xl font-bold'>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="px-5">
          <div className="cursor-pointer max-w-[520px] h-[150px] flex gap-3 items-center p-5 rounded-md border border-dashed hover:border-solid dark:hover:border-gray-500"
            onClick={() => {
              const fileInput = document.getElementById("picture") as HTMLInputElement
              fileInput.click()
            }}
          >
            <Avatar className="w-[98px] h-[98px] rounded-md">
            {uploadImage ? (
              <AvatarImage className="" src={uploadImage} alt="@image_collection" />
            ) : (
              <AvatarFallback className="w-[98px] h-[98px] rounded-md">
                <FaRegImage />
              </AvatarFallback>
              
            )}
            </Avatar>
            <div className="flex flex-col w-full">
              <h2 className="text-sm font-bold">
                {fileName || "Drag and drop or click to upload"}
              </h2>
              <p className="text-sm">You may change this after deploying your contract.</p>
              <p className="text-sm">Recommended size: 350 x 350. File types: JPG, PNG, SVG, or GIF</p>
            </div>
            <Input id="picture" className="w-full h-full" type="file" accept="image/*" onChange={handleFileUpload} style={{ display: "none" }} />
          </div>
        </CardContent>
    </Card>
  )
}
