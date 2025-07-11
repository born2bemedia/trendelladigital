'use client';

import { getBusinessConsultingDetailed } from '@/features/business-consulting/model/data';
import { ConsultingDetails } from '@/features/consulting/ui/consulting-details';
import { getMarketingConsultingDetailed } from '@/features/marketing-consulting/model/data';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const SpecificImpact = () => {
  const businessConsulting = getBusinessConsultingDetailed();
  const marketingConsulting = getMarketingConsultingDetailed();

  return (
    <section className="mx-4 flex flex-col gap-10 bg-white px-[60px] py-[100px] max-md:px-4 max-md:py-[60px]">
      <section className="flex flex-col gap-2">
        <Title color="black">Specific, High-Impact Areas of Support</Title>
        <Text color="black">
          Advisory without implementation is incomplete. We co-create with you,
          combining strategic planning with operational precision.
        </Text>
      </section>
      <section className="flex gap-10 max-md:flex-col max-md:gap-2.5">
        <ConsultingDetails
          description={businessConsulting.description}
          includes={businessConsulting.includes}
          type="business"
        />
        <ConsultingDetails
          description={marketingConsulting.description}
          includes={marketingConsulting.includes}
          type="marketing"
        />
      </section>
    </section>
  );
};
