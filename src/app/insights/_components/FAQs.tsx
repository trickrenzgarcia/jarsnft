"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQsInsight() {
  return (
    <section className="mb-16">
      <h3 className="my-6 text-xl font-bold">
        Frequently Asked Questions (FAQs)
      </h3>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Q1. What can be an NFT?</AccordionTrigger>
          <AccordionContent>
            <span className="leading-loose tracking-wide dark:text-gray-300">
              NFTs can represent a wide range of digital assets, including
              artwork, music, videos, virtual real estate, in-game items, and
              even tweets.
            </span>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            Q2. What are some common uses for NFTs?
          </AccordionTrigger>
          <AccordionContent>
            <span className="leading-loose tracking-wide dark:text-gray-300">
              Common uses include digital art, collectibles, virtual real
              estate, gaming items, music, and ticketing for events. They are
              also used for verifying the ownership and authenticity of physical
              assets.
            </span>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            Q3. Can NFTs be copied or duplicated?
          </AccordionTrigger>
          <AccordionContent>
            <span className="leading-loose tracking-wide dark:text-gray-300">
              The digital content associated with an NFT can be copied, but the
              ownership and provenance verified by the blockchain cannot be
              duplicated. This is akin to owning the original painting versus
              owning a print.
            </span>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            Q4. What are the risks associated with NFTs?
          </AccordionTrigger>
          <AccordionContent>
            <span className="leading-loose tracking-wide dark:text-gray-300">
              Risks include market volatility, potential loss of access to your
              digital wallet, legal uncertainties regarding intellectual
              property, and the possibility of purchasing counterfeit or
              plagiarized content.
            </span>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>Q5. Can I lose my NFT?</AccordionTrigger>
          <AccordionContent>
            <span className="leading-loose tracking-wide dark:text-gray-300">
              Yes, if you lose access to your digital wallet where the NFT is
              stored, you may lose the NFT. It’s important to securely store
              your wallet’s private keys and backup phrases.
            </span>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>
            Q6. How do royalties work with NFTs?
          </AccordionTrigger>
          <AccordionContent>
            <span className="leading-loose tracking-wide dark:text-gray-300">
              Creators can set up smart contracts for their NFTs to receive
              royalties automatically each time their NFT is sold on a secondary
              market. This allows artists to earn ongoing revenue from their
              work.
            </span>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger>
            Q7. What are the risks associated with NFTs?
          </AccordionTrigger>
          <AccordionContent>
            <span className="leading-loose tracking-wide dark:text-gray-300">
              Risks include market volatility, potential loss of access to your
              digital wallet, legal uncertainties regarding intellectual
              property, and the possibility of purchasing counterfeit or
              plagiarized content.
            </span>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-8">
          <AccordionTrigger>Q8. What is a digital wallet?</AccordionTrigger>
          <AccordionContent>
            <span className="leading-loose tracking-wide dark:text-gray-300">
              A digital wallet is an application that allows you to store, send,
              and receive digital assets like cryptocurrencies and NFTs.
              Examples include MetaMask, Trust Wallet, and Coinbase Wallet.
            </span>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-9">
          <AccordionTrigger>
            Q9. What are the key features of blockchain?
          </AccordionTrigger>
          <AccordionContent>
            <span className="leading-loose tracking-wide dark:text-gray-300">
              A digital wallet is an application that allows you to store, send,
              and receive digital assets like cryptocurrencies and NFTs.
              Examples include MetaMask, Trust Wallet, and Coinbase Wallet.
            </span>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-10">
          <AccordionTrigger>
            Q10. What are some common applications of blockchain?
          </AccordionTrigger>
          <AccordionContent>
            <span className="leading-loose tracking-wide dark:text-gray-300">
              Common applications include cryptocurrencies (Bitcoin, Ethereum),
              supply chain management, voting systems, identity verification,
              smart contracts, and NFTs.
            </span>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-11">
          <AccordionTrigger>
            Q11. How is blockchain different from traditional databases?
          </AccordionTrigger>
          <AccordionContent>
            <span className="leading-loose tracking-wide dark:text-gray-300">
              Unlike traditional databases managed by a central authority,
              blockchain is decentralized and managed by a network of nodes.
              Blockchains also provide greater transparency and immutability
              compared to traditional databases.
            </span>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-12">
          <AccordionTrigger>Q12. Can blockchain be hacked?</AccordionTrigger>
          <AccordionContent>
            <span className="leading-loose tracking-wide dark:text-gray-300">
              While blockchain itself is very secure, individual vulnerabilities
              such as weak passwords, phishing attacks, and poorly implemented
              smart contracts can be exploited. The security of the network
              depends on the collective security of its participants.
            </span>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
