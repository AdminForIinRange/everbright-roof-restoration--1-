# Google SEO Code Audit

Date: 2026-05-30  
Site: https://www.everbrightpressurewashing.com.au  
Codebase: Next.js App Router, `next@16.0.10`

## Scope

This audit reviewed the codebase, production build output, lint warnings, locally rendered HTML, and the live `robots.txt`, `sitemap.xml`, and redirect headers. The focus is code changes that can improve Google crawlability, indexing clarity, local-service relevance, and Core Web Vitals.

Commands run:

```bash
npm run build
npm run lint
```

Build result: successful. Most public service pages are statically prerendered, which is good for SEO.  
Lint result: 0 errors, 12 warnings. The SEO-relevant warnings are custom Google font links and raw `<img>` usage in the roof landing page.

## What Is Already Good

- The site already has route-level metadata through `lib/seo.ts`.
- Canonical tags render for the main routes.
- Public service routes are statically generated.
- `robots.txt` and `sitemap.xml` exist.
- The site has basic global `LocalBusiness` and `WebSite` JSON-LD.
- Most images use useful alt text.
- The live site returns HTTPS `200 OK` for the homepage.

## Quick to Medium Fixes

These are the SEO fixes that can be applied quickly through GPT Codex without changing the visible UI, layout, colours, spacing, images, buttons, or design style. The safe scope is technical SEO only: metadata, canonicals, redirects, sitemap, robots rules, structured data, and semantic HTML changes that preserve the exact same visible text and CSS classes.

Important UI guardrail:

- Do not change visible page copy, hero text, button labels, design, section order, colours, spacing, or imagery unless separately approved.
- If a heading tag is changed for SEO, keep the same text and `className` so the visual design remains the same.
- If an image is optimized, keep the same visual asset, dimensions, crop behaviour, and CSS classes.
- Some recommendations later in this audit, such as adding FAQ sections, changing footer content, or improving visible service copy, would affect visible UI/text and should not be included in a UI-safe pass unless approved first.

Fast UI-safe tasks:

| Fix | Files | Estimated effort | UI impact |
| --- | --- | --- | --- |
| Add `noindex` metadata to `/thank-you` | `src/app/thank-you/page.tsx` | Quick | No visible UI change |
| Fix sitemap to include only final canonical URLs | `src/app/sitemap.ts` | Quick | No visible UI change |
| Clean `robots.txt` by removing unsupported `Host:` and deciding whether `/showcase` should be crawlable for its `noindex` to be seen | `public/robots.txt` | Quick | No visible UI change |
| Add service-specific `Service` and `BreadcrumbList` JSON-LD using existing page information | `lib/seo.ts`, service route files | Medium | No visible UI change |
| Improve metadata titles/descriptions where needed | `src/app/*/page.tsx`, `lib/seo.ts` | Quick to medium | Search result/browser-tab change only, not page design |
| Make `/paver-concrete-sealing` the canonical service URL and redirect `/house-washing` permanently if house washing is not a real page | `src/app/paver-concrete-sealing/page.tsx`, `src/app/house-washing/page.tsx`, links, sitemap | Medium | Page design unchanged; URL/canonical changes only |
| Replace raw `<img>` tags with `next/image` while preserving the same asset, alt text, class names, and sizing | `src/app/new/NewLandingPage.tsx` | Medium | Should be visually unchanged if implemented carefully |
| Reduce extra `/roof-restoration` `<h1>` tags to `<h2>` or `<h3>` while preserving the exact same text and classes | `src/app/new/NewLandingPage.tsx` | Medium | Should be visually unchanged if classes are retained |

Recommended Codex-safe implementation order:

1. Start with `/thank-you` `noindex`, sitemap, and robots cleanup because these are low-risk and invisible.
2. Fix the paver/concrete canonical URL and redirects because this is the clearest indexing issue.
3. Add invisible JSON-LD structured data for services and breadcrumbs.
4. Convert raw images to `next/image` with the same visual settings.
5. Change only heading tag semantics on `/roof-restoration`, preserving text and styles exactly.

Applied status on 2026-05-30:

- Completed: `/thank-you` now renders `noindex, nofollow` with its own canonical URL.
- Completed: `sitemap.xml` now lists `/paver-concrete-sealing` instead of `/house-washing`.
- Completed: `robots.txt` now removes the unsupported `Host:` directive and allows crawlers to see route-level `noindex` tags.
- Completed: `/paver-concrete-sealing` now renders the paver/concrete page directly, and `/house-washing` permanently redirects to it.
- Completed: service pages now include invisible `Service` and `BreadcrumbList` JSON-LD.
- Completed: raw `<img>` tags flagged by lint in `NewLandingPage.tsx` were replaced with `next/image` while preserving the same visible assets/classes.
- Completed: `/roof-restoration` now has one `<h1>`; the demoted headings kept the same visible text and class names.
- Completed: the homepage title now includes the brand in metadata: `Exterior Cleaning Adelaide | EverBright`.

