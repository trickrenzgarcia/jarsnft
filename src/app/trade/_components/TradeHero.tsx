import Image from "next/image";
import Link from "next/link";

export default function TradeHero() {
  return (
    <>
      <div className="my-20 flex flex-col justify-center gap-8 md:flex-row">
        {/* Left-side */}
        <section className="mb-12 flex w-auto flex-col gap-4 text-center md:mb-0 md:w-[500px] md:text-start">
          {/* Hero Text */}
          <div>
            <h1 className="text-5xl font-bold">
              Trade <span className="text-purple-700">Rare</span>
            </h1>
            <h1 className="text-5xl font-bold">Collection of NFTs</h1>
          </div>

          <p className="my-2">
            Embark on a journey through our exclusive NFT collection, where rare
            and exceptional digital assets await discovery and ownership.
          </p>

          {/* Buy & Sell Buttons */}
          <section className="m-auto flex gap-4 md:m-0">
            <Link
              href="#"
              className="w-24 rounded-lg bg-purple-700 py-2 text-center text-white hover:bg-purple-600 active:bg-purple-800"
            >
              Buy
            </Link>
            <Link
              href="#"
              className="w-24 rounded-lg bg-purple-700 py-2 text-center text-white hover:bg-purple-600 active:bg-purple-800"
            >
              Sell
            </Link>
          </section>

          {/* Statistics */}
          <section className="mt-6 flex justify-around gap-8 md:justify-normal">
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold">P388M</h1>
              <p className="font-semibold text-purple-700">Trading Volume</p>
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold">106K</h1>
              <p className="font-semibold text-purple-700">NFT Creators</p>
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold">2.4M</h1>
              <p className="font-semibold text-purple-700">Total Users</p>
            </div>
          </section>
        </section>

        {/* Right-side */}
        <section className="flex w-auto flex-col md:w-[500px]">
          {/* Join */}
          <section className="mb-8 flex">
            <Image
              src="/assets/JarsLogo.png"
              width={100}
              height={100}
              alt="Jars Logo"
            />
            <div>
              <p className="font-bold">Join Our NFT Community.</p>
              <p>
                Uniting creators, collectors; redefining digital ownership with
                innovation.
              </p>
              <Link
                href="#"
                className="w-fit underline hover:text-purple-700 active:text-purple-800"
              >
                Join Now
              </Link>
            </div>
          </section>

          {/* Images */}
          <div className="relative m-auto h-72 w-80 md:left-16 md:m-0 md:w-96">
            <Image
              className="absolute left-1/2 top-1/2 z-10 translate-x-[-30%] translate-y-[-32%]"
              src="/assets/ex1.png"
              width={200}
              height={300}
              alt="unggoy"
            />
            <Image
              className="absolute left-1/4 top-1/4 translate-x-[-30%] translate-y-[-32%]"
              src="/assets/ex2.png"
              width={200}
              height={300}
              alt="babae"
            />
          </div>
        </section>
      </div>
    </>
  );
}
