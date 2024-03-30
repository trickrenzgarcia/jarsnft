import { Separator } from '../ui/separator';
import { PrivacyTermsButtons, SocialLinkButtons, FooterColumn } from "../(interfaces)"

export default function Footer() {
  //#region Column links
  type LinkType = {
    href: string, description: string
  }

  const marketplaceLinks: Array<LinkType> = [
    { href: "/category/art", description: "Art NFTs" },
    { href: "/category/photography", description: "Photography NFTs" },
    { href: "/category/pfp", description: "Profile Picture NFTs" },
  ];

  const resourceLinks: Array<LinkType> = [
    { href: "/learn/getting-started", description: "Getting Started" },
    { href: "/insights", description: "Insights" },
    { href: "/learn/faq", description: "FAQs" },
  ];

  const helpLinks: Array<LinkType> = [
    { href: "", description: "What is NFT?" },
    { href: "/learn/buying-nfts", description: "How to buy an NFT?" },
    { href: "/learn/selling-nfts", description: "How to sell an NFT?" },
    { href: "", description: "What are blockchain gas fees?" },
    { href: "", description: "What is a blockchain?" },
  ];

  const companyLinks: Array<LinkType> = [
    { href: "/about", description: "About" },
    { href: "/team", description: "Team" },
  ];
  //#endregion

  return (
    <footer className="mt-12">
      <Separator className="h-[2px] w-full" />
      <section>
        {/* Footer Columns */}
        <div className='pt-32 px-8 lg:px-20 pb-10 grid grid-cols-3 gap-x-24 gap-y-10 mb-14'>
          {/* Company Description */}
          <div className='flex flex-col gap-y-5'>
            <h1 className='text-2xl font-semibold mb-1'>JarsNFT</h1>
            <p>Turn your passion into a lasting legacy. Mint your artwork as an NFT and showcase your talent. Connect with traders, and build a secure future for your creative endeavors.</p>
          </div>

          {/* Column Links */}
          <div className='grid grid-cols-4 col-span-2 gap-x-8'>
            <FooterColumn titleName="Marketplace" linkArray={marketplaceLinks} />
            <FooterColumn titleName="Resource" linkArray={resourceLinks} />
            <FooterColumn titleName="Help" linkArray={helpLinks} />
            <FooterColumn titleName="Company" linkArray={companyLinks} />
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
