import type { Metadata } from 'next';

import App from '@/App';

export const metadata: Metadata = {
  title: 'Roof Restoration | Adelaide',
  description:
    'A high-converting roof cleaning and restoration page for Adelaide homeowners with a multi-step quote form.',
};

export default function RoofRestorationPage() {
  return <App />;
}
