"use client";

import { FiExternalLink } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LearnNavbar() {
  const router = useRouter();

  return (
    <header className="sticky top-auto w-full bg-background/95 py-4 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:top-0">
      <div className="container flex items-center justify-between px-4 md:px-20">
        <div className="flex w-full items-center justify-center md:w-fit md:justify-normal">
          <Image
            src="/assets/Jarsu.png"
            width={50}
            height={50}
            alt="Insights Logo"
          />
          <Link href="/insights">
            <h1 className="text-3xl">Insights</h1>
          </Link>
        </div>
        <Button
          onClick={() => router.push("/")}
          className="hidden w-fit md:inline-block"
        >
          Go to JarsNFT <FiExternalLink className="text-md inline" />
        </Button>
      </div>
    </header>
  );
}
