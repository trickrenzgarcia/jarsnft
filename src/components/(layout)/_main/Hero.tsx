import Image from "next/image";
import Link from "next/link";
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
    <section className="flex flex-col">
      <div className="relative h-96 w-full overflow-hidden">
        <Image
          src="/assets/hero-icon.svg"
          fill
          style={{ objectFit: "cover" }}
          alt="image of a banner"
          className="animate-fade animate-once animate-duration-[1200ms] animate-ease-in"
        />
      </div>
      <div className="absolute z-10 ml-2 mt-6 w-[500px] rounded-xl bg-white/85 p-2 dark:bg-black/85 sm:ml-28 sm:p-8">
        <h1 className="text-xl font-bold sm:text-[2rem] sm:leading-normal">
          <TypewriterEffect words={words} />
        </h1>
      </div>
    </section>
  );
}
