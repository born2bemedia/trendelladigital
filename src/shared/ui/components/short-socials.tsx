"use client";

import Link from "next/link";

import { FacebookIcon } from "@/shared/icons/socials/facebook";
import { LinkedinIcon } from "@/shared/icons/socials/linkedin";
import { XIcon } from "@/shared/icons/socials/x";


const socials = [
  { icon: LinkedinIcon, href: "https://www.linkedin.com/company/idelaria " },
  { icon: XIcon, href: "https://x.com/idelariacom" },
  { icon: FacebookIcon, href: "https://www.facebook.com/idelariacom" },
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
