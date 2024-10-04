import { Footer, Navbar } from "@/components/(layout)";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata(
): Promise<Metadata> {
  return {
    title: `Page Not Found | JarsNFT`,
  };
}

export default function PageNotFound() {
  return (
    <>
      <div className="flex h-[calc(100vh-250px)] w-full flex-col items-start justify-center p-5 gap-5 md:container">
        <div className="absolute z-0 right-0 md:right-32 select-none">
          <Image src="/jars_muted.png" width={400} height={400} alt="Jars Image" className="select-none opacity-65 dark:opacity-30" />
        </div>
        <h1 className="text-4xl font-semibold z-10 text-gray-500">
          Page Error - 404 Not Found
        </h1>
        <h1 className="text-3xl font-semibold z-10">Sorry the page cannot find.</h1>
        <p className="text-md text-gray-400 z-10">
          Double-check the URL for errors, try another search, look down the
          back of the couch, or try again later.
        </p>
        <div className="flex gap-5 z-10">
          <Link href="/">
            <Button className="btn btn-primary" variant="outline">Go Home</Button>
          </Link>
        </div>
      </div>
    </>
  );
}
