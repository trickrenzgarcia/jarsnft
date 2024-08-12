"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Image } from "@nextui-org/react";
import { useRef } from "react";
import React from "react";
import Autoplay from "embla-carousel-autoplay";

export default function OnBoardingCarousel() {
  const plugin = useRef(Autoplay({ delay: 5000, playOnInit: true }));

  const arts = [
    "/assets/create/art-4.jpg",
    "/assets/create/art-8.jpeg",
    "/assets/create/art-0.jpg",
    "/assets/create/art-5.jpeg",
    "/assets/create/art-1.jpg",
    "/assets/create/art-6.jpeg",
    "/assets/create/art-7.jpeg",
    "/assets/create/art-3.jpg",
    "/assets/create/art-2.jpg",
  ];

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[plugin.current]}
      className="w-full"
    >
      <CarouselContent className="flex">
        {arts.map((src, index) => (
          <CarouselItem key={index} className="basis-full">
            <div>
              <Image
                src={src}
                alt={`Art piece ${index + 1}`}
                width={512}
                loading="eager"
                className="aspect-[1/1.29]"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}