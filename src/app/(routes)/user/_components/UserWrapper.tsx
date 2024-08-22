import UserNFTs from "./UserNFTs";
import UserBanner from "./UserBanner";
import { notFound } from "next/navigation";
import { jars } from "@/lib/core/api";
import { Suspense } from "react";

async function UserWrapper({ address }: { address: string }) {
  const getUserProfile = jars.getUser(address);
  const getNFTs = jars.getNFTsForOwner(address);

  const [user, nfts] = await Promise.all([getUserProfile, getNFTs]);

  if (!user) {
    notFound();
  }

  return <></>;
}

export default UserWrapper;
