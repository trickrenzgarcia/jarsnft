"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { IoHome } from "react-icons/io5";
import { Login } from "@/components/(interfaces)";

export default function LearnNavbar() {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-700 bg-background/95 py-2 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:py-4 ">
      <div className="container flex items-center justify-center px-4 lg:justify-between lg:px-20">
        {/* flex w-full items-center justify-center md:w-fit md:justify-normal */}
        <div className="-ml-4 flex items-center justify-between lg:w-fit lg:justify-normal">
          <Image
            src="/assets/Jarsu.png"
            width={50}
            height={50}
            alt="Insights Logo"
          />
          <Link href="/">
            <h1 className="text-3xl">Insights</h1>
          </Link>
        </div>
        {/* <Login /> */}
        {/* <div className="group relative hidden h-10 lg:inline-flex">
          <div className="animate-tilt absolute -inset-px rounded-xl bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] opacity-70 blur-sm transition-all duration-1000 group-hover:-inset-1 group-hover:opacity-100 group-hover:duration-200"></div>

          <a
            href="/"
            title="Get quote now"
            className="font-pj relative inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-7 py-4 text-lg font-bold text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
            role="button"
          >
            <IoHome />
            Back to Home
          </a>
        </div> */}
        <Button
          onClick={() => router.push("/")}
          className="hidden w-fit items-center gap-2 lg:flex"
        >
          <IoHome className="text-md inline" /> Back to Home
        </Button>
      </div>
    </header>
  );
}
