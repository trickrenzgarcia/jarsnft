import Image from "next/image";
import { P } from "../_components/TailwindTags";

export default function WhatCryptoPage() {
  return (
    <section>
      <div id="summary">
        <h1 className="my-4 text-4xl font-bold md:text-5xl">
          What is a Cryptocurrency?
        </h1>
        <Image
          src="/assets/InsightsAsset/blockchain.jpg"
          width={1920}
          height={1080}
          alt="Blockchain Image"
          className="mb-12 max-h-[15rem] max-w-full rounded-lg object-cover"
        />
        <h2 className="my-6 text-2xl font-bold">Summary</h2>
        {/* <P>{`The Blockchain is a type of database that is specifically designed to be secure. 
        Consider a shared spreadsheet that keeps track of all transactions and changes, but instead of being stored on a single server, it is duplicated and distributed across multiple computers. 
        Transactions are organized into blocks and linked together to form a chain, hence the name "Blockchain," with each computer on the network having its own copy.`}</P> */}
      </div>
      <div id="work">
        <h2 className="my-6 text-2xl font-bold">How does it work?</h2>
      </div>
      <div id="history">
        <h2 className="my-6 text-2xl font-bold">History of Cryptocurrency</h2>
      </div>
      <div id="safety">
        <h2 className="my-6 text-2xl font-bold">Are Cryptocurrencies Safe?</h2>
      </div>
      <div id="usecase">
        <h2 className="my-6 text-2xl font-bold">Use Cases</h2>
      </div>
      <div id="types">
        <h2 className="my-6 text-2xl font-bold">Types of Cryptocurrency</h2>
      </div>
    </section>
  );
}
