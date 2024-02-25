import { Navbar } from '@/components/(layout)'
import { SideNavLeft, SideNavRight, LearnNavbar, PageNavbarTitle } from './_components';
import { MdHome, MdOutlineKeyboardArrowRight } from 'react-icons/md';

type LearnProps = {
  children: React.ReactNode
}

export default function LearnLayout({ children }: LearnProps) {

  return (
    <main className='flex-1'>
      <LearnNavbar />
      <div className='container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10 border-t-2'>
        <SideNavLeft />
        <main className='relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]'>
          <div className='mx-auto w-full min-w-0 h-[2000px]'>
            <PageNavbarTitle />
            {children}
          </div>
          <SideNavRight />
        </main>
      </div>
    </main>
  )
}