import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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
      </div>
    </>
  );
};

export default page;
