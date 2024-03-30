"use client";

import { FiExternalLink } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LearnNavbar() {
  const router = useRouter();
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <Link href="/learn">
          <h1 className="text-3xl">Learn</h1>
        </Link>
        <Button onClick={() => router.push("/")}>
          Go to JarsNFT <FiExternalLink className="text-md ml-2" />{" "}
        </Button>
      </div>
    </header>
  );
}
