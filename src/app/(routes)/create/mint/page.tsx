"use client";

import { useUserContext } from "@/components/(providers)";
import MintNFTCard from "../_components/MintNFTCard";
import { Loading } from "@/components/(skeletons)";
import NoConnectedWallet from "@/app/(routes)/me/_components/NoConnectedWallet";
import Image from "next/image";

export default function MintingPage() {
  const user = useUserContext();

  if (user.isLoading) {
    return (
      <div className="flex h-[calc(100vh-57px)] w-full items-center justify-center">
        <Loading animation="bouncy" />
      </div>
    );
  }

  if (!user.isLoggedIn) return <NoConnectedWallet />;

  return (
    <main className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full justify-items-center">
      <div className="bg-cover w-full h-full">
        <Image
        src = "/assets/monke.jpg"
        width={960}
        height={540}
        alt="image"
        />
      </div>
      <MintNFTCard />
    </main>
  );
}
