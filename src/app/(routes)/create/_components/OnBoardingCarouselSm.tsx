"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export default function OnBoardingCarouselSm() {
  const plugin = useRef(Autoplay({ delay: 5000, playOnInit: true }));

  const arts = [
    "/assets/create/art-1.jpg",
    "/assets/create/art-2.jpg",
    "/assets/create/art-3.jpg",
    "/assets/create/art-4.jpg",
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
      <CarouselContent>
        {arts.map((_, i) => (
          <CarouselItem
            key={i}
            className="relative flex h-64 w-full items-center justify-center"
          >
            <Image
              src={arts[i]}
              alt=""
              fill
              style={{ objectFit: "cover" }}
              className="w-full"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
