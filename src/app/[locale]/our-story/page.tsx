import type { Metadata } from 'next';

import { BringVision, Hero, ProgressYouCan, Scale } from './components';

export const metadata: Metadata = {
  title: 'The Story Behind Idelaria | From Challenge to Clarity',
  description:
    'Discover how Idelaria began — and why our consulting approach is rooted in real-world growth, not recycled advice.',
  openGraph: {
    title: 'The Story Behind Idelaria | From Challenge to Clarity',
    description:
      'Discover how Idelaria began — and why our consulting approach is rooted in real-world growth, not recycled advice.',
    images: ['https://idelaria.com/meta.jpg'],
  },
  twitter: {
    title: 'The Story Behind Idelaria | From Challenge to Clarity',
    description:
      'Discover how Idelaria began — and why our consulting approach is rooted in real-world growth, not recycled advice.',
    images: ['https://idelaria.com/meta.jpg'],
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
