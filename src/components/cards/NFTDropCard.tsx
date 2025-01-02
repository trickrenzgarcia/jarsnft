import { NFTDropCollection } from '@/lib/fake-data';
import * as React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Verified } from 'lucide-react';
import CustomTooltip from '../ui/custom-tooltip';

type NFTDropCard = {
  collection: NFTDropCollection;
}

export default function NFTDropCard({ collection }: NFTDropCard) {
  
  return (
    <Card className='w-full max-w-sm overflow-hidden transition-all hover:shadow-lg'>
      <div className="relative aspect-[16/12]">
        <Image
          src={collection.imageUrl}
          alt={`${collection.name} collection image`}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader className="p-4">
        <div className='flex items-center justify-start gap-1'>
          <CardTitle className="text-lg font-bold truncate">
            {collection.name}sssssss
          </CardTitle>
          <CustomTooltip
            text='Verified Collection'
            className='bg-zinc-600 text-gray-300'
          >
            <Verified className="w-6 h-6 text-purple-600 cursor-pointer"/>
          </CustomTooltip>
        </div>
      </CardHeader>
      <CardContent className='px-4'>
        <div className='grid grid-cols-2 gap-2'>
          <div className="flex flex-col">
            <span className='text-sm'>Floor Price</span>
            <span>0</span>
          </div>
          <div className="flex flex-col">
            <span className='text-sm'>Volume</span>
            <span>0</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
