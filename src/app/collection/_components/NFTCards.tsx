"use client"

import { useContract, useNFTs } from '@thirdweb-dev/react'
import ErrorNFTCards from './ErrorNFTCards'
import LoadingNFTCards from './LoadingNFTCards'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
import Link from 'next/link'

export default function NFTCards({ address }: { address: string }) {
  const { contract } = useContract(address)
  const { data: nfts, isError, isLoading } = useNFTs(contract)

  if(isError) return <ErrorNFTCards />

  if(isLoading) return <LoadingNFTCards />

  if(nfts) return (
    <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
      {nfts.map((nft, i) => (
        <Link key={i} href={`/collection/${address}/${nft.metadata.id}`}>
          <Card className='rounded-xl hover:-translate-y-1'>
            <CardContent className='flex aspect-[1/1] items-center justify-center '>
              <Image 
                src={nft.metadata.image || ""} 
                alt='nft image' 
                className='w-full h-full rounded-t-2xl hover:opacity-25'
                width={500} height={500} 
                loading='eager' 
                style={{objectFit: "cover"}}
              />
            </CardContent>
            <CardFooter className='mt-3'>
              <div className='flex flex-col w-full'>
                <h1 className='font-semibold text-sm truncate'>{nft.metadata.name}</h1>
                <h1 className=''>Price {0}</h1>
              </div>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  )
}

