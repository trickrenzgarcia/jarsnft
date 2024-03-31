import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create your NFT Collection | JarsNFT",
};

export default function DeployCollectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
