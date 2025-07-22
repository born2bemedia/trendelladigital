'use client';

import { useTranslations } from 'next-intl';

import { List } from '@/shared/ui/kit/list';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import type { Position } from '../model/types';

export const JobCard = ({
  compensation,
  description,
  estimatedTime,
  fitSkills,
  location,
  niceToHave,
  quote,
  responsibilities,
  title,
  subtitle,
}: Position) => {
  const t = useTranslations('careers.jobCard');

  return (
    <article className="flex flex-col gap-6 rounded-b-lg bg-[#E1DFF6]/40 p-6 max-md:p-4">
      <section className="flex items-start justify-between max-md:flex-col max-md:gap-6">
        <div className="flex flex-col">
          <Title as="h3" size="4xl" weight={400} className="max-md:text-[24px]">
            {title}
          </Title>
          {subtitle && <Text color="ghost">{subtitle}</Text>}
        </div>
        <Text
          color="ghost"
          size="xl"
          className="max-md:text-right max-md:text-base"
        >
          {quote}
        </Text>
      </section>
      <section className="flex gap-10 max-md:flex-col">
        <section className="flex w-1/2 flex-col gap-6 max-md:w-full">
          <Text color="dark">
            {description.map(item => (
              <span
                key={item}
                className="last:has(+ br + br):has(~ br + br):not(:last-child)"
              >
                {item} <br />
                <br />
              </span>
            ))}
          </Text>
          <ListWithLabel
            label="You might be a fit if you:"
            values={fitSkills}
          />
          <ListWithLabel
            label="Nice-to-haves (but not required):"
            values={niceToHave}
          />
          <div className="flex flex-col">
            <KeyValue label="Estimated time commitment" value={estimatedTime} />
            <KeyValue label="Compensation" value={compensation} />
            <KeyValue label="Location" value={location} />
          </div>
        </section>
        <section className="flex w-1/2 flex-col gap-2 max-md:w-full">
          <Text weight={700} color="dark">
            {t('responsibilities', {
              fallback: 'Responsibilities include:',
            })}
          </Text>
          <ul className="flex flex-col gap-1">
            {responsibilities.map(r => (
              <Responsibility key={r} value={r} />
            ))}
          </ul>
        </section>
      </section>
    </article>
  );
};

const Responsibility = ({ value }: { value: string }) => (
  <li className="w-full border border-[rgba(209,183,188,0.4)] bg-gradient-to-r from-[rgba(49,49,49,0.05)] to-[rgba(151,151,151,0.05)] p-6 max-md:p-4">
    <Text size="base" color="dark">
      {value}
    </Text>
  </li>
);

const KeyValue = ({ label, value }: { label: string; value: string }) => (
  <Text color="dark">
    <span className="font-bold">{label}:</span> {value}
  </Text>
);

const ListWithLabel = ({
  label,
  values,
}: {
  label: string;
  values: string[];
}) => (
  <div className="flex flex-col gap-2">
    <Text weight={700} color="dark">
      {label}
    </Text>
    <List values={values} />
  </div>
);
