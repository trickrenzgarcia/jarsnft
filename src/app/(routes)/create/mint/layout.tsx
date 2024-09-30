import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mint NFTs | JarsNFT",
};

export default function MintLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="max-w-7xl p-6">{children}</div>;
}
