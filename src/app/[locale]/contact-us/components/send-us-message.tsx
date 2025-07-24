'use client';

import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const ContactForm = dynamic(
  () => import('@/features/contact-form/ui/form').then(mod => mod.ContactForm),
  {
    ssr: false,
  },
);

export const SendUsMessage = () => {
  const t = useTranslations('contactUs.sendUsMessage');

  return (
    <section className="mx-4 flex flex-col gap-6 bg-white px-[60px] max-md:px-4">
      <div className="flex flex-col gap-4 p-4">
        <Title size="4xl">
          {t('title', { fallback: 'Send Us a Message' })}
        </Title>
        <Text color="black">
          {t('description.0', {
            fallback:
              'Got 10 minutes and a business to grow? You’re in the right place. Here, you’ll find posts designed for quick wins, meaningful insights, and clear next steps.',
          })}
          <br />
          {t('description.1', {
            fallback:
              'Tired of vague advice that leaves you stuck? Consider this your shortcut to clarity: plain-English, actionable guidance that keeps pace with your ambitions.',
          })}
        </Text>
      </div>
      <ContactForm />
    </section>
  );
};
