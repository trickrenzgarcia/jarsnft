import { CollectionCard } from '@/components/(interfaces)';
import Link from 'next/link';
import { CollectionData } from '@/types'

type Props = {
  collections: CollectionData[];
  className: string;
}

export default function Collections({ collections, className }: Props) {
  return (
    <div className={`${className} grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6`}>
      {collections.map((item) => (
        <Link key={item.contract} href={`/collection/${item.contract}`}>
          <CollectionCard item={item} hideFloorPrice />
        </Link>
      ))}
    </div>
  )
}
