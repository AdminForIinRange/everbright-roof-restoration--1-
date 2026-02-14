import type { Metadata } from 'next';

import PressureWashingPageView from '@/services/pressure-washing/PressureWashingPage';

export const metadata: Metadata = {
  title: 'Pressure Washing | Adelaide',
  description:
    'Professional pressure washing services in Adelaide with a fast quote form and high-converting landing page flow.',
};

export default function PressureWashingPage() {
  return <PressureWashingPageView />;
}
