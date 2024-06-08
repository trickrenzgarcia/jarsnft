import Image from "next/image";
import { P } from "../_components/TailwindTags";

export default function ProtectAccPage() {
  const tips = [
    "Educate Yourself: Understand the basics of blockchain, cryptocurrencies, smart contracts, and decentralized applications (dApps). Knowing how these technologies work will help you make informed decisions and identify potential risks.",
    "Secure Your Private Keys: Your private keys are the keys to your crypto assets. Keep them secure and never share them with anyone. Consider using hardware wallets or reputable software wallets with strong security features.",
    "Use Reputable Platforms: When trading or interacting with cryptocurrencies, use reputable and well-established platforms. Research exchanges, wallets, and dApps before using them, and be cautious of new or unknown platforms.",
    "Beware of Scams: Be vigilant against phishing scams, fraudulent ICOs, fake airdrops, and other scams prevalent in the crypto space. Verify the authenticity of websites, projects, and communication channels before providing any personal or financial information.",
    "Enable Two-Factor Authentication (2FA): Enable 2FA wherever possible to add an extra layer of security to your accounts. This typically involves receiving a code on your phone or email in addition to your password when logging in.",
    "Update Software Regularly: Keep your wallets, software, and devices updated with the latest security patches and fixes. Outdated software may contain vulnerabilities that could be exploited by attackers.",
    "Use Strong Passwords: Create strong, unique passwords for your accounts and avoid using the same password across multiple platforms. Consider using a password manager to generate and store complex passwords securely.",
    "Be Cautious with Smart Contracts: Review smart contracts carefully before interacting with them, especially if they involve financial transactions or investments. Understand the code and potential risks associated with it.",
  ];

  const images = [
    "/assets/InsightsAsset/educate.jpg",
    "/assets/InsightsAsset/protectKey.jpg",
    "/assets/InsightsAsset/deceptiveSite.jpg",
    "/assets/InsightsAsset/scammer.jpg",
    "/assets/InsightsAsset/2FA.jpg",
    "/assets/InsightsAsset/softwareUpdate.jpg",
    "/assets/InsightsAsset/strongPassword.jpg",
    "/assets/InsightsAsset/smartContract.jpg",
  ];

  return (
    <section>
      <div id="overview">
        <h1 className="my-4 text-4xl font-bold md:text-5xl">
          Protect Your Account
        </h1>
        <Image
          src="/assets/InsightsAsset/protectKey.jpg"
          width={1920}
          height={1080}
          alt="NFT Benefits Image"
          className=" mb-12 max-h-[15rem] max-w-full rounded-lg object-cover "
        />
        <h2 className="my-6 text-3xl font-bold">Overview</h2>
        <P>{`A Guide to Avoiding Scams and Protecting Yourself
        The NFT market is thriving, but with opportunity comes risk. 
        NFTs, like any valuable asset class, attract scammers who seek to exploit the unwary. 
        This guide will provide you with the knowledge you need to confidently navigate the NFT world while protecting your digital collectibles and privacy.`}</P>
      </div>
      <div id="scams">
        <h2 className="my-6 text-3xl font-bold">Common NFT Scams</h2>
        <P>{`Before we get started, let's look at some of the most common NFT scams used by criminals. 
        We'll explain how to spot them and prevent being a victim:`}</P>
        <ul className="-mt-2 ml-14 list-disc leading-loose tracking-wide dark:text-gray-300">
          <li className="mb-3">
            <span className="font-bold">Rug Pulls:</span>
            {` In these deceitful projects, producers hype up an NFT collection, resulting in huge investment. 
            However, following the launch, the creators vanish with the invested monies, leaving customers with worthless NFTs.  `}
          </li>
          <li className="mb-3">
            <span className="font-bold">Fake Airdrops & Giveaways:</span>
            {` Scammers promise victims free NFTs. Clicking fraudulent links in these promotions can deplete your cryptocurrency wallet. 
            There are signs that we can watch out for, these includes unverified accounts advertising prizes and demanding you to connect your wallet to untrusted networks.`}
          </li>
          <li className="mb-3">
            <span className="font-bold">Rug Pulls:</span>
            {` It is the practice of sending deceptive emails or messages that look like official markets or customer support channels. These messages attempt to deceive you into disclosing your login information or visiting malicious links that steal your NFTs. 
            Red signs include emails with grammatical problems or haste, pressure to act immediately, and unusual sender addresses or website URLs.`}
          </li>
          <li className="mb-6">
            <span className="font-bold">
            Phishing:
            </span>
            {` To prevent unauthorized changes, implement multi-factor authentication (MFA) for accessing DNS management interfaces.
            By implementing these preventive measures, you can significantly improve the security of your NFTs and reduce your vulnerability to various cyber attacks.`}
          </li>
        </ul>
      </div>
      <div id="protect">
        <h2 className="my-6 text-3xl font-bold">
          How to protect your Marketplace Account
        </h2>
        <h2 className="my-6 text-3xl font-bold">How to protect your wallet</h2>
        <h2 className="my-6 text-3xl font-bold">
          How to Protect Your Transactions
        </h2>
        <h2 className="my-6 text-3xl font-bold">
          How to Protect Your Digital Identity
        </h2>
      </div>
      <div id="conclusion">
        <hr />
        <h2 className="my-6 text-3xl font-bold">Conclusion</h2>
      </div>
      {/* <h2 className="my-6 text-3xl font-bold">How to Stay Protected in Web3</h2>
      <ul className="-mt-2 ml-14 list-decimal leading-loose tracking-wide dark:text-gray-300">
        {tips.map((tip, index) => (
          <li className="mb-3" key={index}>
            <span className="font-bold">{index + 1} .</span>
            {tip}
          </li>
        ))}
      </ul>
      {images.map((image, index) => (
        <div className="self-center" key={index}>
          <Image
            src={image}
            width={1920}
            height={1080}
            alt="Insights Image"
            className=" mb-12 max-h-[20rem] max-w-full rounded-lg object-cover "
            quality={80}
          />
        </div>
      ))} */}
    </section>
  );
}
