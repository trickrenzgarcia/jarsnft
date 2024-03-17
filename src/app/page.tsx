import { Navbar, Hero, Footer, PopularCollections } from "@/components/(layout)";
// { BASE_URL, authToken } from "@/lib/ctx";
// { useSession } from "next-auth/react";

export default async function Home() {

  return (
    <main className="bg-background">
      <Navbar display={"sticky"} />
      <Hero />
      <PopularCollections />
      <Footer />
    </main>
  );
}
