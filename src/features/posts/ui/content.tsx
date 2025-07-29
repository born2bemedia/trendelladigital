'use client';

import type { Root2 } from '../model/types';
import { PolicyNavigation } from './navigation';
import { PolicyRenderer } from './renderer';

export const PolicyContent = ({
  values,
  title,
}: {
  values: Root2;
  title: string;
}) => (
  <main className="flex gap-[60px] max-md:flex-col max-md:gap-10">
    <PolicyNavigation values={values} title={title} />
    <PolicyRenderer content={values.content.root.children} />
  </main>
);
