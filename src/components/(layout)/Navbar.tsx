import Link from "next/link";
import { Login } from "@/components/(interfaces)"

export default function Navbar() {
  return (
    <nav className="sticky container top-0 flex justify-between p-6 z-50 bg-background border-b-1 border-slate-800">
      {/* Left-side  */}
      <div className="flex items-center">
        <div className="">
          <Link href="/">
            <h1 className="font-extrabold text-2xl">JarsNFT</h1>
          </Link>
        </div>

        <div className="hidden lg:flex ml-36 gap-1 xl:mr-5">
          <Link
            href="/create"
            className="px-3 font-semibold hover:text-zinc-500 cursor-pointer"
          >Create</Link>
          <Link
            href="/collection"
            className="px-3 font-semibold hover:text-zinc-500 cursor-pointer"
          >Collections</Link>
          <Link
            href="/trade"
            className="px-3 font-semibold hover:text-zinc-500 cursor-pointer"
          >Trade</Link>
          <Link
            href="/coins"
            className="px-3 font-semibold hover:text-zinc-500 cursor-pointer"
          >Coin Analytics</Link>
          <Link
            href="/learn"
            className="px-3 font-semibold hover:text-zinc-500 cursor-pointer"
          >Insights</Link>
        </div>
      </div>

      {/* Right-side */}
      <Login />
    </nav>
  );
}
