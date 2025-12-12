'use client';

import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { ArrowBottomRight } from '@/shared/icons/fill/arrow-bottom-right';
import { cn } from '@/shared/lib/utils/styles';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const Info = () => {
  const t = useTranslations('contactUs.info');

  return (
    <section className="mx-4 flex flex-col gap-2 bg-white px-[60px] pt-[80px] pb-[60px] max-md:px-4 max-md:pb-4">
      {/** INFO BLOCK 1 
       * <Layout>
        <section className="flex w-1/2 flex-col justify-between max-md:w-full max-md:gap-6">
          <Title size="4xl" weight={400}>
            {t('title', { fallback: 'Where We Work' })}
          </Title>
          <div className="flex gap-2 max-md:flex-col">
            <Element
              label={t('elements.0', { fallback: 'Main Office' })}
              value={{
                label:
                  'Ara Business Center, Strada Parintele Galeriu 6C, Bucharest 030167, Romania',
              }}
            />
            <Element
              label={t('elements.1', { fallback: 'Registered HQ' })}
              value={{
                label:
                  '255 Mihai Bravu Road., Basement, Module S 209, District 3, Bucharest, Romania',
              }}
            />
          </div>
        </section>
        <Image
          className="h-[197px] w-1/2 rounded-lg object-cover max-md:w-full"
          src="/images/contact-us/info-1.jpg"
          alt="info"
          width={100}
          height={197}
          unoptimized
        />
      </Layout>
      */}
      <Layout reverse>
        <section className="flex w-1/2 flex-col justify-between max-md:w-full max-md:gap-6">
          <Title size="4xl" weight={400}>
            {t('title2', { fallback: 'Reach Out Directly' })}
          </Title>
          <div className="flex gap-2 max-md:flex-col">
            <Element
              label={t('elements2.0', { fallback: 'Email' })}
              value={{
                label: 'info@idelaria.com',
                url: 'mailto:info@idelaria.com',
              }}
            />
            {/* <Element
              label={t('elements2.1', { fallback: 'Phone' })}
              value={{ label: 'Phone' }}
            /> */}
          </div>
        </section>
        <Image
          className="h-[197px] w-1/2 rounded-lg object-cover max-md:w-full"
          src="/images/contact-us/info-2.jpg"
          alt="info"
          width={100}
          height={197}
          unoptimized
        />
      </Layout>
    </section>
  );
};

const Element = ({
  label,
  value,
}: {
  label: string;
  value: { url?: string; label: string };
}) => (
  <section className="flex flex-1 flex-col gap-2 rounded-lg bg-[rgba(225,223,246,0.4)] p-6">
    <Text size="base" color="dark">
      {label}
    </Text>
    {value.url ? (
      <Link href={value.url}>
        <Text color="dark" size="lg" weight={500}>
          {value.label}
        </Text>
      </Link>
    ) : (
      <Text color="dark" size="lg" weight={500}>
        {value.label}
      </Text>
    )}
    <span className="ml-auto">
      <ArrowBottomRight />
    </span>
  </section>
);

const Layout = ({
  children,
  reverse = false,
}: {
  children: ReactNode;
  reverse?: boolean;
}) => (
  <section
    className={cn(
      'flex h-[245px] gap-10 rounded-lg bg-[#F5F4FD] p-6 max-md:h-full max-md:flex-col',
      reverse && 'flex-row-reverse',
    )}
  >
    {children}
  </section>
);
