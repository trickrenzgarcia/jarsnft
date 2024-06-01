"use client";

import {
  FaFacebookF,
  FaDiscord,
  FaTwitter,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import SocialLinkButton from "./SocialLinkButton";
import ModeToggle from "./ModeToggle";

export default function SocialLinkButtons() {
  
  return (
    <div className="mb-24" suppressHydrationWarning>
      <h1 className="mb-3 text-center text-2xl font-semibold md:text-left">
        Join us
      </h1>
      <div className="flex flex-col flex-wrap items-center gap-8 md:flex-row md:justify-between md:gap-0">
        <div className="flex gap-2">
          <SocialLinkButton Icon={<FaFacebookF />} link="" />
          <SocialLinkButton
            Icon={<FaDiscord />}
            link="https://discord.gg/scBduTZyGd"
          />
          <SocialLinkButton Icon={<FaTwitter />} link="" />
          <SocialLinkButton Icon={<FaInstagram />} link="" />
          <SocialLinkButton
            Icon={<FaGithub />}
            link="https://github.com/BroJavaDevs"
          />
        </div>
        <div className="">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}


