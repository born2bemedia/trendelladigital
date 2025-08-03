'use client';

import type { ReactNode } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { cn } from '@/shared/lib/utils/styles';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const Reviews = () => {
  const t = useTranslations('beforeAndAfter.reviews');

  const reviews = [
    {
      before: t('0.before', {
        fallback: 'I had too many ideas and no direction.',
      }),
      after: t('0.after', {
        fallback: 'Now I know exactly what I offer — and how to sell it.',
      }),
      client: {
        info: t('0.client', {
          fallback: 'Ana, wellness coach & former full-time employee',
        }),
        imgUrl: '/images/before-and-after/ana.svg',
      },
      challenge: t('0.challenge', {
        fallback:
          'Drowning in content ideas but struggling to package anything into a paid offer',
      }),
      whatWeDid: [
        t('0.whatWeDid.0', {
          fallback: 'Narrowed her focus to 1 signature offer',
        }),
        t('0.whatWeDid.1', {
          fallback:
            'Built a clear transformation promise & value-based pricing',
        }),
        t('0.whatWeDid.2', {
          fallback: 'Created a simple, high-converting sales page',
        }),
      ],
      result: t('0.result', {
        fallback:
          'I finally feel like I have a business, not just a side hustle.',
      }),
    },
    {
      before: t('1.before', {
        fallback: 'I was posting daily and still had no clients.',
      }),
      after: t('1.after', {
        fallback: 'Now my marketing leads to conversations — and sales.',
      }),
      client: {
        info: t('1.client', {
          fallback: 'James, freelance designer',
        }),
        imgUrl: '/images/before-and-after/james.svg',
      },
      challenge: t('1.challenge', {
        fallback: 'Inconsistent income, stuck in the content grind',
      }),
      whatWeDid: [
        t('1.whatWeDid.0', {
          fallback: 'Repositioned his services around client outcomes',
        }),
        t('1.whatWeDid.1', {
          fallback: 'Set up an email funnel & inquiry process',
        }),
        t('1.whatWeDid.2', {
          fallback: 'Audited content to speak to a defined audience',
        }),
      ],
      result: t('1.result', {
        fallback:
          'I stopped guessing. Now every post has a purpose — and it shows.',
      }),
    },
    {
      before: t('2.before', {
        fallback:
          'I knew what I wanted to offer, but didn’t know how to price it.',
      }),
      after: t('2.after', {
        fallback:
          'I have a roadmap, milestones, and I finally hit my first 5K month.',
      }),
      client: {
        info: t('2.client', {
          fallback: 'Leila, language tutor turned business owner',
        }),
        imgUrl: '/images/before-and-after/leila.svg',
      },
      challenge: t('2.challenge', {
        fallback: 'Undercharging and overdelivering without structure',
      }),
      whatWeDid: [
        t('2.whatWeDid.0', {
          fallback: 'Designed tiered packages with aligned pricing',
        }),
        t('2.whatWeDid.1', {
          fallback: 'Created a personal revenue map tied to capacity',
        }),
        t('2.whatWeDid.2', {
          fallback: 'Automated lead tracking and offer delivery',
        }),
      ],
      result: t('2.result', {
        fallback: 'It doesn’t feel random anymore — I know where I’m going.',
      }),
    },
    {
      before: t('3.before', {
        fallback: 'I was overwhelmed and doing everything manually.',
      }),
      after: t('3.after', {
        fallback: 'Now my business runs smoother — and I feel 10x lighter.',
      }),
      client: {
        info: t('3.client', {
          fallback: 'Marcus, solo tech consultant',
        }),
        imgUrl: '/images/before-and-after/marcus.svg',
      },
      challenge: t('3.challenge', {
        fallback: 'Burnt out from managing client work, leads, and admin',
      }),
      whatWeDid: [
        t('3.whatWeDid.0', {
          fallback: 'Set up a lead qualification system',
        }),
        t('3.whatWeDid.1', {
          fallback: 'Streamlined client onboarding',
        }),
        t('3.whatWeDid.2', {
          fallback:
            'Integrated automations for scheduling, emails, and invoices',
        }),
      ],
      result: t('3.result', {
        fallback: 'I have time to think again — not just react.',
      }),
    },
    {
      before: t('4.before', {
        fallback: 'I kept comparing myself to everyone else.',
      }),
      after: t('4.after', {
        fallback: 'Now I lead with my strengths — and it resonates.',
      }),
      client: {
        info: t('4.client', {
          fallback: 'Tanya, social media manager',
        }),
        imgUrl: '/images/before-and-after/tanya.svg',
      },
      challenge: t('4.challenge', {
        fallback: 'Struggling to position herself in a saturated market',
      }),
      whatWeDid: [
        t('4.whatWeDid.0', {
          fallback: 'Clarified her niche & core transformation',
        }),
        t('4.whatWeDid.1', {
          fallback:
            'Rewrote her messaging to reflect confidence and personality',
        }),
        t('4.whatWeDid.2', {
          fallback: 'Built a ‘voice-first’ brand identity',
        }),
      ],
      result: t('4.result', {
        fallback:
          'Clients now say, ‘I want to work with you, not just any social media manager.’ That’s everything.',
      }),
    },
  ];

  return (
    <ul className="mx-4 flex flex-col gap-10 bg-white px-[60px] pb-[60px] max-md:px-4 max-md:pb-4">
      {reviews.map(review => (
        <Card key={review.client.info} {...review} />
      ))}
    </ul>
  );
};

