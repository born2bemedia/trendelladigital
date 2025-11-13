import type { Metadata } from 'next';

import { Hero, Map, OurPromise, WorkWithUs } from './components';

export const metadata: Metadata = {
  title: 'What It’s Like to Work With Signalor',
  description:
    'See how our 5-phase consulting process turns uncertainty into structured growth — with real partnership at every step.',
  openGraph: {
    title: 'What It’s Like to Work With Signalor',
    description:
      'See how our 5-phase consulting process turns uncertainty into structured growth — with real partnership at every step.',
    images: ['https://trendelladigital.com/meta.jpg'],
  },
  twitter: {
    title: 'What It’s Like to Work With Signalor',
    description:
      'See how our 5-phase consulting process turns uncertainty into structured growth — with real partnership at every step.',
    images: ['https://trendelladigital.com/meta.jpg'],
  },
};

export default function WhatToExpect() {
  return (
    <main>
      <Hero />
      <Map />
      <OurPromise />
      <WorkWithUs />
    </main>
  );
}
