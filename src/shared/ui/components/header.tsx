'use client';

import Link from 'next/link';

import { Text } from '@/shared/ui/kit/text';

const getNavigation = () => [
  { label: 'Business Consulting', href: '/business-consulting' },
  { label: 'Marketing Consulting', href: '/marketing-consulting' },
  { label: 'Before & After', href: '/before-after' },
  { label: 'Plans & Pricing', href: '/plans-pricing' },
];

export const Header = () => {
  return (
    <header className="absolute flex w-full items-center justify-between px-20 max-md:px-4">
      <Text>Logo</Text>
      <section className="flex items-center gap-10 max-[895px]:hidden">
        <div className="flex">
          {getNavigation().map(item => (
            <NavItem key={item.href} {...item} />
          ))}
        </div>
        <div className="flex">
          <NavItem label="Phone number" href="/" />
          <NavItem label="Email" href="/" />
        </div>
      </section>
      <section className="hidden max-[895px]:flex">
        <button className="w-[100px] border-b-[0.5px] border-white pt-3.5 pr-4 pb-1 pl-2 text-left transition duration-300 ease-in-out hover:opacity-70">
          <Text size="xs">Menu</Text>
        </button>
      </section>
    </header>
  );
};

const NavItem = ({ label, href }: { label: string; href: string }) => (
  <Link
    href={href}
    className="border-b-[0.5px] border-white pt-3.5 pr-4 pb-1 pl-2 transition duration-300 ease-in-out hover:opacity-70"
  >
    <Text size="xs">{label}</Text>
  </Link>
);
