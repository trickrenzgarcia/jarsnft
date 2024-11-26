import React from "react";
import CreateNavbar from "./_components/CreateNavbar";
import { Metadata } from "next";
import { appConfig } from "@/lib/app.config";

export const metadata: Metadata = {
  title: "Create your NFTs | JarsNFT",
  description: "Create your NFTs on JarsNFT",
  keywords: appConfig.keywords,
};

type CreateLayoutProps = {
  children: React.ReactNode;
};

export default function CreateLayout({ children }: CreateLayoutProps) {
  return (
    <main className="bg-background">
      <CreateNavbar />
      {children}
    </main>
  );
}
