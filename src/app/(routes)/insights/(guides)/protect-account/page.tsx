import Image from "next/image";
import { P, H1, H2, H4, UL, OL } from "../../_components/TailwindTags";

export default function ProtectAccPage() {
  return (
    <section>
      <div id="overview">
        <H1>Protect Your Account</H1>
        <Image
          src="/assets/InsightsAsset/hacker.jpg"
          width={1920}
          height={1080}
          alt="NFT Benefits Image"
          className="mb-12 max-h-[20rem] max-w-full rounded-lg object-cover"
        />
        <H2>Overview</H2>
        <P>
          With newer technologies such as NFTs and Blockchain emerging, it is important to be educated on how that cyberspace works. Therefore we
          present to you a guide to avoiding scams and protecting yourself. The NFT market is thriving, but with opportunity comes risk. NFTs, like
          any valuable asset class, attract scammers who seek to exploit the unwary. This guide will provide you with the knowledge you need to
          confidently navigate the NFT world while protecting your digital collectibles and privacy.
        </P>
      </div>
      <div id="scams">
        <hr />
        <H2>Common NFT Scams</H2>
        <UL>
          <li>
            <b>Rug Pulls:</b> In these deceptive projects, producers hype up an NFT collection, resulting in huge investment. However, following the
            launch, the creators vanish with the invested monies, leaving customers with worthless NFTs.
          </li>
          <li>
            <b>Fake Airdrops & Giveaways:</b> Scammers promise victims free NFTs. Clicking fraudulent links in these promotions can deplete your
            cryptocurrency wallet. There are signs that you can watch out for, including unverified accounts advertising prizes and demanding you to
            connect your wallet to untrusted networks.
          </li>
          <li>
            <b>Phishing:</b> Deceptive emails or messages resemble legitimate marketplaces or support channels. These messages attempt to trick you
            into disclosing your login information or clicking malicious links that steal your NFTs. Red flags include emails with grammatical errors
            or urgency, pressure to act quickly, and unfamiliar sender addresses or website URLs.
          </li>
          <li>
            <b>Fake Customer Support:</b> Scammers impersonate marketplace support to steal login information. They may urge you to disclose your seed
            phrase or private key in the name of addressing an issue. Red flags include customer support contacting you unexpectedly and requesting
            your seed phrase or private key.
          </li>
        </UL>
        <H4>Tips for Avoiding NFT Scams</H4>
        <OL>
          <li>
            <b>Do Thorough Research:</b> Always conduct thorough research on the product, team, and community behind an NFT before investing.
          </li>
          <li>
            <b>Verify Authenticity:</b> Use official links from credible sources and cross-check with various references.
          </li>
          <li>
            <b>Secure Your Wallet:</b> Never disclose your private keys or seed phrases. Use hardware wallets to increase security.
          </li>
          <li>
            <b>Beware of Too-Good-to-Be-True Offers:</b> If anything appears too good to be true, it most likely is.
          </li>
          <li>
            <b>Use Reliable Platforms:</b> Stick with well-known and reputable NFT marketplaces. Stay informed to avoid developing frauds; stay up to
            date on the newest news and updates in the NFT and crypto arena.
          </li>
        </OL>
      </div>
      <div id="protect">
        <hr />
        <H2>How to protect your Marketplace Account and Crypto Wallet</H2>
        <Image
          src="/assets/InsightsAsset/protectKey.jpg"
          width={1920}
          height={1080}
          alt="NFT Benefits Image"
          className="max-h-[20rem] max-w-full rounded-lg object-cover"
        />
        <P>
          The first line of security is to protect the accounts you use to connect with the NFT ecosystem. This includes your NFT marketplace accounts
          and your cryptocurrency wallet. Here are a few ways to protect your marketplace account:
        </P>
        <UL>
          <li>
            <b>Two-Factor Authentication (2FA):</b> Enable 2FA for all NFT marketplaces you use. It increases security by requiring a cellphone code
            or email code for login, significantly reducing the chance of unauthorized access.
          </li>
          <li>
            <b>Verified Accounts:</b> Look for the verification badge on seller profiles. This signifies that the platform has verified the
            seller&apos;s identity, adding legitimacy to their listings.
          </li>
          <li>
            <b>Strong Passwords:</b> Create unique, difficult passwords for each account. Consider using a password manager to create and securely
            store your passwords. Avoid using information that is easily guessed, such as birthdays and pet names.
          </li>
          <li>
            <b>Hardware Wallet:</b> Store your NFTs in a hardware wallet, which is a physical device that keeps your cryptocurrency offline and
            dramatically minimizes the danger of hacking. Hardware wallets require physical access to confirm transactions, which adds another layer
            of security.
          </li>
          <li>
            <b>Seed Phrase Security:</b> Your seed phrase provides access to your cryptocurrency wallet. Treat it as a bank account PIN. Never share
            it with anyone and keep it offline and encrypted, preferably on a piece of paper in a secure area.
          </li>
          <li>
            <b>Use a separate wallet for NFT transactions:</b> This reduces the potential damage if a single wallet is compromised.
          </li>
        </UL>
        <P>
          Lastly, knowing what the common scams (as we tackled earlier) and cyber attacks that hackers and scammers use to access and steal your NFTs
          is also vital in protecting your account.
        </P>
        <H2>How to Protect Your Transactions</H2>
        <OL>
          <li>
            <b>Examine Smart Contracts:</b> Before engaging with any NFT project, grasp the smart contract&apos;s features. Smart contracts are the
            self-executing code that powers NFTs. Contracts with strange permissions should be avoided, as they have the ability to steal your cash or
            NFTs.
          </li>
          <li>
            <b>Verify Transaction Details:</b> Always double-check the NFT you&apos;re purchasing, the recipient address, and the amount before
            confirming the transaction. One false click could send your NFT to the incorrect address.
          </li>
          <li>
            <b>Don&apos;t rush:</b> Take your time when conducting transactions. Read all prompts carefully, and never feel compelled to act
            immediately. Scammers frequently use a sense of haste to push you into a mistake.
          </li>
        </OL>
        <P>
          When purchasing, selling, or transferring NFTs, it is critical to remain attentive and protect your transactions against manipulation or
          errors.
        </P>
        <H2>How to Protect Your Digital Identity</H2>
        <P>
          When navigating the NFT realm, be cautious about the information you share online. Scammers might use personal information to target you.
          We&apos;ll look at the strategies to protect your privacy:
        </P>
        <H4>Privacy-Focused Marketplaces</H4>
        <P>
          Look for markets that include additional privacy features, such as hiding some transaction details. This can help to limit the quantity of
          personal information available on the blockchain.
        </P>
        <H4>Limited Social Media Exposure</H4>
        <P>
          While marketing your NFTs might be useful, be cautious about what information you publicly publish about your holdings. Avoid disclosing
          specifics about your whole collection or the value of your NFTs.
        </P>
        <H4>Separate Accounts</H4>
        <P>
          Consider utilizing a second social media account for your NFT activities to reduce the link to your personal identity. This helps to
          compartmentalize your internet persona.
        </P>
        <H4>VPN for Public Wi-Fi</H4>
        <P>
          When you are using public Wi-Fi to access NFT marketplaces, it can be dangerous as public Wi-Fi has the risk of your credentials being
          accessed and stolen by those that own the network you are using. When accessing NFT marketplaces via public Wi-Fi, use a VPN to reduce the
          risk of attacks from hackers and keep your transactions and sensitive information protected.
        </P>
        <P>Here are a few examples of VPNs you can use:</P>
        <OL>
          <li>
            <b>ExpressVPN</b>
            <UL>
              <li>
                <b>Features:</b> High-speed servers, strong encryption, no-logs policy, 24/7 customer support, and user-friendly apps for different
                devices.
              </li>
              <li>
                <b>Pros:</b> Excellent speed, consistent performance, and compatibility with streaming providers.
              </li>
              <li>
                <b>Cons:</b> Slightly higher cost than some other alternatives.
              </li>
            </UL>
          </li>
          <li>
            <b>NordVPN</b>
            <UL>
              <li>
                <b>Features:</b> Strong security features, double VPN, and access to a vast server network.
              </li>
              <li>
                <b>Pros:</b> Affordable pricing plans and excellent speed.
              </li>
              <li>
                <b>Cons:</b> Some users report a complicated interface.
              </li>
            </UL>
          </li>
          <li>
            <b>CyberGhost</b>
            <UL>
              <li>
                <b>Features:</b> A user-friendly interface, optimized servers for streaming, and a focus on privacy.
              </li>
              <li>
                <b>Pros:</b> Great for beginners and good customer support.
              </li>
              <li>
                <b>Cons:</b> Speeds can vary depending on the server.
              </li>
            </UL>
          </li>
        </OL>
      </div>
    </section>
  );
}
