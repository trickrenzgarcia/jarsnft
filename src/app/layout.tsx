import type { Metadata } from "next";
import { inter } from "@/lib/fonts";
import "./globals.css";
import {
  ThemeProvider,
  ThirdwebProvider,
  UserProvider
} from '@/components/(providers)';
import { cn } from '@/lib/utils';
import { appConfig as config } from '@/lib/config';
import { Toaster } from "@/components/ui/sonner";

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
      <body className={cn("antialiased overflow-x-hidden w-screen", inter.className)}>
        <ThirdwebProvider>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            <UserProvider>
              {children}
              <Toaster richColors />
            </UserProvider>
          </ThemeProvider>
        </ThirdwebProvider>
      </body>
    </html>
  );
}
