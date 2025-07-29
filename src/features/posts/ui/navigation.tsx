'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Button } from '@/shared/ui/kit/button';
import { Title } from '@/shared/ui/kit/title';

import type { Root2 } from '../model/types';

export const PolicyNavigation = ({
  values,
  title,
}: {
  values: Root2;
  title: string;
}) => {
  const pathname = usePathname();
  const [hash, setHash] = useState('');

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash);
    updateHash();

    window.addEventListener('hashchange', updateHash);
    return () => window.removeEventListener('hashchange', updateHash);
  }, []);

  return (
    <section className="sticky top-2 flex flex-col gap-10 self-start max-md:relative">
      <Title as="h1" size="4xl">
        {title}
      </Title>
      <nav className="flex shrink-0 flex-col gap-2 self-start max-md:hidden">
        {values.content.root.children.map(item =>
          item.tag === 'h2'
            ? item.children.map(child => {
                const encodedId = encodeURIComponent(child.text ?? '');
                const fullHash = `#${encodedId}`;
                const isActive = hash === fullHash;

                return (
                  <Link
                    href={`${pathname}${fullHash}`}
                    key={child.text}
                    onClick={() => setHash(fullHash)}
                  >
                    <Button variant={isActive ? 'primary' : 'outline'}>
                      {child.text}
                    </Button>
                  </Link>
                );
              })
            : null,
        )}
      </nav>
    </section>
  );
};
