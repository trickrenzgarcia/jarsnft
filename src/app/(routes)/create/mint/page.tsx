"use client";

import { useUserContext } from "@/components/(providers)";
import MintNFTCard from "../_components/MintNFTCard";
import { Loading } from "@/components/(skeletons)";
import NoConnectedWallet from "@/app/(routes)/me/_components/NoConnectedWallet";

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
    <main className="mx-auto flex w-full flex-col justify-center gap-5 md:flex-row md:py-8">
      <MintNFTCard />
    </main>
  );
}
