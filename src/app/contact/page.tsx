import type { Metadata } from 'next';
import { Mail, Phone } from 'lucide-react';

import LeadForm from '@/components/LeadForm';
import PageFrame from '@/components/PageFrame';
import { buildPageMetadata } from '@lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Contact Us',
  description:
    'Get in touch with EverBright Pressure Washing for a free quote on roof cleaning, pressure washing, gutter cleaning, solar cleaning, or paver and concrete sealing across Adelaide.',
  path: '/contact',
});

const contactCards = [
  {
    icon: Phone,
    label: 'Call Us',
    value: '0411 017 366',
    href: 'tel:0411017366',
  },
  {
    icon: Mail,
    label: 'Email Us',
    value: 'everbrightpressurewashing@gmail.com',
    href: 'mailto:everbrightpressurewashing@gmail.com',
  },
];

export default function ContactPage() {
  return (
    <PageFrame>
      <section className="bg-navy-dark px-6 py-8 text-center md:py-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-brand-sky">
          Get In Touch
        </p>
        <h1 className="mx-auto max-w-3xl font-display text-5xl uppercase leading-[1.1] tracking-[-0.02em] text-white md:text-7xl">
          Contact Us
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white md:text-lg">
          Fill in the form, call us, or send an email — we&apos;ll get back to you within 24
          hours during business hours.
        </p>
      </section>

      <section className="bg-white px-6 py-16 md:py-20">
        <div className="mx-auto w-full max-w-[430px] md:max-w-6xl xl:max-w-7xl">
          <div className="mb-14 flex flex-col gap-6 md:flex-row md:gap-12">
            {contactCards.map((card) => {
              const Icon = card.icon;

              return (
                <a
                  key={card.label}
                  href={card.href}
                  className="flex min-w-0 flex-col items-start gap-2 text-slate-900 transition hover:text-everbright-blue md:flex-row md:items-center md:gap-3"
                >
                  <Icon className="h-5 w-5 shrink-0 text-everbright-blue" />
                  <span className="min-w-0 w-full">
                    <span className="block text-base font-bold uppercase tracking-widest text-black md:text-lg">
                      {card.label}
                    </span>
                    <span className="mt-1 block w-full break-all text-base font-bold md:text-lg">
                      {card.value}
                    </span>
                  </span>
                </a>
              );
            })}
          </div>

          <div id="form" className="scroll-mt-24">
            <LeadForm />
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
