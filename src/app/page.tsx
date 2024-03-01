import { Navbar, Hero, PopularCollections } from "@/components/(layout)";
import { BASE_URL, authToken } from "@/lib/ctx";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";

export default async function Home() {
  
  const Footer = dynamic(() => import("@/components/(layout)/Footer"), { ssr: false })

  return (
    <main className="bg-background">
      <Navbar display={"fixed"} />
      <Hero />
      <PopularCollections />
      <Footer />
    </main>
  );
}
