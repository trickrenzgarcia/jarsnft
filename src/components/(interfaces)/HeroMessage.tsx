"use client";

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function HeroMessage() {
  const [hasBeenClosed, setHasBeenClosed] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isMetaMask, setIsMetaMask] = useState(false);

  useEffect(() => {
    // Ensure this only runs on the client
    setIsMounted(true);

    // Check if the hero message has been closed in localStorage
    const isClose = localStorage.getItem('heroMessageClosed');
    if (isClose === 'true') {
      setHasBeenClosed(true);
    }

    // Check if MetaMask is installed
    if (typeof window !== 'undefined' && window.ethereum && window.ethereum.isMetaMask) {
      setIsMetaMask(true);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem('heroMessageClosed', 'true');
    setHasBeenClosed(true);
  };

  // If the component hasn't mounted yet, don't render anything
  // if (!isMounted || hasBeenClosed || isMetaMask) return null;

  return (
    <div className={cn("bg-purple-600 flex gap-4 lg:hidden items-center min-h-8 p-4")}>
      <h3 className='ml-auto text-center'>
        We recommend using <span className='font-bold'>Metamask</span>, 
        {` check our guide `} 
        <Link href="/insights/setup-wallet" className='font-bold underline'>
          here
        </Link>.
      </h3>
      <button className="text-3xl ml-auto" onClick={handleClose}>&times;</button>
    </div>
  );
}