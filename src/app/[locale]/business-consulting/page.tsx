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
  title: 'Business Consulting for Solo Founders & Experts | Signalor',
  description:
    'Build a business that works for you — with custom strategy, structure, and systems that turn ideas into sustainable growth.',
  openGraph: {
    title: 'Business Consulting for Solo Founders & Experts | Signalor',
    description:
      'Build a business that works for you — with custom strategy, structure, and systems that turn ideas into sustainable growth.',
    images: ['https://trendelladigital.com/meta.jpg'],
  },
  twitter: {
    title: 'Business Consulting for Solo Founders & Experts | Signalor',
    description:
      'Build a business that works for you — with custom strategy, structure, and systems that turn ideas into sustainable growth.',
    images: ['https://trendelladigital.com/meta.jpg'],
  },
};

export default function BusinessConsultingPage() {
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
