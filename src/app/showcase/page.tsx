import type { Metadata } from 'next';

import ShowcaseLeadsPage from '@/components/ShowcaseLeadsPage';
import { buildPageMetadata } from '@lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Showcase',
  description: 'PIN-protected internal lead dashboard.',
  path: '/showcase',
  noIndex: true,
});

export default function ShowcasePage() {
  return <ShowcaseLeadsPage />;
}
