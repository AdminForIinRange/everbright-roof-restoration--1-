import type { Metadata } from 'next';

import App from '@/App';
import { buildPageMetadata } from '@lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Roof Restoration Adelaide Preview',
  description:
    'Preview the previous roof restoration landing page content for Adelaide roof cleaning and restoration services.',
  path: '/new',
  keywords: ['roof restoration Adelaide', 'roof cleaning Adelaide', 'mould removal roof Adelaide'],
  noIndex: true,
});

export default function NewPage() {
  return <App />;
}
