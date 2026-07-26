import type { Metadata } from 'next';

import PageFrame from '@/components/PageFrame';
import { buildPageMetadata } from '@lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Terms of Service',
  description: 'The terms that apply when you request a quote or booking with EverBright Pressure Washing.',
  path: '/terms',
});

export default function TermsOfServicePage() {
  return (
    <PageFrame>
      <section className="bg-navy-dark px-6 py-8 text-center md:py-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-brand-sky">Legal</p>
        <h1 className="mx-auto max-w-3xl font-display text-4xl uppercase leading-[1.1] tracking-[-0.02em] text-white md:text-6xl">
          Terms of Service
        </h1>
      </section>

      <section className="bg-white px-6 py-16 md:py-20">
        <div className="mx-auto w-full max-w-[430px] space-y-8 md:max-w-3xl">
          <p className="text-sm text-slate-500">Last updated: 26 July 2026</p>

          <div className="space-y-4 text-base leading-relaxed text-black">
            <p>
              These terms apply when you request a quote, booking, or service from EverBright Pressure Washing
              (&quot;EverBright&quot;, &quot;we&quot;, &quot;us&quot;), an exterior cleaning business serving Adelaide,
              South Australia. By submitting a quote request or booking a service with us, you agree to these terms.
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-display text-xl uppercase tracking-tight text-black md:text-2xl">
              Our Services
            </h2>
            <p className="text-base leading-relaxed text-black">
              We provide roof cleaning, pressure washing, gutter cleaning, solar panel cleaning, and paver and
              concrete sealing services. Services are carried out using methods we consider appropriate for the
              surface and condition of your property.
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-display text-xl uppercase tracking-tight text-black md:text-2xl">
              Quotes and Pricing
            </h2>
            <p className="text-base leading-relaxed text-black">
              Quotes provided over the phone, by email, or through this website are estimates based on the
              information available at the time. The final price may be adjusted if the property&apos;s condition,
              size, or access differs from what was described when the quote was given. We&apos;ll always confirm any
              change in price with you before carrying out additional work.
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-display text-xl uppercase tracking-tight text-black md:text-2xl">
              Bookings and Access
            </h2>
            <p className="text-base leading-relaxed text-black">
              You&apos;re responsible for providing safe and reasonable access to the areas being cleaned. If we&apos;re
              unable to access your property at the agreed time, a rescheduling or call-out fee may apply.
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-display text-xl uppercase tracking-tight text-black md:text-2xl">
              Payment
            </h2>
            <p className="text-base leading-relaxed text-black">
              Payment is due on completion of the work unless otherwise agreed in writing with our team.
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-display text-xl uppercase tracking-tight text-black md:text-2xl">
              Insurance and Liability
            </h2>
            <p className="text-base leading-relaxed text-black">
              EverBright is fully insured with public liability cover. While we take care to protect your property
              using surface-safe methods, pre-existing damage, wear, or defects in surfaces, tiles, paint, sealants,
              or fixtures are not our responsibility. Please point out any known issues or fragile areas before work
              begins.
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-display text-xl uppercase tracking-tight text-black md:text-2xl">
              Satisfaction Guarantee
            </h2>
            <p className="text-base leading-relaxed text-black">
              If you&apos;re not satisfied with the completed work, contact us as soon as possible so we can return
              and put it right.
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-display text-xl uppercase tracking-tight text-black md:text-2xl">
              Governing Law
            </h2>
            <p className="text-base leading-relaxed text-black">
              These terms are governed by the laws of South Australia, Australia.
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-display text-xl uppercase tracking-tight text-black md:text-2xl">Contact Us</h2>
            <p className="text-base leading-relaxed text-black">
              Questions about these terms? Contact us at{' '}
              <a href="mailto:everbrightpressurewashing@gmail.com" className="text-everbright-blue underline">
                everbrightpressurewashing@gmail.com
              </a>{' '}
              or{' '}
              <a href="tel:+61411017366" className="text-everbright-blue underline">
                0411 017 366
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
