'use client';

import { useMemo } from 'react';
import { usePathname } from 'next/navigation';

export const useIsHomePage = () => {
  const pathname = usePathname();
  return useMemo(() => pathname === '/', [pathname]);
};
