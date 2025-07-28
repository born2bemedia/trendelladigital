'use server';

import { SERVER_URL } from '@/shared/config/env';

import type { PolicyDef } from '../model/types';

export async function getCookiePolicy({
  locale = 'en',
}: {
  locale?: string;
}): Promise<PolicyDef> {
  const res = await fetch(
    `${SERVER_URL}/api/policies/3?depth=2&draft=false&locale=${locale}`,
  );
  const data = await res.json();
  return data;
}
