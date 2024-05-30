import Image from "next/image";
import { P } from "../_components/TailwindTags";

export default function TradeNftPage() {
  return (
    <section>
      <div id="summary">
        <h1 className="my-4 text-4xl font-bold md:text-5xl">
          How to Trade your NFTs?
        </h1>
        <h2 className="my-6 text-2xl font-bold">Overview</h2>
        <P>{`In this article we will tackle on how to Buy and Sell NFTs in JarsNFT.`}</P>
      </div>
      <div id="buying">
        <h2 className="my-6 text-2xl font-bold">How to Buy</h2>
      </div>
      <div id="selling">
        <h2 className="my-6 text-2xl font-bold">How to Sell</h2>
      </div>
    </section>
  );
}
