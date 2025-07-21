'use server';

import type { Group } from '../model/types';

export async function getGroup<T = 'marketing' | 'business'>(
  type: T,
): Promise<Group<T>[]> {
  const response = await fetch(
    `https://trendelladigital-cms.vercel.app/api/groups?where[type][equals]=${type}`,
  );

  if (!response.ok) {
    throw new Error(`Error fetching data: ${response.statusText}`);
  }

  const data = await response.json();
  return data.docs;
}
