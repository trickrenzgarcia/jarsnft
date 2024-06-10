"use client";

import { useUser } from "@thirdweb-dev/react";
import {
  ConnectWeb3,
  CreateUserDialog,
  ProfileButton,
} from "@/components/(interfaces)/index";
import { ProfileQuery } from "@/types/users";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import { P } from "../_components/TailwindTags";

export default function CreateNftPage() {
  const { user, isLoading, isLoggedIn } = useUser() as ProfileQuery;
  return (
    <section>
      <h1 className="mt-4 text-4xl font-bold md:text-5xl">Create your NFT</h1>
      <h3 className="my-6 text-xl font-bold tracking-wider">{`Begin your first-ever NFT!`}</h3>
      <P>{`Creating your NFTs and especially if it is a first one can feel anxious and an intimidating process. 
      Therefore, we provide a guide on how to navigate our Marketplace and specifically how to upload, create, and mint your NFTs.`}</P>
      <P>{`First let us define what is minting first: it is a process of creating an NFT or a token in the blockchain. 
      In other words, what you've uploaded and payed for to be created is transformed into an NFT and imprinted in the blockchain.`}</P>

      <div id="create">
        <h2 className="my-6 text-3xl font-bold">How to Create an NFT</h2>
        <h3 className="my-6 text-xl font-bold tracking-wider">{`Step 1: Go to Create Page`}</h3>
        <P>
          {`First you will have to navigate to our 'Create' page found in our navigation bar or you can `}
          <span className="font-semibold text-[#A519D7] underline">
            <a href="/create">Click Here</a>
          </span>
          .
        </P>
        <Image
          src="/assets/InsightsAsset/JARS create 1.png"
          width={1920}
          height={1080}
          alt="JARS Navigation bar"
          className="mb-2 max-h-[100%] max-w-full"
        />
        <h3 className="my-6 text-xl font-bold tracking-wider">{`Step 2: Select Your Option`}</h3>
        <P>{`Next you will be redirected to this page that offers us to options:`}</P>
        <Image
          src="/assets/InsightsAsset/JARS create 2.png"
          width={1920}
          height={1080}
          alt="JARS Create Page"
          className="mb-2 max-h-[100%] max-w-full "
        />
        <ul className="ml-14 mt-6 list-disc leading-loose tracking-wide dark:text-gray-300">
          <li className="mb-3">
            <span className="font-bold">Create NFT Collection:</span>
            {` This option will be the first step for every beginner. Creating your first collection will be like creating and album for your NFTs!`}
          </li>
          <li className="mb-6">
            <span className="font-bold">Mint an NFT:</span>
            {` After creating your collection or have an existing one, you can now mint your individual NFT and save it your own collection.`}
          </li>
        </ul>
        <h3 className="my-6 text-xl font-bold tracking-wider">{`Creating NFT Collection`}</h3>
        <P>{`Here is an example of creating your collection:`}</P>
        <Image
          src="/assets/InsightsAsset/JARS create 3.gif"
          width={1920}
          height={1080}
          alt="Creating Collection"
          quality={100}
          className="mb-2 max-h-[100%] max-w-[60%] "
        />
        <P>{`To summarize, what you will need is the image file of your collection. Then create a name and description that can attract other creators to take an interest in your NFTs.
      Then you can set how much revenue you can receive from that collection. `}</P>
        <h3 className="my-6 text-xl font-bold tracking-wider">{`Minting an NFT`}</h3>
        <P>{`Next we will go through with how to mint an NFT! Select 'Mint an NFT' in the Create page`}</P>
        <Image
          src="/assets/InsightsAsset/JARS mint 1.png"
          width={1920}
          height={1080}
          alt="Creating Collection"
          quality={100}
          className="mb-2 max-h-[100%] max-w-full "
        />
        <P>{`Then follow through the steps presented in this example:`}</P>
        <Image
          src="/assets/InsightsAsset/JARS mint 2.gif"
          width={1920}
          height={1080}
          alt="Creating Collection"
          quality={100}
          className="mb-2 max-h-[100%] max-w-[60%] "
        />
        <P>{`To summarize, you only need to upload the image you want to be minted to an NFT. 
        After that, adding a description and traits which adds relevancy, engagement in the community and adds more discoveribility to your NFTs`}</P>
      </div>
    </section>
    // <>
    // <div className="w-full h-screen">
    // <div className="flex flex-col">
    //   <div className="flex flex-row gap-5 items-center justify-between">
    //   <h1 className="text-2xl">Step 1: Connect wallet of your choosing</h1>
    //   <div className="flex-wrap">
    //   {isLoading ? (
    //     <>
    //     <div className="flex flex-row gap-4 items-center mr-8">
    //     <Skeleton className="h-[35px] w-[35px] rounded-full" />
    //     <Skeleton className="h-[53px] w-[120px] rounded-[8px]" />
    //     </div>
    //     </>
    //   ) : isLoggedIn ? (
    //     <div className="flex items-center gap-2">
    //       <ProfileButton />
    //       <ConnectWeb3 btnTitle="Connect" />
    //     </div>
    //   ) : (
    //     <ConnectWeb3 btnTitle="Connect" />
    //   )}
    //   </div>
    //   </div>
    //   {/* If the user is logged in but not listed. */}
    //   {isLoggedIn && !user.data.session.is_listed && (
    //     <CreateUserDialog isOpenCreate={!user.data.session.is_listed} />
    //   )}

    //   <div className="mt-5">
    //   <h1 className="text-2xl">Step 2: In Navigation bar go to &quot;Create&quot;</h1>
    //   </div>
    //   <div className="mt-5">
    //   <h1 className="text-2xl">Step 3: Choose &quot;Create NFT Collection&quot; if you want a collection of NFT(s) and &quot;Mint an NFT&quot; for single NFT</h1>
    //   <div className="hidden md:hidden lg:block 2xl:block ">
    //   <Image
    //   src="/CreatePage.png"
    //   width={900}
    //   height={500}
    //   alt="page"
    //   quality={100}
    //   className="mt-5"
    //   style={{minWidth:900 ,minHeight:500}}
    //   />
    //   </div>

    //   </div>
    // </div>
    // </div>
    // </>
  );
}
