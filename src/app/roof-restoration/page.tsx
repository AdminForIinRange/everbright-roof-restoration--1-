import type { Metadata } from 'next';

import RoofRestorationPageView from '@/services/roof-restoration/RoofRestorationPage';

export const metadata: Metadata = {
  title: 'Roof Restoration | Adelaide',
  description:
    'A high-converting roof cleaning and restoration page for Adelaide homeowners with a multi-step quote form.',
};

export default function RoofRestorationPage() {
  return <RoofRestorationPageView />;
}
