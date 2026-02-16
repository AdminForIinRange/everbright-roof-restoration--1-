import type { Metadata } from 'next';

import App from '@/App';
import { buildPageMetadata } from '@lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Roof Restoration Adelaide',
  description:
    'Roof restoration and roof cleaning services in Adelaide with surface-safe methods, mould and lichen removal, and fast free quotes.',
  path: '/roof-restoration',
  keywords: ['roof restoration Adelaide', 'roof cleaning Adelaide', 'mould removal roof Adelaide'],
});

export default function RoofRestorationPage() {
  return <App />;
}
