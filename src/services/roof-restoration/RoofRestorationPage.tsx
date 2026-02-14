import React from 'react';

import Features from '@/components/Features';
import FinalCTA from '@/components/FinalCTA';
import Gallery from '@/components/Gallery';
import Hero from '@/components/Hero';
import LeadForm from '@/components/LeadForm';
import MapSection from '@/components/MapSection';
import PageFrame from '@/components/PageFrame';
import Reviews from '@/components/Reviews';
import TrustSection from '@/components/TrustSection';
import ValueProp from '@/components/ValueProp';
import { buildServiceReviews } from '@/services/shared/reviews';

const features = [
  {
    title: 'Certified & Insured',
    desc: 'Your home is protected. We carry full public liability insurance for all roof restoration services.',
  },
  {
    title: 'Surface-Safe Methods',
    desc: 'We use controlled, roof-safe cleaning and treatment methods to restore appearance without avoidable damage.',
  },
  {
    title: 'Longer Lasting Protection',
    desc: 'Premium treatments help reduce quick regrowth of mould and lichen after cleaning.',
  },
  {
    title: 'Experienced & Trusted',
    desc: 'Every job is completed by trained local technicians with a strong track record across Adelaide.',
  },
];

const galleryImages = [
  { src: '/beforeAfter/3.png', label: 'Before' as const, alt: 'Roof restoration before result 1' },
  { src: '/beforeAfter/4.png', label: 'After' as const, alt: 'Roof restoration after result 1' },
  { src: '/beforeAfter/5.png', label: 'Before' as const, alt: 'Roof restoration before result 2' },
  { src: '/beforeAfter/6.png', label: 'After' as const, alt: 'Roof restoration after result 2' },
  { src: '/beforeAfter/9.png', label: 'Before' as const, alt: 'Roof restoration before result 3' },
  { src: '/beforeAfter/10.png', label: 'After' as const, alt: 'Roof restoration after result 3' },
];

const RoofRestorationPage: React.FC = () => {
  return (
    <PageFrame>
      <Hero
        titleHighlight="Roof Restoration Offer"
        benefits={[
          { title: 'Full Roof Cleaning', subtitle: 'Starting From $899' },
          { title: 'Premium Treatment', subtitle: 'Mould Prevention' },
        ]}
        sectionClassName="min-h-[76vh] md:min-h-[90vh]"
      />

      <section className="bg-everbright-blue py-14 px-6 text-center">
        <h2 className="mx-auto max-w-2xl font-display text-4xl font-bold uppercase leading-tight tracking-tight text-brand-sky md:text-5xl">
          Ready to Restore &
          <br />
          Protect Your Roof?
        </h2>
      </section>

      <Gallery images={galleryImages} sectionClassName="grid grid-cols-2 gap-1 bg-black border-y border-black md:grid-cols-3" />

      <ValueProp
        heading="WE'LL BRING YOUR ROOF BACK TO LIFE"
        paragraphs={[
          "Say goodbye to mould-stained tiles and hello to a professionally cleaned and treated roof that stays cleaner for longer.",
          "Our roof restoration process improves presentation, helps protect your surface, and supports long-term property value.",
        ]}
        tagline="Restore Today. Protect for Longer."
        sectionClassName="bg-white px-6 py-20 text-center"
      />

      <section id="form" className="relative z-10 mt-6 bg-[#003249] py-8 md:py-10">
        <div className="mx-auto w-full max-w-2xl px-4">
          <LeadForm
            serviceLabel="roof restoration"
            typeQuestion="What type of roof do you have?"
            typeOptions={['Concrete tile', 'Terracotta tile', 'Colorbond / metal', 'Not sure']}
            conditionQuestion="How would you describe your roof's current condition?"
            conditionOptions={[
              'Light surface staining',
              'Moderate mould / lichen',
              'Heavy mould & build-up',
              'Not sure - needs inspection',
            ]}
            messagePlaceholder="Tell us about your roof restoration needs..."
          />
        </div>
      </section>

      <section className="border-t border-white/10 bg-banner-dark px-6 py-8 text-center">
        <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-brand-sky md:text-5xl">
          A Service You
          <br />
          Can Rely On
        </h2>
      </section>

      <Features features={features} />

      <TrustSection
        heading="See How We've Restored Roofs Across Adelaide"
        description="Homeowners choose us for reliable workmanship, clear communication, and consistent restoration outcomes. We deliver practical, roof-safe solutions designed for Adelaide conditions."
      />

      <Reviews heading="See What Adelaide Homeowners Are Saying" reviews={buildServiceReviews('roof restoration')} />

      <FinalCTA description="Limited availability - restore and protect your roof with Adelaide's trusted roof restoration specialists." />

      <MapSection
        heading="Trusted Roof Restoration Specialists"
        checkPoints={[
          'Fully Insured & Safety Focused',
          'Roof-Safe Cleaning & Treatment',
          'Premium Approved Products',
          'Highly Experienced Local Team',
        ]}
      />
    </PageFrame>
  );
};

export default RoofRestorationPage;
