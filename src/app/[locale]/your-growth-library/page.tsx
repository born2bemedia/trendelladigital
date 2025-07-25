import type { Metadata } from 'next';

import { Hero, PopularPosts, Topics } from './components';

export const metadata: Metadata = {
  title: 'Business & Marketing Insights That Actually Help | Trendella Blog',
  description:
    'Browse our library of no-fluff, actionable articles on business structure, marketing systems, messaging, and more.',
  openGraph: {
    title: 'Business & Marketing Insights That Actually Help | Trendella Blog',
    description:
      'Browse our library of no-fluff, actionable articles on business structure, marketing systems, messaging, and more.',
    images: ['https://trendelladigital.com/meta.jpg'],
  },
  twitter: {
    title: 'Business & Marketing Insights That Actually Help | Trendella Blog',
    description:
      'Browse our library of no-fluff, actionable articles on business structure, marketing systems, messaging, and more.',
    images: ['https://trendelladigital.com/meta.jpg'],
  },
};

export default function YourGrowthLibrary() {
  return (
    <main>
      <Hero />
      <Topics />
      <PopularPosts />
    </main>
  );
}
