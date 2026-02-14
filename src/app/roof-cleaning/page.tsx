import type { Metadata } from 'next';

import RoofCleaningPageView from '@/services/roof-cleaning/RoofCleaningPage';

export const metadata: Metadata = {
  title: 'Roof Cleaning | Adelaide',
  description:
    'Professional roof cleaning services in Adelaide with a fast quote form and proven mould treatment process.',
};

export default function RoofCleaningPage() {
  return <RoofCleaningPageView />;
}
