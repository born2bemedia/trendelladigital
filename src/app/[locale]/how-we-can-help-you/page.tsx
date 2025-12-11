import type { Metadata } from 'next';

import {
  Hero,
  Outcomes,
  Partnership,
  SpecificImpact,
  StrategyImpact,
  WeHelp,
} from './components';

export const metadata: Metadata = {
  title: 'Strategic Business & Marketing Support Built Around You',
  description:
    'Explore how our business and marketing consulting helps founders get clarity, traction, and momentum at every stage of growth.',
  openGraph: {
    title: 'Strategic Business & Marketing Support Built Around You',
    description:
      'Explore how our business and marketing consulting helps founders get clarity, traction, and momentum at every stage of growth.',
    images: ['https://idelaria.com/meta.jpg'],
  },
  twitter: {
    title: 'Strategic Business & Marketing Support Built Around You',
    description:
      'Explore how our business and marketing consulting helps founders get clarity, traction, and momentum at every stage of growth.',
    images: ['https://idelaria.com/meta.jpg'],
  },
};

export default function HowWeCanHelpYou() {
  return (
    <main>
      <Hero />
      <StrategyImpact />
      <SpecificImpact />
      <Partnership />
      <Outcomes />
      <WeHelp />
    </main>
  );
}
