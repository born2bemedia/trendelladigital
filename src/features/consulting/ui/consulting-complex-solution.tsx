'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { ArrowRight } from '@/shared/icons/fill/arrow-right';
import { cn } from '@/shared/lib/utils/styles';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import type { ComplexSolution, SolutionType } from '../model/types';
import st from './consulting-comples-solution.module.css';
import { ConsultingRequestForm } from './consulting-request-form';

export const ConsultingComplexSolution = ({
  type,
  solutions,
}: {
  type: 'marketing' | 'business';
  solutions: {
    cheap: ComplexSolution;
    moderate: ComplexSolution;
    expensive: ComplexSolution;
  };
}) => {
  const t = useTranslations('consultingComplexSolution');

  return (
    <section className="flex flex-col gap-10 px-[100px] py-[80px] max-md:px-4">
      <section className="flex flex-col gap-2.5 text-center max-md:text-left">
        <Title color="white" className="max-md:text-[32px]">
          <span className="opacity-60">{t('title.0')}</span> <br />
          {t('title.1', { type: t(`types.${type}`) })}
        </Title>
        <Text color="white">
          {t('description', {
            fallback:
              'Support that matches your stage, capacity, and ambition.',
          })}
        </Text>
      </section>
      <section className="flex flex-col gap-2">
        <SolutionCard solution={solutions.cheap} type="cheap" pageType={type} />
        <SolutionCard
          solution={solutions.moderate}
          type="moderate"
          pageType={type}
        />
        <SolutionCard
          solution={solutions.expensive}
          type="expensive"
          pageType={type}
        />
      </section>
      <section className="flex flex-col items-center gap-6 text-center">
        <div className="flex flex-col items-center gap-2.5 text-center">
          <Title color="white" as="h3">
            {t('footer.0', { fallback: 'Not Sure Which One' })} <br />
            {t('footer.1', { fallback: 'Fits Your Current Needs?' })}
          </Title>
          <Text color="white">
            {t('footer.2', { fallback: 'Let’s walk through it together.' })}
          </Text>
        </div>
        <Link href="/contact-us">
          <Button variant="metal">
            {t('button', { fallback: 'Book a Free Call' })}
            <ArrowRight color="black" />
          </Button>
        </Link>
      </section>
    </section>
  );
};

const SolutionCard = ({
  solution,
  type,
  pageType,
}: {
  solution: ComplexSolution;
  type: SolutionType;
  pageType: 'marketing' | 'business';
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const t = useTranslations('consultingComplexSolution');

  const solutionSt: Record<SolutionType, string> = {
    cheap: st.cheapBg,
    moderate: st.moderateBg,
    expensive: st.expensiveBg,
  };

  return (
    <section
      className={cn(
        'flex w-full flex-col gap-10 rounded-lg p-10 max-md:gap-6 max-md:p-4',
        solutionSt[type],
      )}
    >
      <section className="flex items-end max-md:flex-col max-md:items-start max-md:gap-2">
        <div className="flex w-1/2 flex-col gap-2 max-md:w-full">
          <Title as="h4" color="dark" size="4xl" weight={400}>
            {solution.name}
          </Title>
          <Text color="ghost">{solution.description}</Text>
        </div>
        <div className="flex w-1/2 flex-col gap-2 max-md:w-full">
          <Text color="dark">{t('bestFor', { fallback: 'Best for:' })}</Text>
          <Text color="ghost">{solution.bestFor.join(', ')}</Text>
        </div>
      </section>
      <section className="flex items-end justify-between max-md:flex-col max-md:items-start max-md:gap-10">
        <div className="flex flex-col gap-2">
          <Text size="base" color="dark">
            {t('includes', { fallback: 'Services include:' })}
          </Text>
          <ul className="grid grid-cols-2 gap-2 max-md:grid-cols-1">
            {solution.includes.map(item => (
              <li key={item} className="rounded-lg bg-white/40 p-4">
                <Text color="dark">{item}</Text>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <Text color="ghost">{t('price', { fallback: 'Price:' })}</Text>
            <Title as="h4" color="black" size="4xl">
              {t('from', { fallback: 'from' })} €
              {solution.price.toLocaleString()}
            </Title>
          </div>
          <Button onClick={() => setIsOpen(true)}>
            {t('request', { fallback: 'Request' })} {solution.name}{' '}
            <ArrowRight color="black" />
          </Button>
        </div>
      </section>
      <ConsultingRequestForm
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        type={pageType}
        entity={{
          name: solution.name,
          price: solution.price,
          id: 0,
          slug: '',
          description: '',
          type: pageType,
          fromPrice: true,
        }}
      />
    </section>
  );
};
