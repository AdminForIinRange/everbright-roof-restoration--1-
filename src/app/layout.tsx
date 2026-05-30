import './globals.css';
import 'animate.css';

import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { Poppins } from 'next/font/google';
import Script from 'next/script';
import type { ReactNode } from 'react';
import { DEFAULT_OG_IMAGE, SITE_LOGO_IMAGE, SITE_NAME, SITE_PHONE, SITE_URL } from '@lib/seo';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
  logo: `${SITE_URL}${SITE_LOGO_IMAGE}`,
  telephone: SITE_PHONE,
  description:
    'Professional exterior cleaning services in Adelaide, including roof cleaning, pressure washing, gutter cleaning, paver and concrete sealing, and solar cleaning.',
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Adelaide SA',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Adelaide',
    addressRegion: 'SA',
    addressCountry: 'AU',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: SITE_PHONE,
    contactType: 'customer service',
    areaServed: 'AU',
    availableLanguage: 'en-AU',
  },
  makesOffer: [
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Roof Cleaning' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pressure Washing' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Solar Cleaning' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gutter Cleaning' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Paver & Concrete Sealing' } },
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: 'en-AU',
};

const META_PIXEL_IDS = ['1429789622158579', '2078063969719564'] as const;
const GTM_CONTAINER_ID = 'GTM-MFTWVHKN';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Exterior Cleaning Adelaide',
    template: '%s | EverBright',
  },
  description:
    'EverBright provides professional exterior cleaning in Adelaide: roof cleaning, pressure washing, gutter cleaning, paver and concrete sealing, and solar panel cleaning.',
  applicationName: SITE_NAME,
  keywords: [
    'exterior cleaning Adelaide',
    'roof cleaning Adelaide',
    'pressure washing Adelaide',
    'gutter cleaning Adelaide',
    'paver sealing Adelaide',
    'concrete sealing Adelaide',
    'solar panel cleaning Adelaide',
    'roof restoration Adelaide',
    'EverBright Adelaide',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'EverBright Exterior Cleaning Adelaide',
    description:
      'Professional exterior cleaning in Adelaide including roof cleaning, pressure washing, gutter cleaning, paver and concrete sealing, and solar panel cleaning.',
    url: '/',
    siteName: SITE_NAME,
    locale: 'en_AU',
    type: 'website',
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        alt: 'EverBright exterior cleaning and restoration in Adelaide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EverBright Exterior Cleaning Adelaide',
    description:
      'Professional exterior cleaning in Adelaide including roof cleaning, pressure washing, gutter cleaning, paver and concrete sealing, and solar panel cleaning.',
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-AU">
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_CONTAINER_ID}');`}
        </Script>
        <Script id="meta-pixel-base" strategy="beforeInteractive">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${META_PIXEL_IDS[0]}');
fbq('init', '${META_PIXEL_IDS[1]}');
fbq('track', 'PageView');`}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${poppins.variable} bg-slate-50 font-body text-slate-900 antialiased`}>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_CONTAINER_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17805776719"
          strategy="afterInteractive"
        />
        <Script id="google-ads-base" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
gtag('config', 'AW-17805776719');`}
        </Script>
        <noscript>
          {/* Vendor-required tracking beacons must remain plain img tags for noscript support. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${META_PIXEL_IDS[0]}&ev=PageView&noscript=1`}
            alt=""
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${META_PIXEL_IDS[1]}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

