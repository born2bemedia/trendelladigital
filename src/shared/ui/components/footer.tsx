'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Text } from '@/shared/ui/kit/text';

import { ShortSocials } from './short-socials';

const getPolicies = () => [
  {
    label: 'Refund Policy',
    href: '/refund-policy',
  },
  {
    label: 'Cookie Policy',
    href: '/cookie-policy',
  },
  {
    label: 'Privacy Policy',
    href: '/privacy-policy',
  },
  {
    label: 'Terms and Conditions',
    href: '/terms-and-conditions',
  },
];

const getFooterInfo = () => [
  {
    label: 'Email:',
    value: 'info@signalor.pro',
    href: 'mailto:info@signalor.pro',
  },
  // {
  //   label: 'Phone:',
  //   value: '+1 000 00 00',
  //   href: 'tel:+10000000',
  // },
  // {
  //   label: 'Registered Address:',
  //   value: 'Registered Address',
  // },
  // {
  //   label: 'Office Address:',
  //   value: 'Office Address',
  // },
];

const getNavigation = () => [
  { label: 'Our Story', href: '/our-story' },
  { label: 'Your Growth Library', href: '/your-growth-library' },
  { label: 'Cart', href: '/cart' },
  { label: 'How We Can Help You', href: '/how-we-can-help-you' },
  { label: 'Contact Us', href: '/contact-us' },
  { label: 'Login', href: '/login' },
  { label: 'What to Expect', href: '/what-to-expect' },
  { label: 'Careers', href: '/careers' },
  { label: 'Sign Up', href: '/sign-up' },
];

export const Footer = () => {
  return (
    <footer className="flex flex-col gap-20 p-10 max-md:px-4 max-md:py-10">
      <section className="flex flex-col gap-10">
        <section className="flex justify-between max-md:flex-col">
          <section className="flex w-[340px] flex-col gap-2.5 max-md:w-full">
            <Image src="/logo-white.svg" alt="logo" width={271} height={60} />
            <div className="flex flex-col gap-1">
              <Label>Social Media:</Label>
              <ShortSocials />
            </div>
          </section>
          <section className="flex w-[900px] flex-col max-md:w-full">
            <div className="grid grid-cols-3 gap-0 max-md:grid-cols-1">
              {getNavigation().map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="border-b-[0.5px] border-white px-3 py-4"
                >
                  <Text size="base">{item.label}</Text>
                </Link>
              ))}
            </div>
          </section>
        </section>
        <div className="flex gap-20 max-md:grid max-md:grid-cols-2 max-md:gap-4">
          {getFooterInfo().map(item => (
            <div key={item.label} className="flex w-max flex-col gap-1">
              <Label>{item.label}</Label>
              {item.href ? (
                <Link href={item.href}>
                  <Text>{item.value}</Text>
                </Link>
              ) : (
                <Text size="base">{item.value}</Text>
              )}
            </div>
          ))}
        </div>
      </section>
      <section className="flex items-center justify-between gap-2 border-t-[0.2px] border-white/50 px-10 py-2 max-md:flex-col-reverse max-md:items-start max-md:px-0">
        {/* <Text color="gray">
          © {new Date().getFullYear()} Trendella International OÜ All Rights
          Reserved.
        </Text> */}
        <nav className="flex items-center gap-4 max-md:grid max-md:grid-cols-2 max-md:items-start">
          {getPolicies().map(item => (
            <Link
              key={item.label}
              href={item.href}
              className="transition duration-300 ease-in-out hover:opacity-70"
            >
              <Text color="gray">{item.label}</Text>
            </Link>
          ))}
        </nav>
      </section>
    </footer>
  );
};

const Label = ({ children }: { children: React.ReactNode }) => (
  <Text color="gray" size="xs">
    {children}
  </Text>
);