## Highest Priority Fixes

Note: the quick/medium implementation pass above addressed several original findings in this section. The original evidence is kept for audit history.

### 1. Fix the `/house-washing` and `/paver-concrete-sealing` URL mismatch

Evidence:

- `src/app/house-washing/page.tsx` renders `PaverConcreteSealingPageView`.
- `src/app/house-washing/page.tsx` sets the title to `Paver & Concrete Sealing Adelaide`.
- `src/app/paver-concrete-sealing/page.tsx` redirects to `/house-washing`.
- The rendered `/paver-concrete-sealing` route returns `307 Temporary Redirect`.
- The live `/paver-concrete-sealing` route also returns `307 Temporary Redirect` to `/house-washing`.
- `src/app/sitemap.ts` lists `/house-washing`, not `/paver-concrete-sealing`.
- `src/components/Header.tsx` links "Paver & Concrete Sealing" to `/house-washing`.
- `src/components/LandingHero.tsx` links the paver service card to `/house-washing`.

Why it matters:

The URL says "house washing" while the page, title, headings, and service content say "paver and concrete sealing". This weakens topical clarity and can make Google index/rank the wrong URL for the wrong service. The redirect is also temporary (`307`), which is not ideal for a canonical service URL.

Recommended code change:

- If paver/concrete sealing is the real service, make `/paver-concrete-sealing` the canonical page.
- Change `src/app/paver-concrete-sealing/page.tsx` to render `PaverConcreteSealingPageView` directly.
- Redirect `/house-washing` to `/paver-concrete-sealing` with a permanent redirect, or create a real house-washing page if that service exists.
- Update `src/app/sitemap.ts` to include `/paver-concrete-sealing` and remove `/house-washing` unless it becomes a real page.
- Update service links in `src/components/Header.tsx` and `src/components/LandingHero.tsx`.

### 2. Noindex the `/thank-you` conversion page

Evidence from rendered HTML:

```text
/thank-you  200  Title=[Exterior Cleaning Adelaide]  Canonical=[https://www.everbrightpressurewashing.com.au]  Robots=[index, follow]
```

Why it matters:

The thank-you page is a post-conversion utility page, not a search landing page. It is currently indexable and canonicalizes to the homepage. Because it also accepts query params such as `from`, `service`, and `roof_size`, it can create thin or duplicate crawl targets.

Recommended code change:

- Add explicit metadata in `src/app/thank-you/page.tsx`.
- Use `buildPageMetadata({ title: 'Thank You', description: 'Quote request confirmation.', path: '/thank-you', noIndex: true })`.
- Keep it out of `sitemap.ts`.

### 3. Reduce `/roof-restoration` to one clear `<h1>`

Evidence:

- Rendered `/roof-restoration` has 5 `<h1>` elements.
- The extra headings are in `src/app/new/NewLandingPage.tsx` at lines around `820`, `996`, `1047`, `1198`, and `1267`.
- The route `src/app/roof-restoration/page.tsx` imports `NewLandingPage`, not the cleaner `src/services/roof-restoration/RoofRestorationPage.tsx`.

Why it matters:

Google can handle multiple headings, but title links and page understanding rely partly on prominent headings. Five `<h1>` tags makes the page topic less clear than one primary page heading followed by structured `<h2>` and `<h3>` sections.

Recommended code change:

- Keep one hero `<h1>` for the main query, for example `Roof Restoration Adelaide`.
- Change lower-section `<h1>` tags in `NewLandingPage.tsx` to `<h2>` or `<h3>`.
- Consider switching `/roof-restoration` back to the shared `ServicePageTemplate` version if it better matches the other service pages.

## Technical SEO Improvements

### 4. Add service-specific structured data

Current state:

- `src/app/layout.tsx` outputs global `LocalBusiness` and `WebSite` schema.
- Individual service pages do not output `Service`, `BreadcrumbList`, or route-specific structured data.

Recommended code change:

- Add a helper in `lib/seo.ts`, for example `buildServiceJsonLd()`.
- Add `Service` JSON-LD per service page with name, description, area served, provider, URL, and service type.
- Add `BreadcrumbList` JSON-LD for service pages.
- Expand the global `LocalBusiness` schema with real business details where available: `telephone`, `priceRange`, `openingHoursSpecification`, `sameAs`, `geo`, and `hasMap`.
- Do not add fake or unsupported review/aggregate rating schema. Only mark up content that is visible on the page and follows Google structured data policies.

