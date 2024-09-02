"use client";

import {
  ThirdwebNftMedia,
  useActiveListings,
  useContract,
  useNFTs,
  useValidDirectListings,
  useValidEnglishAuctions,
} from "@thirdweb-dev/react";
import ErrorNFTCards from "./ErrorNFTCards";
import LoadingNFTCards from "./LoadingNFTCards";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import { NFT_MARKETPLACE } from "@/types/constant";

export default function NFTCards({ address }: { address: string }) {
  const { contract } = useContract(address);
  const { contract: marketPlaceContract } = useContract(
    NFT_MARKETPLACE,
    "marketplace-v3",
  );
  const { data: nfts, isError, isLoading } = useNFTs(contract);
  const { data: listings, isLoading: loadingListings } = useValidDirectListings(
    marketPlaceContract,
    {
      count: 100,
      start: 0,
      tokenContract: address,
    },
  );
  const { data: auctions, isLoading: loadingAuctions } =
    useValidEnglishAuctions(marketPlaceContract, {
      count: 100,
      start: 0,
      tokenContract: address,
    });

  //marketPlaceContract?.directListings

  if (isError) return <ErrorNFTCards />;

  if (isLoading) return <LoadingNFTCards />;

  if (loadingListings) return <LoadingNFTCards />;

  if (loadingAuctions) return <LoadingNFTCards />;

  if (listings || auctions || nfts)
    return (
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8">
        {listings &&
          listings.map((nft, i) => (
            <Link key={i} href={`/collection/${address}/${nft.asset.id}`}>
              <Card className="rounded-xl hover:-translate-y-1">
                <CardContent className="flex aspect-square items-center justify-center ">
                  <Image
                    src={
                      nft.asset.image ||
                      "/assets/placeholder/nft_placeholder.svg"
                    }
                    alt="nft image"
                    className="h-full w-full rounded-t-2xl"
                    width={340}
                    height={340}
                    loading="eager"
                    style={{ objectFit: "cover" }}
                  />
                </CardContent>
                <CardFooter className="mt-3">
                  <div className="flex w-full flex-col">
                    <h1 className="truncate text-sm font-semibold">
                      {nft.asset.name}
                    </h1>
                    <p className="text-sm">
                      Price: {nft.currencyValuePerToken.displayValue}{" "}
                      {nft.currencyValuePerToken.symbol}
                    </p>
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        {auctions &&
          auctions.map((nft, i) => (
            <Link key={i} href={`/collection/${address}/${nft.asset.id}`}>
              <Card className="rounded-xl hover:-translate-y-1">
                <CardContent className="flex aspect-square items-center justify-center ">
                  <Image
                    src={
                      nft.asset.image ||
                      "/assets/placeholder/nft_placeholder.svg"
                    }
                    alt="nft image"
                    className="h-full w-full rounded-t-2xl"
                    width={340}
                    height={340}
                    loading="eager"
                    style={{ objectFit: "cover" }}
                  />
                </CardContent>
                <CardFooter className="mt-3">
                  <div className="flex w-full flex-col">
                    <h1 className="truncate text-sm font-semibold">
                      {nft.asset.name}
                    </h1>
                    <p className="text-sm">
                      Price: {nft.buyoutCurrencyValue.displayValue}{" "}
                      {nft.minimumBidCurrencyValue.symbol}
                    </p>
                    <p className="text-sm">
                      Min Bid: {nft.minimumBidCurrencyValue.displayValue}{" "}
                      {nft.minimumBidCurrencyValue.symbol}
                    </p>
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        {nfts &&
          nfts
            .filter((nft) =>
              listings?.every(
                (listing) => listing.asset.id !== nft.metadata.id,
              ),
            )
            .filter((nft) =>
              auctions?.every(
                (auction) => auction.asset.id !== nft.metadata.id,
              ),
            )
            .map((nft, i) => (
              <Link key={i} href={`/collection/${address}/${nft.metadata.id}`}>
                <Card className="rounded-xl hover:-translate-y-1">
                  <CardContent className="flex aspect-square items-center justify-center ">
                    <Image
                      src={
                        nft.metadata.image ||
                        "/assets/placeholder/nft_placeholder.svg"
                      }
                      alt="nft image"
                      className="h-full w-full rounded-t-2xl"
                      width={340}
                      height={340}
                      loading="eager"
                      style={{ objectFit: "cover" }}
                    />
                  </CardContent>
                  <CardFooter className="mt-3">
                    <div className="flex w-full flex-col">
                      <h1 className="truncate text-sm font-semibold">
                        {nft.metadata.name}
                      </h1>
                      <p className="text-sm">Not Listed</p>
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            ))}
      </div>
    );
}
