import type { Metadata } from 'next';

import { PaverSealingV0Landing } from './_components/PaverSealingV0Landing';
import { paverSealingFaqs } from './_components/faq-data';
import { buildPageMetadata, buildServiceJsonLd } from '@lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Paver & Concrete Sealing Adelaide',
  description:
    'Paver and concrete sealing services in Adelaide that help protect driveways, paths, patios, and outdoor surfaces from stains, weathering, and daily wear.',
  path: '/paver-concrete-sealing-adelaide',
});

const serviceJsonLd = buildServiceJsonLd({
  name: 'Paver & Concrete Sealing Adelaide',
  description:
    'Paver and concrete sealing services in Adelaide that help protect driveways, paths, patios, and outdoor surfaces from stains, weathering, and daily wear.',
  path: '/paver-concrete-sealing-adelaide',
  serviceType: 'Paver and concrete sealing',
});

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: paverSealingFaqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
};

export default function PaverConcreteSealingPage() {
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
      <PaverSealingV0Landing />
    </>
  );
}
