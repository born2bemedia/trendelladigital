'use client';

import { cn } from '@/shared/lib/utils/styles';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const quoteSt = {
  business: 'bg-[rgba(135,121,247,0.30)]',
  marketing: 'bg-[rgba(209,183,188,0.30)]',
};

export const ConsultingQuote = ({
  value,
  who,
  type,
}: {
  value: string;
  who: string;
  type: 'business' | 'marketing';
}) => {
  return (
    <section
      className={cn(
        'mx-4 bg-white px-[60px] py-[100px] max-md:px-4 max-md:py-[60px]',
        type === 'marketing' ? 'bg-[#F6F3F3]' : 'bg-[#F5F4FD]',
      )}
    >
      <article
        className={cn(
          'flex gap-[60px] rounded-lg px-6 py-[60px] max-lg:flex-col max-lg:gap-6 max-md:px-4 max-md:py-10',
          quoteSt[type],
        )}
      >
        <Title as="h4" size="4xl" weight={400} color="dark">
          &quot;{value}&quot;
        </Title>
        <span className="mt-auto shrink-0">
          <Text color="ghost">{who}</Text>
        </span>
      </article>
    </section>
  );
};
