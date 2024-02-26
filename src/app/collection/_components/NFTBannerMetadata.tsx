"use client"

import { open_sans, poppins } from '@/lib/fonts';
import { cn, formatNumber } from '@/lib/utils';
import Image from 'next/image';
import { MdVerified } from 'react-icons/md'
import { ReadMore } from './ReadMore';
import React from 'react';
import Link from 'next/link';
import { FaDiscord, FaEthereum, FaInstagram, FaTelegram, FaTwitter, FaWikipediaW } from 'react-icons/fa';
import TooltipMsg from '@/components/(interfaces)/TooltipMsg';
import { MetadataSchema } from '@/types';

type BannerMetadataProps = {
  metadata: MetadataSchema
}

export default function NFTBannerMetadata({ metadata }: BannerMetadataProps) {
  const [data] = React.useState({
    name: metadata.name,
    amountOfNfts: 100,
    img: metadata.image_url,
    bannerImg: "/assets/collection_banner.webp",
    description: metadata.description,
    project_url: "",
    wiki_url: metadata.wiki_url,
    discord_url: metadata.discord_url,
    telegram_url: metadata.telegram_url,
    twitter_username: metadata.twitter_username,
    instagram_username: metadata.instagram_username,
  })

  const [details] = React.useState([
    { detail: "Floor", value: 10 },
    { detail: "24h Vol", value: 1170 },
    { detail: "7d Vol", value: 7280 },
    { detail: "Total Vol", value: 1230240 }
  ])


  return (
    <main className='w-full flex flex-col bg-slate-600 dark:bg-background text-white'>
        <div className='relative w-auto h-[200px] md:h-[400px] '>
          <Image src={data.bannerImg} fill style={{
              objectFit: "cover"
            }} 
            alt='Collection Banner'
            className='opacity-100 md:opacity-65 dark:md:opacity-30'
          />
        </div>
        <div className='absolute hidden md:block w-full h-[400px] px-7 py-6 dark:shadow-[inset_0_-50px_100px_rgba(10,10,10,1)]'>

          <section className='flex justify-between mb-4'>
            <div className='flex items-center gap-3'>
              <Image 
                src={data.img}
                width={125} height={125} 
                alt='Collection image'
                className='border rounded-xl'
              />
              <div className={cn('w-[500px]', open_sans.className)}>
                <div className='w-full flex gap-1 items-center font-semibold text-2xl'>
                  <div className='truncate'>
                    <h2 className='truncate'>{data.name}</h2>
                  </div>
                  <TooltipMsg message='Verified'>
                    <div className='rounded-sm hover:bg-slate-500/30 p-1 cursor-pointer'>
                      <MdVerified className='text-blue-500'/>
                    </div>
                  </TooltipMsg>
                  
                </div>
                
                <p className='font-bold'>A collection of {data.amountOfNfts} Jajars nft</p>
              </div>
            </div>
            <div className=''>
              
            </div>

          </section>

          <section className='w-full flex justify-between mb-3'>
            <div className='w-[500px] h-[160px] overflow-x-hidden dark:text-gray-300 text-sm font-semibold'>
              <ReadMore id='collection-description' text={data.description} amountOfWords={24}
              />
            </div>
            <div className='hidden lg:flex items-center gap-6 pl-3'>
              {details.map((detail, i) => (
                <div key={i} className={cn(poppins.className, 'w-[110px]')}>
                  <h1 className='text-2xl flex font-semibold'>
                    <FaEthereum />
                    <span>{formatNumber(detail.value)}</span>
                  </h1>
                  <p className='text-sm text-gray-300 dark:text-gray-500 font-normal'>{detail.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className='w-full flex justify-between'>
            <div className='w-[500px]'>
              <Socials social={{
                wiki_url: data.wiki_url,
                discord_url: data.discord_url,
                telegram_url: data.telegram_url,
                twitter_username: data.twitter_username,
                instagram_username: data.instagram_username
              }} 
              />
            </div>
          </section>

        </div>
      </main>
  )
}

type Social = {
  wiki_url?: string,
  twitter_username?: string,
  discord_url?: string,
  instagram_username?: string,
  telegram_url?: string,
}

function Socials({ social }: { social: Social }) {

  const { wiki_url, discord_url, instagram_username, telegram_url, twitter_username } = social

  const hidden = (!wiki_url && !discord_url && !instagram_username && !telegram_url && !twitter_username) && "hidden" || ""

  return (
    <div className={cn('flex gap-2', hidden)}>
      {wiki_url && (
        <Link href={wiki_url} className='hover:bg-slate-700/60 dark:hover:bg-slate-700/40 rounded-md' target='_blank'>
          <div className='w-[33px] h-[33px] flex justify-center items-center'>
            <FaWikipediaW />
          </div>
        </Link>
      )}
      {discord_url && (
        <Link href={discord_url} className='hover:bg-slate-700/40 rounded-md' target='_blank'>
          <div className='w-[33px] h-[33px] flex justify-center items-center'>
            <FaDiscord />
          </div>
        </Link>
      )}
      {twitter_username && (
        <Link href={twitter_username} className='hover:bg-slate-700/40 rounded-md' target='_blank'>
          <div className='w-[33px] h-[33px] flex justify-center items-center'>
            <FaTwitter className='fa-brands fa-x-twitter' />
          </div>
        </Link>
      )}
      {telegram_url && (
        <Link href={telegram_url} className='hover:bg-slate-700/40 rounded-md' target='_blank'>
          <div className='w-[33px] h-[33px] flex justify-center items-center'>
            <FaTelegram />
          </div>
        </Link>
      )}
      {instagram_username && (
        <Link href={instagram_username} className='hover:bg-slate-700/40 rounded-md' target='_blank'>
          <div className='w-[33px] h-[33px] flex justify-center items-center'>
            <FaInstagram />
          </div>
        </Link>
      )}
    </div>
  )
}