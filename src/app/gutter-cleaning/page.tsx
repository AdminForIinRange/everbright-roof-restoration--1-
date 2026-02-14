import type { Metadata } from 'next';

import GutterCleaningPageView from '@/services/gutter-cleaning/GutterCleaningPage';

export const metadata: Metadata = {
  title: 'Gutter Cleaning | Adelaide',
  description:
    'Professional gutter cleaning services in Adelaide with a fast quote form and high-converting landing page flow.',
};

export default function GutterCleaningPage() {
  return <GutterCleaningPageView />;
}
