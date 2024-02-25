"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MdHome, MdOutlineKeyboardArrowRight } from 'react-icons/md';

type LearnPaths = "/learn" | "/learn/getting-started" | "/learn/buying-nfts" | "/learn/selling-nfts" | "/learn/faq"


export default function PageNavbar() {
  const path: LearnPaths = usePathname() as LearnPaths

  return (
    <div className='flex items-center gap-2'>
      <Link href='/learn'>
        <MdHome className='text-xl' />
      </Link>
      <MdOutlineKeyboardArrowRight className='text-xl'/>
      <PageNavTitle path={path}/>
    </div>
  )
}

function PageNavTitle({ path }: { path: LearnPaths}) {

  const title = () => {
    if(path=="/learn") return "Welcome"
    else if(path=="/learn/getting-started") return "Getting Started"
    else if(path=="/learn/buying-nfts") return "Buying NFTs"
    else if(path=="/learn/selling-nfts") return "Selling NFTs"
    else if(path=="/learn/faq") return "FAQs"
  }

  return <h2>{title()}</h2>
}