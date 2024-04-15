"use client";

import { PageNextButton } from "./_components";
// import { rightNavList } from '../_metadata'

export default function Page() {
  return (
    <div>
      <h1 className="my-6 text-4xl font-bold">Welcome</h1>
      <p className="my-12 text-base tracking-wide leading-loose">
        Welcome to the JarsNft insights, the following are the overview of contents that will help you be informed in the basics of the Crypto world! 
        <br />
        <br />
        This page serves to help individuals especially beginners in getting a grasp of this emerging technology.
      </p>
      <hr />

      <h2 className="my-6 text-2xl font-bold" id="getting-started">
        Getting Started
      </h2>
      <P>
        This section will be your guide on where to begin your first transaction. Consider going through the following steps:
      </P>
      <h3 className="my-6 text-xl font-bold">1. Setup Your Wallet</h3>

      <ul className="mb-12 ml-8 font-semibold leading-9 text-[#A519D7] lg:list-disc">
        <li>Choose your Wallet</li>
        <li>Creating your Wallet Account </li>
      </ul>
      <h3 className="my-6 text-xl font-bold">2. Create Your Profile</h3>
      <ul className="mb-12 ml-8 font-semibold leading-9 text-[#A519D7] lg:list-disc">
        <li>Customize your Profile</li>
      </ul>
      
      <h3 className="my-6 text-xl font-bold">3. Create Your NFT</h3>
      <ul className="mb-12 ml-8 font-semibold leading-9 text-[#A519D7] lg:list-disc">
        <li>Creating your First NFT</li>
        <li>Setup your NFT details</li>
        <li>Minting your NFT</li>
      </ul>
      
      <h3 className="my-6 text-xl font-bold">4. Trade Your NFT</h3>
      <ul className="mb-12 ml-8 font-semibold leading-9 text-[#A519D7] lg:list-disc">
        <li>Accepting an offer on your NFT</li>
        <li>Listing an NFT on a fixed price</li>
      </ul>
      <hr />

      <h2 className="my-6 text-2xl font-bold" id="nfts">
        Non-Fungible Token (NFT)
      </h2>
      <P>
        This section will be your guide on where to begin your first transaction. Consider going through the following steps:
      </P>
      <h3 className="my-6 text-xl font-bold">1. What is an NFT?</h3>

      <ul className="mb-12 ml-8 font-semibold leading-9 text-[#A519D7] lg:list-disc">
        <li>Choose your Wallet</li>
        <li>Creating your Wallet Account </li>
      </ul>
      <h3 className="my-6 text-xl font-bold">2. What makes an NFT Valuable?</h3>
      <ul className="mb-12 ml-8 font-semibold leading-9 text-[#A519D7] lg:list-disc">
        <li>Customize your Profile</li>
      </ul>
      <hr />

      <h2 className="my-6 text-2xl font-bold" id="blockchain">Blockchain</h2>
      <P>
        This section will be your guide on where to begin your first transaction. Consider going through the following steps:
      </P>
      <h3 className="my-6 text-xl font-bold">1. What Is The Blockchain?</h3>

      <ul className="mb-12 ml-8 font-semibold leading-9 text-[#A519D7] lg:list-disc">
        <li>Choose your Wallet</li>
        <li>Creating your Wallet Account </li>
      </ul>
      <h3 className="my-6 text-xl font-bold">2. What Are Smart Contracts?</h3>
      <ul className="mb-12 ml-8 font-semibold leading-9 text-[#A519D7] lg:list-disc">
        <li>Customize your Profile</li>
      </ul>
      
      <h3 className="my-6 text-xl font-bold">3. What Are Gas Fees?</h3>
      <ul className="mb-12 ml-8 font-semibold leading-9 text-[#A519D7] lg:list-disc">
        <li>Creating your First NFT</li>
        <li>Setup your NFT details</li>
        <li>Minting your NFT</li>
      </ul>
      
      <h3 className="my-6 text-xl font-bold">4. What Is Cryptocurrency?</h3>
      <ul className="mb-12 ml-8 font-semibold leading-9 text-[#A519D7] lg:list-disc">
        <li>Accepting an offer on your NFT</li>
        <li>Listing an NFT on a fixed price</li>
      </ul>
      <hr />
    </div>
  );
}


function P(props: React.HTMLAttributes<HTMLParagraphElement>) {
    const { children } = props;
    return <p className="my-8 tracking-wide text-sm leading-loose ">{children}</p>
  }

  