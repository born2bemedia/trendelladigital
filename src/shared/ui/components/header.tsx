'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';

import { cn } from '@/shared/lib/utils/styles';
import { Text } from '@/shared/ui/kit/text';

const getNavigation = () => [
  { label: 'Business Consulting', href: '/business-consulting' },
  { label: 'Marketing Consulting', href: '/marketing-consulting' },
  { label: 'Before & After', href: '/before-after' },
  { label: 'Plans & Pricing', href: '/plans-pricing' },
];

export const Header = () => {
  const pathname = usePathname();
  const locale = useLocale();
  const isHomePage = pathname === `/${locale}`;

  return (
    <header className="absolute flex w-full items-center justify-between px-20 max-md:px-6">
      <Text color={isHomePage ? 'white' : 'black'}>Logo</Text>
      <section className="flex items-center gap-10 max-[895px]:hidden">
        <div className="flex">
          {getNavigation().map(item => (
            <NavItem key={item.href} {...item} isHomePage={isHomePage} />
          ))}
        </div>
        <div className="flex">
          <NavItem label="Phone number" href="/" isHomePage={isHomePage} />
          <NavItem label="Email" href="/" isHomePage={isHomePage} />
        </div>
      </section>
      <section className="hidden max-[895px]:flex">
        <button
          className={cn(
            'w-[100px] border-b-[0.5px] pt-3.5 pr-4 pb-1 pl-2 text-left transition duration-300 ease-in-out hover:opacity-70',
            isHomePage ? 'border-white' : 'border-black',
          )}
        >
          <Text size="xs" color={isHomePage ? 'white' : 'black'}>
            Menu
          </Text>
        </button>
      </section>
    </header>
  );
};

const NavItem = ({
  label,
  href,
  isHomePage,
}: {
  label: string;
  href: string;
  isHomePage: boolean;
}) => (
  <Link
    href={href}
    className={cn(
      'border-b-[0.5px] pt-3.5 pr-4 pb-1 pl-2 transition duration-300 ease-in-out hover:opacity-70',
      isHomePage ? 'border-white' : 'border-black',
    )}
  >
    <Text size="xs" color={isHomePage ? 'white' : 'black'}>
      {label}
    </Text>
  </Link>
);
