"use client"

import React from 'react'
import {Tabs, Tab, Card, CardBody, CardHeader, Divider} from "@nextui-org/react"; 
import { LuTableProperties } from "react-icons/lu";
import { GrStatusInfo } from "react-icons/gr";
import { BsCollection } from "react-icons/bs";
import { useNftContext } from './nft-provider';
import { useChain } from '@thirdweb-dev/react';
import { shortenAddress } from '@/lib/utils';
import Image from 'next/image';

type NftAttributes = {
  trait_type: string;
  value: string;
}

export default function NftMetadata() {
  const { nft, loadingNft, contractAddress, collection } = useNftContext();
  const chain = useChain();

  if(loadingNft) return (
    <div>Loading...</div>
  )

  return (
    <Tabs variant="underlined" aria-label="Tabs variants">
      <Tab key="Properties" title="Properties" className='w-full '>
        <Card className='bg-card p-2 rounded-lg'>
          <CardHeader className='flex gap-3'>
            <LuTableProperties />
            <p className='text-md'>Properties</p>
          </CardHeader>
          <Divider/>
          <CardBody>
            {/* @ts-ignore */}
            {nft && nft.metadata.attributes && nft.metadata.attributes.map((attr: NftAttributes, i) => (
              <div key={i} className='flex text-gray-500 dark:text-gray-400 justify-between py-3 px-4 hover:bg-muted/50 gap-2 rounded-lg'>
                <p className='text-lg'>{attr.trait_type}</p>
                <p className='text-lg font-semibold'>{attr.value}</p>
              </div>
            ))}
            {/* @ts-ignore */}
            {nft && !nft.metadata.attributes && (
              <div className='text-gray-500 dark:text-gray-400'>
                <div className='flex justify-between py-3 px-4 hover:bg-muted/50 gap-2 rounded-lg'>
                  <p className=''>NO PROPERTIES</p>
                </div>
              </div>
            )}
          </CardBody>
        </Card>
      </Tab>
      <Tab key="Token Details" title="Token Details" className='w-full'>
        <Card className='bg-card p-2 w-full rounded-lg'>
          <CardHeader className='flex gap-3'>
            <GrStatusInfo />
            <p className='text-md'>Token Details</p>
          </CardHeader>
          <Divider/>
          <CardBody>
            {nft && (
              
              <div className='text-gray-500 dark:text-gray-400'>
                <div className='flex justify-between py-3 px-4 hover:bg-muted/50 gap-2 rounded-lg'>
                  <p className=''>TOKEN ID</p>
                  <p className=' font-semibold'>{nft.metadata.id}</p>
                </div>
                <div className='flex justify-between py-3 px-4 hover:bg-muted/50 gap-2 rounded-lg'>
                  <p className=''>BLOCKCHAIN</p>
                  <p className=' font-semibold'>{chain && chain.name}</p>
                </div>
                <div className='flex justify-between py-3 px-4 hover:bg-muted/50 gap-2 rounded-lg'>
                  <p className=''>TOKEN STANDARD</p>
                  <p className=' font-semibold'>{nft.type}</p>
                </div>
                <Divider/>
                <div className='flex justify-between py-3 px-4 hover:bg-muted/50 gap-2 rounded-lg'>
                  <p className=''>CONTRACT</p>
                  <p className=' font-semibold hover:underline hover:cursor-pointer'>
                    {shortenAddress(contractAddress, 2, 4)}
                  </p>
                </div>
                <div className='flex justify-between py-3 px-4 hover:bg-muted/50 gap-2 rounded-lg'>
                  <p className=''>CREATORS FEE</p>
                  <p className=' font-semibold'>
                    {collection && (collection.seller_fee_basis_points / 100)}%
                  </p>
                </div>
              </div>
            )}
          </CardBody>
        </Card>
      </Tab>
      <Tab key="Collection Details" title="Collection Details" className='w-full'>
        <Card className='bg-card p-2 w-full'>
          <CardHeader className='flex gap-3'>
            <BsCollection />
            <p className='text-md'>Collection Info</p>
          </CardHeader>
          <Divider/>
          <CardBody>
            {collection && (
              <div className='flex'>
                <div className='p-1 rounded-lg shadow-sm w-fit'>
                  <Image 
                    src={collection.image}
                    width={60}
                    height={60}
                    alt={collection.name}
                    className='rounded-lg'
                  />
                </div>
                <div className='flex flex-col gap-1'>
                  <p className='font-bold'>{collection.name} {collection.symbol && `(${collection.symbol})`}</p>
                  <p>{shortenAddress(contractAddress, 2, 4)}</p>
                </div>
              </div>
            )}
          </CardBody>
        </Card>
      </Tab>
    </Tabs>
  )
  
}
