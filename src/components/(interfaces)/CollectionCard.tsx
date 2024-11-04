import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CollectionData } from '@/types';
import Image from 'next/image';
import { cn } from "@/lib/utils";

type CollectionCardProps = {
  item: CollectionData;
  hideFloorPrice: boolean
}

export default function CollectionCard({ item, hideFloorPrice = true }: CollectionCardProps) {
  return (
    <Card key={item.contract} className='p-2 border-2 bg-background rounded-lg hover:-translate-y-1 cursor-pointer hover:border-3 hover:border-violet-500 dark:hover:border-violet-500'>
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

      <CardContent className='mt-1 p-4'>
        <CardTitle className='flex items-center justify-center text-sm gap-2'>
          <span className='truncate max-w-[5rem]'>{item.name} </span>
          <span className="truncate text-sm">{item.symbol && `(${item.symbol})`}</span>
          <span>{item.isVerified ? <Image
            src="/assets/verify.png"
            width={20}
            height={20}
            alt="verified logo"
            className="h-fit"
          /> : null}</span>
        </CardTitle>
      </CardContent>
      <CardFooter className={cn(hideFloorPrice &&'w-full mt-2 flex justify-between rounded-lg p-3 bg-muted dark:bg-muted/30')}>
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
  );
}