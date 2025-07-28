'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';

import { useUserStore } from '@/core/user/model/user.store';

import { cookies } from '@/shared/lib/utils/cookies';
import { cn } from '@/shared/lib/utils/styles';
import { Text } from '@/shared/ui/kit/text';

import { BurgerMenu } from './burger-menu';

const getNavigation = (t: ReturnType<typeof useTranslations>) => [
  {
    label: t('businessConsulting', { fallback: 'Business Consulting' }),
    href: '/business-consulting',
  },
  {
    label: t('marketingConsulting', { fallback: 'Marketing Consulting' }),
    href: '/marketing-consulting',
  },
  {
    label: t('beforeAfter', { fallback: 'Before & After' }),
    href: '/before-after',
  },
  {
    label: t('plansAndPricing', { fallback: 'Plans & Pricing' }),
    href: '/plans-and-pricing',
  },
];

export const Header = () => {
  const t = useTranslations('header');
  const pathname = usePathname();
  const locale = useLocale();
  const isHomePage = pathname === `/${locale}`;

  const { user, setUser } = useUserStore();

  useEffect(() => {
    const storedUser = cookies.get('user');
    const parsedUser = storedUser ? JSON.parse(storedUser) : null;
    setUser(parsedUser);
  }, [setUser]);

  return (
    <header
      className={cn(
        'absolute top-16 z-50 flex w-full items-center justify-between px-20 max-md:top-8 max-md:px-10',
        isHomePage ? 'top-12' : 'top-16',
      )}
    >
      <Image
        src={isHomePage ? '/logo-white.svg' : '/logo-black.svg'}
        alt="trendella-digital"
        width={100}
        height={30}
      />
      <section className="flex items-center gap-10 max-[895px]:hidden">
        <div className="flex">
          {getNavigation(t).map(item => (
            <NavItem key={item.href} {...item} isHomePage={isHomePage} />
          ))}
        </div>
        <div className="flex">
          {user ? (
            <NavItem
              label={user?.username ?? user?.firstName}
              href="/account"
              isHomePage={isHomePage}
            />
          ) : (
            <>
              <NavItem
                label={t('login', { fallback: 'Login' })}
                href="/login"
                isHomePage={isHomePage}
              />
              <NavItem
                label={t('signUp', { fallback: 'Sign Up' })}
                href="/sign-up"
                isHomePage={isHomePage}
              />
            </>
          )}
          <NavItem
            label={t('cart', { fallback: 'Cart' })}
            href="/cart"
            isHomePage={isHomePage}
          />
        </div>
      </section>
      <section className="hidden max-[895px]:flex">
        <BurgerMenu />
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
      'z-50 border-b-[0.5px] pt-3.5 pr-4 pb-1 pl-2 transition duration-300 ease-in-out hover:opacity-70',
      isHomePage ? 'border-white' : 'border-black',
    )}
  >
    <Text size="xs" color={isHomePage ? 'white' : 'black'}>
      {label}
    </Text>
  </Link>
);
