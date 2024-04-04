"use client";

import { PageNextButton } from "./_components";
// import { rightNavList } from '../_metadata'

export default function Page() {
  return (
    <div className="w-full p-6 ">
      <h1 className="my-6 text-4xl font-bold">Welcome</h1>
      <p className="my-12 tracking-wide">
        Welcome to the JarsNft guides and frequently asked questions.
        <br />
        <br />
        Contents:
      </p>
      <h2 className="my-6 text-2xl font-bold">Getting Started</h2>
      <ul className="mb-12 ml-8 font-semibold leading-9 text-[#A519D7] lg:list-disc">
        <li>Installing a Wallet</li>
        <li>Connecting your wallet</li>
        <li>Creating your profile</li>
      </ul>
      <h2 className="my-6 text-2xl font-bold">Buying NFTs</h2>
      <ul className="mb-12 ml-8 font-semibold leading-9 text-[#A519D7] lg:list-disc">
        <li>Buying a fixed price NFT</li>
        <li>Making an offer on a NFT</li>
      </ul>
      <h2 className="my-6 text-2xl font-bold">Selling NFTs</h2>
      <ul className="mb-12 ml-8 font-semibold leading-9 text-[#A519D7] lg:list-disc">
        <li>Accepting an offer on your NFT</li>
        <li>Listing an NFT for sale a fixed price</li>
      </ul>

      <PageNextButton title="Getting Started" href="/insights/getting-started" />
    </div>
  );
}
