import React from "react";
import CreateNavbar from "./_components/CreateNavbar";
import { Metadata } from "next";
import WavyEffect from "./_components/WavyEffect";

export const metadata: Metadata = {
  title: "Create your NFTs | JarsNFT",
};

type CreateLayoutProps = {
  children: React.ReactNode;
};

export default function CreateLayout({ children }: CreateLayoutProps) {
  return (
    <main className="flex-1 bg-background">
      <CreateNavbar />
      {children}
    </main>
  );
}
