import type { Metadata } from 'next';
import Script from 'next/script';

import { buildPageMetadata, buildServiceJsonLd } from '@lib/seo';

import V0RoofRestorationLanding from './_components/V0RoofRestorationLanding';

export const metadata: Metadata = buildPageMetadata({
  title: 'Roof Restoration Adelaide',
  description:
    'Roof restoration and roof cleaning services in Adelaide with surface safe methods, mould and lichen removal, and fast free quotes.',
  path: '/roof-cleaning',
  keywords: ['roof restoration Adelaide', 'roof cleaning Adelaide', 'mould removal roof Adelaide'],
});

const serviceJsonLd = buildServiceJsonLd({
  name: 'Roof Restoration Adelaide',
  description:
    'Roof restoration and roof cleaning services in Adelaide with surface safe methods, mould and lichen removal, and fast free quotes.',
  path: '/roof-cleaning',
  serviceType: 'Roof restoration',
});

export default function RoofRestorationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Script id="google-ads-phone-conversion-config" strategy="afterInteractive">
        {`gtag('config', 'AW-17805776719/46LYCJTP74EcEM-uuqpC', {
  'phone_conversion_number': '0411017366'
});`}
      </Script>
      <Script id="google-ads-call-conversion" strategy="afterInteractive">
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
