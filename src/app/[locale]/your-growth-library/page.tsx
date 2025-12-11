import type { Metadata } from 'next';

import { Hero, PopularPosts } from './components';

export const metadata: Metadata = {
  title: 'Business & Marketing Insights That Actually Help | Idelaria Blog',
  description:
    'Browse our library of no-fluff, actionable articles on business structure, marketing systems, messaging, and more.',
  openGraph: {
    title: 'Business & Marketing Insights That Actually Help | Idelaria Blog',
    description:
      'Browse our library of no-fluff, actionable articles on business structure, marketing systems, messaging, and more.',
    images: ['https://idelaria.com/meta.jpg'],
  },
  twitter: {
    title: 'Business & Marketing Insights That Actually Help | Idelaria Blog',
    description:
      'Browse our library of no-fluff, actionable articles on business structure, marketing systems, messaging, and more.',
    images: ['https://idelaria.com/meta.jpg'],
  },
};

export default function YourGrowthLibrary() {
  return (
    <main>
      <Hero />
      <PopularPosts />
    </main>
  );
}
