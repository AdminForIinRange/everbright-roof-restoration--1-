import type { Metadata } from 'next';

import SolarCleaningPageView from '@/services/solar-cleaning/SolarCleaningPage';
import { buildPageMetadata, buildServiceJsonLd } from '@lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Solar Panel Cleaning Adelaide',
  description:
    'Solar panel cleaning services in Adelaide to remove dust, grime, and bird droppings and help maintain panel efficiency.',
  path: '/solar-cleaning-adelaide',
});

const serviceJsonLd = buildServiceJsonLd({
  name: 'Solar Panel Cleaning Adelaide',
  description:
    'Solar panel cleaning services in Adelaide to remove dust, grime, and bird droppings and help maintain panel efficiency.',
  path: '/solar-cleaning-adelaide',
  serviceType: 'Solar panel cleaning',
});

export default function SolarCleaningPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <SolarCleaningPageView />
    </>
  );
}
