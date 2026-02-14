import type { Metadata } from 'next';

import HouseWashingPageView from '@/services/house-washing/HouseWashingPage';

export const metadata: Metadata = {
  title: 'House Washing | Adelaide',
  description:
    'Professional house washing services in Adelaide with a fast quote form and high-converting landing page flow.',
};

export default function HouseWashingPage() {
  return <HouseWashingPageView />;
}
