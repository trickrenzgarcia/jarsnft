"use client";

import {
  SideNavLeft,
  SideNavRight,
  LearnNavbar,
  PageNextButton,
} from "./_components";
import { Footer } from "@/components/(layout)";
import { leftNavList } from "./_metadata";
import { usePathname } from "next/navigation";
import { PageNavTopic } from "./_components/PageNavbar";
import SideBarHamburger from "./_components/SideBarHamburger";
import { useEffect, useState } from "react";
import FAQsInsight from "./_components/FAQs";

type LearnProps = {
  children: React.ReactNode;
};

export default function LearnLayout({ children }: LearnProps) {
  const path = usePathname();
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey((prevKey) => prevKey + 1);
  }, [path]);

  const nextBtn = leftNavList.map((item, index) => (
    <div key={index}>
      {item.child.map((childItem, childIndex) =>
        // check for child sub topic
        path === childItem.href && childIndex < item.child.length - 1 ? (
          <PageNextButton
            key={childIndex}
            title={Capitalize(item.child[childIndex + 1].name)}
            href={item.child[childIndex + 1].href}
          />
        ) : (
          // check on next topic
          path === childItem.href &&
          index < leftNavList.length - 1 && (
            <PageNextButton
              key={childIndex}
              title={Capitalize(
                leftNavList[(index + 1) % leftNavList.length].child[0].name,
              )}
              href={leftNavList[(index + 1) % leftNavList.length].child[0].href}
            />
          )
        ),
      )}
    </div>
  ));

  return (
    <main className="via-22% flex-1 from-[#131313] from-10% via-[#360a46] to-[#131313] to-25% dark:bg-gradient-to-bl ">
      <LearnNavbar />
      <div className="flex-1 items-start border-t-2 xl:container lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-6 xl:grid-cols-[240px_minmax(0,1fr)] xl:gap-10">
        <SideBarHamburger />
        <SideNavLeft />
        <main className="ml-5 mr-5 mt-5 lg:gap-10 xl:grid xl:grid-cols-[1fr_250px]">
          <div className="min-w-full sm:mt-16 lg:mt-0">
            <div className="lg:mt-4">
              <PageNavTopic color="#c117ff" />
              <div
                key={key}
                className="animate-once animate-duration-[1200ms] animate-ease-out animate-fade-left"
              >
                {children}
              </div>
              {nextBtn}
              <FAQsInsight />
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
