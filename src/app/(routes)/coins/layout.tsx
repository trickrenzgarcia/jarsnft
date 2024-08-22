import { Navbar, Footer } from "@/components/(layout)";

export default function CoinsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="mx-auto my-auto container">{children}</main>
      <Footer />
    </>
  );
}
