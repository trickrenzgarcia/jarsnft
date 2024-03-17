"use client"

import Link from 'next/link';
import { Separator } from '../ui/separator';
import dynamic from 'next/dynamic';

export default function Footer() {
  const SocialLinkButtons = dynamic(() => import("../(interfaces)/SocialLinkButtons"));
  const PrivacyTermsButtons = dynamic(() => import("../(interfaces)/PrivacyTermsButtons"));

  return (
    <footer className='mt-12'>
      <Separator className='w-full h-[2px]' />
      <section>
        {/* Resource Help Company Columns */}
        <div className='pt-32 px-8 lg:px-20 pb-10 grid grid-cols-3 gap-x-5 gap-y-10 mb-14'>
          <div className='flex flex-col gap-y-5'>
            <h1 className='font-semibold mb-1'>Resource</h1>
            <Link href='/learn/getting-started' className='hover:underline'>Getting Started</Link>
            <Link href='/insights' className='hover:underline'>Insights</Link>
            <Link href='/learn/faqs' className='hover:underline'>FAQs</Link>
          </div>
          <div className='flex flex-col gap-y-5'>
            <h1 className='font-semibold mb-1'>Help</h1>
            <Link href='/learn' className='hover:underline'>What is NFT?</Link>
            <Link href='/learn/buying-nfts' className='hover:underline'>How to buy an NFT</Link>
            <Link href='/learn/selling-nfts' className='hover:underline'>How to sell an NFT</Link>
            <Link href='/learn' className='hover:underline'>What are blockchain gas fees?</Link>
            <Link href='/learn' className='hover:underline'>What is a blockchain?</Link>
          </div>
          <div className='flex flex-col gap-y-5'>
            <h1 className='font-semibold mb-1'>Company</h1>
            <Link href='/' className='hover:underline'>About</Link>
            <Link href='/team' className='hover:underline'>Team</Link>
          </div>
        </div>

        <SocialLinkButtons />

        <Separator className='w-full h-[2px]' />

        {/* Copyright */}
        <div className="px-8 lg:px-20 pb-5">
          <ul className='mt-5 flex flex-col md:flex-row justify-between'>
            {/* Left-side */}
            <li>
              <div>
                © 2023 Alrae, Jeffrey, Patrick, Rigor
              </div>
            </li>

            {/* Right-side */}
            <li>
              <PrivacyTermsButtons />
            </li>
          </ul>
        </div>
      </section>
    </footer>
  )
}