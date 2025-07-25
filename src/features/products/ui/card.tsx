'use client';

import { useTranslations } from 'next-intl';

import { ArrowRight } from '@/shared/icons/fill/arrow-right';
import { notifySuccess } from '@/shared/lib/toast';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import buyProduct from '../api/buy-product';
import type { Product } from '../model/types';

export const ProductCard = ({ fromPrice, name, price, id, slug }: Product) => {
  const t = useTranslations('plansAndPricing.packages');

  const buyHandle = (product: Product) => {
    buyProduct(product);
    notifySuccess(`Product ${name} added to cart`);
  };

  return (
    <article className="flex w-full justify-between gap-10 rounded-lg bg-white p-6 max-md:flex-col max-md:py-4">
      <section className="flex flex-col gap-2">
        <Title size="xl" weight={400} as="h4">
          {name}
        </Title>
        <div className="flex items-center gap-2">
          <Text color="ghost">{t('price', { fallback: 'Price:' })}</Text>
          <Text color="dark" weight={500} size="lg">
            {fromPrice
              ? `${t('from', { fallback: 'From' })} €${price.toLocaleString()}`
              : `€${price.toLocaleString()}`}
          </Text>
        </div>
      </section>
      <Button
        className="max-md:w-full max-md:justify-center"
        onClick={() => buyHandle({ fromPrice, name, price, id, slug })}
      >
        {fromPrice
          ? t('order', { fallback: 'Order' })
          : t('buy', { fallback: 'Buy' })}{' '}
        <ArrowRight color="black" />
      </Button>
    </article>
  );
};
