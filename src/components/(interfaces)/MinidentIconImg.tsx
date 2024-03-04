"use client"

import { minidenticon } from "minidenticons"
import Image from "next/image";
import { useMemo } from "react"

type MinidenticonImgProps = {
  address: string;
  width?: number;
  height?: number;
  saturation?: number;
  lightness?: number;
} & React.HTMLAttributes<HTMLImageElement>

const MinidenticonImg = ({ address, width = 50, height = 50, saturation, lightness, ...props }: MinidenticonImgProps) => {

    const svgURI = useMemo(
      () => 'data:image/svg+xml;utf8,' + encodeURIComponent(minidenticon(address, saturation, lightness)),
      [address, saturation, lightness]
    )
    return (<Image 
      width={width} 
      height={height} 
      src={svgURI} 
      alt={address}
      className="bg-gray-700 dark:bg-white rounded-full"
      {...props} 
    />)
}

export default MinidenticonImg;