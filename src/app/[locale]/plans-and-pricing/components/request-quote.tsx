'use client';

import { useTranslations } from 'next-intl';

import { ArrowRight } from '@/shared/icons/fill/arrow-right';
import { Button } from '@/shared/ui/kit/button';
import { Title } from '@/shared/ui/kit/title';

export const RequestQuote = () => {
  const t = useTranslations('plansAndPricing.requestQuote');

  return (
    <section className="mx-4 flex items-end justify-between gap-4 px-[60px] py-[100px] max-md:flex-col max-md:items-start max-md:px-4">
      <Title size="3xl" weight={500} color="white">
        {t('title.0', { fallback: 'Every project is unique, and so are you.' })}{' '}
        <br />
        {t('title.1', {
          fallback: 'Let’s clarify your next best move together!',
        })}
      </Title>
      <Button variant="metal">
        {t('button', { fallback: 'Request a Custom Quote' })}{' '}
        <ArrowRight color="black" />
      </Button>
    </section>
  );
};
