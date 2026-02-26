'use client';

import Link from 'next/link';

import { useIsHomePage } from '@/shared/lib/hooks/use-is-home';
import { cn } from '@/shared/lib/utils/styles';
import { Text } from '@/shared/ui/kit/text';

import { LangSwitcher } from './lang-switcher';
import { SocialNetworks } from './social-networks';

export const TopBar = () => {
  const isHomePage = useIsHomePage();

  return (
    <section
      className={cn(
        'flex items-center justify-between px-[80px] py-2 max-md:hidden',
        isHomePage ? 'bg-white' : 'bg-black pb-0',
      )}
    >
      <div className="flex items-center gap-[60px]">
        <Link href="mailto:info@idelaria.com">
          <Text size="xs" color={isHomePage ? 'black' : 'white'}>
            info@idelaria.com
          </Text>
        </Link>
        <Link href="tel:+35724242785">
          <Text size="xs" color={isHomePage ? 'black' : 'white'}>
          +35724242785
          </Text>
        </Link>
      </div>
      <section className="flex items-center gap-[60px]">
        <SocialNetworks />
        <LangSwitcher />
      </section>
    </section>
  );
};
