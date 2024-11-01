import { Footer, Navbar } from "@/components/(layout)";
import React from "react";

export default function CollectionsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <div className="py-auto mx-auto max-w-screen-2xl overflow-hidden px-2">
        <main className="bg-dark p-2">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
