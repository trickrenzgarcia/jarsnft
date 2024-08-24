"use client"

import { Separator } from "../ui/separator";
import {
  PrivacyTermsButtons,
  SocialLinkButtons,
  FooterColumn,
} from "../(interfaces)";

export default function Footer() {
  //#region Column links
  type LinkType = {
    href: string;
    description: string;
  };

  const marketplaceLinks: Array<LinkType> = [
    { href: "/category/arts", description: "Art NFTs" },
    { href: "/category/photography", description: "Photography NFTs" },
    { href: "/category/pfp", description: "Profile Picture NFTs" },
  ];

  const resourceLinks: Array<LinkType> = [
    { href: "/insights/getting-started", description: "Getting Started" },
    { href: "/insights", description: "Insights" },
    { href: "/insights/faq", description: "FAQs" },
  ];

  const helpLinks: Array<LinkType> = [
    { href: "", description: "What is NFT?" },
    { href: "/insights/buying-nfts", description: "How to buy an NFT?" },
    { href: "/insights/selling-nfts", description: "How to sell an NFT?" },
    { href: "", description: "What are blockchain gas fees?" },
    { href: "", description: "What is a blockchain?" },
  ];

  const companyLinks: Array<LinkType> = [
    { href: "/about", description: "About" },
    { href: "/", description: "Team" },
  ];
  //#region End

  return (
    <footer>
      {/* <Separator className="h-[2px] w-full" /> */}
      <div className="container">
        <section>
          {/* Footer Columns */}
          <div className="mt-16 grid grid-cols-3 gap-x-24 gap-y-10">
            {/* Company Description */}
            <div className="col-span-3 mb-16 flex flex-col gap-y-5 text-center md:col-span-1 md:mb-0 md:text-left">
              <h1 className="mb-1 text-2xl font-semibold">JarsNFT</h1>
              <p>
                The biggest and largest NFT marketplace in the Philippines. <br />
                Endless Opportunities for Artists and Traders. <br />
                Create, Trade, and Collect Your Legacy.
              </p>
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
