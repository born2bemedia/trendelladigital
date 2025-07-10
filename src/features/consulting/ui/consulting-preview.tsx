'use client';

import type { ReactNode } from 'react';

import { ArrowRight } from '@/shared/icons/fill/arrow-right';
import { cn } from '@/shared/lib/utils/styles';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import type { Consulting } from '../model/types';

export const ConsultingPreview = ({
  type,
  name,
  subtitle,
  includeLabel,
  excerpt,
  description,
  label,
  buttonLabel,
  includes,
}: Consulting & { type: 'business' | 'marketing' }) => {
  return (
    <section
      className={cn(
        'flex gap-10 rounded-lg p-10 max-lg:flex-col',
        type === 'business' ? 'bg-[#F5F4FD]' : 'bg-[rgba(209,183,188,0.30)]',
      )}
    >
      <section className="flex flex-col max-lg:gap-6">
        <div className="flex flex-col gap-2">
          <Title as="h3" color="deepDark" size="4xl" weight={400}>
            {name}
          </Title>
          <Text color="deepDark" weight={500}>
            {subtitle}
          </Text>
          <Text color="ghost">{excerpt}</Text>
        </div>
        <div className="mt-auto flex flex-col gap-2">
          <Text color="deepDark" weight={500}>
            {label}
          </Text>
          <Text color="ghost">{description}</Text>
          <Button>
            {buttonLabel} <ArrowRight color="black" />
          </Button>
        </div>
      </section>
      <section className="flex flex-col gap-2">
        <Text color="deepDark" size="base">
          {includeLabel}
        </Text>
        <ul className="grid grid-cols-2 gap-2 max-md:grid-cols-1">
          {includes.map(include => (
            <IncludeCard key={include}>{include}</IncludeCard>
          ))}
        </ul>
      </section>
    </section>
  );
};

export const IncludeCard = ({ children }: { children: ReactNode }) => (
  <li className="rounded-lg bg-[rgba(255,255,255,0.40)] p-6">
    <Text color="deepDark">{children}</Text>
  </li>
);
