import type { Metadata } from 'next';

import { SolarCleaningV0Landing } from './_components/SolarCleaningV0Landing';
import { solarCleaningFaqs } from './_components/faq-data';
import { buildPageMetadata, buildServiceJsonLd } from '@lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Solar Panel Cleaning Adelaide',
  description:
    'Solar panel cleaning services in Adelaide to remove dust, grime, and bird droppings and help maintain panel efficiency.',
  path: '/solar-cleaning-adelaide',
});

const serviceJsonLd = buildServiceJsonLd({
  name: 'Solar Panel Cleaning Adelaide',
  description:
    'Solar panel cleaning services in Adelaide to remove dust, grime, and bird droppings and help maintain panel efficiency.',
  path: '/solar-cleaning-adelaide',
  serviceType: 'Solar panel cleaning',
});

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: solarCleaningFaqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
};

export default function SolarCleaningPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <SolarCleaningV0Landing />
    </>
  );
}
