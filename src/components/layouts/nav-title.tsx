import Image from 'next/image';
import Link from 'next/link';

export function NavTitle() {
  return (
    <Link href='/'>
      <div className='flex items-center gap-1'>
        <Image src="/placeholder.svg" alt='' width={30} height={30} className='invert'/>
        <h1 className='text-lg font-bold'>JarsNFT</h1>
      </div>
    </Link>
  )
}