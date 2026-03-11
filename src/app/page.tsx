import type { Metadata } from 'next';

import LandingHero from '@/components/LandingHero';
import { buildPageMetadata } from '@lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Exterior Cleaning Adelaide',
  description:
    'Professional exterior cleaning services in Adelaide with fast quotes for roof cleaning, pressure washing, gutter cleaning, paver and concrete sealing, and solar panel cleaning.',
  path: '/',
  keywords: [
    'exterior cleaning Adelaide',
    'roof cleaning Adelaide',
    'pressure washing Adelaide',
    'gutter cleaning Adelaide',
    'paver sealing Adelaide',
    'concrete sealing Adelaide',
    'solar cleaning Adelaide',
  ],
});

export default function Page() {
  return <LandingHero />;
}
