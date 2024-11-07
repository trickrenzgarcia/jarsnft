import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { H3 } from "./TailwindTags";

const faqData = [
  {
    question: "What can be an NFT?",
    answer:
      "NFTs can represent a wide range of digital assets, including artwork, music, videos, virtual real estate, in-game items, and even tweets.",
  },
  {
    question: "What are some common uses for NFTs?",
    answer:
      "Common uses include digital art, collectibles, virtual real estate, gaming items, music, and ticketing for events. They are also used for verifying the ownership and authenticity of physical assets.",
  },
  {
    question: "Can NFTs be copied or duplicated?",
    answer:
      "The digital content associated with an NFT can be copied, but the ownership and provenance verified by the blockchain cannot be duplicated. This is akin to owning the original painting versus owning a print.",
  },
  {
    question: "What are the risks associated with NFTs?",
    answer:
      "Risks include market volatility, potential loss of access to your digital wallet, legal uncertainties regarding intellectual property, and the possibility of purchasing counterfeit or plagiarized content.",
  },
  {
    question: "Can I lose my NFT?",
    answer:
      "Yes, if you lose access to your digital wallet where the NFT is stored, you may lose the NFT. It’s important to securely store your wallet’s private keys and backup phrases.",
  },
  {
    question: "Can I migrate my NFTs from a different platform?",
    answer:
      "Yes, because blockchain are interconnected nodes provide us the contract address or collection ID contact us for verification and we will add it on the marketplace ",
  },
  {
    question: "How do royalties work with NFTs?",
    answer:
      "Creators can set up smart contracts for their NFTs to receive royalties automatically each time their NFT is sold on a secondary market. This allows artists to earn ongoing revenue from their work.",
  },
  {
    question: "What are the risks associated with NFTs?",
    answer:
      "Risks include market volatility, potential loss of access to your digital wallet, legal uncertainties regarding intellectual property, and the possibility of purchasing counterfeit or plagiarized content.",
  },
  {
    question: "What is a digital wallet?",
    answer:
      "A digital wallet is an application that allows you to store, send, and receive digital assets like cryptocurrencies and NFTs. Examples include MetaMask, Trust Wallet, and Coinbase Wallet.",
  },
  {
    question: "What are the key features of blockchain?",
    answer:
      "Blockchain provides decentralization, immutability, transparency, and security, with applications in digital assets like cryptocurrencies and NFTs.",
  },
  {
    question: "What are some common applications of blockchain?",
    answer:
      "Common applications include cryptocurrencies (Bitcoin, Ethereum), supply chain management, voting systems, identity verification, smart contracts, and NFTs.",
  },
  {
    question: "How is blockchain different from traditional databases?",
    answer:
      "Unlike traditional databases managed by a central authority, blockchain is decentralized and managed by a network of nodes. Blockchains also provide greater transparency and immutability compared to traditional databases.",
  },
  {
    question: "Can blockchain be hacked?",
    answer:
      "While blockchain itself is very secure, individual vulnerabilities such as weak passwords, phishing attacks, and poorly implemented smart contracts can be exploited. The security of the network depends on the collective security of its participants.",
  },
];

export default function FAsInsight() {
  return (
    <section className="mb-16" id="faq-section">
      <hr className="my-4" />
      <H3>Frequently Asked Questions (FAQs)</H3>
      <Accordion type="single" collapsible className="w-full">
        {faqData.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger>{`${index + 1}. ` + faq.question}</AccordionTrigger>
            <AccordionContent>
              <span className="leading-loose tracking-wide dark:text-gray-300">{faq.answer}</span>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
