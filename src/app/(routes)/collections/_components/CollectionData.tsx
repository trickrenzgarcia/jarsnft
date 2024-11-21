import jars from "@/lib/api";
import Link from "next/link";
import PaginationControls from "./PaginationControls";
import { CircleCheckBig } from "lucide-react";
import { Network, Alchemy } from "alchemy-sdk";
import CollectionDataRow from "./CollectionDataRow";

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

  // Get Total of Unique Owners (Alchemy API )
  const getOwnersForContracts = async (contractAddresses: string[]): Promise<OwnerCounts> => {
    const settings = {
      apiKey: process.env.POLYGON_ALCHEMY_API_KEY, // Alchemy API KEY
      network: Network.MATIC_MAINNET, // REPLACE WITH MAINNET IF DEPLOYED
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

      {slicedCollections.map(async (collection, i) => {
        return (
          <Link href={`/collection/${collection.contract}`} key={i}>
            <CollectionDataRow collection={collection} ownerCounts={ownerCounts} />
          </Link>
        );
      })}

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
