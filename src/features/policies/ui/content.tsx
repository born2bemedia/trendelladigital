'use client';

import type { Root2 } from '../model/types';
import { PolicyNavigation } from './navigation';
import { PolicyRenderer } from './renderer';

export const PolicyContent = ({
  values,
  navSticky = false,
}: {
  values: Root2;
  navSticky?: boolean;
}) => (
  <main className="flex gap-[60px]">
    <PolicyRenderer content={values.children} />
    <PolicyNavigation values={values} sticky={navSticky} />
  </main>
);
