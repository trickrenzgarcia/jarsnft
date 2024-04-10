"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdHome, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { leftNavList } from "../_metadata";

export default function PageNavbar() {
  return (
    <div className='flex items-center gap-2'>
      <Link href='/insights'>
        <MdHome className='text-xl opacity-[.40]' />
      </Link>
      <MdOutlineKeyboardArrowRight className='text-xl opacity-[.40]'/>
      <PageNavTitle />
    </div>
  );
}

function PageNavTitle() {
  const path = usePathname()
  const getTitle = leftNavList.map(item => (
    item.child.map((childItem, index) => (
      path === childItem.href &&
        <h2 key={index} className="text-[#A519D7]">{childItem.name.replace(/\b\w/g, (char) => char.toUpperCase())}</h2>
    )) 
  ))
  return getTitle
}