import { CollectionCard } from '@/components/(interfaces)';
import Link from 'next/link';
import { CollectionData } from '@/types'

type Props = {
  category: "art" | "photography" | "pfp" | "gaming";
  collections: CollectionData[];
}

export default function Collections({ collections }: Props) {
  return (
    <div className='grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
      {collections.map((item) => (
        <Link key={item.contract} href={`/collection/${item.contract}`}>
          <CollectionCard item={item} hideFloorPrice />
        </Link>
      ))}
    </div>
  )
}
