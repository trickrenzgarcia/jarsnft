import { Navbar, Hero, PopularCollections, Footer } from "@/components/(layout)";

export default async function Home() {

  return (
    <main className="">
      <Navbar />
      <Hero />
      <PopularCollections />
      <Footer />
    </main>
  );
}
