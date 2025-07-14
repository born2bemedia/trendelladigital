'use client';

import { useTranslations } from 'next-intl';

import { ArrowRight } from '@/shared/icons/fill/arrow-right';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const Outcomes = () => {
  const t = useTranslations('howWeCanHelpYou.outcomes');

  return (
    <section className="flex gap-10 px-[100px] py-[80px] max-md:flex-col-reverse max-md:px-4 max-md:py-[80px]">
      <OutcomeTable />
      <section className="flex w-1/2 flex-col max-md:w-full max-md:gap-10">
        <div className="flex flex-col gap-2.5">
          <Title color="white">
            {t('title', { fallback: 'Outcomes That Prove the Process' })}
          </Title>
          <Text color="white">
            {t('description', {
              fallback:
                'Our clients experience transformation through clarity, structure, and accountability:',
            })}
          </Text>
        </div>
        <div className="mt-auto">
          <Button variant="metal">
            {t('button', { fallback: 'Check Out Before & After' })}{' '}
            <ArrowRight color="black" />
          </Button>
        </div>
      </section>
    </section>
  );
};

export const OutcomeTable = () => {
  const t = useTranslations('howWeCanHelpYou.outcomes');

  const items = [
    t('items.0', {
      fallback: 'Streamlined business models that run without chaos',
    }),
    t('items.1', {
      fallback: 'Messaging that captures the right audience with precision',
    }),
    t('items.2', {
      fallback: 'Offers that convert consistently and deliver real value',
    }),
    t('items.3', {
      fallback:
        'Marketing that feels aligned — and performs on multiple fronts',
    }),
    t('items.4', {
      fallback: 'Systems that replace guesswork with structure',
    }),
    t('items.5', {
      fallback: 'Confidence to lead decisively, and grow intentionally',
    }),
  ];

  return (
    <section className="grid w-1/2 grid-cols-2 gap-1 max-md:w-full max-md:grid-cols-1">
      {items.map(item => (
        <div key={item} className="border border-white px-10 py-6">
          <Text color="white" size="xl">
            {item}
          </Text>
        </div>
      ))}
    </section>
  );
};
