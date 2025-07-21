'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { cn } from '@/shared/lib/utils/styles';
import { Title } from '@/shared/ui/kit/title';

import type { Package } from '../model/types';
import { PackageCard } from './card';

export const PackageList = ({
  values,
  type,
  reverseImg = false,
  images,
}: {
  values: Package[];
  type: 'marketing' | 'business';
  images: string[];
  reverseImg?: boolean;
}) => {
  const t = useTranslations('plansAndPricing.packages');

  return (
    <section className="mx-4 flex flex-col gap-10 bg-white px-[60px] pt-[80px] first:pt-0 max-md:px-4">
      <Title size="4xl" weight={500}>
        {type === 'marketing'
          ? t('marketingTitle', { fallback: 'Marketing Consulting Packages' })
          : t('businessTitle', { fallback: 'Business Consulting Packages' })}
      </Title>
      <section className="flex flex-col gap-4">
        <div className="flex gap-4 max-md:flex-col">
          {values.slice(0, 3).map(value => (
            <PackageCard key={value.id} {...value} />
          ))}
        </div>
        <div
          className={cn(
            'flex gap-4 max-md:flex-col',
            reverseImg && 'flex-row-reverse',
          )}
        >
          <PackageCard
            id={values[3].id}
            slug={values[3].slug}
            name={values[3].name}
            description={values[3].description}
            price={values[3].price}
            fromPrice={values[3].fromPrice}
            type={values[3].type}
          />
          <PackageCard
            id={values[4].id}
            slug={values[4].slug}
            name={values[4].name}
            description={values[4].description}
            price={values[4].price}
            fromPrice={values[4].fromPrice}
            type={values[4].type}
          />
          <Image
            className="h-[450px] w-1/2 rounded-lg object-cover max-md:!h-[434px] max-md:w-full"
            src={images[0]}
            alt={`${type} Consulting Packages`}
            width={632}
            height={450}
            unoptimized
          />
        </div>
        <div
          className={cn(
            'flex gap-4 max-md:flex-col-reverse',
            reverseImg && 'flex-row-reverse',
          )}
        >
          <Image
            className="h-[450px] w-1/2 rounded-lg object-cover max-md:h-[434px] max-md:w-full"
            src={images[1]}
            alt={`${type} Consulting Packages`}
            width={632}
            height={450}
            unoptimized
          />
          <PackageCard
            id={values[5].id}
            slug={values[5].slug}
            name={values[5].name}
            description={values[5].description}
            price={values[5].price}
            fromPrice={values[5].fromPrice}
            type={values[5].type}
          />
          <PackageCard
            id={values[6].id}
            slug={values[6].slug}
            name={values[6].name}
            description={values[6].description}
            price={values[6].price}
            fromPrice={values[6].fromPrice}
            type={values[6].type}
          />
        </div>
        <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1">
          {values.slice(7).map(value => (
            <PackageCard key={value.id} {...value} />
          ))}
        </div>
      </section>
    </section>
  );
};
