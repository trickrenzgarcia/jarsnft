import {
  SideNavLeft,
  SideNavRight,
  LearnNavbar,
  PageNavbarTitle,
} from "./_components";
import { Footer } from "@/components/(layout)";

type LearnProps = {
  children: React.ReactNode;
};

export default function LearnLayout({ children }: LearnProps) {
  return (
    <main className="flex-1">
      <LearnNavbar />
      <div className="container flex-1 items-start border-t-2 md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <SideNavLeft />
        <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
          <div className="mx-auto h-screen w-full min-w-0">
            <PageNavbarTitle />
            {children}
          </div>
          <SideNavRight />
        </main>
      </div>
      <Footer />
    </main>
  );
}
