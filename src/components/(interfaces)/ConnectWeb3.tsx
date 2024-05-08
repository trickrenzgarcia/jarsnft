"use client";

import { ConnectWallet, darkTheme, lightTheme } from "@thirdweb-dev/react";
import React, { useState } from "react";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";

type UserResponse = {
  success: boolean;
  user: any;
};

const ConnectWeb3 = ({ btnTitle }: { btnTitle: string | undefined }) => {
  const router = useRouter();
  const light = lightTheme();
  const dark = darkTheme();
  const { theme } = useTheme();

  return (
    <div>
      <ConnectWallet
        btnTitle={btnTitle}
        modalTitle="JarsNFT"
        switchToActiveChain={true}
        showThirdwebBranding={false}
        welcomeScreen={() => <LoginWelcomeScreen />}
        modalTitleIconUrl=""
        style={{
          paddingTop: "12px",
          paddingBottom: "12px",
          minWidth: "100px",
          maxHeight: "53px",
        }}
        theme={theme === "light" ? light : dark}
      />
    </div>
  );
};

const LoginWelcomeScreen = () => {
  return (
    <div className="hidden h-full w-full flex-col overflow-hidden md:flex">
      <div className="relative w-auto">
        <video
          className="w-full opacity-50"
          preload="false"
          playsInline
          loop
          muted
          // @ts-ignore
          autoPlay="autoplay"
          src="/assets/rocket.mp4"
        ></video>
      </div>
      <div className="absolute flex h-full w-full flex-col items-center justify-center">
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
          <h1 className="mt-36 text-2xl font-bold">Welcome to jarsnft</h1>
        </motion.div>
        <p className="mt-2 font-medium">Connect your wallet to trade NFTs.</p>
        <Link
          href="/insights/getting-started#installing-wallet"
          target="_blank"
          className="mt-40 cursor-pointer text-gray-300 hover:text-white"
        >
          New to Wallets?
        </Link>
      </div>
    </div>
  );
};

export default ConnectWeb3;
