"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdHome, MdOutlineKeyboardArrowRight } from "react-icons/md";

type LearnPaths =
  | "/insights"
  | "/insights/getting-started"
  | "/insights/buying-nfts"
  | "/insights/selling-nfts"
  | "/insights/faq";

export default function PageNavbar() {
  const path: LearnPaths = usePathname() as LearnPaths;

  return (
    <div className='flex items-center gap-2'>
      <Link href='/insights'>
        <MdHome className='text-xl opacity-[.40]' />
      </Link>
      <MdOutlineKeyboardArrowRight className='text-xl opacity-[.40]'/>
      <PageNavTitle path={path} />
    </div>
  );
}

function PageNavTitle({ path }: { path: LearnPaths }) {
  const title = () => {
    if (path == "/insights") return "Welcome";
    else if (path == "/insights/getting-started") return "Getting Started";
    else if (path == "/insights/buying-nfts") return "Buying NFTs";
    else if (path == "/insights/selling-nfts") return "Selling NFTs";
    else if (path == "/insights/faq") return "FAQs";
  };

  return <h2 className="text-[#A519D7]">{title()}</h2>
}