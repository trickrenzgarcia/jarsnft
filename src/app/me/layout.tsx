import { Navbar } from '@/components/(layout)'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Your Profile | JarsNFT",
};

export default function AccountLayout({ children } : { children: React.ReactNode }) {
  return (
    <main>
        <header>
            <Navbar display='fixed' />
        </header>

        <div className='w-full mb-[70px]'/> 

        <main>
            {children}
        </main>
    </main>
  )
}
