"use client";

import NFTCreateContractCard from "../_components/NFTCreateContractCard";
import DetailsCard from "../_components/DetailsCard";
import ProfileCard from "../_components/ProfileCard";
import { useUserContext } from "@/components/(providers)";
import { Loading } from "@/components/(skeletons)";
import NoConnectedWallet from "@/app/me/_components/NoConnectedWallet";

export default function DeployContractPage() {
  const { user, isLoading, isLoggedIn } = useUserContext();

  if(isLoading) {
    return (
      <div className="w-full flex flex-col h-[calc(100vh-57px)] items-center justify-center">
        <Loading animation="bouncy" />
      </div>
    );
  }

  if(!isLoggedIn) {
    return <NoConnectedWallet />
  }

  return (
    <main className="w-full flex flex-col mx-auto md:flex-row justify-center md:py-8 gap-5">
      <section>
        <NFTCreateContractCard
          title="Create NFT Collection"
          description='The NFT Collection contract is suitable for when you want to have a collection of unique NFTs, but not "drop" or "release" them for your community to claim.'
        />
      </section>
      <section className="hidden lg:block">
        {(isLoading && <>Loading ProfileCard...</>) || <ProfileCard user={user} />}
        <DetailsCard title="Once your contract deployment is complete, you'll have the ability to:" />
      </section>
    </main>
  );
}