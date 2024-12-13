import { getTrendingNFTs } from '@/lib/simple-hash'

type PagePropsParams = {
  params: Promise<{ chain: string }>
}

export default async function Chain({ params }: PagePropsParams) {
  const { chain } = await params
  const trending = await getTrendingNFTs(chain)

  console.log(trending.collections)

  return (
    <div>Chain {chain}</div>
  )
}
