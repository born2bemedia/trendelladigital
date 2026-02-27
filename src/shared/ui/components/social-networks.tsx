'use client';

import Link from 'next/link';

import { ArrowRight } from '@/shared/icons/fill/arrow-right';
import { useIsHomePage } from '@/shared/lib/hooks/use-is-home';
import { cn } from '@/shared/lib/utils/styles';
import { Text } from '@/shared/ui/kit/text';

export const SocialNetworks = ({
  className,
  text = {
    size: 'xs',
  },
}: {
  className?: string;
  text?: {
    color?: 'black' | 'white';
    size?: 'xs' | 'sm' | 'base';
  };
}) => {
  const isHomePage = useIsHomePage();

  return (
    <div className={cn('flex items-center gap-5', className)}>
      <Link href="https://www.linkedin.com/company/idelaria ">
        <Text
          size={text.size}
          color={text.color ?? (isHomePage ? 'black' : 'white')}
          className="flex items-center"
        >
          Linkedin{' '}
          <ArrowRight color={text.color ?? (isHomePage ? 'black' : 'white')} />
        </Text>
      </Link>
      <Link href="https://x.com/idelariacom">
        <Text
          size={text.size}
          color={text.color ?? (isHomePage ? 'black' : 'white')}
          className="flex items-center"
        >
          Twitter{' '}
          <ArrowRight color={text.color ?? (isHomePage ? 'black' : 'white')} />
        </Text>
      </Link>
      <Link href="https://www.facebook.com/idelariacom">
        <Text
          size={text.size}
          color={text.color ?? (isHomePage ? 'black' : 'white')}
          className="flex items-center"
        >
          Facebook{' '}
          <ArrowRight color={text.color ?? (isHomePage ? 'black' : 'white')} />
        </Text>
      </Link>
    </div>
  );
};
