'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/shared/lib/utils/styles';
import { Button } from '@/shared/ui/kit/button';

import type { Root2 } from '../model/types';

export const PolicyNavigation = ({
  values,
  sticky = false,
}: {
  values: Root2;
  sticky?: boolean;
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
    <nav
      className={cn(
        'flex shrink-0 flex-col gap-2 max-md:hidden',
        sticky && 'sticky top-2 self-start',
      )}
    >
      {values.children.map(item =>
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
  );
};
