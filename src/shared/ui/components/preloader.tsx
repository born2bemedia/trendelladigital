'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Lottie from 'lottie-react';

import { cn } from '@/shared/lib/utils/styles';

export const Preloader = () => {
  const pathname = usePathname();

  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [isHidden, setIsHidden] = useState(false);
  const [animationData, setAnimationData] = useState<object | null>(null);

  useEffect(() => {
    // Load the Lottie animation JSON
    fetch('/preloader.json')
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error('Failed to load preloader animation:', err));
  }, []);

  useEffect(() => {
    setIsLoading(true);
    setIsVisible(true);
    setIsHidden(false);

    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => setIsHidden(true), 1000);
      }, 2000);
    }, 2000);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (isHidden || !animationData) return null;

  return (
    <div
      className={cn(
        'fixed inset-0 z-[99999] flex items-center justify-center bg-white transition-all duration-500 ease-in-out',
        isLoading ? 'visible opacity-100' : 'invisible opacity-0',
        !isVisible && 'translate-y-full',
      )}
    >
      <div
        className={cn(
          'transition-all duration-500 ease-in-out',
          isLoading ? 'scale-100' : 'scale-150 opacity-0',
          !isVisible && '-translate-y-full',
        )}
      >
        <Lottie
          animationData={animationData}
          loop={true}
          style={{ width: 200, height: 130 }}
        />
      </div>
    </div>
  );
};
