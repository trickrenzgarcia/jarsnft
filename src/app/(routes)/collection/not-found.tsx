import { Footer, Navbar } from "@/components/(layout)";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <>
      <Navbar />
      <div className="flex h-[calc(100vh-250px)] w-full flex-col items-start justify-center gap-5 md:container">
        <h1 className="text-4xl font-semibold text-gray-500">
          Page Error - 404 Not Found
        </h1>
        <h1 className="text-3xl font-semibold">Sorry the page cannot find.</h1>
        <p className="text-md text-gray-400">
          Double-check the URL for errors, try another search, look down the
          back of the couch, or try again later.
        </p>
        <div className="flex gap-5">
          <Link href="/">
            <Button className="btn btn-primary">Go Home</Button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
