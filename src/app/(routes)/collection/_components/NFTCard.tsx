import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import type { NFT } from '@thirdweb-dev/sdk';
import Image from 'next/image';
import Link from 'next/link';

type NFTCardProps = {
  contractAddress: string,
  nft: NFT,
  isHidePrice?: boolean
}

export default function NFTCard({ contractAddress, nft, isHidePrice = true }: NFTCardProps) {

  console.log(nft)
  
  return (
    <Card className='p-2 border-2 bg-background rounded-lg hover:-translate-y-1 cursor-pointer hover:border-zinc-200 dark:hover:border-zinc-800'>
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

      <CardContent className='mt-1 pl-1'>
        <CardDescription className='flex items-center gap-1 text-xs'>
          <Link className='truncate hover:text-blue-500' href={`/collection/${contractAddress}`}>
            {contractAddress}
          </Link>
        </CardDescription>
        <CardTitle className='flex items-center text-sm'>
          <span className='truncate'>{nft.metadata.name}</span>
        </CardTitle>
      </CardContent>

      <CardFooter className={cn(isHidePrice && 'hidden', 'w-full mt-2 sm:flex justify-between rounded-lg p-3 bg-muted dark:bg-muted/30')}>
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
