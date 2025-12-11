import type { Metadata } from 'next';

import { Hero, Info, SendUsMessage } from './components';

export const metadata: Metadata = {
  title: 'Contact Idelaria | Start Your Strategy Conversation',
  description:
    'Reach out to book a free consultation or ask a question — we’re here to help you build a business you’re proud of.',
  openGraph: {
    title: 'Contact Idelaria | Start Your Strategy Conversation',
    description:
      'Reach out to book a free consultation or ask a question — we’re here to help you build a business you’re proud of.',
    images: ['https://idelaria.com/meta.jpg'],
  },
  twitter: {
    title: 'Contact Idelaria | Start Your Strategy Conversation',
    description:
      'Reach out to book a free consultation or ask a question — we’re here to help you build a business you’re proud of.',
    images: ['https://idelaria.com/meta.jpg'],
  },
};

export default function ContactUs() {
  return (
    <main>
      <Hero />
      <SendUsMessage />
      <Info />
    </main>
  );
}
