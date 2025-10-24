import type { Metadata } from 'next';

import {
  Consultings,
  Hero,
  HowItHappens,
  JoinTrendella,
  LatestFrom,
  OurMission,
  WhatYouDo,
} from './components';

export const metadata: Metadata = {
  title:
    'Business & Marketing Consulting That Gets Results | Trendella Digital',
  description:
    'Turn your expertise into a high-performing business. Book your free strategy call and build with clarity, structure, and strategy that works.',
  openGraph: {
    title:
      'Business & Marketing Consulting That Gets Results | Trendella Digital',
    description:
      'Turn your expertise into a high-performing business. Book your free strategy call and build with clarity, structure, and strategy that works.',
    images: ['https://trendelladigital.com/meta.jpg'],
  },
  twitter: {
    title:
      'Business & Marketing Consulting That Gets Results | Trendella Digital',
    description:
      'Turn your expertise into a high-performing business. Book your free strategy call and build with clarity, structure, and strategy that works.',
    images: ['https://trendelladigital.com/meta.jpg'],
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <OurMission />
      <WhatYouDo />
      <Consultings />
      <HowItHappens />
      <JoinTrendella />
      <LatestFrom />
      {/* <ConnectAndMoveForward /> */}
    </main>
  );
}
