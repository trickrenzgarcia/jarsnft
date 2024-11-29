import { Navbar, Footer } from "@/components/(layout)";

export const metadata = {
  title: "Coin Analytics | JarsNFT",
  description: "View the latest analytics on NFTs and coins",
  keywords: ["Coins", "Analytics", "NFT"],
};

export default function CoinsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="container pb-1">{children}</main>
    </>
  );
}
