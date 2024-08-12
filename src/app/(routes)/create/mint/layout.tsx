import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mint NFTs | JarsNFT",
};

export default function MintLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="md:container">{children}</div>;
}
