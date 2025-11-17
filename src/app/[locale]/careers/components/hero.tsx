'use client';

import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const Hero = () => {
  const t = useTranslations('careers.hero');

  return (
    <section className="mx-4 mt-2.5 bg-white px-[60px] pt-[110px] pb-[100px] max-md:px-4">
      <section className="flex items-start justify-between gap-4 p-4 max-md:flex-col max-md:p-0">
        <Title as="h1" size="4xl" className="w-1/2 max-md:w-full">
          {t('title', { fallback: 'Build Better With Us' })}
        </Title>
        <Text className="w-1/2 max-md:w-full" color="dark">
          {t('description.0', {
            fallback: 'We’re not here to clock hours or follow trends.',
          })}
          <br />
          <br />
          {t('description.1', {
            fallback:
              'At Trendella Digital, we’re building a lean, brilliant, and thoughtful team that does work that matters — with clarity, ownership, and a shared commitment to helping real people create sustainable, purpose-driven businesses.',
          })}
          <br />
          <br />
          {t('description.2', {
            fallback: 'We don’t believe in “just doing the job.”',
          })}
          <br />
          <br />
          {t('description.3', {
            fallback:
              'We believe in building something meaningful for our clients and ourselves.',
          })}
        </Text>
      </section>
    </section>
  );
};
