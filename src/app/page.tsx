import { Footer, Navbar } from "@/components/(layout)";
import { Hero, Trend, ListComponents } from "@/components/(layout)/_main";
import NFTCategories from "@/components/(layout)/_main/NFTCategories";
import { Separator } from "@/components/ui/separator";
import jars from "@/lib/api";
import { Suspense } from "react";

export default async function Home() {
  const t1 = await jars.collection.getTrending("art")
  const t2 = await jars.collection.getTrending("photography")
  const t3 = await jars.collection.getTrending("pfp")

  const collections = [
    { category: "Art", data: t1 },
    { category: "Photography", data: t2 },
    { category: "Profile Picture", data: t3 },
  ]

  return (
    <main className="bg-background">
      <Navbar />
      <Hero />

      <div className="container my-20">
        <ListComponents
          data={collections}
          renderItem={(collection, index) => (
            <section key={index} className="space-y-10">
              <Trend
                category={collection.category}
                collections={collection.data}
              />
              <Separator className="h-[2px] w-full" />
            </section>
          )}
        />

        <Suspense fallback={<div>Loading...</div>}>
          <NFTCategories className="my-16" />
        </Suspense>
      </div>

      <Footer />
    </main>
  );
}
