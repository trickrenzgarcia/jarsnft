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
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuCheckboxItem,
  ContextMenuShortcut,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuSub
} from "@/components/ui/context-menu"

import { Input } from "@/components/ui/input"
import Image from "next/image"

type NFTCreateContractCardProps = {
    title: string,
    description: string
}

export default function NFTCreateContractCard({ title, description }: NFTCreateContractCardProps) {
  return (
    <Card className="max-w-[640px]">
        <CardHeader>
            <CardTitle className='text-lg md:text-2xl lg:text-3xl font-bold'>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="px-5">
          <div className="cursor-pointer max-w-[520px] h-[150px] flex gap-3 items-center p-5 rounded-md border border-dashed hover:border-solid dark:hover:border-gray-500">
            <div className="w-[100px] h-[100px] border border-dashed dark:border-gray-500 rounded-md">
              <Image src="" alt="Collection Image" width={100} height={100} />
            </div>
            <div className="flex flex-col">
              <h2 className="text-sm font-bold">Drag and drop or click to upload</h2>
              <p className="text-sm">You may change this after deploying your contract.</p>
              <p className="text-sm">Recommended size: 350 x 350. File types: JPG, PNG, SVG, or GIF</p>
            </div>
            <Input id="picture" type="file" accept="image/*" style={{ display: "none" }} />
          </div>
        </CardContent>
    </Card>
  )
}
