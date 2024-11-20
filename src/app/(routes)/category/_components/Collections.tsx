import { CollectionCard } from "@/components/(interfaces)";
import Link from "next/link";
import { CollectionData } from "@/types";

type Props = {
  collections: CollectionData[];
};

export default function Collections({ collections }: Props) {
  return (
    <div className={`grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5`}>
      {collections.map((item) => (
        <Link key={item.contract} href={`/collection/${item.contract}`}>
          <CollectionCard item={item} />
        </Link>
      ))}
    </div>
  );
}
