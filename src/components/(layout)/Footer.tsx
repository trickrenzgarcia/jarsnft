import { Separator } from '../ui/separator';
import { PrivacyTermsButtons, SocialLinkButtons, FooterColumn } from "../(interfaces)"

export default function Footer() {
  //#region Column links
  type LinkType = {
    href: string, style: string, description: string
  }

  const marketplaceLinks: Array<LinkType> = [
    { href: "", style: "hover:underline", description: "Art NFTs" },
    { href: "", style: "hover:underline", description: "Photography NFTs" },
    { href: "", style: "hover:underline", description: "Profile Picture NFTs" },
  ];

  const resourceLinks: Array<LinkType> = [
    { href: "", style: "hover:underline", description: "Getting Started" },
    { href: "", style: "hover:underline", description: "Insights" },
    { href: "", style: "hover:underline", description: "FAQs" },
  ];

  const helpLinks: Array<LinkType> = [
    { href: "", style: "hover:underline", description: "What is NFT?" },
    { href: "", style: "hover:underline", description: "How to buy an NFT" },
    { href: "", style: "hover:underline", description: "How to sell an NFT" },
    { href: "", style: "hover:underline", description: "What are blockchain gas fees?" },
    { href: "", style: "hover:underline", description: "What is a blockchain?" },
  ];

  const companyLinks: Array<LinkType> = [
    { href: "", style: "hover:underline", description: "About" },
    { href: "", style: "hover:underline", description: "Team" },
  ];
  //#endregion

  return (
    <footer className='mt-12'>
      <Separator className='w-full h-[2px]' />
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
            <FooterColumn divStyle="flex flex-col gap-y-5" titleStyle="font-semibold mb-1" titleName="Marketplace" linkArray={marketplaceLinks} />
            <FooterColumn divStyle="flex flex-col gap-y-5" titleStyle="font-semibold mb-1" titleName="Resource" linkArray={resourceLinks} />
            <FooterColumn divStyle="flex flex-col gap-y-5" titleStyle="font-semibold mb-1" titleName="Help" linkArray={helpLinks} />
            <FooterColumn divStyle="flex flex-col gap-y-5" titleStyle="font-semibold mb-1" titleName="Company" linkArray={companyLinks} />
          </div>
        </div>

        <SocialLinkButtons />

        <Separator className='w-full h-[2px]' />

        {/* Copyright */}
        <div className="px-8 lg:px-20 pb-5">
          <ul className='mt-5 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0'>
            {/* Left-side */}
            <li className='w-fit'>
              <div>
                © 2023 Alrae, Jeffrey, Patrick, Rigor
              </div>
            </li>

            {/* Right-side */}
            <li className='w-fit'>
              <PrivacyTermsButtons />
            </li>
          </ul>
        </div>
      </section>
    </footer>
  )
}