import type { Metadata } from 'next';

import PageFrame from '@/components/PageFrame';
import { buildPageMetadata } from '@lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Privacy Policy',
  description: 'How EverBright Pressure Washing collects, uses, and protects your information.',
  path: '/privacy-policy',
});

export default function PrivacyPolicyPage() {
  return (
    <PageFrame>
      <section className="bg-navy-dark px-6 py-8 text-center md:py-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-brand-sky">Legal</p>
        <h1 className="mx-auto max-w-3xl font-display text-4xl uppercase leading-[1.1] tracking-[-0.02em] text-white md:text-6xl">
          Privacy Policy
        </h1>
      </section>

      <section className="bg-white px-6 py-16 md:py-20">
        <div className="mx-auto w-full max-w-[430px] space-y-8 md:max-w-3xl">
          <p className="text-sm text-slate-500">Last updated: 26 July 2026</p>

          <div className="space-y-4 text-base leading-relaxed text-black">
            <p>
              EverBright Pressure Washing (&quot;EverBright&quot;, &quot;we&quot;, &quot;us&quot;) provides
              exterior cleaning services to homeowners across Adelaide, South Australia. This policy explains what
              information we collect when you use our website or request a quote, and how we use it.
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-display text-xl uppercase tracking-tight text-black md:text-2xl">
              Information We Collect
            </h2>
            <p className="text-base leading-relaxed text-black">
              When you submit a quote request or contact form, we collect the information you provide, such as your
              name, phone number, email address, property address, and details about the service you&apos;re
              enquiring about. We do not require you to create an account or provide payment details through this
              website.
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-display text-xl uppercase tracking-tight text-black md:text-2xl">
              How We Use Your Information
            </h2>
            <ul className="space-y-2 text-base leading-relaxed text-black">
              <li>To respond to your quote request and arrange the service you&apos;ve asked about.</li>
              <li>To communicate with you about bookings, scheduling, and job follow-up.</li>
              <li>To improve our website and services.</li>
            </ul>
            <p className="mt-3 text-base leading-relaxed text-black">
              We do not sell or rent your personal information to third parties.
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-display text-xl uppercase tracking-tight text-black md:text-2xl">
              Analytics and Cookies
            </h2>
            <p className="text-base leading-relaxed text-black">
              Our website uses Google Tag Manager, Google Ads, and Meta (Facebook) Pixel to understand how visitors
              use our site and to measure the performance of our advertising. These tools may use cookies or similar
              technologies to collect non-identifying usage data such as pages visited and general location. You can
              control or disable cookies through your browser settings.
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-display text-xl uppercase tracking-tight text-black md:text-2xl">
              Data Storage and Security
            </h2>
            <p className="text-base leading-relaxed text-black">
              Quote and enquiry information is stored securely and is only accessible to EverBright staff who need it
              to carry out and follow up on your job.
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-display text-xl uppercase tracking-tight text-black md:text-2xl">
              Your Rights
            </h2>
            <p className="text-base leading-relaxed text-black">
              You can ask us to access, correct, or delete the personal information we hold about you at any time by
              contacting us using the details below.
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-display text-xl uppercase tracking-tight text-black md:text-2xl">Contact Us</h2>
            <p className="text-base leading-relaxed text-black">
              If you have any questions about this Privacy Policy, contact us at{' '}
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
