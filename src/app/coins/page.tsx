import type { NextPage } from 'next'
import Navbar from "@/components/(layout)/Navbar"
import Trending from '@/app/coins/_components/cmc-table/Trending'
import TopHeader from "@/app/coins/_components/cmc-table/TopHeader"
import CMCTable from '@/app/coins/_components/cmc-table/CMCTable'

const Home: NextPage = () => {
  return (
    <div className='min-h-screen'>
      <Navbar />
      <div className='ml-12 mx-1 px-5 py-5' />
      <TopHeader />
      <div className='mt-5' />
      <Trending />
      <div className='mt-10' />
      <CMCTable />
    </div>
  )
}

export default Home
