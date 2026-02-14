import type { Metadata } from 'next';

import SolarCleaningPageView from '@/services/solar-cleaning/SolarCleaningPage';

export const metadata: Metadata = {
  title: 'Solar Cleaning | Adelaide',
  description:
    'Professional solar cleaning services in Adelaide with a fast quote form and high-converting landing page flow.',
};

export default function SolarCleaningPage() {
  return <SolarCleaningPageView />;
}
