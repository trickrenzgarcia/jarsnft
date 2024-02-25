import { Navbar } from '@/components/(layout)';
import Link from 'next/link';

export default function TestLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar display='fixed' />
      <div className='w-full h-[300px] flex justify-center items-center border-b-2'>
        <h1 className='text-4xl font-bold'>This Page is for testing components</h1>
      </div>
      <div className='flex'>
        <div className='basis-[20%] border-r-2 p-7'>
          <h2 className='font-bold mb-2'>Test Links</h2>
          <ul>
            <li className="hover:underline">
              <Link href='/test/likes'>Likes</Link>
            </li>
            <li className="hover:underline">
              <Link href='/test/messages'>Messages</Link>
            </li>
            <li className="hover:underline">
              <Link href='/test/spline'>Spline 3D</Link>
            </li>
          </ul>
        </div>
        <div className='basis-[80%]'>
          {children}
        </div>
      </div>
    </>
  )
}