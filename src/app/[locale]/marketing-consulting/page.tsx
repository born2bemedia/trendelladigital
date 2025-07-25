import type { Metadata } from 'next';

import {
  Book,
  ComplexSolution,
  Hero,
  Info,
  Products,
  Quote,
  Reasons,
  Reviews,
  Steps,
} from './components';

export const metadata: Metadata = {
  title: 'Marketing Consulting That Converts | Position, Scale, Grow',
  description:
    'Market with confidence. Our consulting helps you craft messaging, funnels, and systems that attract the right clients — without burnout.',
  openGraph: {
    title: 'Marketing Consulting That Converts | Position, Scale, Grow',
    description:
      'Market with confidence. Our consulting helps you craft messaging, funnels, and systems that attract the right clients — without burnout.',
    images: ['https://trendelladigital.com/meta.jpg'],
  },
  twitter: {
    title: 'Marketing Consulting That Converts | Position, Scale, Grow',
    description:
      'Market with confidence. Our consulting helps you craft messaging, funnels, and systems that attract the right clients — without burnout.',
    images: ['https://trendelladigital.com/meta.jpg'],
  },
};

export default function MarketingConsultingPage() {
  return (
    <main>
      <Hero />
      <Info />
      <Quote />
      <Products />
      <ComplexSolution />
      <Steps />
      <Reasons />
      <Reviews />
      <Book />
    </main>
  );
}
