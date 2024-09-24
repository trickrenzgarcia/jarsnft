'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LoginWelcomeScreen = () => {

  return (
    <div className="hidden h-full w-full flex-col overflow-hidden md:flex">
      <div className="bg-black">
        <Image
          src="/assets/background/login_wall.webp" 
          alt="Modal Login Wallpaper"
          className="opacity-60"
          width={500}
          height={500}
        />
      </div>
      <div className="absolute flex h-full w-full flex-col items-center justify-center text-white">
        <motion.div
          animate={{
            scale: [1, 1.8, 1.8, 1, 1],
            rotate: [0, 0, 0, 0, 0],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeatDelay: 1,
          }}
        >
          <h1 className="mt-0 text-2xl font-bold stroke-black">Welcome to jarsnft</h1>
        </motion.div>
        <p className="mt-2 mb-8 font-medium stroke-black">Connect your wallet to trade NFTs.</p>
        <Link
          href="/insights/getting-started#installing-wallet"
          target="_blank"
          className="mt-52 cursor-pointer text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white"
        >
          New to Wallets?
        </Link>
      </div>
    </div>
  );
}

export default React.memo(LoginWelcomeScreen)