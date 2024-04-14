import { Footer, Navbar } from "@/components/(layout)";
import React from "react";

export default function CollectionsLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Navbar />
            <main className="container dark:bg-[#0a0a0a] py-16">
                {children}
            </main>
            <Footer />
        </div>
    )
}