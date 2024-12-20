import Link from 'next/link';

export function NavMenu() {
  return (
    <div className='hidden md:flex gap-4'>
      <Link href='/'>
        Home
      </Link>
      <Link href='/create'>
        Create
      </Link>
      <Link href='/market'>
        Market
      </Link>
    </div>
  )
}