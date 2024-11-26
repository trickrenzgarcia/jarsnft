import Image from "next/image";
import { P, H2, H4, UL } from "../../_components/TailwindTags";

export const metadata = {
  title: "NFT Safety | JarsNFT",
  description: "How safe are my NFTs?",
  keywords: ["NFT", "Safety", "Security"],
};

export default function NFTSafety() {
  return (
    <section>
      <div id="overview">
        <h1 className="my-4 text-4xl font-bold md:text-5xl">How Safe Are My NFTs?</h1>
        <Image
          src="/assets/InsightsAsset/nft-safety.jpg"
          width={1920}
          height={1080}
          alt="NFT Safety Image"
          className="mb-12 max-h-[20rem] max-w-full rounded-lg object-cover"
        />
        <H2>Overview</H2>
        <P>
          The rapid adoption of NFTs has raised serious security concerns. NFT security is critical, as these digital assets are vulnerable to theft,
          scams, and cyber-attacks. Understanding the risks and implementing strong security measures can help you protect your investments and
          personal interests in the NFT space.
        </P>
      </div>
      <div id="security">
        <hr />
        <H2>Are NFTs Secure?</H2>
        <P>
          Yes, NFTs take advantage of blockchain technology to provide robust security features. The blockchain functions as a public ledger,
          permanently recording ownership and removing the possibility of forgeries. Anyone can verify this ownership history, which promotes trust
          and transparency. NFT data is stored on a distributed ledger, making it resistant to physical damage or loss. Creators can also specify
          permissions and control how their NFTs are used.As blockchain technology advances, we can expect even more security features to emerge,
          cementing NFTs as a secure means of digital ownership. Therefore we can agree that NFTs are secure due to its decentralized nature provided
          by the blockchain, though it is not invincible from any cyber-attacks. We should consider the risks and safety of NFTs.
        </P>
      </div>
      <div id="attacks">
        <hr />
        <H2>Common Cyber Attacks</H2>
        <P>
          The blockchain is a reliable technology that NFTs use to secure its transactions and verify each of them to ensure they are executed
          properly. Though users are still vulnerable to their NFTs being stolen. Below are the few methods that hackers may use to get into your
          wallets and NFTs.
        </P>
        <H4>Phishing Attacks</H4>
        <P>
          Attackers may design fake websites or send shady emails that impersonate credible NFT wallet providers or marketplaces impersonating a
          reliable source in order to deceive consumers into disclosing their passwords, private keys, or other sensitive information.
        </P>
        <P>Here are the preventive measures for such attack:</P>
        <UL>
          <li>
            <b>Verify URLs: </b>
            Always double-check the website&apos;s URL before entering any critical information. Look for HTTPS and make sure the domain is accurate.
          </li>
          <li>
            <b>Use Bookmarking: </b>
            Bookmark your NFT marketplaces and wallet&apos;s official websites to avoid mistyping URLs that lead to phishing sites.
          </li>
          <li>
            <b>Email Vigilance: </b>
            Be wary of unknown emails that are requesting personal information. Verify the sender&apos;s email address and avoid clicking on any
            suspicious links or attachments.
          </li>
          <li>
            <b>Enable Two-Factor Authentication (2FA): </b>
            This adds an extra degree of protection by demanding a second type of verification in addition to your password. Phishing Awareness
            Training: Educate yourself and your team on typical phishing tactics and how to identify them.
          </li>
        </UL>
        <H4>Malware and Keyloggers</H4>
        <P>
          On a user&apos;s device, malware can be installed with the intention of stealing passwords or private keys. Malware called keyloggers
          records keystrokes on a user&apos;s device and may be able to obtain login passwords for NFT wallets and accounts.
        </P>
        <P>Here are the preventive measures for such attack:</P>
        <UL>
          <li>
            <b>Use Antivirus Software: </b>
            Install and regularly update reputable antivirus and anti-malware software to protect your devices.
          </li>
          <li>
            <b>Regular Scans: </b>
            Scan regularly to detect and remove malware or keyloggers.
          </li>
          <li>
            <b>Avoid Untrusted Downloads: </b>
            Do not install software or open email attachments from unknown or suspicious sources.
          </li>
          <li>
            <b>Secure Browsing: </b>
            Use a browser that is up to date and has robust security settings, and think about utilizing browser extensions to block harmful websites.
          </li>
          <li>
            <b>Hardware Wallets:</b>
            These are less vulnerable to virus attacks and can be used to store NFTs and private keys.
          </li>
        </UL>
        <H4>Smart Contract Vulnerabilities</H4>
        <P>
          If they are not carefully examined, smart contracts—which make it easier to create and transfer NFTs—may have weaknesses. These weaknesses
          can be used by hackers to manipulate transactions or steal away money.
        </P>
        <UL>
          <li>
            <b>Code Audits: </b>
            Hire a professional security firm to audit your smart contracts for vulnerabilities and fix them.
          </li>
          <li>
            <b>Use Established Contracts: </b>
            When possible, use well-known and widely used smart contract templates that have been reviewed by the community.
          </li>
          <li>
            <b>Formal Verification: </b>
            Use mathematical methods to prove that your smart contracts are correct.
          </li>
          <li>
            <b>Limit Permissions: </b>
            Create contracts with minimal permissions and exposure to potential exploits.
          </li>
          <li>
            <b>Bug Bounty Programs: </b>
            Use bug bounty programs to encourage security researchers to discover and report vulnerabilities.
          </li>
        </UL>
        <H4>Social Engineering</H4>
        <P>
          Social engineering attacks involve tricking people into performing actions or disclosing sensitive information. This could include
          persuading someone to send an NFT to an address controlled by the attacker or revealing their wallet&apos;s private key.
        </P>
        <UL>
          <li>
            <b>Security Training: </b>
            Educate yourself and your team on social engineering tactics and how to identify them.
          </li>
          <li>
            <b>Verification Protocols: </b>
            Always verify the identity of anyone requesting sensitive information, especially if it is unusual or urgent.
          </li>
          <li>
            <b>Limit Information Sharing: </b>
            Be cautious about how much information you share publicly, as attackers can use it to create more convincing social engineering attacks.
          </li>
          <li>
            <b>Use Secure Communication Channels: </b>
            When discussing sensitive information, prefer encrypted communication channels.
          </li>
          <li>
            <b>Behavioral Cues: </b>
            Keep an eye out for unusual or suspicious behaviors that could indicate a social engineering attack.
          </li>
        </UL>
        <P>
          To know more on how you can protect your wallets and Account in your web3 journey
          <span className="font-semibold text-[#A519D7] underline">
            <a href="/insights/protect-account"> Learn more here</a>
          </span>
        </P>
      </div>
    </section>
  );
}
