import type { Metadata } from 'next';

import { BookStrategyCall, Hero, Reviews } from './components';

export const metadata: Metadata = {
  title: 'Real Client Transformations | Before & After Results',
  description:
    'From “I hope” to “I know” — see how founders transformed their offers, systems, and revenue with Signalor’s guidance.',
  openGraph: {
    title: 'Real Client Transformations | Before & After Results',
    description:
      'From “I hope” to “I know” — see how founders transformed their offers, systems, and revenue with Signalor’s guidance.',
    images: ['https://trendelladigital.com/meta.jpg'],
  },
  twitter: {
    title: 'Real Client Transformations | Before & After Results',
    description:
      'From “I hope” to “I know” — see how founders transformed their offers, systems, and revenue with Signalor’s guidance.',
    images: ['https://trendelladigital.com/meta.jpg'],
  },
};

export default function BeforeAndAfter() {
  return (
    <main>
      <Hero />
      <Reviews />
      <BookStrategyCall />
    </main>
  );
}
