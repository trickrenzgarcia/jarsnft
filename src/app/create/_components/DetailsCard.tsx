"use client"

import {
    Card,
    CardContent,
    CardHeader,
    CardFooter,
    CardTitle,
    CardDescription,
} from "@/components/ui/card"

//Icons
import { MdOutlineEventNote } from "react-icons/md";
import { IoSparkles } from "react-icons/io5";
import { GrPaint } from "react-icons/gr";

const details = [
    {
        icon: <MdOutlineEventNote />,
        title: "Manage Collection Settings",
        description: "This includes editing collection details, earnings, and associated links."
    },
    {
        icon: <IoSparkles />,
        title: "Set Up Your Drop",
        description: "Configure your mint schedule and presale stages for your NFT release."
    },
    {
        icon: <GrPaint />,
        title: "Prepare Designs",
        description: "Customize your pages and upload all necessary assets for your collection."
    }
]

export default function DetailsCard({ title }: { title: string }) {
  return (
    <Card className="max-w-[300px] bg-default-200 dark:bg-neutral-900">
        <CardHeader>
            <CardTitle className='text-lg font-bold'>{title}</CardTitle>
        </CardHeader>
        <CardContent className="px-5">
            <CardTitle>
            {details.map((detail, index) => (
                <div key={index} className='flex justify-center gap-2 mb-5'>
                    <div>{detail.icon}</div>
                    <div>
                        <h3 className="text-[16px] leading-5 font-bold">{detail.title}</h3>
                        <p className="text-sm">{detail.description}</p>
                    </div>
                </div>
            ))}
            </CardTitle>
        </CardContent>
    </Card>
  )
}
