'use client';

import type { PostDef } from '../model/types';
import { PolicyContent } from './content';
import { PolicyLayout } from './layout';

export const PostDisplay = ({ value }: { value: PostDef }) => (
  <PolicyLayout>
    <PolicyContent values={value.docs[0]} title={value.docs[0].title} />
  </PolicyLayout>
);
