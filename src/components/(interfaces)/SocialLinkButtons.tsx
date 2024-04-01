"use client";

import {
  FaFacebookF,
  FaDiscord,
  FaTwitter,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import { IconType } from "react-icons";
import { useTheme } from "next-themes";
import Link from "next/link";
import dynamic from "next/dynamic";

export default function SocialLinkButtons() {
  const { theme, setTheme } = useTheme();
  const ModeToggle = dynamic(() => import("../(interfaces)/ModeToggle"));

  return (
    <div className="mb-24">
      <h1 className="text-center md:text-left mb-3 text-2xl font-semibold">Join us</h1>
      <div className="flex flex-col md:flex-row flex-wrap items-center md:justify-between gap-8 md:gap-0">
        <div className="flex gap-2">
          <SocialLinkButton Icon={FaFacebookF} link="" />
          <SocialLinkButton
            Icon={FaDiscord}
            link="https://discord.gg/scBduTZyGd"
          />
          <SocialLinkButton Icon={FaTwitter} link="" />
          <SocialLinkButton Icon={FaInstagram} link="" />
          <SocialLinkButton
            Icon={FaGithub}
            link="https://github.com/BroJavaDevs"
          />
        </div>
        <div className="">
          <ModeToggle setTheme={setTheme} theme={theme} />
        </div>
      </div>
    </div>
  );
}

function SocialLinkButton({ Icon, link }: { Icon: IconType; link: string }) {
  return (
    <Link href={link} target="_blank">
      <div className="flex h-[50px] w-[50px] items-center justify-center rounded-[10px] bg-gray-200 text-2xl dark:bg-card">
        <Icon />
      </div>
    </Link>
  );
}
