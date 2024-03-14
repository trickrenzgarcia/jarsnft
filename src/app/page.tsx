import { Navbar, Hero, Footer, PopularCollections } from "@/components/(layout)";
import { BASE_URL, authToken } from "@/lib/ctx";
import { useSession } from "next-auth/react";

export default async function Home() {

  return (
    <main className="bg-background">
      <Navbar display={"fixed"} />
      <Hero />
      <PopularCollections />
      <Footer />
    </main>
  );
}
