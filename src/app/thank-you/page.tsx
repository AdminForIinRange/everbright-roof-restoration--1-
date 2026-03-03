import Link from 'next/link';

import ThankYouLeadConversionTracker from '@/components/ThankYouLeadConversionTracker';

function getSafeReturnPath(fromParam: string | null) {
  if (!fromParam) {
    return '/';
  }

  if (!fromParam.startsWith('/') || fromParam.startsWith('//')) {
    return '/';
  }

  return fromParam;
}

function getSafeServiceLabel(serviceParam: string | null) {
  if (!serviceParam) {
    return 'quote request';
  }

  const normalizedServiceLabel = serviceParam.trim().replace(/\s+/g, ' ');

  if (!normalizedServiceLabel) {
    return 'quote request';
  }

  return normalizedServiceLabel.slice(0, 80);
}

function getSafeRoofSize(roofSizeParam: string | null) {
  if (!roofSizeParam) {
    return null;
  }

  const normalizedRoofSize = roofSizeParam.trim().replace(/\s+/g, ' ');

  if (!normalizedRoofSize) {
    return null;
  }

  return normalizedRoofSize.slice(0, 80);
}

type ThankYouPageProps = {
  searchParams?: Promise<{
    from?: string | string[];
    roof_size?: string | string[];
    service?: string | string[];
  }>;
};

export default async function ThankYouPage({ searchParams }: ThankYouPageProps) {
  const resolvedSearchParams = (await searchParams) ?? {};
  const fromParam = Array.isArray(resolvedSearchParams.from)
    ? resolvedSearchParams.from[0] ?? null
    : resolvedSearchParams.from ?? null;
  const serviceParam = Array.isArray(resolvedSearchParams.service)
    ? resolvedSearchParams.service[0] ?? null
    : resolvedSearchParams.service ?? null;
  const roofSizeParam = Array.isArray(resolvedSearchParams.roof_size)
    ? resolvedSearchParams.roof_size[0] ?? null
    : resolvedSearchParams.roof_size ?? null;
  const returnPath = getSafeReturnPath(fromParam);
  const serviceLabel = getSafeServiceLabel(serviceParam);
  const roofSize = getSafeRoofSize(roofSizeParam);

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12 md:px-6 md:py-20">
      <ThankYouLeadConversionTracker />
      <div className="mx-auto flex w-full max-w-2xl animate-fade-in items-center justify-center">
        <section className="w-full rounded-2xl border border-slate-200 border-t-[6px] border-t-brand-sky bg-white p-8 text-center shadow-xl md:p-12">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 md:h-24 md:w-24">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-10 w-10 text-emerald-600 md:h-12 md:w-12"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </div>

          <h1 className="mb-3 font-display text-2xl font-bold text-slate-900 md:text-4xl">Thank You</h1>

          <p className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-slate-600 md:text-base">
            We've received your {serviceLabel} enquiry and one of our team will contact you within 24 hours.
          </p>

          {roofSize && (
            <p className="mx-auto mb-6 max-w-xl text-sm leading-relaxed text-slate-600 md:text-base">
              Selected roof size: <span className="font-semibold text-slate-900">{roofSize}</span>
            </p>
          )}

          <div className="mb-6 rounded-xl bg-slate-50 px-5 py-4 text-left text-sm leading-relaxed text-slate-600">
            If you need to update anything or send another request, head back using the button below.
          </div>

          <Link
            href={returnPath}
            className="inline-flex items-center justify-center rounded-full bg-black px-7 py-3 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-slate-800 md:px-8 md:py-4 md:text-base"
          >
            Return To Previous Page
          </Link>
        </section>
      </div>
    </main>
  );
}
