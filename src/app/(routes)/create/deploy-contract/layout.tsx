import { appConfig } from "@/lib/app.config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create your NFT Collection | JarsNFT",
  description: "Create your NFT Collection on JarsNFT",
  keywords: appConfig.keywords,
};

export default function DeployCollectionLayout({ children }: { children: React.ReactNode }) {
  return <div className="md:container">{children}</div>;
}
