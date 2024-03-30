import {
  Navbar,
  Hero,
  Footer,
  PopularCollections,
} from "@/components/(layout)";

export default async function Home() {
  return (
    <main className="bg-background">
      <Navbar />
      <Hero />
      <PopularCollections />
      <Footer />
    </main>
  );
}
