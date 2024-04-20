import { jars } from "@/lib/core/api";
import { shortenAddress, truncate } from "@/lib/utils";
import { Metadata, ResolvingMetadata } from "next";
import UserWrapper from "../_components/UserWrapper";
import UserBanner from "../_components/UserBanner";
import { Suspense } from "react";
import UserNFTs from "../_components/UserNFTs";

type Props = {
  params: {
    address: string;
  };
};

export async function generateMetadata(
  { params: { address } }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const shortAddress = shortenAddress(address, 5, 3);
  const user = await jars.getUser(address);
  if (!user)
    return {
      title: `User Not Found | JarsNFT`,
    };

  return {
    title: `${shortAddress} (${truncate(user.name, 12)}'s) Profile | JarsNFT`,
  };
}

export default async function UserAccountPage({ params: { address } }: Props) {
  const getUserProfile = jars.getUserProfile(address);
  const getUserNFTs = jars.getNFTsForOwner(address);

  const [user, nfts] = await Promise.all([getUserProfile, getUserNFTs]);

  return (
    <main className="w-full bg-slate-800 md:container">
      <Suspense fallback={<div>Loading...</div>}>
        <UserBanner user={user} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <UserNFTs nfts={nfts} />
      </Suspense>
    </main>
  );
}
