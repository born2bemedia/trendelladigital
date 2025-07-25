'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import {
  Close,
  Content,
  Description,
  Portal,
  Root,
  Title,
  Trigger,
} from '@radix-ui/react-dialog';

import { useIsHomePage } from '@/shared/lib/hooks/use-is-home';
import { cn } from '@/shared/lib/utils/styles';

import { Text } from '../kit/text';
import { SocialNetworks } from './social-networks';

export const BurgerMenu = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = useIsHomePage();

  const t = useTranslations('burgerMenu');

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : '';

    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [open]);

  return (
    <Root open={open} onOpenChange={setOpen}>
      <Trigger asChild>
        <button
          className={cn(
            'w-[100px] border-b-[0.5px] pt-3.5 pr-4 pb-1 pl-2 text-left transition duration-300 ease-in-out hover:opacity-70',
            isHomePage ? 'border-white' : 'border-black',
          )}
        >
          <Text size="xs" color={isHomePage ? 'white' : 'black'}>
            {t('menu', { fallback: 'Menu' })}
          </Text>
        </button>
      </Trigger>
      <Portal>
        <Content className="fixed bottom-0 left-0 z-[995] h-screen w-screen animate-[menuOpen_0.3s_ease-out_forwards] overflow-y-auto bg-black p-6">
          <Title />
          <Description asChild>
            <section className="flex h-full flex-col gap-6 p-4">
              <div className="flex items-center justify-between">
                <Text>Logo</Text>
                <Close className="w-[100px] border-b border-white pr-2 pb-1 pl-4 text-left">
                  <Text size="xs">{t('close', { fallback: 'Close' })}</Text>
                </Close>
              </div>
              <div className="flex flex-col gap-1">
                <MenuLink href="/" label={t('home', { fallback: 'Home' })} />
                <MenuLink
                  href="/business-consulting"
                  label={t('businessConsulting', {
                    fallback: 'Business Consulting',
                  })}
                />
                <MenuLink
                  href="/marketing-consulting"
                  label={t('marketingConsulting', {
                    fallback: 'Marketing Consulting',
                  })}
                />
                <MenuLink
                  href="/before-and-after"
                  label={t('beforeAfter', { fallback: 'Before & After' })}
                />
                <MenuLink
                  href="/plans-and-pricing"
                  label={t('plansAndPricing', {
                    fallback: 'Plans & Pricing',
                  })}
                />
              </div>
              <div className="flex flex-col gap-1">
                <MenuLink
                  href="/login"
                  label={t('login', { fallback: 'Login' })}
                />
                <MenuLink
                  href="/sign-up"
                  label={t('signUp', { fallback: 'Sign Up' })}
                />
                <MenuLink
                  href="/cart"
                  label={t('cart', { fallback: 'Cart' })}
                />
              </div>
              <footer className="mt-auto flex flex-col gap-6 bg-white px-5 py-2">
                <div className="flex flex-col gap-2">
                  <Link href="mailto:info@trendelladigital.com">
                    <Text size="base" color="dark">
                      info@trendelladigital.com
                    </Text>
                  </Link>
                  <Link href="#">
                    <Text size="base" color="dark">
                      Phone number
                    </Text>
                  </Link>
                </div>
                <SocialNetworks
                  className="justify-between gap-0"
                  text={{
                    color: 'black',
                    size: 'base',
                  }}
                />
              </footer>
            </section>
          </Description>
        </Content>
      </Portal>
    </Root>
  );
};

const MenuLink = ({ href, label }: { label: string; href: string }) => (
  <Link href={href} className="border-b border-white pt-[18px] pl-2">
    <Text size="lg" color="white">
      {label}
    </Text>
  </Link>
);
