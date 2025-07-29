'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { ArrowRight } from '@/shared/icons/fill/arrow-right';
import { lsRead, lsWrite } from '@/shared/lib/utils/browser';
import { cn } from '@/shared/lib/utils/styles';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(true);

  const t = useTranslations('cookieConsent');

  useEffect(() => {
    const hasAcceptedCookies = lsRead('isCookiesAccepted');

    if (!hasAcceptedCookies) {
      setIsVisible(true);

      setTimeout(() => {
        lsWrite('isCookiesAccepted', 'true');
        setIsVisible(false);
      }, 6000);
    } else {
      setIsVisible(false);
    }
  }, []);

  return (
    <div
      className={cn(
        'fixed right-6 bottom-6 z-20 flex w-1/2 max-w-full items-center justify-between rounded-sm bg-white p-6 shadow-[0px_0px_25px_0px_rgba(0,0,0,0.05)] max-md:right-1/2 max-md:w-[calc(100%-3rem)] max-md:translate-x-1/2 max-md:flex-col max-md:gap-10',
        !isVisible && 'hidden',
      )}
    >
      <div className="flex flex-col gap-1">
        <Title size="2xl" as="h4" weight={700}>
          {t('title', { fallback: 'Cookies power clarity' })}
        </Title>
        <Text color="dark">
          {t('text', {
            fallback:
              'We use them to sharpen performance and simplify your visit.',
          })}
        </Text>
      </div>
      <Link href="/cookie-policy" className="max-md:w-full">
        <Button className="max-md:w-full max-md:justify-center">
          {t('learnMore', { fallback: 'Learn more' })}{' '}
          <ArrowRight color="black" />
        </Button>
      </Link>
    </div>
  );
};
