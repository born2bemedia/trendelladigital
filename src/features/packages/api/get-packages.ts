'use server';

import { SERVER_URL } from '@/shared/config/env';

import type { Package } from '../model/types';

export async function getPackages<T = 'marketing' | 'business'>(
  type: T,
): Promise<Package<T>[]> {
  const response = await fetch(
    `${SERVER_URL}/api/packages?where[type][equals]=${type}`,
  );

  if (!response.ok) {
    throw new Error(`Error fetching data: ${response.statusText}`);
  }

  const data = await response.json();
  return data.docs;
}
