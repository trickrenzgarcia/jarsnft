import { Metadata } from "next";
import { Suspense } from "react";
import { z } from "zod";
import Collections from "../_components/Collections";
import jars from "@/lib/api";
import { notFound } from "next/navigation";

type Props = {
  params: { categoryId: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

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
    description: "Explore the latest collections in the NFT marketplace.",
    keywords: ["NFT", "collections", "art", "photography", "pfp"],
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
      title = "Art Category";
      break;
    case "photography":
      title = "Photography Category";
      break;
    case "pfp":
      title = "Profile Picture Category";
      break;
  }

  return (
    <div className="container">
      <h1 className="m-6 text-center text-4xl antialiased lg:text-5xl">{title}</h1>
      <hr className="p-6" />
      <Suspense fallback={<div>Loading....</div>}>
        <Collections collections={collections} />
      </Suspense>
    </div>
  );
}
