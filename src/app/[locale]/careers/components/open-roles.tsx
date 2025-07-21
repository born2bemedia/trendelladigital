'use client';

import { useState } from 'react';
import Image from 'next/image';

import { openPositions } from '@/features/careers/model/data';
import { JobCard } from '@/features/careers/ui/job-card';

import { ArrowBottomRight } from '@/shared/icons/fill/arrow-bottom-right';
import { cn } from '@/shared/lib/utils/styles';
import { Title } from '@/shared/ui/kit/title';

export const OpenRoles = () => {
  const [activePosition, setActivePosition] = useState<string>(
    'marketing-strategist',
  );

  const activeJob =
    openPositions.find(item => item.id === activePosition) ?? openPositions[0];

  return (
    <section className="mx-4 bg-white px-[60px] pb-[60px] max-md:px-4 max-md:pb-4">
      <section className="flex flex-col gap-10 rounded-lg bg-[#F5F4FD] p-6">
        <header className="flex gap-[80px] max-md:flex-col max-md:gap-4">
          <Title
            as="h1"
            size="7xl"
            color="dark"
            weight={400}
            className="shrink-0 max-xl:shrink"
          >
            Open Roles
          </Title>
          <Image
            className="h-[292px] w-full rounded-lg object-cover max-md:h-[232px]"
            src="/images/careers/banner.jpg"
            alt="banner"
            width={700}
            height={292}
            unoptimized
          />
        </header>
        <section className="flex flex-col max-md:hidden">
          <section className="flex gap-1">
            {openPositions.map(item => (
              <JobTabButton
                key={item.id}
                id={item.id}
                title={item.title}
                isActive={activePosition === item.id}
                onClick={setActivePosition}
              />
            ))}
          </section>
          <JobCard {...activeJob} />
        </section>
        <section className="hidden flex-col max-md:flex">
          {openPositions.map(item => (
            <section key={item.id} className="flex flex-col">
              <JobTabButton
                id={item.id}
                title={item.title}
                isActive={activePosition === item.id}
                onClick={setActivePosition}
              />
              {activePosition === item.id && <JobCard {...item} />}
            </section>
          ))}
        </section>
      </section>
    </section>
  );
};

const JobTabButton = ({
  id,
  title,
  isActive,
  onClick,
}: {
  id: string;
  title: string;
  isActive: boolean;
  onClick: (id: string) => void;
}) => {
  return (
    <button
      key={id}
      className={cn(
        'flex h-[100px] flex-1 cursor-pointer flex-col gap-2 rounded-lg bg-[#E1DFF6]/40 p-6 text-left opacity-40 outline-none',
        isActive && 'rounded-b-none opacity-100',
      )}
      onClick={() => onClick(id)}
    >
      <Title size="lg" weight={500} color="dark">
        {title}
      </Title>
      {!isActive && (
        <span className="ml-auto">
          <ArrowBottomRight />
        </span>
      )}
    </button>
  );
};
