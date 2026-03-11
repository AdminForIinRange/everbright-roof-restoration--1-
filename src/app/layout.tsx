import './globals.css';
import 'animate.css';

import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { Poppins } from 'next/font/google';
import Script from 'next/script';
import type { ReactNode } from 'react';
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from '@lib/seo';

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
        <Script id="meta-pixel" strategy="lazyOnload">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1429789622158579');
fbq('track', 'PageView');`}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1429789622158579&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

