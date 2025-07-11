'use client';

import { ArrowRight } from '@/shared/icons/fill/arrow-right';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const Outcomes = () => {
  return (
    <section className="flex gap-10 px-[100px] py-[80px] max-md:flex-col-reverse max-md:px-4 max-md:py-[80px]">
      <OutcomeTable />
      <section className="flex w-1/2 flex-col max-md:w-full max-md:gap-10">
        <div className="flex flex-col gap-2.5">
          <Title color="white">Outcomes That Prove the Process</Title>
          <Text color="white">
            Our clients experience transformation through clarity, structure,
            and accountability:
          </Text>
        </div>
        <div className="mt-auto">
          <Button variant="metal">
            Check Out Before & After <ArrowRight color="black" />
          </Button>
        </div>
      </section>
    </section>
  );
};

export const OutcomeTable = () => {
  const items = [
    'Streamlined business models that run without chaos',
    'Messaging that captures the right audience with precision',
    'Offers that convert consistently and deliver real value',
    'Marketing that feels aligned — and performs on multiple fronts',
    'Systems that replace guesswork with structure',
    'Confidence to lead decisively, and grow intentionally',
  ];

  return (
    <section className="grid w-1/2 grid-cols-2 gap-1 max-md:w-full max-md:grid-cols-1">
      {items.map(item => (
        <div key={item} className="border border-white px-10 py-6">
          <Text color="white" size="xl">
            {item}
          </Text>
        </div>
      ))}
    </section>
  );
};
