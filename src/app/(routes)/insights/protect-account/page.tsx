import Image from "next/image";
import { P } from "../_components/TailwindTags";

export default function ProtectAccPage() {
  return (
    <section>
      <div id="overview">
        *
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
        <P>{`With newer technologies such as NFTs and Blockchain emerging, it is important to be educated on how that cyberspace works.
        Therefore we present to you a guide to avoiding scams and protecting yourself.
        The NFT market is thriving, but with opportunity comes risk. 
        NFTs, like any valuable asset class, attract scammers who seek to exploit the unwary. 
        This guide will provide you with the knowledge you need to confidently navigate the NFT world while protecting your digital collectibles and privacy.`}</P>
      </div>
      <div id="scams">
        <hr />
        <h2 className="my-6 text-3xl font-bold">Common NFT Scams</h2>
        <P>{`Before we get started, let's look at some of the most common NFT scams used by scammers. 
        We'll explain how to spot them and prevent being a victim:`}</P>
        <ul className="-mt-2 ml-14 list-disc leading-loose tracking-wide dark:text-gray-300">
          <li className="mb-3">
            <span className="font-bold">Rug Pulls:</span>
            {` In these deceptive projects, producers hype up an NFT collection, resulting in huge investment. 
            However, following the launch, the creators vanish with the invested monies, leaving customers with worthless NFTs.  `}
          </li>
          <li className="mb-3">
            <span className="font-bold">Fake Airdrops & Giveaways:</span>
            {` Scammers promise victims free NFTs. And so, clicking fraudulent links in these promotions can deplete your cryptocurrency wallet. 
            There are signs that you can watch out for, these includes unverified accounts advertising prizes and demanding you to connect your wallet to untrusted networks.`}
          </li>
          <li className="mb-3">
            <span className="font-bold">Phishing:</span>
            {` Deceptive emails or messages resemble legitimate marketplaces or support channels. These messages attempt to trick you into disclosing your login information or clicking malicious links that steal your NFTs.  Red flags include emails with grammatical errors or urgency, pressure to act quickly, and unfamiliar sender addresses or website URLs.`}
          </li>
          <li className="mb-6">
            <span className="font-bold">Fake Customer Support:</span>
            {` Scammers impersonate marketplace support to steal login information. They may urge you to disclose your seed phrase or private key in the name of addressing an issue.  
            Red flags include customer support contacting you unexpectedly and requesting your seed phrase or private key.`}
          </li>
        </ul>
        <h4 className="my-6 text-lg font-bold tracking-wider">
          Tips for Avoiding NFT Scams
        </h4>
        <ol className="-mt-2 ml-14 list-decimal leading-loose tracking-wide dark:text-gray-300">
          <li className="mb-3">
            <span className="font-bold">Do Thorough Research:</span>
            {` Always conduct thorough research on the product, team, and community behind an NFT before investing.`}
          </li>
          <li className="mb-3">
            <span className="font-bold">Verify Authenticity:</span>
            {` Use official links from credible sources and cross-check with various references.`}
          </li>
          <li className="mb-3">
            <span className="font-bold">Secure Your Wallet:</span>
            {` Never disclose your private keys or seed phrases. Use hardware wallets to increase security.`}
          </li>
          <li className="mb-3">
            <span className="font-bold">
              Beware of Too-Good-to-Be-True Offers::
            </span>
            {` If anything appears too good to be true, it most likely is.`}
          </li>
          <li className="mb-6">
            <span className="font-bold">Use Reliable Platforms:</span>
            {` Stick with well-known and reputable NFT marketplaces.
            Stay Informed: To avoid developing frauds, stay up to date on the newest news and updates in the NFT and crypto arena.`}
          </li>
        </ol>
      </div>
      <div id="protect">
        <hr />
        <h2 className="my-6 text-3xl font-bold">
          How to protect your Marketplace Account and Crypto Wallet
        </h2>
        <Image
          src="/assets/InsightsAsset/scammer.jpg"
          width={1920}
          height={1080}
          alt="NFT Benefits Image"
          className=" mb-12 max-h-[15rem] max-w-full rounded-lg object-cover "
        />
        <P>{`The first line of security is to protect the accounts you use to connect with the NFT ecosystem. 
        This includes your NFT marketplace accounts and your cryptocurrency wallet. Here are a few ways to protect your marketplace account:`}</P>
        <ul className="-mt-2 ml-14 list-disc leading-loose tracking-wide dark:text-gray-300">
          <li className="mb-3">
            <span className="font-bold">Two-Factor Authentication (2FA):</span>
            {` Enable 2FA for all NFT marketplaces you use. It increases security by requiring a cellphone code or email code for login, significantly reducing the chance of unauthorized access.`}
          </li>
          <li className="mb-3">
            <span className="font-bold">Verified Accounts:</span>
            {` Look for the verification badge on seller profiles. This signifies that the platform has verified the seller's identity, adding legitimacy to their listings.`}
          </li>
          <li className="mb-3">
            <span className="font-bold">Strong Passwords:</span>
            {` Create unique, difficult passwords for each account. Consider using a password manager to create and securely store your passwords. Avoid using information that is easily guessed, such as birthdays and pet names.`}
          </li>
          <li className="mb-3">
            <span className="font-bold">Hardware Wallet:</span>
            {` Store your NFTs in a hardware wallet, which is a physical device that keeps your cryptocurrency offline and dramatically minimizes the danger of hacking. Hardware wallets require physical access to confirm transactions, which adds another layer of security.`}
          </li>
          <li className="mb-3">
            <span className="font-bold">Seed Phrase Security:</span>
            {` Your seed phrase provides access to your cryptocurrency wallet. Treat it as a bank account PIN. Never share it with anyone and keep it offline and encrypted, preferably on a piece of paper in a secure area.`}
          </li>
          <li className="mb-6">
            <span className="font-bold">Seed Phrase Security:</span>
            {` Use a separate wallet for NFT transactions. This reduces the potential damage if a single wallet is compromised.`}
          </li>
        </ul>
        <P>{`Lastly, knowing what the common scams (as we tackled earlier) and cyber attacks that hackers and scammers use to access and steal your NFTs is also vital in protecting your account.`}</P>
        <h2 className="my-6 text-3xl font-bold">
          How to Protect Your Transactions
        </h2>
        <ol className="-mt-2 ml-14 list-decimal leading-loose tracking-wide dark:text-gray-300">
          <li className="mb-3">
            <span className="font-bold">Examine Smart Contracts:</span>
            {` Before engaging with any NFT project, grasp the smart contract's features. Smart contracts are the self-executing code that powers NFTs. 
            Contracts with strange permissions should be avoided, as they have the ability to steal your cash or NFTs.`}
          </li>
          <li className="mb-3">
            <span className="font-bold">Verify Transaction Details:</span>
            {` Always double-check the NFT you're purchasing, the recipient address, and the amount before confirming the transaction. One false click could send your NFT to the incorrect address.`}
          </li>
          <li className="mb-6">
            <span className="font-bold">{`Don't rush:`}</span>
            {` Take your time when conducting transactions. Read all prompts carefully, and never feel compelled to act immediately. Scammers frequently use a sense of haste to push you into a mistake.`}
          </li>
        </ol>
        <P>{`When purchasing, selling, or transferring NFTs, it is critical to remain attentive and protect your transactions against manipulation or errors.`}</P>
        <h2 className="my-6 text-3xl font-bold">
          How to Protect Your Digital Identity
        </h2>
        <P>{`When navigating the NFT realm, be cautious about the information you share online. Scammers might use personal information to target you. We'll look at the strategies to protect your privacy:`}</P>
        <h4 className="my-6 text-lg font-bold tracking-wider">
          Privacy-Focused Marketplaces
        </h4>
        <P>{`Look for markets that include additional privacy features, such as hiding some transaction details. This can help to limit the quantity of personal information available on the blockchain.`}</P>
        <h4 className="my-6 text-lg font-bold tracking-wider">
          Limited Social Media Exposure
        </h4>
        <P>{`While marketing your NFTs might be useful, be cautious about what information you publicly publish about your holdings. Avoid disclosing specifics about your whole collection or the value of your NFTs.`}</P>
        <h4 className="my-6 text-lg font-bold tracking-wider">
          Separate Accounts
        </h4>
        <P>{`Consider utilizing a second social media account for your NFT activities to reduce the link to your personal identity. This helps to compartmentalize your internet persona.`}</P>
        <h4 className="my-6 text-lg font-bold tracking-wider">
          VPN for Public Wi-Fi
        </h4>
        <P>{`When you are using public a Wi-Fi to access NFT marketplaces it can be dangerous as public Wi-Fi has the risk of your credentials being accessed and stolen by those that own the network you are using. When accessing NFT marketplaces via public Wi-Fi, use a VPN to reduce the risk of attacks from hackers and keep your transactions and sensitive information protected.`}</P>
        <P>{`Here are a few examples of VPNs you can use:`}</P>
        <ol className="-mt-2 ml-14 list-decimal leading-loose tracking-wide ">
          <li>
            <span className="font-bold text-white">ExpressVPN</span>
            <ul className="-mt-2 ml-7 list-disc dark:text-gray-300">
              <li className="mt-3">
                <span className="font-bold">Features:</span>
                {` High-speed servers, strong encryption, no-logs policy, 24/7 customer support, and user-friendly apps for different devices.`}
              </li>
              <li className="mt-3">
                <span className="font-bold">Pros:</span>
                {` Excellent speed, consistent performance, and compatibility with streaming providers.`}
              </li>
              <li className="mt-3">
                <span className="font-bold">Cons:</span>
                {` Slightly higher cost than some other alternatives.`}
              </li>
            </ul>
          </li>
          <li>
            <span className="font-bold text-white">NordVPN</span>
            <ul className="-mt-2 ml-7 list-disc dark:text-gray-300">
              <li className="mt-3">
                <span className="font-bold">Features:</span>
                {` Double VPN for added protection, CyberSec to stop advertisements and malware, a no-logs policy, and over 5,000 servers globally.`}
              </li>
              <li className="mt-3">
                <span className="font-bold">Pros:</span>
                {` Strong security features, affordable long-term subscriptions, and compatibility with most streaming providers.`}
              </li>
              <li className="mt-3">
                <span className="font-bold">Cons:</span>
                {` Certain servers can be slow at times.`}
              </li>
            </ul>
          </li>
          <li>
            <span className="font-bold text-white">CyberGhostVPN</span>
            <ul className="-mt-2 ml-7 list-disc dark:text-gray-300">
              <li className="mt-3">
                <span className="font-bold">Features:</span>
                {` User-friendly apps, strong encryption, a no-logs policy, dedicated streaming servers, and more than 7,000 servers worldwide.`}
              </li>
              <li className="mt-3">
                <span className="font-bold">Pros:</span>
                {` Very user-friendly, suitable for streaming and torrenting, with reasonable cost.`}
              </li>
              <li className="mt-3">
                <span className="font-bold">Cons:</span>
                {` Some servers operate at slower rates.`}
              </li>
            </ul>
          </li>
        </ol>
      </div>
      <div id="conclusion">
        <hr />
        <h2 className="my-6 text-3xl font-bold">Conclusion</h2>
        <P>{`The world of NFTs provides several opportunities for both collectors and creators. However, with this excitement comes the duty of protecting yourself from those who may attempt to exploit it. Understanding common scams, securing your accounts and transactions, and protecting your privacy will allow you to confidently navigate the NFT world. Remember: information is power.  Stay informed, use caution, and enjoy the new world of digital ownership!`}</P>
      </div>
    </section>
  );
}
