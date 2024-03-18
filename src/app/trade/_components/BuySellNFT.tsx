"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import NFTCard from "./NFTCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import NFTCarousel from "./NFTCarousel";

export default function BuySellNFT() {
  return (
    <>
      <div className="mt-14 mb-20">
        <p className="font-bold text-xl mb-12">Buy & Sell NFTs</p>

        <div className="px-0 md:px-10">
          <NFTCarousel withExtra />
        </div>

      </div>
    </>
  );
}
