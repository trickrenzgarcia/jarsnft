import Link from "next/link";
import { Login, Hamburger } from "@/components/(interfaces)";

export default function Navbar() {
  return (
    <nav
      className="sticky top-0 z-50 w-full border-b-1 border-slate-800 bg-background/80 
    px-0 py-4 backdrop-blur-md"
    >
      {/* Nav Container */}
      <div className="container flex w-full justify-between">
        {/* Left-side  */}
        <div className="flex items-center">
          <div className="">
            <Link href="/">
              <h1 className="text-2xl font-extrabold">JarsNFT</h1>
            </Link>
          </div>

          <div className="ml-36 hidden gap-1 lg:flex xl:mr-5">
            <Link
              href="/create"
              className="cursor-pointer px-3 font-semibold hover:text-zinc-500"
            >
              Create
            </Link>
            <Link
              href="/collection"
              className="cursor-pointer px-3 font-semibold hover:text-zinc-500"
            >
              Collections
            </Link>
            <Link
              href="/trade"
              className="cursor-pointer px-3 font-semibold hover:text-zinc-500"
            >
              Trade
            </Link>
            <Link
              href="/coins"
              className="cursor-pointer px-3 font-semibold hover:text-zinc-500"
            >
              Coin Analytics
            </Link>
            <Link
              href="/insights"
              className="cursor-pointer px-3 font-semibold hover:text-zinc-500"
            >
              Insights
            </Link>
          </div>
        </div>

        {/* Right-side */}
        <div className="flex items-center gap-4">
          <Login />
          <Hamburger />
        </div>
      </div>
    </nav>
  );
}
