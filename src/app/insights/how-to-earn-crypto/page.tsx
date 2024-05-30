import Image from "next/image";
import { P } from "../_components/TailwindTags";

export default function HowToEarnCrypto() {
  return (
    <section>
      <div id="summary">
        <h1 className="my-4 text-4xl font-bold md:text-5xl">
          How to earn Cryptocurrency?
        </h1>
        <h2 className="my-6 text-2xl font-bold">Overview</h2>
        {/* create a list of  */}
        {/* <P>{`The Blockchain is a type of database that is specifically designed to be secure. 
        Consider a shared spreadsheet that keeps track of all transactions and changes, but instead of being stored on a single server, it is duplicated and distributed across multiple computers. 
        Transactions are organized into blocks and linked together to form a chain, hence the name "Blockchain," with each computer on the network having its own copy.`}</P> */}
      </div>
      <div id="buying">
        <h2 className="my-6 text-2xl font-bold">Buy your first Crypto</h2>
      </div>
      <div id="earn">
        <h1 className="my-4 text-4xl font-bold md:text-5xl">
          Ways to Earn Crypto
        </h1>
        <h2 className="my-6 text-2xl font-bold">Gaming</h2>
        <h2 className="my-6 text-2xl font-bold">Mining</h2>
        <h2 className="my-6 text-2xl font-bold">Trading</h2>
      </div>
      <div id="tips">
        <h2 className="my-6 text-2xl font-bold">Tips to invest safely</h2>
      </div>
      <div id="Conclusion">
        <h2 className="my-6 text-2xl font-bold">Conclusion</h2>
      </div>
    </section>
  );
}
