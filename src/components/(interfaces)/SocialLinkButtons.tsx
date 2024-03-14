"use client"

import { FaFacebookF, FaDiscord, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa'
import { IconType } from 'react-icons';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import dynamic from 'next/dynamic';

export default function SocialLinkButtons() {
  const { theme, setTheme } = useTheme();
  const ModeToggle = dynamic(() => import("../(interfaces)/ModeToggle"));

  return (
    <div className='px-8 lg:px-20 mb-24'>
      <h1 className='text-2xl font-semibold mb-3'>Join us</h1>
      <div className="flex justify-between">
        <div className='flex gap-2'>
          <SocialLinkButton Icon={FaFacebookF} link='' />
          <SocialLinkButton Icon={FaDiscord} link='https://discord.gg/scBduTZyGd' />
          <SocialLinkButton Icon={FaTwitter} link='' />
          <SocialLinkButton Icon={FaInstagram} link='' />
          <SocialLinkButton Icon={FaGithub} link='https://github.com/BroJavaDevs' />
        </div>
        <div>
          <ModeToggle setTheme={setTheme} theme={theme} />
        </div>
      </div>
    </div>
  );
}

function SocialLinkButton({ Icon, link }: { Icon: IconType, link: string }) {
  return (
    <Link href={link} target='_blank'>
      <div className='w-[50px] h-[50px] bg-gray-200 dark:bg-card text-2xl rounded-[10px] flex items-center justify-center'>
        <Icon />
      </div>
    </Link>
  )
}