import type { Metadata } from 'next';

import LandingHero from '@/components/LandingHero';

export const metadata: Metadata = {
  title: 'Pressure Washing Adelaide',
  description:
    'EverBright provides premium pressure washing for driveways, exteriors, patios, and decks across Adelaide, SA.',
};

export default function Page() {
  return <LandingHero />;
}
