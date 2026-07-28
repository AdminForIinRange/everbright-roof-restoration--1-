import type { Metadata } from 'next';

import { buildPageMetadata, buildServiceJsonLd } from '@lib/seo';

import { introFaqs } from '../newoage/_components/intro-faq-data';
import V0PressureWashingLanding from '../newoage/_components/V0PressureWashingLanding';

export const metadata: Metadata = buildPageMetadata({
  title: 'Pressure Washing & Driveway Cleaning Adelaide',
  description:
    'Professional pressure washing in Adelaide for driveways, patios, and exterior surfaces using safe, surface-specific methods.',
  path: '/pressure-washing-adelaide',
});

const serviceJsonLd = buildServiceJsonLd({
  name: 'Pressure Washing Adelaide',
  description:
    'Professional pressure washing in Adelaide for driveways, patios, and exterior surfaces using safe, surface-specific methods.',
  path: '/pressure-washing-adelaide',
  serviceType: 'Pressure washing',
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

export default function PressureWashingPage() {
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
      <V0PressureWashingLanding />
    </>
  );
}
