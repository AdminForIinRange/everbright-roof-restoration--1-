import type { Metadata } from 'next';

import SolarCleaningPageView from '@/services/solar-cleaning/SolarCleaningPage';
import { buildPageMetadata } from '@lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Solar Panel Cleaning Adelaide',
  description:
    'Solar panel cleaning services in Adelaide to remove dust, grime, and bird droppings and help maintain panel efficiency.',
  path: '/solar-cleaning',
  keywords: ['solar panel cleaning Adelaide', 'solar cleaning Adelaide', 'solar maintenance Adelaide'],
});

export default function SolarCleaningPage() {
  return <SolarCleaningPageView />;
}
