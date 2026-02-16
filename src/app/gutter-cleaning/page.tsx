import type { Metadata } from 'next';

import GutterCleaningPageView from '@/services/gutter-cleaning/GutterCleaningPage';
import { buildPageMetadata } from '@lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Gutter Cleaning Adelaide',
  description:
    'Professional gutter cleaning in Adelaide to clear debris, reduce overflow risk, and protect your home from water damage.',
  path: '/gutter-cleaning',
  keywords: ['gutter cleaning Adelaide', 'gutter clearing Adelaide', 'blocked gutters Adelaide'],
});

export default function GutterCleaningPage() {
  return <GutterCleaningPageView />;
}
