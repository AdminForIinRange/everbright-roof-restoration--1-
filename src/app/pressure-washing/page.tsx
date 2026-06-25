import type { Metadata } from 'next';

import { buildPageMetadata, buildServiceJsonLd } from '@lib/seo';

import V0PressureWashingLanding from '../newoage/_components/V0PressureWashingLanding';

export const metadata: Metadata = buildPageMetadata({
  title: 'Pressure Washing Adelaide',
  description:
    'Professional pressure washing in Adelaide for driveways, patios, and exterior surfaces using safe, surface-specific methods.',
  path: '/pressure-washing',
  keywords: ['pressure washing Adelaide', 'driveway cleaning Adelaide', 'high pressure cleaning Adelaide'],
});

const serviceJsonLd = buildServiceJsonLd({
  name: 'Pressure Washing Adelaide',
  description:
    'Professional pressure washing in Adelaide for driveways, patios, and exterior surfaces using safe, surface-specific methods.',
  path: '/pressure-washing',
  serviceType: 'Pressure washing',
});

export default function PressureWashingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <V0PressureWashingLanding />
    </>
  );
}
