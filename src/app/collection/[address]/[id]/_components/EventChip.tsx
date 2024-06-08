"use client"

import { cn } from "@/utils/cn";

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
      <div className={cn('rounded-full border w-fit px-2', selectedVariant?.borderColor, selectedVariant?.darkBorderColor)}>
        <p className={cn('text-[10px] font-semibold w-fit', selectedVariant?.textColor, selectedVariant?.darkTextColor)}>{eventName}</p>
      </div>
    </div>
  )
}
