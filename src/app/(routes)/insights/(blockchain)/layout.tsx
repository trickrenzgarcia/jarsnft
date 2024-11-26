import { appConfig } from "@/lib/app.config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "JarsNFT Insights | JarsNFT",
    template: "%s | Blorkchain",
  },
  description: "JarsNFT Insights",
  keywords: appConfig.keywords,
};

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
