'use client';

import Link from 'next/link';

import { FacebookIcon } from '@/shared/icons/socials/facebook';
import { InstagramIcon } from '@/shared/icons/socials/instagram';
import { XIcon } from '@/shared/icons/socials/x';

const socials = [
  { icon: XIcon, href: 'https://x.com/trendellagroup' },
  { icon: FacebookIcon, href: 'https://www.facebook.com/trendelladigital' },
  { icon: InstagramIcon, href: 'https://www.instagram.com/trendellagroup' },
];

export const ShortSocials = () => (
  <nav className="flex w-max gap-2 bg-white/10 px-3 py-1.5">
    {socials.map(({ icon: Icon, href }) => (
      <Link href={href} key={href}>
        <Icon />
      </Link>
    ))}
  </nav>
);
