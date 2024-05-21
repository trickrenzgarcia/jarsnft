import React from "react";
import Image from "next/image";
import { P } from "../_components/TailwindTags";

const page = () => {
  return (
    <article>
      <h1 className="my-6 text-4xl font-bold md:text-5xl">What is an NFT</h1>
      <div>
        <Image
          src="/assets/InsightsAsset/WhatIsNFT.jpg"
          width={1920}
          height={1080}
          alt="What is NFT Image"
          className="max-h-[15rem] max-w-full rounded-lg object-cover"
        />
      </div>
      <h2 className="my-6 text-2xl font-bold">Overview</h2>
      <P>
        {`An NFT (non-fungible token) is a unique digital item stored on a
          blockchain. NFTs can represent almost anything, and serve as a
          digital record of ownership. NFTs operate on blockchain technology.
          The blockchain is basically a large, digital, public record. (`}
        <span className="font-semibold text-[#A519D7] underline ">
          <a href="/insights/what-is-blockchain">Learn more here</a>
        </span>
        {`) The most popular blockchains are distributed across many nodes, which is why you’ll hear them described as
          “decentralized.`}
      </P>
      <P>{`NFTs are unique digital collectibles like artwork, music, or videos. 
          You can buy and sell them online by often using cryptocurrency. 
          Even though they've been around for a while, NFTs are becoming more popular, especially for digital art. 
          The market for NFTs is huge and is close to being as valuable as the traditional art market. 
          One of the key things that makes NFTs valuable is that they are rare or one-of-a-kind, unlike most digital things which can be easily copied. This rarity could make them more valuable, similar to other collectible items.`}</P>
      {/* <article className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="m-5 gap-2 place-self-center">
            <h1 className="relative mb-6 max-w-4xl text-left text-3xl font-bold text-zinc-700 dark:text-zinc-100 md:text-7xl">
              What is an NFT?
            </h1>
            <p className="text-xl font-semibold">
              An NFT (non-fungible token) is a unique digital item stored on a
              blockchain. NFTs can represent almost anything, and serve as a
              digital record of ownership. NFTs operate on blockchain technology.
              The blockchain is basically a large, digital, public record. The
              most popular blockchains are distributed across many nodes (read:
              people’s computers), which is why you’ll hear them described as
              “decentralized.”
            </p>
          </div>
          <div className="mt-20 place-self-center">
            <Image
              src="/assets/InsightsAsset/WhatIsNFT.jpg"
              width={600}
              height={600}
              alt="What is NFT Image"
              className="rounded-lg"
              style={{ minHeight: 600, minWidth: 600 }}
            />
          </div>
        </article> */}
    </article>
  );
};

export default page;
