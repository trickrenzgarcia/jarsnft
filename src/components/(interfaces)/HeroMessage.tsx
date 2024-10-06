"use client"


import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function HeroMessage() {
  const [hasBeenClosed, setHasBeenClosed] = useState(false);

  useEffect(() => {
    const isClose = localStorage.getItem('heroMessageClosed');
    if (isClose === 'true') {
      setHasBeenClosed(true);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem('heroMessageClosed', 'true');
    setHasBeenClosed(true)
  };

  // "reference error" here 
  const isMetaMask = typeof window !== 'undefined' && window.ethereum && window.ethereum.isMetaMask;

  if (hasBeenClosed || isMetaMask) return null;

  return (
    <div className={cn(!hasBeenClosed && "hidden", " bg-purple-600 flex gap-4 lg:hidden items-center min-h-8 p-4")}>
        <h3 className='ml-auto'>We recommend using <b>Metamask</b>, check our guide <a href="/insights/setup-wallet"><b><u>here</u></b></a>.</h3>
        <button className="text-3xl ml-auto" onClick={handleClose}>&times;</button>
    </div>
  );
}