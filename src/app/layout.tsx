import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThirdwebProvider as ThirdwebProviderV5 } from "thirdweb/react";
import "./globals.css";
import { appConfig } from "@/lib/app.config";
import { cn } from "@/lib/utils";
import { ThemeProvider, ThirdwebProviderV4, UserProvider } from "@/components/(providers)";
import ChatbotModal from "@/components/(layout)/_main/ChatbotModal";
import ModeToggle from "@/components/(interfaces)/ModeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  manifest: "/manifest.json",
  title: appConfig.name,
  authors: appConfig.author,
  description: appConfig.description,
  keywords: appConfig.keywords,
  openGraph: {
    type: "website",
    locale: "en-US",
    url: appConfig.url.base,
    title: appConfig.name,
    description: appConfig.description,
    siteName: appConfig.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("w-screen overflow-x-hidden antialiased", inter.className)}>
        <ThirdwebProviderV4>
          <ThirdwebProviderV5>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
              <UserProvider>{children}</UserProvider>
              <ModeToggle className="fixed bottom-0 right-0 z-20 mt-2 rounded-lg p-2" />
            </ThemeProvider>
          </ThirdwebProviderV5>
        </ThirdwebProviderV4>
        <ChatbotModal className="fixed bottom-0 right-0 z-10 rounded-lg p-2 pb-16" />
      </body>
    </html>
  );
}
