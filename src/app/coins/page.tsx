import  type { NextPage } from 'next'
import Navbar from "@/components/(layout)/Navbar"
import Trending from '@/app/coins/_components/cmc-table/Trending'
import TopHeader from "@/app/coins/_components/cmc-table/TopHeader"
import CMCTable from '@/app/coins/_components/cmc-table/CMCTable'

const Home: NextPage = () => {
  return (
    <div className='min-h-screen'>
      <Navbar display='sticky'/>
      <div className='mt-10'/>
      <TopHeader/>
      <div className='mt-10'/>
      <Trending/>
      <div className='mt-20'/>
      <CMCTable/>
    </div>
  )
}

export default Home
