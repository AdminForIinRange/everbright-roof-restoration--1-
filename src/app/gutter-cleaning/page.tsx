import type { Metadata } from 'next';

import { GutterCleaningLanding } from './_components/GutterCleaningLanding';
import { buildPageMetadata, buildServiceJsonLd } from '@lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Gutter Cleaning Services Adelaide',
  description:
    'Professional gutter cleaning in Adelaide to clear debris, reduce overflow risk, and protect your home from water damage.',
  path: '/gutter-cleaning',
  keywords: ['gutter cleaning Adelaide', 'gutter clearing Adelaide', 'blocked gutters Adelaide'],
});

const serviceJsonLd = buildServiceJsonLd({
  name: 'Gutter Cleaning Adelaide',
  description:
    'Professional gutter cleaning in Adelaide to clear debris, reduce overflow risk, and protect your home from water damage.',
  path: '/gutter-cleaning',
  serviceType: 'Gutter cleaning',
});

export default function GutterCleaningPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <GutterCleaningLanding />
    </>
  );
}
