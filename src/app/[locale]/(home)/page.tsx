'use client';

import {
  ConnectAndMoveForward,
  Consultings,
  Hero,
  HowItHappens,
  JoinTrendella,
  LatestFrom,
  OurMission,
  WhatYouDo,
} from './components';

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
      <ConnectAndMoveForward />
    </main>
  );
}
