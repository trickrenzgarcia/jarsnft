"use client"

import Link from "next/link";

export default function SocialLinkButton({ Icon, link }: { Icon: JSX.Element; link: string }) {
  return (
    <Link href={link} target="_blank">
      <div className="flex h-[50px] w-[50px] items-center justify-center rounded-[10px] bg-gray-200 text-2xl dark:bg-card">
        <>{Icon}</>
      </div>
    </Link>
  );
}