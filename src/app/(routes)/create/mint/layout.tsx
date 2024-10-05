import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mint NFTs | JarsNFT",
};

export default function MintLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
