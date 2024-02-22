import { Navbar } from '@/components/(layout)'
import dynamic from "next/dynamic";

type LearnProps = {
  children: React.ReactNode
}

export default function LearnLayout({ children }: LearnProps) {

  const Footer = dynamic(() => import("@/components/(layout)/Footer"), { ssr: false })

  return (
    <div className='bg-blue-200 w-full max-w-screen-2xl mx-auto'>
      <Navbar display='fixed' />
      <div className='flex pt-28'>
        <div className='basis-[10%]'>
          <ul>
            <li>Welcome</li>
          </ul>
        </div>
        <div className='basis-[80%]'>
          {children}
        </div>
        <div className='basis-[10%]'>

        </div>
      </div>
      
      <Footer />
    </div>
  )
}