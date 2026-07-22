import type { Metadata } from 'next';
import Script from 'next/script';

import V0RoofRestorationLanding from '../roof-cleaning/_components/V0RoofRestorationLanding';
import { buildPageMetadata, buildServiceJsonLd } from '@lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'New Roof Restoration Adelaide',
  description:
    'New roof restoration and roof cleaning landing page for Adelaide homeowners with fast free quote requests.',
  path: '/new-roof-restoration',
  keywords: ['roof restoration Adelaide', 'roof cleaning Adelaide', 'new roof restoration page'],
  noIndex: true,
});

const serviceJsonLd = buildServiceJsonLd({
  name: 'New Roof Restoration Adelaide',
  description:
    'New roof restoration and roof cleaning landing page for Adelaide homeowners with fast free quote requests.',
  path: '/new-roof-restoration',
  serviceType: 'Roof restoration',
});

export default function NewRoofRestorationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Script id="new-roof-restoration-google-ads-phone-conversion-config" strategy="afterInteractive">
        {`gtag('config', 'AW-17805776719/46LYCJTP74EcEM-uuqpC', {
  'phone_conversion_number': '0411017366'
});`}
      </Script>
      <Script id="new-roof-restoration-google-ads-call-conversion" strategy="afterInteractive">
        {`function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof(url) != 'undefined') {
      window.location = url;
    }
  };
  gtag('event', 'conversion', {
      'send_to': 'AW-17805776719/9ADqCJfP74EcEM-uuqpC',
      'value': 1.0,
      'currency': 'AUD',
      'event_callback': callback
  });
  return false;
}
window.gtag_report_conversion = gtag_report_conversion;`}
      </Script>
      <V0RoofRestorationLanding />
    </>
  );
}
