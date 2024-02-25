"use client"

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

type PageNextButtonProps = {
  title: string;
  href: string;
}

export default function PageNextButton({ title, href }: PageNextButtonProps) {
  return (
    <div className='flex justify-end'>
      <Link href={href}>
        <Button variant="ghost" className='pl-16 py-6 border-3 hover:bg-purple-700/20'>
          <div className='flex flex-col text-right'>
            <p>Next</p>
            <div className='flex items-center text-[#A519D7]'>{title}<MdOutlineKeyboardArrowRight className='text-md' /></div>
            <span></span>
          </div>
        </Button>
      </Link>
    </div>
    
  )
}