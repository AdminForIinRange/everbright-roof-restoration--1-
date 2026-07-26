import type { MetadataRoute } from 'next';
import { SITE_URL } from '@lib/seo';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/showcase', '/thank-you', '/new', '/new-roof-restoration'],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
