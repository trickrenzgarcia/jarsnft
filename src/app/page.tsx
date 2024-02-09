import { Navbar, PopularCollections, Footer } from "@/components/(layout)";

export default async function Home() {

  return (
    <main className="">
      <Navbar />
      <PopularCollections />
      <Footer />
    </main>
  );
}
