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
        Attacks by Phishing
        </h4>
        <P>{`Phishing is the practice of impersonating a reliable source in order to deceive consumers into disclosing their passwords, private keys, or other sensitive information. Attackers may design fake websites or send shady emails that impersonate credible NFT wallet providers or marketplaces.`}</P>
        
        <h4 className="my-6 text-lg font-bold tracking-wider">
        Malware and Keyloggers
        </h4> 
        <P>{`On a user's device, malware can be installed with the intention of stealing passwords or private keys. Malware called keyloggers records keystrokes on a user's device and may be able to obtain login passwords for NFT wallets and accounts.`}</P>
        <P>{`Here are the preventive measures for such attack:`}</P>
        <ul className="-mt-2 ml-14 list-disc leading-loose tracking-wide dark:text-gray-300">
          <li className="mb-3">
            <span className="font-bold">Security and Transparency:</span>
            {`Unlike traditional systems in which trust is based on a central authority, blockchain generates a tamper-proof public record. Everyone on the network has a copy, making it extremely difficult to modify or cheat. This transparency promotes trust and security in transactions.`}
          </li>

          <li className="mb-3">
            <span className="font-bold">Efficiency:</span>
            {`Blockchain eliminates the middleman. Transactions can be completed directly between parties, eliminating the need for a bank or other institution to verify them. This can save both time and money.`}
          </li>
          <li className="mb-6">
            <span className="font-bold">Reduced Errors:</span>
            {`Errors are reduced because everyone has the same record, leaving less room for mistakes or inaccuracies when information is copied or transferred between systems..`}
          </li>
        </ul>
        <h4 className="my-6 text-lg font-bold tracking-wider">
        Smart Contract Vulnerabilities
        </h4>
        <P>{`If they are not carefully examined, smart contracts—which make it easier to create and transfer NFTs—may have weaknesses. These weaknesses can be used by hackers to manipulate transactions or steal away money.`}</P>
        <h4 className="my-6 text-lg font-bold tracking-wider">
        Social Engineering
        </h4>
        <P>{`Social engineering attacks involve tricking people into performing actions or disclosing sensitive information. This could include persuading someone to send an NFT to an address controlled by the attacker or revealing their wallet's private key.`}</P>
        <h4 className="my-6 text-lg font-bold tracking-wider">
        DNS Spoofing
        </h4>
        <P>{`DNS spoofing refers to redirecting traffic from a legitimate website to a malicious one. Users attempting to access a legitimate NFT marketplace may be redirected to a fraudulent site, where their login credentials or other sensitive information may be compromised.`}</P>
      </div>
      <P>{`Check out how you can protect your wallet and account in your web3 journey.`}</P>
      <span className="font-semibold text-[#A519D7] underline ">
        <a href="/insights/what-makes-nft-valuable">Learn more here</a>
      </span>
    </section>
  );
}
