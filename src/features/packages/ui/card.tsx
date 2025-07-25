'use client';

import { useTranslations } from 'next-intl';

import { ArrowRight } from '@/shared/icons/fill/arrow-right';
import { notifySuccess } from '@/shared/lib/toast';
import { cn } from '@/shared/lib/utils/styles';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import buyPackage from '../api/buy-package';
import type { Package } from '../model/types';

export const PackageCard = ({
  description,
  fromPrice,
  name,
  price,
  type,
  id,
  slug,
}: Package) => {
  const t = useTranslations('plansAndPricing.packages');

  const buyHandle = (pkg: Package) => {
    buyPackage(pkg);
    notifySuccess(`Package ${name} added to cart`);
  };

  return (
    <article
      className={cn(
        'flex min-h-[350px] flex-1 flex-col justify-between rounded-lg p-4',
        type === 'business' ? 'bg-[#F5F4FD]' : 'bg-[rgb(209,183,188)]/30',
      )}
    >
      <section className="flex flex-col gap-2">
        <Title as="h3" weight={400} size="xl">
          {name}
        </Title>
        <Text color="ghost">{description}</Text>
      </section>
      <section className="flex flex-col gap-6">
        <div className="flex flex-col">
          <Text color="ghost">{t('price', { fallback: 'Price:' })}</Text>
          <Text color="black" size="2xl" weight={500}>
            {t('from', { fallback: 'From' })} €{price.toLocaleString()}
          </Text>
        </div>
        <Button
          className="w-full justify-center"
          onClick={() =>
            buyHandle({ description, fromPrice, name, price, type, id, slug })
          }
        >
          {fromPrice
            ? t('order', { fallback: 'Order' })
            : t('buy', { fallback: 'Buy' })}{' '}
          <ArrowRight color="black" />
        </Button>
      </section>
    </article>
  );
};
