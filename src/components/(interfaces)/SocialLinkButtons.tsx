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
    <div className="mb-24 px-8 lg:px-20">
      <h1 className="mb-3 text-2xl font-semibold">Join us</h1>
      <div className="flex justify-between">
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
        <div>
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
