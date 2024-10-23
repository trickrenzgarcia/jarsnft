import Image from "next/image";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

const words = [
  {
    text: "Unlock",
  },
  {
    text: "the",
  },
  {
    text: "Future:",
  },
  {
    text: "Create",
  },
  {
    text: "Collect",
  },
  {
    text: "and",
  },
  {
    text: "Conquer",
  },
  {
    text: "with",
  },
  {
    text: "JarsNFT !",
    className: "text-purple-600 dark:text-purple-600",
  },
];

export default function Hero() {
  return (
    <section className="flex items-center">
      <div className="relative h-96 w-screen">
        <Image
          src="/assets/hero-icon.svg"
          fill
          alt="image of a banner"
          className="animate-fade animate-once animate-duration-[1200ms] animate-ease-in object-cover"
          priority={true}
          quality={100}
        />
      </div>
      <div className="absolute lg:w-[500px] rounded-xl bg-white/85 p-8 dark:bg-black/85 lg:ml-28 ">
        <h1 className="max-[400px]:text-2xl text-3xl font-bold leading-normal">
          <TypewriterEffect words={words} />
        </h1>
      </div>
    </section>
  );
}
