import { Navbar, Footer } from "@/components/(layout)";

export default function CoinsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="container px-10">{children}</main>
      <Footer />
    </>
  );
}
