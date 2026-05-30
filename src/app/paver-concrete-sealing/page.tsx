import type { Metadata } from 'next';

import PaverConcreteSealingPageView from '@/services/paver-concrete-sealing/PaverConcreteSealingPage';
import { buildPageMetadata, buildServiceJsonLd } from '@lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Paver & Concrete Sealing Adelaide',
  description:
    'Paver and concrete sealing services in Adelaide that help protect driveways, paths, patios, and outdoor surfaces from stains, weathering, and daily wear.',
  path: '/paver-concrete-sealing',
  keywords: [
    'paver sealing Adelaide',
    'concrete sealing Adelaide',
    'driveway sealing Adelaide',
    'patio sealing Adelaide',
  ],
});

const serviceJsonLd = buildServiceJsonLd({
  name: 'Paver & Concrete Sealing Adelaide',
  description:
    'Paver and concrete sealing services in Adelaide that help protect driveways, paths, patios, and outdoor surfaces from stains, weathering, and daily wear.',
  path: '/paver-concrete-sealing',
  serviceType: 'Paver and concrete sealing',
});

export default function PaverConcreteSealingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <PaverConcreteSealingPageView />
    </>
  );
}
