import { Navbar, Footer } from "@/components/(layout)";

export default function CoinsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="container mx-auto my-auto">{children}</main>
    </>
  );
}
