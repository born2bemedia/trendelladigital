'use client';

import type { ReactNode } from 'react';

export const PolicyContentLayout = ({ children }: { children: ReactNode }) => (
  <section className="flex w-full flex-col rounded-lg bg-gradient-to-r from-[rgba(49,49,49,0.05)] to-[rgba(151,151,151,0.05)] px-10 py-6 max-md:px-4">
    {children}
  </section>
);
