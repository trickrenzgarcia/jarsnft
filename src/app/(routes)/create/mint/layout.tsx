import { appConfig } from "@/lib/app.config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mint NFTs | JarsNFT",
  description: "Mint NFTs on JarsNFT",
  keywords: appConfig.keywords,
};

export default function MintLayout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
