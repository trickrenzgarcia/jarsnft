import {
  Navbar,
  Hero,
  Footer,
  PopularCollections,
  TopNFTCollections,
} from "@/components/(layout)";

export default async function Home() {
  return (
    <main className="bg-background">
      <Navbar />
      <Hero />
      <PopularCollections />
      <TopNFTCollections />
      <Footer />
    </main>
  );
}
