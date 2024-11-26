import jars from "@/lib/api";
import { shortenAddress, truncate } from "@/lib/utils";
import { Metadata, ResolvingMetadata } from "next";
import UserBanner from "../_components/UserBanner";
import { Suspense } from "react";
import UserNFTs from "../_components/UserNFTs";
import { notFound } from "next/navigation";

type Props = {
  params: {
    address: string;
  };
};

export async function generateMetadata({ params: { address } }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const shortAddress = shortenAddress(address, 5, 3);
  const user = await jars.getUser(address);
  if (!user)
    return {
      title: `User Not Found | JarsNFT`,
    };

  return {
    title: `${shortAddress} ${truncate(user.name, 12)} Profile | JarsNFT Marketplace`,
    description: `View ${shortAddress} ${truncate(user.name, 12)}'s profile on JarsNFT Marketplace`,
    keywords: ["User", "Profile", "NFT", "JarsNFT"],
  };
}

export default async function UserAccountPage({ params: { address } }: Props) {
  const getUserProfile = jars.getUserProfile(address);
  const getUserNFTs = jars.getNFTsByWallet(address);

  const [user, nfts] = await Promise.all([getUserProfile, getUserNFTs]);

  if (!user) {
    notFound();
  }

  return (
    <main className="w-full md:container">
      <Suspense fallback={<div>Loading...</div>}>
        <UserBanner user={user} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <UserNFTs nfts={nfts} />
      </Suspense>
    </main>
  );
}
