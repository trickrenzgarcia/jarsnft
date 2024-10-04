import { Metadata } from "next";
import { Suspense } from "react";
import { z } from "zod";
import Collections from "../_components/Collections";
import jars from "@/lib/api";
import { notFound } from "next/navigation";

type Props = {
    params: { categoryId: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    let title = "";

    switch (params.categoryId) {
        case "art":
            title = "Explore Arts Collections | JarsNFT Marketplace";
            break;
        case "photography":
            title = "Explore Photography Collections | JarsNFT Marketplace";
            break;
        case "pfp":
            title = "Explore PFPs Collections | JarsNFT Marketplace";
            break;
    }

    return {
        title: title,
    };
}

export default async function Categories({ params }: Props) {
    const CategorySchema = z.enum(["art", "photography", "pfp"]);
    if (!CategorySchema.safeParse(params.categoryId).success) {
        notFound();
    }

    const collections = await jars.collection.getTrending(params.categoryId);
    let title = "";
    switch (params.categoryId) {
        case "art":
            title = "Explore Art NFTs";
            break;
        case "photography":
            title = "Explore Photography NFTs";
            break;
        case "pfp":
            title = "Explore Profile NFTs";
            break;
    }

    return (
        <div className="container mx-auto p-8">
            <h1 className='max-[490px]:text-center text-4xl mt-4'>{title}</h1>
            <hr className='mb-10 mt-6' />
            <Suspense fallback={<div>Loading....</div>}>
                <Collections collections={collections} className="px-8" />
            </Suspense>
        </div>
    )
}