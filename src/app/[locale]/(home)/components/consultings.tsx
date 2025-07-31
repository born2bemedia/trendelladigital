'use client';

import { useTranslations } from 'next-intl';

import { getBusinessConsulting } from '@/features/business-consulting/model/data';
import { ConsultingPreview } from '@/features/consulting/ui/consulting-preview';
import { getMarketingConsulting } from '@/features/marketing-consulting/model/data';

import { Title } from '@/shared/ui/kit/title';

export const Consultings = () => {
  const t = useTranslations('home.consultings');
  const tb = useTranslations('home.consultings.business');
  const tm = useTranslations('home.consultings.marketing');

  const businessConsulting = getBusinessConsulting(tb);
  const marketingConsulting = getMarketingConsulting(tm);

  return (
    <section className="mx-4 flex flex-col gap-10 bg-white px-[60px] py-[100px] max-md:px-4 max-md:py-[60px]">
      <Title>
        {t('title.0', {
          fallback: 'Business Consulting for Structure',
        })}
        ,
        <br />
        {t('title.1', {
          fallback: 'Marketing Consulting for Scale',
        })}
      </Title>
      <ConsultingPreview type="business" {...businessConsulting} />
      <ConsultingPreview type="marketing" {...marketingConsulting} />
    </section>
  );
};
