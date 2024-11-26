import React from "react";
import Image from "next/image";
import { P, H1, H2 } from "../../_components/TailwindTags";

export const metadata = {
  title: "What is NFT",
  description: "Learn what is NFT and how it works",
  keywords: ["NFT", "Non-fungible Token", "JarsNFT"],
};

const page = () => {
  return (
    <article className="flex flex-col space-y-4">
      <div id="overview">
        <H1>What is an NFT</H1>
        <Image
          src="/assets/InsightsAsset/WhatIsNFT.jpg"
          width={1920}
          height={1080}
          alt="What is NFT Image"
          className="max-h-[15rem] max-w-full rounded-lg object-cover"
        />
        <P>
          An NFT (non-fungible token) is a unique digital item stored on a blockchain. NFTs can represent almost anything, and serve as digital record
          of ownership. NFTs operate on blockchain technology.
          <span className="font-semibold text-[#A519D7] underline">
            <a href="/insights/what-is-blockchain">Learn more here</a>
          </span>
        </P>
        <P>
          NFTs are unique digital collectibles like artwork, music, or videos. You can buy and sell them online by often using cryptocurrency. Even
          though they&apos;ve been around for a while, NFTs are becoming more popular, especially for digital art. The market for NFTs is huge and is
          close to being as valuable as the traditional art market. One of the key things that makes NFTs valuable is that they are rare or
          one-of-a-kind, unlike most digital things which can be easily copied. This rarity could make them more valuable, similar to other
          collectible items.
          <span className="font-semibold text-[#A519D7] underline">
            <a href="/insights/what-makes-nft-valuable">Learn more here</a>
          </span>
        </P>
      </div>
      <div id="difference">
        <h2 className="my-6 text-3xl font-bold">How is an NFT different from a Cryptocurrency?</h2>
        <P>
          NFTs and cryptocurrencies share similarities, such as their use in Web3 and their representation of digital assets. However, they differ
          significantly in concept and use. NFTs (Non-fungible Tokens) are unique and irreplaceable, similar to trading cards; for example, you
          can&apos;t trade a Michael Jordan rookie card for a LeBron James rookie card because they represent different things. In contrast,
          cryptocurrencies are fungible, meaning one Bitcoin is interchangeable with another, much like how all $10 bills have the same value.
        </P>
        <H2>What&apos;s their Use Case?</H2>
        <ul className="-mt-2 ml-14 list-disc leading-loose tracking-wide dark:text-gray-300">
          <li className="mb-3">
            <span className="font-bold">Cryptocurrencies</span>
            are often used as a digital currency for transactions and potential investment. You can use Bitcoin to buy a coffee (if the merchant
            accepts it) or hold onto when trading it hoping it goes up in value.
          </li>
          <li className="mb-6">
            <span className="font-bold">NFTs</span>
            represent ownership of digital or physical assets. NFTs can be digital art, music, in-game items, or even real-world things like property.
          </li>
        </ul>
        <P>
          Keep in mind that both complement each other and has its own importance in the blockchain. For example, you might need cryptocurrency to buy
          an NFT, or sell your NFT to earn some cryptocurrency. Both utilizes the blockchain technology to track ownership.
        </P>
      </div>
      <div id="history">
        <H2>When did NFT became popular?</H2>
        <P>
          NFTs gained widespread recognition in 2017, largely due to the launch of CryptoKitties, a blockchain-based game that allowed players to
          collect, breed, and trade virtual cats. While earlier concepts like colored coins existed around 2012, the user-friendly features of the
          Ethereum blockchain were pivotal in facilitating the creation, storage, and trading of NFTs, driving the NFT boom that year.
        </P>
        <Image
          src="/assets/InsightsAsset/AxieInfinity.jpg"
          width={1920}
          height={1080}
          alt="Axie Infinity"
          className="max-h-[25rem] max-w-full rounded-lg object-cover object-top"
        />
        <P>
          In the Philippines, the NFT boom has primarily focused on digital art and gaming. NFTs offered talented artists a chance for international
          recognition by providing a secure way to prove ownership of their works and potentially earn a living. Additionally, the play-to-earn model
          of games like Axie Infinity surged during the pandemic, appealing to Filipinos seeking income amid economic challenges. The ability to own
          and trade valuable in-game assets has paved the way for future play-to-earn games and increased exposure to blockchain technology in the
          country.
        </P>
      </div>
      <div id="types">
        <h2 className="my-6 text-3xl font-bold">Different types of NFTs</h2>
        <P>
          Blockchains are distributed public ledgers that record transactions and are where NFTs are found. Most likely, you are most familiar with
          blockchain technology as the backbone that enables cryptocurrencies. In particular, NFTs are generally maintained on the Ethereum network,
          though they can also be maintained on other networks.
        </P>
        <P>An NFT is produced, or minted, using digital representations of both material and immaterial objects.</P>
        <ul className="-mt-2 ml-14 list-disc leading-loose tracking-wide dark:text-gray-300">
          <li className="mb-3">
            <span className="font-bold">Art NFTs:</span>
            These are the most common, representing digital artwork ranging from single-edition pieces to collections with varying degrees of rarity.
          </li>
          <li className="mb-6">
            <span className="font-bold">Collectible NFTs:</span>
            Think of virtual trading cards. They include profile pictures (PFPs) such as those from the popular Bored Ape Yacht Club or Cryptopunks
            collections, as well as other collectibles like memes or virtual sports highlights.
          </li>
          <li className="mb-6">
            <span className="font-bold">Gaming NFTs:</span>
            In play-to-earn games, NFTs are frequently used to purchase in-game goods, virtual land, or characters. These NFTs have in-game uses and
            can be exchanged for real money.
          </li>
        </ul>
        <P>And a few more including:</P>
        <ul className="my-2 ml-14 flex list-disc flex-col space-y-2 font-bold dark:text-gray-300">
          <li>Utility NFTs</li>
          <li>Virtual Real Estate NFTs</li>
          <li>Domain NFTs</li>
          <li>Music NFTs</li>
          <li>Ticketing NFTs</li>
          <li>Charitable NFTs</li>
          <li>Real-world Asset NFTs</li>
          <li>Decentralized Finance (DeFi) NFTs</li>
        </ul>
        <br />
        <P>{`These are but the few examples of NFTs that can be found in different marketplaces. To find out more on what gives NFT their value and how its economy work, move to the next topic.`}</P>
      </div>
    </article>
  );
};

export default page;
