import Link from "next/link";
import { Separator } from "../ui/separator";
import PrivacyTermsButtons from "../(interfaces)/PrivacyTermsButtons";
import SocialLinkButtons from "../(interfaces)/SocialLinkButtons";

export default function Footer() {
  return (
    <footer className="mt-12">
      <Separator className="h-[2px] w-full" />
      <section>
        {/* Resource Help Company Columns */}
        <div className="mb-14 grid grid-cols-3 gap-x-5 gap-y-10 px-8 pb-10 pt-32 lg:px-20">
          <div className="flex flex-col gap-y-5">
            <h1 className="mb-1 font-semibold">Resource</h1>
            <Link href="/learn/getting-started" className="hover:underline">
              Getting Started
            </Link>
            <Link href="/insights" className="hover:underline">
              Insights
            </Link>
            <Link href="/learn/faqs" className="hover:underline">
              FAQs
            </Link>
          </div>
          <div className="flex flex-col gap-y-5">
            <h1 className="mb-1 font-semibold">Help</h1>
            <Link href="/learn" className="hover:underline">
              What is NFT?
            </Link>
            <Link href="/learn/buying-nfts" className="hover:underline">
              How to buy an NFT
            </Link>
            <Link href="/learn/selling-nfts" className="hover:underline">
              How to sell an NFT
            </Link>
            <Link href="/learn" className="hover:underline">
              What are blockchain gas fees?
            </Link>
            <Link href="/learn" className="hover:underline">
              What is a blockchain?
            </Link>
          </div>
          <div className="flex flex-col gap-y-5">
            <h1 className="mb-1 font-semibold">Company</h1>
            <Link href="/" className="hover:underline">
              About
            </Link>
            <Link href="/team" className="hover:underline">
              Team
            </Link>
          </div>
        </div>

        <SocialLinkButtons />

        <Separator className="h-[2px] w-full" />

        {/* Copyright */}
        <div className="px-8 pb-5 lg:px-20">
          <ul className="mt-5 flex flex-col items-center justify-between gap-8 md:flex-row md:gap-0">
            {/* Left-side */}
            <li className="w-fit">
              <div>© 2023 Alrae, Jeffrey, Patrick, Rigor</div>
            </li>

            {/* Right-side */}
            <li className="w-fit">
              <PrivacyTermsButtons />
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
}
