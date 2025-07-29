import type { Metadata } from 'next';

import { getPost } from '@/features/posts/api/get-post';
import { PostDisplay } from '@/features/posts/ui/policy';

import { postsMeta } from './meta';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const awaitedParams = await params;

  return {
    title: postsMeta[awaitedParams.slug].title,
    description: postsMeta[awaitedParams.slug].description,
    openGraph: {
      title: postsMeta[awaitedParams.slug].title,
      description: postsMeta[awaitedParams.slug].description,
      images: 'https://trendelladigital.com/meta.jpg',
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const res = await getPost({ locale, slug });

  return <PostDisplay value={res} />;
}
