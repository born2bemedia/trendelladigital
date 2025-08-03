'use client';

import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const Hero = () => {
  const t = useTranslations('beforeAndAfter.hero');

  return (
    <section className="mx-4 mt-2.5 flex gap-4 bg-white px-[60px] pt-[106px] pb-[100px] max-md:flex-col max-md:px-4 max-md:pt-[90px]">
      <Title as="h1" size="4xl" className="w-1/2 max-md:w-full">
        {t('title', {
          fallback: 'From “I Hope” to “I Know.” From “Someday” to “Now.”',
        })}
      </Title>
      <Text color="dark" className="w-1/2 max-md:w-full">
        {t('description.0', {
          fallback:
            'We don’t just offer advice — we build transformation alongside you.',
        })}
        <br />
        <br />
        {t('description.1', {
          fallback:
            'From uncertain freelancers to confident business owners, our clients don’t just level up — they evolve. Here’s a look at the kind of change that happens when clarity meets action.',
        })}
      </Text>
    </section>
  );
};
