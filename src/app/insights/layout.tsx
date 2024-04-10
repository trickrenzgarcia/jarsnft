"use client";

import {
  SideNavLeft,
  SideNavRight,
  LearnNavbar,
  PageNavbarTitle,
  PageNextButton,
} from "./_components";
import { Footer } from "@/components/(layout)";
import { leftNavList } from "./_metadata";
import { usePathname } from "next/navigation";

type LearnProps = {
  children: React.ReactNode;
};

export default function LearnLayout({ children }: LearnProps) {
  // try to make pagenextbutton dynamic - get data from index and display the next item after current item on the button
  const path = usePathname();
  const nextBtn = leftNavList.map((item, index) => (
    <>
      {item.child.map((childItem, childIndex ) => (
        // check for child sub topic
        path === childItem.href && (childIndex < item.child.length - 1) ?
          <PageNextButton key={childIndex} title={Capitalize(item.child[childIndex + 1].name)} href={item.child[childIndex + 1].href}/>     
        :
        // check on next topic
        path === childItem.href && (index < leftNavList.length - 1) && 
        <PageNextButton key={childIndex} title={Capitalize(leftNavList[(index + 1) % leftNavList.length].child[0].name)} href={leftNavList[(index + 1) % leftNavList.length].child[0].href}/>

      ))}
    </>
  ))
  return (
    <main className="flex-1">
      <LearnNavbar />
      <div className="container flex-1 items-start border-t-2 md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <SideNavLeft />
        <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
          <div className="mx-auto h-screen w-full min-w-0">
            <PageNavbarTitle />
            {children}
            <div className="pb-6 pr-6">
              {nextBtn}
            </div>
          </div>
          <SideNavRight />
        </main>
      </div>
      <Footer />
    </main>
  );
}

const Capitalize = (str: string): string => {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
};