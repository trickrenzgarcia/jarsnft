"use client"

import { cn } from "@/lib/utils";
import { FaRegHandPaper } from "react-icons/fa";
import { TbTransfer } from "react-icons/tb";
import { HiOutlineSparkles } from "react-icons/hi";

type Props = {
  eventName: string;
  color: "purple" | "red" | "orange" | "blue";
}

const variants = [
  {
    color: "purple",
    borderColor: "border-purple-700",
    darkBorderColor: "dark:border-purple-600",
    textColor: "text-purple-500",
    darkTextColor: "dark:text-purple-400"
  },
  {
    color: "red",
    borderColor: "border-red-700",
    darkBorderColor: "dark:border-red-600",
    textColor: "text-red-500",
    darkTextColor: "dark:text-red-400"
  },
  {
    color: "orange",
    borderColor: "border-orange-700",
    darkBorderColor: "dark:border-orange-600",
    textColor: "text-orange-500",
    darkTextColor: "dark:text-orange-400"
  },
  {
    color: "blue",
    borderColor: "border-blue-700",
    darkBorderColor: "dark:border-blue-600",
    textColor: "text-blue-500",
    darkTextColor: "dark:text-blue-400"
  }
];

export default function EventChip({ eventName, color }: Props) {

  const selectedVariant = variants.find((variant) => variant.color === color);

  return (
    <div>
      <div className={cn('flex items-center rounded-full border w-fit pl-1 gap-1 pr-2', selectedVariant?.borderColor, selectedVariant?.darkBorderColor)}>
        {eventName === "Minted" && <HiOutlineSparkles className={cn("text-[12px]", selectedVariant?.textColor, selectedVariant?.darkTextColor)}/>}
        {eventName === "Transfer" && <TbTransfer className={cn("text-[12px]", selectedVariant?.textColor, selectedVariant?.darkTextColor)}/>}
        {eventName === "NewBid" && <FaRegHandPaper className={cn("text-[12px]", selectedVariant?.textColor, selectedVariant?.darkTextColor)}/>}
        <p className={cn('text-[10px] font-semibold w-fit', selectedVariant?.textColor, selectedVariant?.darkTextColor)}>{eventName}</p>
      </div>
    </div>
  )
}
