import jars from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import PaginationControls from "./PaginationControls";
import { CircleCheckBig } from "lucide-react";
import { Network, Alchemy } from "alchemy-sdk";

export interface OwnerCounts {
  [contract: string]: number;
}

export default async function CollectionData({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const page = searchParams["page"] ?? 1;
  const limit = 5;

  const start = (Number(page) - 1) * limit;
  const end = start + limit;

  const selectedCategory = (searchParams["category"] as string) ?? "all";
  let currentCollections = await jars.getNFTCollections();
  const contractAddresses = currentCollections.map((collection) => collection.contract);

  console.log(contractAddresses);
  // Get Total of Unique Owners (Alchemy API )
  const getOwnersForContracts = async (contractAddresses: string[]): Promise<OwnerCounts> => {
    const settings = {
      apiKey: process.env.SEPOLIA_ALCHEMY_API_KEY, // Alchemy API KEY
      network: Network.ETH_SEPOLIA, // REPLACE WITH MAINNET IF DEPLOYED
    };
    const alchemy = new Alchemy(settings);
    const counts: OwnerCounts = {};
    for (const contract of contractAddresses) {
      try {
        const response = await alchemy.nft.getOwnersForContract(contract);
        counts[contract] = response.owners.length;
      } catch (error) {
        console.error(`Error fetching owners for contract ${contract}:`, error);
        counts[contract] = 0;
      }
    }
    return counts;
  };
  const ownerCounts = await getOwnersForContracts(contractAddresses);

  // Get Total Items of Collection (SimpleHash)
  const getTotalItems = async (): Promise<{ [contract: string]: number }> => {
    const totalQuantities: { [contract: string]: number } = {};

    try {
      const promises = contractAddresses.map((address) =>
        fetch(`https://api.simplehash.com/api/v0/nfts/collections/ethereum-sepolia/${address}?limit=1`, {
          method: "GET",
          headers: {
            "X-API-KEY": process.env.SIMPLEHASH_API_KEY,
            accept: "application/json",
          },
        }).then(async (response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          const totalQuantity = data.collections[0]?.total_quantity || 0; // Fallback to 0 if undefined
          totalQuantities[address] = totalQuantity;
          return totalQuantity;
        }),
      );
      await Promise.all(promises);
    } catch (error) {
      console.error("Error fetching NFT collections:", error);
    }
    return totalQuantities;
  };
  const totalItems = await getTotalItems();

  if (selectedCategory === "all") {
    currentCollections = await jars.getNFTCollections();
  } else if (selectedCategory === "art") {
    currentCollections = await jars.collection.getTrending("art");
  } else if (selectedCategory === "photography") {
    currentCollections = await jars.collection.getTrending("photography");
  } else if (selectedCategory === "pfp") {
    currentCollections = await jars.collection.getTrending("pfp");
  }

  const slicedCollections = currentCollections.slice(start, end);

  const hide = () => {
    return "hidden lg:inline-block";
  };

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-3 place-items-center space-x-4 p-4 lg:grid-cols-9">
        <h3 className="mr-8">Name</h3>
        <h3>Floor Price</h3>
        <h3 className={hide()}>Volume</h3>
        <h3 className={hide()}>Sales</h3>
        <h3 className={hide()}>Listed</h3>
        <h3 className={hide()}>Total Items</h3>
        <h3 className={hide()}>Unique Owners</h3>
        <h3 className={hide()}>NSFW</h3>
        <h3>Verified</h3>
      </div>

      {slicedCollections.map((collection, i) => (
        <Link
          href={`/collection/${collection.contract}`}
          className="grid grid-cols-3 place-items-center space-x-4 rounded-lg p-4 transition-background hover:bg-accent-foreground/15 lg:grid-cols-9"
          key={i}
        >
          <div className="mr-8 flex items-center gap-4 justify-self-start">
            <Image
              src={collection.image}
              width={50}
              height={50}
              style={{ minHeight: "60px", minWidth: "60px", objectFit: "cover", objectPosition: "center" }}
              alt="logo of a collection"
              className="size-14 rounded-lg"
            />
            <p className="h-fit max-w-[3rem] truncate sm:max-w-[6rem]">{collection.name}</p>
          </div>
          <div>{collection.sellerFeeBasisPoints}</div> {/* Floor Price */}
          <div className={hide()}>{collection.sellerFeeBasisPoints}</div> {/* Volume */}
          <div className={hide()}>{collection.sellerFeeBasisPoints}</div> {/* Sales */}
          <div className={hide()}>{collection.sellerFeeBasisPoints}</div> {/* Listed */}
          <div className={hide()}>{totalItems[collection.contract] || 0}</div> {/* Total Items */}
          <div className={hide()}>
            {(() => {
              const owners = ownerCounts[collection.contract] || 0;
              const items = totalItems[collection.contract] || 0;
              if (items === 0 || owners === 0) {
                return "0 (0.00%)";
              }
              const percentage = ((owners / items) * 100).toFixed(2);
              return `${owners} (${percentage}%)`;
            })()}
          </div>{" "}
          {/* Unique Owners */}
          <div className={hide()}>{collection.isNsfw ? <CircleCheckBig color="#fd0d0d" /> : null}</div> {/* NSFW */}
          <div>{collection.isVerified ? <Image src="/assets/verify.png" width={20} height={20} alt="verified logo" className="h-fit" /> : null}</div>
        </Link>
      ))}

      <PaginationControls
        searchParams={searchParams}
        className="py-4"
        hasPrevPage={start > 0}
        hasNextPage={end < currentCollections.length}
        collectionLength={currentCollections.length}
      />
    </div>
  );
}
