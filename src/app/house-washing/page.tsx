import type { Metadata } from 'next';

import HouseWashingPageView from '@/services/house-washing/HouseWashingPage';
import { buildPageMetadata } from '@lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'House Washing Adelaide',
  description:
    'House washing services in Adelaide that remove built-up dirt, mould, and grime using safe exterior cleaning methods.',
  path: '/house-washing',
  keywords: ['house washing Adelaide', 'exterior house cleaning Adelaide', 'soft washing Adelaide'],
});

export default function HouseWashingPage() {
  return <HouseWashingPageView />;
}
