"use client";
import { ConnectWallet, darkTheme, lightTheme } from "@thirdweb-dev/react";
import { useTheme } from "next-themes";
import React from "react";
import LoginWelcomeScreen from "./LoginWelcomeScreen";

export default function ConnectWalletV4({ btnTitle }: { btnTitle: string | undefined }) {
  const light = lightTheme();
  const dark = darkTheme();
  const { theme } = useTheme();
  return (
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
  );
}
