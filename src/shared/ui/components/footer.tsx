'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/kit/text';

import { Link as NavLink } from '@/i18n/navigation';

const getNavigation = (t: ReturnType<typeof useTranslations>) => [
  { label: t('ourStory', { fallback: 'Our Story' }), href: '/our-story' },
  {
    label: t('yourGrowthLibrary', { fallback: 'Your Growth Library' }),
    href: '/your-growth-library',
  },
  { label: t('cart', { fallback: 'Cart' }), href: '/cart' },
  {
    label: t('howWeCanHelpYou', { fallback: 'How We Can Help You' }),
    href: '/how-we-can-help-you',
  },
  { label: t('contactUs', { fallback: 'Contact Us' }), href: '/contact-us' },
  { label: t('login', { fallback: 'Login' }), href: '/login' },
  {
    label: t('whatToExpect', { fallback: 'What to Expect' }),
    href: '/what-to-expect',
  },
  { label: t('careers', { fallback: 'Careers' }), href: '/careers' },
  { label: t('signUp', { fallback: 'Sign Up' }), href: '/sign-up' },
];

const getPolicies = (t: ReturnType<typeof useTranslations>) => [
  {
    label: t('refundPolicy', { fallback: 'Refund Policy' }),
    href: '/refund-policy',
  },
  {
    label: t('cookiePolicy', { fallback: 'Cookie Policy' }),
    href: '/cookie-policy',
  },
  {
    label: t('privacyPolicy', { fallback: 'Privacy Policy' }),
    href: '/privacy-policy',
  },
  {
    label: t('termsAndConditions', { fallback: 'Terms and Conditions' }),
    href: '/terms-and-conditions',
  },
];

const getFooterInfo = (t: ReturnType<typeof useTranslations>) => [
  {
    label: t('email', { fallback: 'Email:' }),
    value: 'info@idelaria.com',
    href: 'mailto:info@idelaria.com',
  },
  // {
  //   key: 'phone',
  //   fallback: 'Phone:',
  //   value: '+1 000 00 00',
  //   href: 'tel:+10000000',
  // },
  /*{
    label: t('registeredNumber', { fallback: 'Registered number:' }),
    value: 'J2025081585000',
  },
  {
    label: t('registeredAddress', { fallback: 'Registered address:' }),
    value:
      '255 Mihai Bravu Road., Basement, Module S 209, District 3, Bucharest, Romania',
  },
  {
    label: t('officeAddress', { fallback: 'Office Address:' }),
    value:
      'Ara Business Center, Strada Parintele Galeriu 6C, Bucharest 030167, Romania',
  },*/
];

export const Footer = () => {
  const t = useTranslations('footer');
  const navigationLinks = getNavigation(t);
  const policies = getPolicies(t);
  const footerInfo = getFooterInfo(t);

  return (
    <footer className="flex flex-col gap-20 p-10 max-md:px-4 max-md:py-10">
      <section className="flex flex-col gap-10">
        <section className="flex justify-between max-md:flex-col">
          <section className="flex w-[340px] flex-col gap-2.5 max-md:w-full">
            <Image src="/logo-white.svg" alt="logo" width={271} height={60} />
            {/* <div className="flex flex-col gap-1">
              <Label>Social Media:</Label>
              <ShortSocials />
            </div> */}
          </section>
          <section className="flex w-[900px] flex-col max-md:w-full">
            <div className="grid grid-cols-3 gap-0 max-md:grid-cols-1">
              {navigationLinks.map(item => (
                <NavLink
                  key={item.href}
                  href={item.href}
                  className="border-b-[0.5px] border-white px-3 py-4"
                >
                  <Text size="base">{item.label}</Text>
                </NavLink>
              ))}
            </div>
          </section>
        </section>
        <div className="flex gap-20 max-md:grid max-md:grid-cols-1 max-md:gap-4">
          {footerInfo.map(item => (
            <div
              key={item.label}
              className="flex w-max flex-col gap-1 max-md:w-full"
            >
              <Label>{item.label}</Label>
              {item.href ? (
                <Link href={item.href} className="max-md:break-all">
                  <Text className="max-md:break-all">{item.value}</Text>
                </Link>
              ) : (
                <Text size="base">{item.value}</Text>
              )}
            </div>
          ))}
        </div>
      </section>
      <section className="flex items-center justify-between gap-2 border-t-[0.2px] border-white/50 px-10 py-2 max-md:flex-col-reverse max-md:items-start max-md:px-0">
        <Text color="gray">
          © {new Date().getFullYear()} Idelaria S.R.L.{' '}
          {t('allRightsReserved', { fallback: 'All Rights Reserved' })}
        </Text>
        <nav className="flex items-center gap-4 max-md:grid max-md:grid-cols-2 max-md:items-start">
          {policies.map(item => (
            <NavLink
              key={item.href}
              href={item.href}
              className="transition duration-300 ease-in-out hover:opacity-70"
            >
              <Text color="gray">{item.label}</Text>
            </NavLink>
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
