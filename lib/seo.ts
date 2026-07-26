import type { Metadata } from 'next';

export const SITE_URL = 'https://www.everbrightpressurewashing.com.au';
export const SITE_NAME = 'EverBright Pressure Washing';
export const DEFAULT_OG_IMAGE = '/genrealPhotos/exterior-cleaning-adelaide-hero.jpeg';
export const SITE_LOGO_IMAGE = '/everbright-logo.png';
export const SITE_PHONE = '+61411017366';
export const SITE_EMAIL = 'everbrightpressurewashing@gmail.com';

const indexableRobots: Metadata['robots'] = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },
};

const nonIndexableRobots: Metadata['robots'] = {
  index: false,
  follow: false,
  googleBot: {
    index: false,
    follow: false,
    noimageindex: true,
  },
};

type BuildPageMetadataParams = {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
};

type BuildServiceJsonLdParams = {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
};

export function buildPageMetadata({
  title,
  description,
  path,
  noIndex = false,
}: BuildPageMetadataParams): Metadata {
  const canonicalPath = path.startsWith('/') ? path : `/${path}`;
  const fullTitle = `${title} | ${SITE_NAME}`;

  return {
    title: canonicalPath === '/' ? fullTitle : title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalPath,
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
      title: fullTitle,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
    robots: noIndex ? nonIndexableRobots : indexableRobots,
  };
}

export function normalizePath(path: string) {
  return path.startsWith('/') ? path : `/${path}`;
}

export function buildServiceJsonLd({
  name,
  description,
  path,
  serviceType = name,
}: BuildServiceJsonLdParams) {
  const canonicalPath = normalizePath(path);
  const url = `${SITE_URL}${canonicalPath}`;

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${url}#service`,
      name,
      description,
      serviceType,
      url,
      areaServed: {
        '@type': 'AdministrativeArea',
        name: 'Adelaide SA',
      },
      provider: {
        '@type': 'LocalBusiness',
        '@id': `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        telephone: SITE_PHONE,
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: SITE_URL,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name,
          item: url,
        },
      ],
    },
  ];
}
