import { SideNavLeft, SideNavRight, LearnNavbar, PageNextButton } from "./_components";
import { PageNavTopic } from "./_components/PageNavbar";
import SideBarHamburger from "./_components/SideBarHamburger";
import FAQsInsight from "./_components/FAQs";
import { appConfig } from "@/lib/app.config";
import { Metadata } from "next";
import RenderLearn from "./render-learn";

export const metadata: Metadata = {
  title: "Learn about JarsNFT | JarsNFT",
  description: "Learn about JarsNFT",
  keywords: appConfig.keywords,
};

export default function LearnLayout({ children }: { children: React.ReactNode }) {
  return <RenderLearn>{children}</RenderLearn>;
}
