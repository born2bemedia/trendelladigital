'use client';

import { ProductCard } from '@/features/products/ui/card';

import { cn } from '@/shared/lib/utils/styles';
import { Title } from '@/shared/ui/kit/title';

import type { Group } from '../model/types';

export const GroupCard = ({ name, products, type }: Group) => (
  <section
    className={cn(
      'flex gap-4 rounded-lg px-10 py-6 max-md:flex-col max-md:p-4',
      type === 'business'
        ? 'bg-gradient-to-r from-[rgba(49,49,49,0.05)] to-[rgba(151,151,151,0.05)]'
        : 'bg-[rgba(0,0,0,0.40)]',
    )}
  >
    <section className="w-[30%] max-md:w-full">
      <Title as="h3" color={type === 'business' ? 'dark' : 'white'} size="3xl">
        {name}
      </Title>
    </section>
    <section className="flex w-[70%] flex-col gap-4 max-md:w-full">
      {products.map(item => (
        <ProductCard key={item.id} {...item} />
      ))}
    </section>
  </section>
);
