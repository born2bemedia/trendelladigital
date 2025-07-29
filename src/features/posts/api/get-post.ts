'use server';

import { SERVER_URL } from '@/shared/config/env';

import type { PostDef } from '../model/types';

export async function getPost({
  locale,
  slug,
}: {
  locale: string;
  slug: string;
}): Promise<PostDef> {
  const res = await fetch(
    `${SERVER_URL}/api/posts?where[slug][in]=${slug}&locale=${locale}`,
  );
  const data = await res.json();
  return data;
}
