import { Footer, Navbar } from "@/components/(layout)";
import React from "react";

export default function CollectionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      <div className="mx-auto py-auto max-w-7xl pl-2 overflow-hidden">
        {children}
      </div>
      <Footer />
    </div>
  );
}
