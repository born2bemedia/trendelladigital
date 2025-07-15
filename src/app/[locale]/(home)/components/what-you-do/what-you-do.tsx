'use client';

import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import { WhatYouDoSlider } from './what-you-do-slider';

export const WhatYouDo = () => {
  const t = useTranslations('home.whatYouDo');

  return (
    <section className="mx-4 flex flex-col gap-10 bg-white py-[100px] pl-[60px] max-md:px-4 max-md:py-[60px]">
      <section className="flex flex-col gap-4 pr-[60px]">
        <Title>
          {t('title', {
            fallback: 'From What You Do to What You’re Known For',
          })}
        </Title>
        <Text color="black">
          {t('description', {
            fallback:
              'We don’t do generic advice. We offer hands-on, personalized consulting that aligns with your vision, pace, and potential — and moves you forward with purpose. Here’s what we’ll work on together:',
          })}
        </Text>
      </section>
      <WhatYouDoSlider />
    </section>
  );
};
