"use client";
import Image from "next/image";
import React from "react";
import { NoiseCard } from "@/components/ui/noise-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaUsers } from "react-icons/fa";
import { MdStars, MdCheckBox } from "react-icons/md";

const browsers = [
  { src: "/assets/browsers/Chrome.svg", alt: "chrome" },
  { src: "/assets/browsers/Firefox.png", alt: "firefox" },
  { src: "/assets/browsers/Brave.svg", alt: "brave" },
  { src: "/assets/browsers/Edge.svg", alt: "edge" },
  { src: "/assets/browsers/Opera.svg", alt: "opera" },
];

export default function SetupWallet() {
  return (
    <>
      <h1 className="mb-4 text-4xl font-bold md:text-5xl animate-fade-down animate-once animate-duration-[1200ms] animate-ease-linear">Setup your Wallet</h1>
      <div className="mx-auto mt-2 grid w-full max-w-7xl grid-cols-1 gap-4 lg:grid-cols-3">
        <NoiseCard containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px] gap-5">
          <div className="max-w-xs">
            <h2 className="text-balance text-left text-base font-semibold tracking-[-0.015em] text-white md:text-xl lg:text-3xl">
              MetaMask: Your Gateway to Blockchain, DeFi and dApps
            </h2>
            <p className="mt-4 text-left text-base/6 text-neutral-200">
              A popular cryptocurrency wallet and browser extension that allows
              users to interact with the Ethereum or Polygon blockchain.
            </p>
          </div>
          <Image
            src="/metamask-icon.svg"
            width={450}
            height={450}
            alt="metamask"
            className="absolute bottom-0 -right-[40%] rounded-2xl object-contain filter"
          />
          <Button className="mt-5">
            <Link href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn">
              Download Metamask
            </Link>
          </Button>
        </NoiseCard>

        <NoiseCard containerClassName="col-span-1 min-h-[300px] bg-pink-800">
          <h2 className="max-w-80 text-balance text-left text-base font-semibold tracking-[-0.015em] text-white md:text-xl lg:text-3xl">
            Supported Browsers
          </h2>
          <div className="mt-5 flex flex-1 gap-1">
            {browsers.map((browser, index) => (
              <div key={index} className="mr-4">
                <Image
                  src={browser.src}
                  width={85}
                  height={85}
                  alt={browser.alt}
                  className="rounded-full"
                />
              </div>
            ))}
          </div>
          <div className="mt-5 flex flex-col items-start justify-center gap-5">
            <div className="flex flex-row items-center justify-center gap-5">
              <FaUsers style={{ width: "50px", height: "50px" }} />
              <p className="max-w-[26rem] text-left text-base/6 text-neutral-200">
                17,000,000 Users
              </p>
            </div>
            <div className="flex flex-row items-center justify-center gap-5">
              <MdStars style={{ width: "50px", height: "50px" }} />
              <p className="max-w-[26rem] text-left text-base/6 text-neutral-200">
                4.1K Ratings
              </p>
            </div>
            <div className="flex flex-row items-center justify-center gap-5">
              <MdCheckBox style={{ width: "50px", height: "50px" }} />
              <p className="max-w-[26rem] text-left text-base/6 text-neutral-200">
                Verified and Trusted
              </p>
            </div>
          </div>
        </NoiseCard>
        <NoiseCard containerClassName="bg-pink-800 col-span-1 lg:col-span-3 min-h-[500px] lg:min-h-[400px] xl:min-h-[300px]">
          <div className="max-w-sm">
            <h2 className="max-w-sm text-balance text-left text-base font-semibold tracking-[-0.015em] text-white md:max-w-lg md:text-xl lg:text-3xl">
              Step 1 : Add to Chrome
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
              In the chrome extension page &quot;Click Add to Chrome&quot;
              Button
            </p>
          </div>
          <div className="absolute top-[40%] right-[10%]">
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to Chrome</button>
          </div>
        </NoiseCard>
        <NoiseCard containerClassName="col-span-1 min-h-[300px] bg-purple-800">
          <h2 className="max-w-sm text-balance text-left text-base font-semibold tracking-[-0.015em] text-white md:max-w-lg md:text-xl lg:text-3xl">
            Step 2 : Click Agree to Terms of Use
          </h2>
        </NoiseCard>
        <NoiseCard containerClassName="col-span-1 min-h-[300px] bg-purple-800">
          <h2 className="max-w-sm text-balance text-left text-base font-semibold tracking-[-0.015em] text-white md:max-w-lg md:text-xl lg:text-3xl">
            Step 3:Create Wallet or Import a Wallet
          </h2>
        </NoiseCard>
        <NoiseCard containerClassName="col-span-1 min-h-[300px] bg-purple-800">
          <h2 className="max-w-sm text-balance text-left text-base font-semibold tracking-[-0.015em] text-white md:max-w-lg md:text-xl lg:text-3xl">
            Proceed to Step 4 for New Wallet
          </h2>
        </NoiseCard>
        <NoiseCard containerClassName="bg-purple-800 col-span-1 lg:col-span-3 min-h-[300px] lg:min-h-[600px] xl:min-h-[750px]">
          <div className="max-w-sm">
            <h2 className="max-w-sm text-balance text-left text-base font-semibold tracking-[-0.015em] text-white md:max-w-lg md:text-xl lg:text-3xl">
              Step 4: Create Password, Secure Wallet, and Confirm SECRET
              RECOVERY PHRASE
            </h2>
            <ol className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
              Create a Password: Enter a secure password for your MetaMask
              wallet. Make sure it&quot;s strong and something you can remember.
            </ol>
            <ol className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
              Backup Your Seed Phrase: MetaMask will generate a unique seed
              phrase (also known as a recovery phrase) consisting of 12 random
              words. Write down this seed phrase on a piece of paper and store
              it somewhere safe. This is crucial for recovering your wallet if
              you ever lose access to it.
            </ol>
            <ol className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
              Confirm Your Seed Phrase: After writing down your seed phrase,
              MetaMask will ask you to confirm it by entering the words in the
              correct order. This ensures that you&quot;ve written it down
              correctly.
            </ol>
            <ol className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
              Congratulations!: Once you&quot;ve confirmed your seed phrase,
              your MetaMask wallet is created. You can now use it to store,
              send, and receive cryptocurrencies.
            </ol>
          </div>
          <Image
            src="/SeedPhrase.png"
            width={650}
            height={750}
            alt="seedPhrase"
            className="absolute inset-y-0 right-0 h-full w-[50%] "
            quality={100}
          />
        </NoiseCard>
      </div>
    </>
  );
}
