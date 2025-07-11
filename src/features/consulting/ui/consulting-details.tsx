'use client';

import { ArrowRight } from '@/shared/icons/fill/arrow-right';
import { cn } from '@/shared/lib/utils/styles';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import type { ConsultingDetailed } from '../model/types';

export const ConsultingDetails = ({
  description,
  includes,
  type,
}: ConsultingDetailed & {
  type: 'marketing' | 'business';
}) => {
  return (
    <article
      className={cn(
        'flex min-h-[605px] flex-col rounded-lg p-10 max-md:px-6',
        type === 'business' ? 'bg-[#F5F4FD]' : 'bg-[rgba(209,183,188,0.30)]',
      )}
    >
      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <Title as="h3">
            {type === 'marketing'
              ? 'Marketing Consulting'
              : 'Business Consulting'}
          </Title>
          <Text color="dark">{description}</Text>
        </div>
        <Button>
          {type === 'business'
            ? 'Explore Business Consulting'
            : 'Explore Marketing Consulting'}
          <ArrowRight color="black" />
        </Button>
      </section>
      <section className="mt-auto flex flex-col gap-2">
        <Text color="dark" size="lg">
          Services include:
        </Text>
        <div className="grid grid-cols-2 gap-2 max-md:grid-cols-1">
          {includes.map(value => (
            <IncludeCard key={value} value={value} />
          ))}
        </div>
      </section>
    </article>
  );
};

const IncludeCard = ({ value }: { value: string }) => (
  <section className="rounded-lg bg-white/40 p-4">
    <Text color="dark">{value}</Text>
  </section>
);
