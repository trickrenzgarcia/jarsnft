import { Footer, Navbar } from "@/components/(layout)";
import React from "react";

export default function CollectionsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="py-auto mx-auto max-w-screen-2xl overflow-hidden px-2">
        <main className="p-2">{children}</main>
        <Footer/>
      </div>
    </>
  );
}
