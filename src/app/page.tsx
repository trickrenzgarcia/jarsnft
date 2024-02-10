import { Navbar, Hero, PopularCollections } from "@/components/(layout)";
import dynamic from "next/dynamic";

export default async function Home() {

  const Footer = dynamic(() => import("@/components/(layout)/Footer"), { ssr: false })

  return (
    <main className="">
      <Navbar display={"fixed"} />
      <Hero />
      <PopularCollections />
      <Footer />
    </main>
  );
}
