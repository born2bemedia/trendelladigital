'use client';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const ConsultingSteps = ({
  title,
  values,
}: {
  title: string;
  values: { title: string; description: string }[];
}) => {
  return (
    <section className="flex gap-10 px-[100px] py-[80px] max-md:flex-col max-md:px-4">
      <div className="w-1/2 max-md:w-full">
        <Title color="white">{title}</Title>
      </div>
      <ul className="flex w-1/2 flex-col max-md:w-full">
        {values.map((value, index) => (
          <Steps key={index} number={++index} {...value} />
        ))}
      </ul>
    </section>
  );
};

const Steps = ({
  number,
  title,
  description,
}: {
  number: number;
  title: string;
  description: string;
}) => (
  <li className="flex flex-col gap-2.5 p-2">
    <span className="flex items-center gap-2.5">
      <Text size="lg" color="gray">
        {number}
      </Text>
      <Text size="base" color="white">
        {title}
      </Text>
    </span>
    <Text size="base" color="gray">
      {description}
    </Text>
    <div className="h-[3px] w-full rounded-full bg-white/10" />
  </li>
);
