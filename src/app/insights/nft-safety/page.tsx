import Image from "next/image";
import { P } from "../_components/TailwindTags";

export default function NFTSafety() {
  return (
    <section>
      <div id="overview">
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
        <h2 className="my-6 text-3xl font-bold">Overview</h2>
        <P>{`Non-Fungible Tokens (NFTs) have transformed the digital world by allowing for unique ownership of digital assets such as art, music, and virtual real estate. 
        Unlike cryptocurrency, each NFT is unique and cannot be exchanged one-on-one. 
        However, the rapid adoption of NFTs has raised serious security concerns. 
        NFT security is critical, as these digital assets are vulnerable to theft, scams, and cyber-attacks. 
        Understanding the risks and implementing strong security measures can help you protect your investments and personal interests in the NFT space.`}</P>
      </div>
      <div id="security">
        <h2 className="my-6 text-3xl font-bold">Are NFTs Secure?</h2>
        <P>{`NFTs take advantage of blockchain technology to provide robust security features. 
        The blockchain functions as a public ledger, permanently recording ownership and removing the possibility of forgeries. 
        Anyone can verify this ownership history, which promotes trust and transparency. `}</P>
        <P>{`NFT data is stored on a distributed ledger, making it resistant to physical damage or loss. 
        Creators can also specify permissions and control how their NFTs are used.
        As blockchain technology advances, we can expect even more security features to emerge, cementing NFTs as a secure means of digital ownership.`}</P>
        <P>{`Therefore we can agree that NFTs are secure due to its decentralized nature provided by the blockchain, though it is not invincible from any cyber-attacks. We should consider the risks and safety of NFTs.`}</P>
      </div>
      <div id="beware">
        <h2 className="my-6 text-3xl font-bold">Common Cyber Attacks</h2>
        <h4 className="my-6 text-lg font-bold tracking-wider">
          Decentralized Finance (DeFi)
        </h4>
      </div>
      <P>{`Check out how you can protect your wallet and account in your web3 journey.`}</P>
      <span className="font-semibold text-[#A519D7] underline ">
        <a href="/insights/what-makes-nft-valuable">Learn more here</a>
      </span>
    </section>
  );
}
