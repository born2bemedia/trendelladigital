'use client';

import { useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';

export const useIsHomePage = () => {
  const pathname = usePathname();
  const locale = useLocale();

  return useMemo(() => pathname === `/${locale}`, [pathname, locale]);
};
