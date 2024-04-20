import { Navbar } from "@/components/(layout)";

export default function UserProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Navbar />

      <main>{children}</main>
    </main>
  );
}
