import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/utils/cn';
import { CollectionData } from '@/utils/getCollections';
import Image from 'next/image';
import { MdVerified } from 'react-icons/md';

type CollectionCardProps = {
  item: CollectionData;
  hideFloorPrice: boolean;
}

export default function CollectionCard({ item, hideFloorPrice = true }: CollectionCardProps) {
  return (
    <Card key={item.contract} className='p-2 border-2 bg-background rounded-lg hover:-translate-y-1 cursor-pointer hover:border-3 hover:border-zinc-200 dark:hover:border-zinc-800'>
      <CardHeader className='flex items-center justify-center aspect-square p-0'>
        <Image 
          src={item.image}
          alt={item.name}
          width={300}
          height={300}
          loading='eager'
          style={{ 
            objectFit: 'cover',
            objectPosition: 'center'
          }}
          className="h-full w-full rounded-md"
        />
      </CardHeader>
      <CardContent className='mt-1 pl-1'>
        <CardDescription className='flex items-center gap-1 text-xs'>
          <span className='truncate'>{item.name}</span>
          {item.is_verified && (<MdVerified className='text-xs' />)}
        </CardDescription>
        <CardTitle className='flex items-center text-sm'>
          <span className='truncate'>{item.name}</span>
          <span>&nbsp;{item.symbol && `(${item.symbol})`}</span>
        </CardTitle>
      </CardContent>
      <CardFooter className={cn(hideFloorPrice && 'hidden','w-full mt-2 sm:flex justify-between rounded-lg p-3 bg-muted dark:bg-muted/30')}>
        <div className='flex flex-col gap-1'>
          <p className='text-xs truncate text-muted-foreground'>Floor</p>
          <p className='text-sm font-semibold truncate'>100 MATIC</p>
        </div>
        <div className='flex flex-col gap-1'>
          <p className='text-xs truncate text-muted-foreground'>Volume</p>
          <p className='text-sm font-semibold truncate'>100 MATIC</p>
        </div>
      </CardFooter>
    </Card>
  )
}
