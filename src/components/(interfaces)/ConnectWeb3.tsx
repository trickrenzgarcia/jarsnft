"use client";

import { ConnectWallet, darkTheme, lightTheme } from "@thirdweb-dev/react";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "next-themes";
import Spline from "@splinetool/react-spline";
import Image from "next/image";


const ConnectWeb3 = ({ btnTitle }: { btnTitle: string | undefined }) => {
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

function Login3D() {
  const SplineScene = useMemo(() =>{
    return <Spline scene="https://prod.spline.design/NIACOyGnQDtdlb2D/scene.splinecode" />
  }, []);

  return SplineScene;
}

export const LoginWelcomeScreen = () => {
  
  return (
    <div className="hidden h-full w-full flex-col overflow-hidden md:flex">
      <div className="bg-black">
        <Image 
          src="/assets/background/login_wall.webp" 
          alt="Modal Login Wallpaper"
          className="opacity-80"
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
          href="/insights/setup-wallet"
          target="_blank"
          className="mt-52 cursor-pointer text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white"
        >
          New to Wallets?
        </Link>
      </div>
    </div>
  );
};

export default ConnectWeb3;
