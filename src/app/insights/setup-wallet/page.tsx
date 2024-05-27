"use client";
import Image from "next/image";
import React from "react";
import { NoiseCard } from "@/components/ui/noise-card";
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { FaUsers } from "react-icons/fa";
import { MdStars, MdCheckBox} from "react-icons/md"

const browsers = [
  { src: "/assets/browsers/Chrome.svg", alt: "chrome"},
  { src: "/assets/browsers/Firefox.png", alt: "firefox"},
  { src: "/assets/browsers/Brave.svg", alt: "brave"},
  { src: "/assets/browsers/Edge.svg", alt: "edge"},
  { src: "/assets/browsers/Opera.svg", alt: "opera"}
];

export function SetupWallet() {
  return (
    <>
    <div className="mt-2 grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <NoiseCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px] gap-5"
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            MetaMask: Your Gateway to Blockchain, DeFi and dApps
          </h2>
          <p className="mt-4 text-left text-base/6 text-neutral-200">
            A popular cryptocurrency wallet and browser extension that allows users to interact with the Ethereum or Polygon blockchain.
          </p>
        </div>
        <Image
          src="/metamask-icon.svg"
          width={500}
          height={500}
          alt="metamask"
          className="absolute -right-4 lg:-right-[40%] filter -bottom-10 object-contain rounded-2xl"
        />
        <Button className="mt-5">
        <Link href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn">Download Metamask</Link>
        </Button>
      </NoiseCard>

      <NoiseCard containerClassName="col-span-1 min-h-[300px]">
      <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
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
        <div className="flex flex-col justify-center items-start gap-5 mt-5">
        <div className="flex flex-row justify-center items-center gap-5">
        <FaUsers style={{ width: '50px', height: '50px' }} /> 
        <p className="max-w-[26rem] text-left text-base/6 text-neutral-200">
        17,000,000 Users
        </p>
        </div>
        <div className="flex flex-row justify-center items-center gap-5">
        <MdStars style={{ width: '50px', height: '50px' }} /> 
        <p className="max-w-[26rem] text-left text-base/6 text-neutral-200">
        4.1K Ratings
        </p>
        </div>
        <div className="flex flex-row justify-center items-center gap-5">
        <MdCheckBox style={{ width: '50px', height: '50px' }} /> 
        <p className="max-w-[26rem] text-left text-base/6 text-neutral-200">
        Verified and Trusted
        </p>
        </div>
        </div>
      </NoiseCard>
      <NoiseCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Step 1 : Add to Chrome 
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
            In the chrome extension page &quot;Click Add to Chrome&quot; Button 
          </p>
        </div>
        <Image
          src="/AddtoChrome.png"
          width={600}
          height={300}
          alt="addStep"
          className="h-full w-[40%] absolute inset-y-0 right-0 "
          quality={100}
        />
      </NoiseCard>
      <NoiseCard containerClassName="col-span-1 min-h-[300px]">
      <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Step 2 : Click Agree to Terms of Use
      </h2>
      </NoiseCard>
      <NoiseCard containerClassName="col-span-1 min-h-[300px]">
      <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Step 3: Select Option Create Wallet if New and Import a Wallet if Existing
      </h2>
      </NoiseCard>
      <NoiseCard containerClassName="col-span-1 min-h-[300px]">
      <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Proceed to Step 4 for New Wallet and Step 5 for Importing Wallet
      </h2>
      </NoiseCard>
      <NoiseCard containerClassName="col-span-1 lg:col-span-3 bg-violet-500 min-h-[300px] lg:min-h-[600px] xl:min-h-[750px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Step 4: Create Password, Secure Wallet, and Confirm SECRET RECOVERY PHRASE
          </h2>
          <ol className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
          Create a Password: Enter a secure password for your MetaMask wallet. Make sure it&quot;s strong and something you can remember. 
          </ol>
          <ol className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
          Backup Your Seed Phrase: MetaMask will generate a unique seed phrase (also known as a recovery phrase) consisting of 12 random words. Write down this seed phrase on a piece of paper and store it somewhere safe. This is crucial for recovering your wallet if you ever lose access to it.
          </ol>
          <ol className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
          Confirm Your Seed Phrase: After writing down your seed phrase, MetaMask will ask you to confirm it by entering the words in the correct order. This ensures that you&quot;ve written it down correctly.
          </ol>
          <ol className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
          Congratulations!: Once you&quot;ve confirmed your seed phrase, your MetaMask wallet is created. You can now use it to store, send, and receive cryptocurrencies.
          </ol>
        </div>
        <Image
          src="/SeedPhrase.png"
          width={650}
          height={750}
          alt="seedPhrase"
          className="h-full w-[40%] absolute inset-y-0 right-0 "
          quality={100}
        />
      </NoiseCard>
    </div>
    </>
  );
}

export default SetupWallet;