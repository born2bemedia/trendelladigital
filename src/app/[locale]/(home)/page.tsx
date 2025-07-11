'use client';

import {
  ConnectAndMoveForward,
  Consultings,
  Hero,
  JoinTrendella,
  LatestFrom,
  OurMission,
} from './components';

export default function Home() {
  return (
    <main>
      <Hero />
      <OurMission />
      {/* <WhatYouDo /> */}
      <Consultings />
      <JoinTrendella />
      <LatestFrom />
      <ConnectAndMoveForward />
    </main>
  );
}
