'use client';

import type { PolicyDef } from '../model/types';
import { PolicyContent } from './content';
import { PolicyHeader } from './header';
import { PolicyLayout } from './layout';

export const PolicyDisplay = ({
  value,
  navSticky = false,
}: {
  value: PolicyDef;
  navSticky?: boolean;
}) => (
  <PolicyLayout>
    <PolicyHeader title={value.title} lastUpdate={value.lastUpdate} />
    <PolicyContent values={value.content.root} navSticky={navSticky} />
  </PolicyLayout>
);
