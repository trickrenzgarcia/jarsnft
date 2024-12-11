import NavBar from '@/components/layouts/nav-bar';
import TrendNFTsCarousel from '@/components/layouts/trend-nfts';

async function getTrendingNFTs() {
  const res = await fetch('https://api.simplehash.com/api/v0/nfts/collections/trending?chains=polygon&limit=10', {
    headers: {
      "X-API-KEY": process.env.SIMPLEHASH_API_KEY!
    }
  })
  const data = await res.json()
  return data
}

export default async function Home() {
  const trendingNFTs = await getTrendingNFTs()

  return (
    <div className='space-y-3'>
      <NavBar />
      <TrendNFTsCarousel trendingNFTs={trendingNFTs}/>
    </div>
  );
}
