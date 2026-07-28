import type { Metadata } from 'next';

import { GutterCleaningLanding } from './_components/GutterCleaningLanding';
import { introFaqs } from './_components/intro-faq-data';
import { buildPageMetadata, buildServiceJsonLd } from '@lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Gutter Cleaning Services Adelaide',
  description:
    'Professional gutter cleaning in Adelaide to clear debris, reduce overflow risk, and protect your home from water damage.',
  path: '/gutter-cleaning-adelaide',
});

const serviceJsonLd = buildServiceJsonLd({
  name: 'Gutter Cleaning Adelaide',
  description:
    'Professional gutter cleaning in Adelaide to clear debris, reduce overflow risk, and protect your home from water damage.',
  path: '/gutter-cleaning-adelaide',
  serviceType: 'Gutter cleaning',
});

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: introFaqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
};

export default function GutterCleaningPage() {
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
      <GutterCleaningLanding />
    </>
  );
}
