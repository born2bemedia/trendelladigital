'use client';

import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const Scale = () => {
  const t = useTranslations('ourStory.scale');

  return (
    <section className="flex flex-col gap-10 px-[100px] py-[80px] max-md:px-4 max-md:py-[60px]">
      <section className="flex flex-col gap-2.5 text-center">
        <Title color="white">
          {t('title', {
            fallback: 'We’re Not in This to Scale for Scale’s Sake',
          })}
        </Title>
        <Text color="white">
          {t('description.0', {
            fallback:
              'We don’t believe success means building the biggest, loudest brand in the room.',
          })}
          <br />
          {t('description.1', {
            fallback:
              'We believe it means building a business that aligns with your life, values, and your unique concept of freedom.',
          })}
          <br />
          <br />
          {t('description.2', {
            fallback:
              'At Trendella Digital, growth isn’t about shouting louder.',
          })}{' '}
          <br />
          <br />
          {t('description.3', {
            fallback:
              'It’s about thinking, executing better, and showing up with confidence — even on the messy days.',
          })}
        </Text>
      </section>
      <ScaleTable />
    </section>
  );
};

const ScaleTable = () => {
  const t = useTranslations('ourStory.scale');

  const items = [
    t('table.item.0', {
      fallback: 'Clear strategy without the complexity',
    }),
    t('table.item.1', {
      fallback: 'Business systems that serve you, not the other way around',
    }),
    t('table.item.2', {
      fallback: 'Messaging that sounds like you — and actually works',
    }),
    t('table.item.3', {
      fallback: 'Support that sees you, not just your revenue goals',
    }),
  ];

  return (
    <section className="flex flex-col gap-10 rounded-lg bg-[#F0DBDF] bg-gradient-to-b from-transparent from-[15.71%] to-white to-100% p-6">
      <Title as="h3" size="5xl" color="dark" weight={400}>
        {t('table.title.0', {
          fallback: 'If You’re Craving…',
        })}
      </Title>
      <ul className="flex flex-col gap-2">
        {items.map(item => (
          <TableItem key={item} value={item} />
        ))}
      </ul>
      <div className="ml-auto">
        <Title as="h3" size="5xl" color="dark" weight={400}>
          {t('table.title.1', {
            fallback: '...you’re in the right place.',
          })}
        </Title>
      </div>
    </section>
  );
};

export const TableItem = ({ value }: { value: string }) => (
  <li className="rounded-lg bg-white/40 p-6">
    <Text color="dark" size="lg" uppercase>
      {value}
    </Text>
  </li>
);
