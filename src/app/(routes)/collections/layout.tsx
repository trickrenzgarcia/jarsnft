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
      <div className="mx-auto overflow-hidden">
      <main className="container">
        {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}
