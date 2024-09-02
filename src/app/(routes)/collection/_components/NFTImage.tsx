"use client"

import React from 'react';
import Image from 'next/image';
import { Image as NextImage } from "@nextui-org/react";

type Props = {
  image_url: string;
  name: string;
}

export default function NFTImage({ image_url, name }: Props) {
  return (
    <div className="flex h-auto w-auto items-center justify-center rounded-lg bg-muted">
      {image_url ? (
        <NextImage
          src={image_url}
          alt={name}
          style={{ objectFit: "cover" }}
          className="h-full w-full rounded-lg "
        />
      ): (
        <Image 
          src="/assets/placeholder/nft_placeholder.svg" 
          alt="Placeholder" 
          width={400} 
          height={400} 
        />
      )}
      
    </div>
  )
}
