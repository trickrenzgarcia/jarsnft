import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col">
      <div className="relative h-96 w-full overflow-hidden">
        <Image
          src="/assets/hero-icon.svg"
          fill
          objectFit="cover"
          alt="image of a banner"
        />
      </div>
      <div className="absolute z-10 ml-4 mt-20 rounded-xl bg-white/85 p-6 dark:bg-black/85 sm:ml-28 sm:p-8">
        <h1 className="text-xl font-bold sm:text-[2rem] sm:leading-normal">
          Unlock the Future: Collect, Create,
        </h1>
        <h1 className="text-xl font-bold sm:text-[2rem] sm:leading-normal">
          and Conquer with NFTs!
        </h1>
        <Link
          className="mt-8 block text-sm transition-colors hover:text-purple-600 sm:text-lg"
          href="#"
        >
          Discover ►
        </Link>
      </div>
    </section>
  );
}
