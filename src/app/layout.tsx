import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import {
  SessionProvider,
  ThemeProvider,
  ThirdwebProvider
} from '@/components/(providers)';
import { cn } from '@/lib/utils';
import { appConfig as config } from '@/lib/config';
import { Footer, Navbar } from '@/components/(layout)';

const poppins = Poppins({ weight: "500", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(config.url.base),
  title: config.name,
  authors: config.author,
  description: config.description,
  keywords: config.keywords,
  openGraph: {
    type: "website",
    locale: "en-US",
    url: config.url.base,
    title: config.name,
    description: config.description,
    siteName: config.name,
  }
};

export default function RootLayout({
  children,
}:Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("antialiased overflow-x-hidden w-screen", poppins.className)}>
          <ThirdwebProvider>
            <ThemeProvider
              attribute='class'
              defaultTheme='system'
              enableSystem
              disableTransitionOnChange
            >
              <Navbar />
                {children}
              <Footer />
            </ThemeProvider>
          </ThirdwebProvider>
      </body>
    </html>
  );
}
