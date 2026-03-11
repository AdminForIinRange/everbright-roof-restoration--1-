import type { Metadata } from 'next';

import PaverConcreteSealingPageView from '@/services/paver-concrete-sealing/PaverConcreteSealingPage';
import { buildPageMetadata } from '@lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Paver & Concrete Sealing Adelaide',
  description:
    'Paver and concrete sealing services in Adelaide that help protect driveways, paths, patios, and outdoor surfaces from stains, weathering, and daily wear.',
  path: '/house-washing',
  keywords: [
    'paver sealing Adelaide',
    'concrete sealing Adelaide',
    'driveway sealing Adelaide',
    'patio sealing Adelaide',
  ],
});

export default function HouseWashingPage() {
  return <PaverConcreteSealingPageView />;
}
