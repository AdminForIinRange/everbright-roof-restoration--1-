import type { Metadata } from 'next';

import PressureWashingPageView from '@/services/pressure-washing/PressureWashingPage';
import { buildPageMetadata } from '@lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Pressure Washing Adelaide',
  description:
    'Professional pressure washing in Adelaide for driveways, patios, and exterior surfaces using safe, surface-specific methods.',
  path: '/pressure-washing',
  keywords: ['pressure washing Adelaide', 'driveway cleaning Adelaide', 'high pressure cleaning Adelaide'],
});

export default function PressureWashingPage() {
  return <PressureWashingPageView />;
}
