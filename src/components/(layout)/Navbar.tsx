import Link from "next/link";
import { Login, Hamburger, JarsLogo } from "@/components/(interfaces)";
import AdminAccessLink from "./AdminAccessLink";
import { jars } from "@/lib/core/api";

export default async function Navbar() {
  return (
    <nav
      className="sticky top-0 z-50 w-full border-b-1 border-slate-800 bg-background/80 
    px-0 backdrop-blur-md"
    >
      {/* Nav Container */}
      <div className="flex w-full justify-between px-5 py-4 md:px-10">
        {/* Left-side  */}
        <div className="flex items-center">
          <Link href="/">
            <div className="flex items-end">
              <JarsLogo />
              <h1 className="mb-2 text-xl font-bold">Jars</h1>
            </div>
          </Link>

          <div className="ml-36 hidden gap-1 lg:flex xl:mr-5">
            <Link
              href="/create"
              className="cursor-pointer px-3 font-semibold hover:text-zinc-500"
            >
              Create
            </Link>
            <Link
              href="/collections"
              className="cursor-pointer px-3 font-semibold hover:text-zinc-500"
            >
              Collections
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
          <Hamburger />
          <Login />
        </div>
      </div>

      {/* Admin Access */}
      <AdminAccessLink />
    </nav>
  );
}
