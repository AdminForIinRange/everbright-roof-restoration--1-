import type { Metadata } from 'next';

export const SITE_URL = 'https://www.everbrightpressurewashing.com.au';
export const SITE_NAME = 'EverBright';
export const DEFAULT_OG_IMAGE = '/genrealPhotos/lanidngpageimg.jpeg';

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
  keywords?: string[];
  noIndex?: boolean;
};

export function buildPageMetadata({
  title,
  description,
  path,
  keywords = [],
  noIndex = false,
}: BuildPageMetadataParams): Metadata {
  const canonicalPath = path.startsWith('/') ? path : `/${path}`;
  const fullTitle = `${title} | ${SITE_NAME}`;

  return {
    title,
    description,
    keywords,
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
