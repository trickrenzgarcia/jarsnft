import { metaAuthors, metaDescription, metaKeywords, metaName } from '@/lib/app-config'
import { Metadata } from 'next'
import { notFound } from 'next/navigation';
import { getChainMetadata } from 'thirdweb/chains'
import { ethereum, polygon, base, blast, arbitrum, avalanche, optimism, bsc } from 'thirdweb/chains'

const supportedChains = {
  ethereum,
  polygon,
  base,
  blast,
  arbitrum,
  avalanche,
  optimism,
  bsc
};

export async function generateMetadata({ params }: { params: Promise<{ chain: string }> }): Promise<Metadata> {
  const { chain } = await params

  const _chain = supportedChains[chain as keyof typeof supportedChains]

  if (!_chain) {
    // throw new Error(`Chain ${chain} not supported`)
    notFound()
  }
  
  const chainData = await getChainMetadata(_chain)

  return {
    title: `${chainData.name} NFTs | ${metaName}`,
    keywords: metaKeywords,
    description: metaDescription,
    authors: metaAuthors
  }
}

export default function ChainLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
