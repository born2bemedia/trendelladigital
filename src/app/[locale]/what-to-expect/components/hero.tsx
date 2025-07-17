'use client';

import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const Hero = () => {
  const t = useTranslations('whatToExpect.hero');

  return (
    <section className="mx-4 mt-4 bg-white px-[60px] py-[100px] max-md:px-4">
      <div className="flex justify-between gap-4 p-4 max-md:flex-col max-md:p-0">
        <span className="w-1/2 max-md:w-full">
          <Title as="h1" size="4xl" color="dark">
            {t('title.0')}
            <br />
            {t('title.1')}
          </Title>
        </span>
        <span className="w-1/2 max-md:w-full">
          <Text color="dark">
            {t('description.0')} <br />
            <br />
            {t('description.1')}
          </Text>
        </span>
      </div>
    </section>
  );
};
