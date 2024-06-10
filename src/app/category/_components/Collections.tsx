import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CollectionData } from '@/utils/getCollections';
import Image from 'next/image';
import React from 'react'
import { MdVerified } from 'react-icons/md';

type Props = {
  category: "art" | "photography" | "pfp" | "gaming";
  collections: CollectionData[];
}

export default function Collections({ collections }: Props) {
  return (
    <div className='grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5'>
      {collections.map((item) => (
        <Card key={item.contract} className='p-2 border-2 bg-secondary rounded-lg'>
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
            <CardTitle className='flex items-center text-md'>
              <span className='truncate'>{item.name}</span>
              <span>&nbsp;{item.symbol && `(${item.symbol})`}</span>
            </CardTitle>
          </CardContent>
          <CardFooter className='w-full mt-2 hidden sm:flex justify-between rounded-lg p-2 bg-muted/30'>
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
      ))}
    </div>
  )
}
