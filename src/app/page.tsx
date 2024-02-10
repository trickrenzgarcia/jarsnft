import { Navbar, Hero, PopularCollections, Footer } from "@/components/(layout)";

export default async function Home() {

  return (
    <main className="">
      <Navbar display={"fixed"} />
      <Hero />
      <PopularCollections />
      <Footer />
    </main>
  );
}
