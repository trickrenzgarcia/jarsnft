"use client";

import { open_sans, poppins } from "@/lib/fonts";
import { cn, formatNumber } from "@/lib/utils";
import Image from "next/image";
import { MdVerified } from "react-icons/md";
import { ReadMore } from "./ReadMore";
import React from "react";
import Link from "next/link";
import {
  FaDiscord,
  FaEthereum,
  FaInstagram,
  FaTelegram,
  FaTwitter,
  FaWikipediaW,
} from "react-icons/fa";
import TooltipMsg from "@/components/(interfaces)/TooltipMsg";
import { MetadataSchema } from "@/types";
import { CustomContractMetadata } from "@thirdweb-dev/sdk";
import {
  useContract,
  useContractMetadata,
  useMetadata,
} from "@thirdweb-dev/react";
import { AlchemyContractMetadata } from "@/lib/core/types";

type BannerMetadataProps = {
  address: string;
  metadata: AlchemyContractMetadata;
};

type QueryMetadata = {
  data: CustomContractMetadata;
  isLoading: boolean;
  isError: boolean;
};
export default function NFTBannerMetadata({
  address,
  metadata,
}: BannerMetadataProps) {
  const { contract } = useContract(address);
  const { data, isLoading, isError } = useContractMetadata(
    contract,
  ) as QueryMetadata;

  console.log(data);
  const [details] = React.useState([
    { detail: "Floor", value: 10 },
    { detail: "24h Vol", value: 1170 },
    { detail: "7d Vol", value: 7280 },
    { detail: "Total Vol", value: 1230240 },
  ]);
  if (data) {
    return (
      <main className="flex w-full flex-col bg-slate-600 text-white dark:bg-background">
        <div className="relative h-[200px] w-auto md:h-[400px] ">
          <Image
            src={data.image || "/assets/collection_banner_placeholder.png"}
            fill
            style={{
              objectFit: "cover",
            }}
            alt="Collection Banner"
            className="opacity-100 md:opacity-65 dark:md:opacity-30"
          />
        </div>
        <div className="absolute hidden h-[400px] w-full px-7 py-6 dark:shadow-[inset_0_-50px_100px_rgba(10,10,10,1)] md:block">
          <section className="mb-4 flex justify-between">
            <div className="flex items-center gap-3">
              <Image
                src={data.image || "/assets/image_not_found.jpg"}
                width={125}
                height={125}
                alt=""
                className="aspect-square rounded-xl border bg-background object-fill"
              />
              <div className={cn("w-[500px]", open_sans.className)}>
                <div className="flex w-full items-center gap-1 text-2xl font-semibold">
                  <div className="truncate">
                    <h2 className="truncate">{metadata.name}</h2>
                  </div>
                  <TooltipMsg message="Verified">
                    <div className="cursor-pointer rounded-sm p-1 hover:bg-slate-500/30">
                      <MdVerified className="text-blue-500" />
                    </div>
                  </TooltipMsg>
                </div>

                <p className="font-bold">A collection of {100} NFTs.</p>
              </div>
            </div>
            <div className=""></div>
          </section>

          <section className="mb-3 flex w-full justify-between">
            <div className="h-[160px] w-[500px] overflow-x-hidden text-sm font-semibold dark:text-gray-300">
              <ReadMore
                id="collection-description"
                text={metadata.name || ""}
                amountOfWords={24}
              />
            </div>
            <div className="hidden items-center gap-6 pl-3 lg:flex">
              {details.map((detail, i) => (
                <div key={i} className={cn(poppins.className, "w-[110px]")}>
                  <h1 className="flex text-2xl font-semibold">
                    <FaEthereum />
                    <span>{formatNumber(detail.value)}</span>
                  </h1>
                  <p className="text-sm font-normal text-gray-300 dark:text-gray-500">
                    {detail.detail}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="flex w-full justify-between">
            <div className="w-[500px]">
              <Socials
                social={{
                  wiki_url: metadata.openSeaMetadata.externalUrl || "",
                  discord_url: metadata.openSeaMetadata.discordUrl || "",
                  twitter_username: metadata.openSeaMetadata.twitterUsername || "",
                }}
              />
            </div>
          </section>
        </div>
      </main>
    );
  }

  type Social = {
    wiki_url?: string;
    twitter_username?: string;
    discord_url?: string;
    instagram_username?: string;
    telegram_url?: string;
  };

  function Socials({ social }: { social: Social }) {
    const { wiki_url, discord_url, twitter_username } = social;

    const hidden =
      (!wiki_url && !discord_url && !twitter_username && "hidden") || "";

    return (
      <div className={cn("flex gap-2", hidden)}>
        {wiki_url && (
          <Link
            href={wiki_url}
            className="rounded-md hover:bg-slate-700/60 dark:hover:bg-slate-700/40"
            target="_blank"
          >
            <div className="flex h-[33px] w-[33px] items-center justify-center">
              <FaWikipediaW />
            </div>
          </Link>
        )}
        {discord_url && (
          <Link
            href={discord_url}
            className="rounded-md hover:bg-slate-700/40"
            target="_blank"
          >
            <div className="flex h-[33px] w-[33px] items-center justify-center">
              <FaDiscord />
            </div>
          </Link>
        )}
        {twitter_username && (
          <Link
            href={twitter_username}
            className="rounded-md hover:bg-slate-700/40"
            target="_blank"
          >
            <div className="flex h-[33px] w-[33px] items-center justify-center">
              <FaTwitter className="fa-brands fa-x-twitter" />
            </div>
          </Link>
        )}
      </div>
    );
  }
}
