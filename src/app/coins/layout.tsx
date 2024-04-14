import { Navbar, Footer } from "@/components/(layout)";

export default function CoinsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="container py-16">
        {children}
      </main>
      <Footer />
    </>
  )
}