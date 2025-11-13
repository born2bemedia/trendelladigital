import type { Metadata } from 'next';

import { Hero, HowApply, OpenRoles } from './components';

export const metadata: Metadata = {
  title: 'Join the Signalor Team | Purposeful Remote Work',
  description:
    'We’re hiring marketers, strategists, and operators who care about clarity, ownership, and real impact. See open roles and apply today.',
  openGraph: {
    title: 'Join the Signalor Team | Purposeful Remote Work',
    description:
      'We’re hiring marketers, strategists, and operators who care about clarity, ownership, and real impact. See open roles and apply today.',
    images: ['https://trendelladigital.com/meta.jpg'],
  },
  twitter: {
    title: 'Join the Signalor Team | Purposeful Remote Work',
    description:
      'We’re hiring marketers, strategists, and operators who care about clarity, ownership, and real impact. See open roles and apply today.',
    images: ['https://trendelladigital.com/meta.jpg'],
  },
};

export default function CareersPage() {
  return (
    <main>
      <Hero />
      <OpenRoles />
      <HowApply />
    </main>
  );
}
