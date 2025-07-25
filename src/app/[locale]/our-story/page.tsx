import type { Metadata } from 'next';

import { BringVision, Hero, ProgressYouCan, Scale } from './components';

export const metadata: Metadata = {
  title: 'The Story Behind Trendella Digital | From Challenge to Clarity',
  description:
    'Discover how Trendella Digital began — and why our consulting approach is rooted in real-world growth, not recycled advice.',
  openGraph: {
    title: 'The Story Behind Trendella Digital | From Challenge to Clarity',
    description:
      'Discover how Trendella Digital began — and why our consulting approach is rooted in real-world growth, not recycled advice.',
    images: ['https://trendelladigital.com/meta.jpg'],
  },
  twitter: {
    title: 'The Story Behind Trendella Digital | From Challenge to Clarity',
    description:
      'Discover how Trendella Digital began — and why our consulting approach is rooted in real-world growth, not recycled advice.',
    images: ['https://trendelladigital.com/meta.jpg'],
  },
};

export default function OurStory() {
  return (
    <main>
      <Hero />
      <ProgressYouCan />
      <Scale />
      <BringVision />
    </main>
  );
}
