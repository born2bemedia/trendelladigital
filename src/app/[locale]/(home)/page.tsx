'use client';

import {
  ConnectAndMoveForward,
  Consultings,
  Hero,
  LatestFrom,
  OurMission,
} from './components';

export default function Home() {
  return (
    <main>
      <Hero />
      <OurMission />
      <Consultings />
      <LatestFrom />
      <ConnectAndMoveForward />
    </main>
  );
}
