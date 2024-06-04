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
        <P>{`Here are the preventive measures for such attack:`}</P>
        <ul className="-mt-2 ml-14 list-disc leading-loose tracking-wide dark:text-gray-300">
          <li className="mb-3">
            <span className="font-bold">Verify URLs:</span>
            {` Always double-check the website's URL before entering any critical information. Look for HTTPS and make sure the domain is accurate.`}
          </li>

          <li className="mb-3">
            <span className="font-bold">Use Bookmarking:</span>
            {` Bookmark your NFT marketplaces and wallets' official websites to avoid mistyping URLs that lead to phishing sites.`}
          </li>
          <li className="mb-6">
            <span className="font-bold">Email Vigilance:</span>
            {` Be wary of unknown emails that are requesting personal information. Verify the sender's email address and avoid clicking on any suspicious links or attachments.`}
          </li>
          <li className="mb-6">
            <span className="font-bold">Enable Two-Factor Authentication (2FA):</span>
            {` This adds an extra degree of protection by demanding a second type of verification in addition to your password.
            Phishing Awareness Training: Educate yourself and your team on typical phishing tactics and how to identify them.`}
          </li>
        </ul>
        <h4 className="my-6 text-lg font-bold tracking-wider">
        Malware and Keyloggers
        </h4> 
        <P>{`On a user's device, malware can be installed with the intention of stealing passwords or private keys. Malware called keyloggers records keystrokes on a user's device and may be able to obtain login passwords for NFT wallets and accounts.`}</P>
        <P>{`Here are the preventive measures for such attack:`}</P>
        <ul className="-mt-2 ml-14 list-disc leading-loose tracking-wide dark:text-gray-300">
          <li className="mb-3">
            <span className="font-bold">Use Antivirus Software:</span>
            {` Install and regularly update reputable antivirus and anti-malware software to protect your devices.`}
          </li>
          <li className="mb-3">
            <span className="font-bold">Regular Scans:</span>
            {` Scan regularly to detect and remove malware or keyloggers.`}
          </li>
          <li className="mb-3">
            <span className="font-bold">Avoid Untrusted Downloads:</span>
            {` Do not install software or open email attachments from unknown or suspicious sources.`}
          </li>
          <li className="mb-3">
            <span className="font-bold">Secure Browsing:</span>
            {` Use a browser that is up to date and has robust security settings, and think about utilizing browser extensions to block harmful websites.`}
          </li>
          <li className="mb-6">
            <span className="font-bold">Hardware Wallets:</span>
            {` These are less vulnerable to virus attacks and can be used to store NFTs and private keys.`}
          </li>
        </ul>
        <h4 className="my-6 text-lg font-bold tracking-wider">
        Smart Contract Vulnerabilities
        </h4>
        <P>{`If they are not carefully examined, smart contracts—which make it easier to create and transfer NFTs—may have weaknesses. These weaknesses can be used by hackers to manipulate transactions or steal away money.`}</P>
        <P>{`Here are the preventive measures for such attack:`}</P>
        <ul className="-mt-2 ml-14 list-disc leading-loose tracking-wide dark:text-gray-300">
          <li className="mb-3">
            <span className="font-bold">Code Audits:</span>
            {` Hire a professional security firm to audit your smart contracts for vulnerabilities and fix them.`}
          </li>
          <li className="mb-3">
            <span className="font-bold">Use Established Contracts:</span>
            {` When possible, use well-known and widely used smart contract templates that have been reviewed by the community.`}
          </li>
          <li className="mb-3">
            <span className="font-bold">Formal Verification:</span>
            {` Use mathematical methods to prove that your smart contracts are correct.`}
          </li>
          <li className="mb-3">
            <span className="font-bold">Limit Permissions:</span>
            {` Create contracts with minimal permissions and exposure to potential exploits.`}
          </li>
          <li className="mb-6">
            <span className="font-bold">Bug Bounty Programs:</span>
            {` Use bug bounty programs to encourage security researchers to discover and report vulnerabilities.`}
          </li>
        </ul>
        <h4 className="my-6 text-lg font-bold tracking-wider">
        Social Engineering
        </h4>
        <P>{`Social engineering attacks involve tricking people into performing actions or disclosing sensitive information. This could include persuading someone to send an NFT to an address controlled by the attacker or revealing their wallet's private key.`}</P>
        <P>{`Here are the preventive measures for such attack:`}</P>
        <ul className="-mt-2 ml-14 list-disc leading-loose tracking-wide dark:text-gray-300">
          <li className="mb-3">
            <span className="font-bold">Security Training:</span>
            {` Educate yourself and your team on social engineering tactics and how to identify them.`}
          </li>
          <li className="mb-3">
            <span className="font-bold">Verification Protocols:</span>
            {` Always verify the identity of anyone requesting sensitive information, especially if it is unusual or urgent.`}
          </li>
          <li className="mb-3">
            <span className="font-bold">Limit Information Sharing:</span>
            {` Be cautious about how much information you share publicly, as attackers can use it to create more convincing social engineering attacks.`}
          </li>
          <li className="mb-3">
            <span className="font-bold">Use Secure Communication Channels:</span>
            {` When discussing sensitive information, prefer encrypted communication channels.`}
          </li>
          <li className="mb-6">
            <span className="font-bold">Behavioral Cues:</span>
            {` Keep an eye out for unusual or suspicious behaviors that could indicate a social engineering attack.`}
          </li>
        </ul>
        <h4 className="my-6 text-lg font-bold tracking-wider">
        DNS Spoofing
        </h4>
        <P>{`DNS spoofing refers to redirecting traffic from a legitimate website to a malicious one. Users attempting to access a legitimate NFT marketplace may be redirected to a fraudulent site, where their login credentials or other sensitive information may be compromised.`}</P>
        <P>{`Here are the preventive measures for such attack:`}</P>
        <ul className="-mt-2 ml-14 list-disc leading-loose tracking-wide dark:text-gray-300">
          <li className="mb-3">
            <span className="font-bold">:</span>
            {` Hire a professional security firm to audit your smart contracts for vulnerabilities and fix them.`}
          </li>
          <li className="mb-3">
            <span className="font-bold">DNSSEC:</span>
            {` DNS Security Extensions (DNSSEC) protect your domain from spoofing by verifying the authenticity of DNS data.`}
          </li>
          <li className="mb-3">
            <span className="font-bold">Monitor DNS Records:</span>
            {` Check your DNS records on a regular basis to ensure they have not been tampered with.`}
          </li>
          <li className="mb-3">
            <span className="font-bold">Secure DNS Providers:</span>
            {` Use reputable DNS service providers who provide advanced security features and protection from DNS attacks.`}
          </li>
          <li className="mb-3">
            <span className="font-bold">Browser Security Extensions:</span>
            {` Install browser extensions that detect and prevent DNS spoofing attempts.`}
          </li>
          <li className="mb-6">
            <span className="font-bold">Multi-Factor Authentication (MFA): :</span>
            {` To prevent unauthorized changes, implement multi-factor authentication (MFA) for accessing DNS management interfaces.
            By implementing these preventive measures, you can significantly improve the security of your NFTs and reduce your vulnerability to various cyber attacks.`}
          </li>
        </ul>
      </div>
      <P>{`Check out how you can protect your wallet and account in your web3 journey.`}</P>
      <span className="font-semibold text-[#A519D7] underline ">
        <a href="/insights/what-makes-nft-valuable">Learn more here</a>
      </span>
    </section>
  );
}
