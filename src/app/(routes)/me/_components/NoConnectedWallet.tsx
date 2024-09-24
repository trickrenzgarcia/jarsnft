"use client";

import { ConnectWalletV4 } from "@/components/(interfaces)";
import { Wallet } from "lucide-react";
import React from "react";

export default function NoConnectedWallet() {
  return (
    <div className="h-[calc(100vh-57px)] w-full">
      <div className="flex h-full w-full flex-col items-center justify-center gap-4">
        <Wallet className="h-16 w-16 text-purple-600" />
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-200">
          Connect your wallet
        </h1>
        <p className="max-w-3xl text-center">
          Connect your wallet seamlessly to JarsNFT Marketplace to unlock
          exclusive features, securely manage your digital assets, and dive into
          a world of unique NFTs.
        </p>
        <ConnectWalletV4 btnTitle="Connect Wallet" />
      </div>
    </div>
  );
}
