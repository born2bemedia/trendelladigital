'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { ArrowRight } from '@/shared/icons/fill/arrow-right';
import { cn } from '@/shared/lib/utils/styles';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const ConsultingProductLayout = ({
  children,
  type,
}: {
  children: ReactNode;
  type: 'business' | 'marketing' | 'sales';
}) => {
  return (
    <section
      className={cn(
        'mx-4 flex gap-10 px-[60px] py-[100px] max-md:flex-col max-md:px-4 max-md:py-[60px]',
        type === 'marketing' ? 'bg-[#F6F3F3]' : 'bg-[#F5F4FD]',
      )}
    >
      <SideTitle className="hidden max-md:flex" />
      <section className="flex w-[70%] flex-col gap-4 max-md:w-full">
        {children}
      </section>
      <section className="sticky top-20 flex h-fit flex-col gap-4 max-md:hidden">
        <SideTitle />
        <SideFooter />
      </section>
      <SideFooter className="hidden max-md:flex" />
    </section>
  );
};

const SideTitle = ({ className }: { className?: string }) => {
  const t = useTranslations('consultingProduct');

  return (
    <div
      className={cn(
        'flex flex-col gap-4 transition-all duration-500 ease-in-out',
        className,
      )}
    >
      <Title color="black">{t('title')}</Title>
      <Text color="black">{t('description')}</Text>
    </div>
  );
};

const SideFooter = ({ className }: { className?: string }) => {
  const t = useTranslations('consultingProduct');

  return (
    <div className={cn('mt-auto flex flex-col gap-4', className)}>
      <Title as="h3" color="black" size="3xl">
        {t('subtitle')}
      </Title>
      <Link href="/plans-and-pricing">
        <Button>
          {t('button')} <ArrowRight color="black" />
        </Button>
      </Link>
    </div>
  );
};
