"use client"

import { Separator } from "@/components/ui/separator";
import {
  PrivacyTermsButtons,
  SocialLinkButtons,
  FooterColumn,
} from "../(interfaces)";
import ContactForm from "@/components/(interfaces)/Contact-Form";

export default function Footer() {
  //#region Column links
  type LinkType = {
    href: string;
    description: string;
  };

  const marketplaceLinks: Array<LinkType> = [
    { href: "/category/arts", description: "Art" },
    { href: "/category/photography", description: "Photography" },
    { href: "/category/pfp", description: "Profile Picture" },
  ];

  const resourceLinks: Array<LinkType> = [
    { href: "/insights/setup-wallet", description: "Getting Started" },
    { href: "/insights/exchange-crypto", description: "Exchange Cryptocurrency" },
    { href: "/insights/protect-account", description: "Protect Your Account" },
  ];

  const helpLinks: Array<LinkType> = [
    { href: "/insights/what-is-nft", description: "What is an NFT?" },
    { href: "/insights/trade-nft", description: "How to buy & sell an NFT?" },
    { href: "/insights/what-is-blockchain", description: "What is a blockchain?" },
    { href: "/insights/#faq-section", description: "FAQs" },
  ];

  const companyLinks: Array<LinkType> = [
    { href: "/about", description: "About" },
  ];
  //#region End

  return (
    <footer>
      <div className="container">
        <section>
          <div className="mt-16 grid grid-cols-3 gap-x-24 gap-y-10">
            <div className="col-span-3 mb-16 flex flex-col gap-y-5 text-center md:col-span-1 md:mb-0 md:text-left">
              <h1 className="text-2xl font-semibold">JarsNFT</h1>
              <p>
              The biggest and largest NFT marketplace in the Philippines. <br />
              Endless Opportunities for Artists and Traders. <br />
              Create, Trade, and Collect Your Legacy.
              </p>
            <ContactForm/>
            </div>

            {/* Column Links */}
            <div className="col-span-3 mb-5 grid grid-cols-2 gap-x-8 gap-y-16 md:col-span-2 md:grid-cols-4 md:gap-y-0">
              <FooterColumn
                titleName="Marketplace"
                linkArray={marketplaceLinks}
              />
              <FooterColumn titleName="Resource" linkArray={resourceLinks} />
              <FooterColumn titleName="Help" linkArray={helpLinks} />
              <FooterColumn titleName="Company" linkArray={companyLinks} />
            </div>
          </div>

          <SocialLinkButtons />

          <Separator className="h-[2px] w-full" />

          {/* Copyright */}
          <div className="pb-5">
            <ul className="mt-5 flex flex-col items-center justify-between gap-8 md:flex-row md:gap-0">
              {/* Left-side */}
              <li className="w-fit">
                <div>© 2023 Alrae, Jeffrey, Patrick, Rigor</div>
              </li>

              {/* Right-side */}
              <li className="w-fit">
                {/* <PrivacyTermsButtons /> */}
              </li>
            </ul>
          </div>
        </section>
      </div>
    </footer>
  );
}