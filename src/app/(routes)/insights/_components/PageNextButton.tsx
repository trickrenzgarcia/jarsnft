"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

type PageNextButtonProps = {
  title: string;
  href: string;
};

export default function PageNextButton({ title, href }: PageNextButtonProps) {
  return (
    <div className="mx-5 my-12 flex justify-end">
      <Link href={href}>
        <Button
          variant="ghost"
          className="border-3 py-6 pl-16 hover:bg-purple-700/20"
        >
          <div className="flex flex-col text-right">
            <p>Next</p>
            <div className="flex items-center text-[#A519D7]">
              {title}
              <MdOutlineKeyboardArrowRight className="text-md" />
            </div>
            <span></span>
          </div>
        </Button>
      </Link>
    </div>
  );
}
