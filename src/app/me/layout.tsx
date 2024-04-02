import { Navbar } from "@/components/(layout)";
import { Metadata } from "next";
import ClientWrapper from "./_components/ClientWrapper";
import ProfileBanner from "./_components/ProfileBanner";

export const metadata: Metadata = {
  title: "Your Profile | JarsNFT",
};

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <header>
        <Navbar />
      </header>

      <ClientWrapper>
        <ProfileBanner />
        <main>{children}</main>
      </ClientWrapper>
    </main>
  );
}
