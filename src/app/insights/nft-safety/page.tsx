import Image from "next/image";
import { P } from "../_components/TailwindTags";

export default function NFTSafety() {
  return (
    <section>
      <div id="summary">
        <h1 className="my-4 text-4xl font-bold md:text-5xl">
          How Safe Are My NFTs?
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
      <div id="security">
        <h2 className="my-6 text-2xl font-bold">Are NFTs Secure?</h2>
      </div>
      <div id="beware">
        <h2 className="my-6 text-2xl font-bold">Commmon Cyber Attacks</h2>
      </div>
      <P>{`Check out how you can protect your wallet and account in your web3 journey.`}</P>
      <span className="font-semibold text-[#A519D7] underline ">
        <a href="/insights/what-makes-nft-valuable">Learn more here</a>
      </span>
    </section>
  );
}
