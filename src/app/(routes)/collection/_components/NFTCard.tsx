import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import type { NFT } from '@thirdweb-dev/sdk';
import Image from 'next/image';

type NFTCardProps = {
  nft: NFT,
  isHidePrice?: boolean
}

export default function NFTCard({nft, isHidePrice = true }: NFTCardProps) {
  return (
    <Card className='p-2 border-2 bg-background rounded-lg hover:-translate-y-1 cursor-pointer hover:border-zinc-200 dark:hover:border-violet-500'>
      <CardHeader className='flex items-center justify-center aspect-square p-0'>
        <Image
          src={nft.metadata.image || '/assets/placeholder/nft_placeholder.svg'}
          alt='NFT ITEM'
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

      <CardContent className='p-2 m-2'>
        <CardDescription className='flex items-center gap-1 text-xs'>
          {/* <Link className='truncate hover:text-blue-500' href={`/collection/${contractAddress}`}>
            {contractAddress}
          </Link> */}
        </CardDescription>
        <CardTitle className='flex items-center justify-center text-sm'>
          <span className='truncate'>{nft.metadata.name}</span>
        </CardTitle>
      </CardContent>

      <CardFooter className={cn(isHidePrice && 'hidden', 'w-full sm:flex justify-between rounded-sm p-3 bg-muted dark:bg-muted/30')}>
        <div className='flex flex-col gap-1'>
          <p className='text-xs truncate text-muted-foreground'>Price</p>
          <p className='text-sm font-semibold truncate'>100 MATIC</p>
        </div>
        <div className='flex flex-col gap-1'>
          <p className='text-xs truncate text-muted-foreground'>Highest Bid</p>
          <p className='text-sm font-semibold truncate'>100 MATIC</p>
        </div>
      </CardFooter>
    </Card>
  )
}