### 5. Clean up `robots.txt` and internal noindex handling

Current state:

```txt
Disallow: /showcase
```

`/showcase` also renders `noindex, nofollow`.

Why it matters:

If a page is blocked by `robots.txt`, Google may not crawl it and therefore may not see the page-level `noindex`. For private/internal pages, `robots.txt` is not security.

Recommended code change:

- If `/showcase` should never appear in search, prefer authenticated access plus `noindex`.
- If the goal is for Google to see the `noindex`, do not block `/showcase` in `robots.txt`.
- Remove the non-standard `Host:` line from `robots.txt`; Google ignores unsupported robots directives.

### 6. Make the sitemap contain only final canonical URLs

Current state:

- `sitemap.ts` includes `/house-washing`, which currently represents paver/concrete sealing.
- It excludes the better paver slug `/paver-concrete-sealing`.
- `lastModified` is always `new Date()` at build/runtime.

Recommended code change:

- Include only pages that should rank.
- Use the final canonical paver URL after fixing the route mismatch.
- Keep `/new`, `/showcase`, and `/thank-you` out of the sitemap.
- Consider using stable content update dates instead of always using the current build date.

## On-Page SEO Improvements

### 7. Improve titles and descriptions

Current observations:

- Homepage title renders as `Exterior Cleaning Adelaide`, without the brand.
- Service page titles are better, for example `Pressure Washing Adelaide | EverBright`.
- `keywords` metadata is used in multiple pages, but Google does not use the meta keywords tag for ranking.

Recommended code change:

- Make the homepage title more specific, for example `Exterior Cleaning Adelaide | EverBright`.
- Keep each service title unique and local-intent focused.
- Remove or ignore the `keywords` field in `buildPageMetadata`; spend the effort on visible page copy, headings, and internal links instead.
- Add route-specific Open Graph images where possible, with width and height metadata.

### 8. Replace dead `href="#"` links with real URLs

Evidence:

- `src/components/Footer.tsx` has placeholder links for Privacy Policy, Terms of Service, Contact Us, Services, and social icons.
- `src/app/new/NewLandingPage.tsx` includes placeholder `href="#"` CTAs.

Why it matters:

Internal links help Google discover and understand important pages. Placeholder links add noise and weaken crawl paths.

Recommended code change:

- Footer service links should point to the real service routes.
- Contact should point to `/#form`, `/roof-restoration#form`, or a real contact route.
- Social links should point to real profiles or be removed.
- Add business NAP details in the footer: name, phone, service area, and possibly address/suburb if appropriate.

### 9. Add useful service FAQ sections

Recommended code change:

- Add visible FAQs to each service page using real customer questions.
- Examples: "How often should gutters be cleaned in Adelaide?", "Is pressure washing safe for concrete?", "Does solar panel cleaning improve output?", "How long does paver sealing last?"
- If the FAQ content is visible on the page, add matching `FAQPage` JSON-LD.
- Avoid duplicated boilerplate. Each service should have unique local answers.

## Performance and Core Web Vitals Improvements

### 10. Replace raw `<img>` tags in `NewLandingPage.tsx`

Lint warnings:

- `src/app/new/NewLandingPage.tsx:797`
- `src/app/new/NewLandingPage.tsx:804`
- `src/app/new/NewLandingPage.tsx:860`
- `src/app/new/NewLandingPage.tsx:984`
- `src/app/new/NewLandingPage.tsx:1227`

Why it matters:

The roof restoration route uses this component. Raw `<img>` tags skip Next image optimization and can hurt LCP and bandwidth, especially for large PNG images.

Recommended code change:

- Replace those `<img>` tags with `next/image`.
- Add `sizes`.
- Use `priority` only for the true above-the-fold LCP image.
- Use WebP/AVIF sources where available.

### 11. Compress and rename large public images

Largest assets found:

```text
10.53 MB  public/genrealPhotos/House WASHINGSERVICECARD.png
9.72 MB   public/betterPavingPhotos/redone.png
8.55 MB   public/solaorcleaingImages/IMG_1021.jpeg
5.78 MB   public/scrollerImage/5.png
5.75 MB   public/preussewashingnewimages/IMG_0647.jpeg
4.66 MB   public/IMG_2118.PNG
```

Recommended code change:

