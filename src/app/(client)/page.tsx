import NavBar from '@/components/layouts/nav-bar';
import TrendNFTsCarousel from '@/components/layouts/trend-nfts';

export default function Home() {
  return (
    <div className='space-y-3'>
      <NavBar />
      <TrendNFTsCarousel />
    </div>
  );
}