const Card = ({
  after,
  before,
  challenge,
  client,
  result,
  whatWeDid,
}: {
  before: string;
  after: string;
  client: {
    info: string;
    imgUrl: string;
  };
  challenge: string;
  whatWeDid: string[];
  result: string;
}) => {
  const t = useTranslations('beforeAndAfter.reviews');

  return (
    <li className="flex flex-col gap-4 rounded-lg bg-gradient-to-r from-[rgba(49,49,49,0.05)] to-[rgba(151,151,151,0.05)] px-10 py-6 max-md:px-4">
      <section className="flex items-center gap-10 max-md:flex-col max-md:items-start max-md:gap-6">
        <Excerpt label={t('before', { fallback: 'Before' })} value={before} />
        <NextIcon />
        <Excerpt label={t('after', { fallback: 'After' })} value={after} />
      </section>
      <section className="flex flex-col gap-1">
        <section className="flex gap-1 max-md:flex-col">
          <Layout className="flex w-1/2 gap-8 max-md:w-full max-md:flex-col">
            <Image
              className="h-[60px] w-[60px] shrink-0 rounded-full object-cover"
              src={client.imgUrl}
              alt="client"
              width={60}
              height={60}
              unoptimized
            />
            <section className="flex flex-col gap-8">
              <div className="flex flex-col">
                <Text color="ghost">
                  {t('client', { fallback: 'Client:' })}
                </Text>
                <Text color="dark" size="base">
                  {client.info}
                </Text>
              </div>
              <div className="flex flex-col">
                <Text color="ghost">
                  {t('challenge', { fallback: 'Challenge:' })}
                </Text>
                <Text color="dark" size="base">
                  {challenge}
                </Text>
              </div>
            </section>
          </Layout>
          <Layout className="flex w-1/2 flex-col gap-2 max-md:w-full">
            <Text color="ghost">
              {t('whatWeDid', { fallback: 'What we did:' })}
            </Text>
            <section className="flex gap-2 max-md:flex-col">
              {whatWeDid.map(item => (
                <div key={item} className="h-auto rounded-lg bg-white p-4">
                  <Text color="dark" size="base">
                    {item}
                  </Text>
                </div>
              ))}
            </section>
          </Layout>
        </section>
        <Layout>
          <Title size="2xl" as="h3" color="dark">
            “{result}”
          </Title>
        </Layout>
      </section>
    </li>
  );
};

const Excerpt = ({ label, value }: { value: string; label: string }) => (
  <div className="flex flex-col">
    <Text color="ghost">{label}</Text>
    <Title as="h4" size="2xl" color="dark" weight={400}>
      “{value}”
    </Title>
  </div>
);

const Layout = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <section
    className={cn(
      'border border-[rgba(209,183,188,0.40)] bg-gradient-to-r from-[rgba(49,49,49,0.05)] to-[rgba(151,151,151,0.05)] p-6',
      className,
    )}
  >
    {children}
  </section>
);

const NextIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
  >
    <g clipPath="url(#clip0_209_1661)">
      <path
        d="M16.7397 4.12993C18.2193 5.32834 19.534 6.71703 20.6497 8.25993C20.9097 8.63993 21.5297 9.46993 22.1697 10.2599C22.6597 10.8499 23.1697 11.4199 23.4897 11.7599C23.5897 11.8599 23.7497 11.9199 23.7297 11.9699C23.8195 11.9909 23.8982 12.0445 23.9505 12.1205C24.0028 12.1964 24.0248 12.2892 24.0123 12.3805C23.9998 12.4718 23.9536 12.5552 23.8829 12.6143C23.8121 12.6734 23.7218 12.7039 23.6297 12.6999C23.2387 12.5237 22.8958 12.2562 22.6297 11.9199C21.6963 10.9012 20.8184 9.83297 19.9997 8.71993C18.9025 7.27046 17.6218 5.96959 16.1897 4.84993C14.9997 3.91993 13.8797 3.19993 13.2597 3.25993C13.1897 3.25993 13.1597 3.34993 13.1097 3.42993C13.0295 3.60165 12.9723 3.78323 12.9397 3.96993C12.8116 5.04523 12.7915 6.13064 12.8797 7.20993C12.9061 7.41241 12.9061 7.61746 12.8797 7.81993C12.8652 7.92933 12.817 8.03149 12.7417 8.11216C12.6664 8.19282 12.5678 8.24798 12.4597 8.26993C12.1916 8.33657 11.9158 8.36684 11.6397 8.35993C11.0997 8.35993 10.5197 8.25993 10.0397 8.25993H4.28969C3.66037 8.2184 3.029 8.2184 2.39969 8.25993C2.27447 8.25887 2.15053 8.28517 2.03653 8.33699C1.92253 8.38881 1.82122 8.46489 1.73969 8.55993C1.58547 8.87382 1.48733 9.21225 1.44969 9.55993C1.4538 9.58309 1.4538 9.60678 1.44969 9.62993C1.29969 11.0599 0.179688 10.7799 0.179688 9.60993C0.179688 9.39993 0.239687 9.18993 0.279687 8.99993C0.35142 8.61055 0.486548 8.23557 0.679688 7.88993C0.947701 7.4763 1.36818 7.18519 1.84969 7.07993C2.66031 6.98601 3.47907 6.98601 4.28969 7.07993L9.99969 7.12993C10.4797 7.12993 11.0697 7.23993 11.6097 7.25993H11.7797C11.7297 6.15184 11.7698 5.04152 11.8997 3.93993C12.0797 2.93993 12.5297 2.31993 13.1697 2.26993C13.8097 2.21993 15.3197 2.96993 16.7397 4.12993Z"
        fill="#030303"
      />
      <path
        d="M8.99979 18.8499L8.28979 19.0899C7.47979 19.5699 7.28979 18.1599 8.02979 17.9399C9.99979 17.2899 12.4598 16.4999 12.5298 16.4999C12.6424 16.4954 12.7536 16.5269 12.8471 16.5898C12.9406 16.6527 13.0116 16.7439 13.0498 16.8499C13.1062 17.0314 13.1365 17.2199 13.1398 17.4099C13.1398 18.2899 13.0698 20.3499 13.1998 21.1999L13.3698 21.8099C13.5998 21.8799 13.8898 21.7199 14.1798 21.5599C14.531 21.3683 14.8655 21.1475 15.1798 20.8999C16.0998 20.1299 17.0498 19.3599 17.9598 18.5599C18.5698 18.0299 19.1598 17.4899 19.7098 16.9199L21.4498 15.0799L23.1198 13.3199C23.1834 13.2749 23.2608 13.2539 23.3384 13.2605C23.4159 13.2671 23.4887 13.3009 23.5438 13.3559C23.5988 13.411 23.6326 13.4838 23.6392 13.5613C23.6458 13.6389 23.6248 13.7163 23.5798 13.7799L21.9098 15.4999L20.2098 17.3799C19.6498 17.9799 19.0598 18.5399 18.4498 19.0999C17.5498 19.9199 16.6098 20.7199 15.7098 21.5099C15.2395 21.9381 14.7067 22.2922 14.1298 22.5599C13.7994 22.7053 13.4301 22.737 13.0798 22.6499C12.8701 22.5769 12.6907 22.4362 12.5698 22.2499C12.3856 21.9458 12.2727 21.6039 12.2398 21.2499C12.0898 20.4599 12.1198 18.6199 12.0798 17.6199C11.4398 17.9399 10.1798 18.4199 8.99979 18.8499Z"
        fill="#030303"
      />
      <path
        d="M1.30012 11.1397C1.56487 11.4701 1.90887 11.7281 2.30012 11.8897C3.46254 12.2414 4.67753 12.3869 5.89012 12.3197C6.23093 12.3259 6.56855 12.3867 6.89012 12.4997C7.07448 12.5696 7.22962 12.7001 7.33012 12.8697C7.58123 13.3216 7.70561 13.833 7.69012 14.3497C7.66016 14.8816 7.56957 15.4084 7.42012 15.9197C7.1534 17.0969 6.98614 18.2945 6.92012 19.4997C6.77012 19.7397 6.54012 19.6097 6.38012 19.6497C5.91214 19.65 5.44683 19.5792 5.00012 19.4397C4.59133 19.3185 4.20592 19.1292 3.86012 18.8797C3.08753 18.3091 2.37398 17.6625 1.73012 16.9497C1.29368 16.4459 0.923974 15.888 0.630122 15.2897C0.34749 14.6544 0.162081 13.9802 0.0801219 13.2897C0.00975102 12.6249 0.00975102 11.9545 0.0801219 11.2897C0.0940891 11.1754 0.147072 11.0695 0.230122 10.9897C0.310122 10.8597 1.31012 10.9597 1.30012 11.1397ZM1.30012 13.1397C1.36685 13.6951 1.51511 14.2376 1.74012 14.7497C1.98907 15.2457 2.29805 15.7092 2.66012 16.1297C3.24625 16.7829 3.89614 17.3758 4.60012 17.8997C4.77633 18.0323 4.97197 18.1369 5.18012 18.2097C5.50484 18.3244 5.83966 18.4081 6.18012 18.4597C6.01012 17.0197 6.53012 15.5797 6.47012 14.3597C6.41012 13.1397 6.33012 13.5997 5.57012 13.5297C4.57272 13.4827 3.58509 13.3114 2.63012 13.0197C2.13945 12.8559 1.68219 12.6052 1.28012 12.2797C1.27482 12.5703 1.28818 12.8609 1.32012 13.1497L1.30012 13.1397Z"
        fill="#030303"
      />
    </g>
    <defs>
      <clipPath id="clip0_209_1661">
        <rect
          width="24"
          height="24"
          fill="white"
          transform="translate(0 0.5)"
        />
      </clipPath>
    </defs>
  </svg>
);