- Convert large PNG/JPEG assets to optimized WebP/AVIF.
- Prefer clean lowercase filenames without spaces or typos.
- Use already-existing `.webp` files where available.
- Keep original large files out of production if they are not referenced.

### 12. Fix font loading warnings

Lint warnings:

- `src/app/layout.tsx` loads Google Material icon CSS directly.
- `src/app/new/NewLandingPage.tsx` loads multiple Google font stylesheets directly.

Why it matters:

Render-blocking font CSS and duplicated font loading can hurt LCP. LCP and overall page experience can affect organic performance indirectly.

Recommended code change:

- Use `next/font/google` for page fonts.
- Avoid loading Google font stylesheets inside components.
- Replace Material icon webfonts with SVG icons where practical.
- If a Google font stylesheet must remain, add `display=optional` where supported.

### 13. Revisit third-party script strategy

Current state:

- GTM and Meta Pixel load with `strategy="beforeInteractive"` in `src/app/layout.tsx`.
- Google Ads loads `afterInteractive`.

Why it matters:

Third-party scripts can delay main-thread work and worsen Core Web Vitals. Googlebot does not need marketing pixels to understand the page.

Recommended code change:

- Move non-critical tracking to `afterInteractive` or `lazyOnload` where conversion tracking still works.
- Keep only truly required scripts before interactive.
- Re-test lead tracking after any script strategy change.

## Rendered Route Snapshot

Local production server checked on `http://localhost:3002` after `npm run build`.

Original rendered snapshot from the first audit:

```text
/                         200  Title=[Exterior Cleaning Adelaide]                         Robots=[index, follow]    H1=1
/roof-restoration          200  Title=[Roof Restoration Adelaide | EverBright]              Robots=[index, follow]    H1=5
/house-washing             200  Title=[Paver & Concrete Sealing Adelaide | EverBright]      Robots=[index, follow]    H1=1
/paver-concrete-sealing    307  Redirects to /house-washing
/thank-you                 200  Title=[Exterior Cleaning Adelaide]                          Robots=[index, follow]
```

Rendered snapshot after the quick/medium implementation pass:

```text
/                         200  Title=[Exterior Cleaning Adelaide | EverBright]              Robots=[index, follow]      H1=1  JSON-LD=2
/roof-restoration          200  Title=[Roof Restoration Adelaide | EverBright]              Robots=[index, follow]      H1=1  JSON-LD=3
/pressure-washing          200  Title=[Pressure Washing Adelaide | EverBright]              Robots=[index, follow]      H1=1  JSON-LD=3
/solar-cleaning            200  Title=[Solar Panel Cleaning Adelaide | EverBright]          Robots=[index, follow]      H1=1  JSON-LD=3
/gutter-cleaning           200  Title=[Gutter Cleaning Adelaide | EverBright]               Robots=[index, follow]      H1=1  JSON-LD=3
/paver-concrete-sealing    200  Title=[Paver & Concrete Sealing Adelaide | EverBright]      Robots=[index, follow]      H1=1  JSON-LD=3
/house-washing             308  Permanently redirects to /paver-concrete-sealing
/showcase                  200  Title=[Showcase | EverBright]                               Robots=[noindex, nofollow]
/thank-you                 200  Title=[Thank You | EverBright]                              Robots=[noindex, nofollow]
```

Approximate rendered HTML size:

```text
/                  269.6 KB
/roof-restoration  193.3 KB
/pressure-washing  146.5 KB
/solar-cleaning    134.0 KB
/gutter-cleaning   143.5 KB
/house-washing     146.8 KB
```

## Recommended Implementation Order

1. Fix the paver/house-washing URL mismatch and sitemap.
2. Add `noindex` metadata to `/thank-you`.
3. Fix `/roof-restoration` heading structure.
4. Replace raw images and clean up font loading in `NewLandingPage.tsx`.
5. Add service-level `Service` and `BreadcrumbList` JSON-LD.
6. Replace footer placeholder links with real internal links and contact details.
7. Add unique FAQ sections to each service page.
8. Review tracking script loading after measuring Core Web Vitals.

## References

- Google SEO Starter Guide: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Google title link guidance: https://developers.google.com/search/docs/appearance/title-link
- Google structured data overview: https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
- Google structured data policies: https://developers.google.com/search/docs/appearance/structured-data/sd-policies
- Google noindex guidance: https://developers.google.com/search/docs/crawling-indexing/block-indexing
- Google robots.txt guidance: https://developers.google.com/search/docs/crawling-indexing/robots/intro
- Google supported meta tags, including meta keywords: https://developers.google.com/search/docs/crawling-indexing/special-tags
