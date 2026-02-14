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
    desc: 'Your home is protected. We carry full public liability insurance for all roof cleaning works.',
  },
  {
    title: 'Roof-Safe Cleaning',
    desc: 'Controlled, surface-appropriate methods that clean effectively without harsh damage to tiles or metal.',
  },
  {
    title: 'Longer Lasting Clean',
    desc: 'Targeted mould and lichen treatment helps keep your roof cleaner for longer.',
  },
  {
    title: 'Experienced & Trusted',
    desc: 'Our local team delivers consistent roof cleaning outcomes across Adelaide properties.',
  },
];

const galleryImages = [
  { src: '/beforeAfter/5.png', label: 'Before' as const, alt: 'Roof cleaning before result 1' },
  { src: '/beforeAfter/6.png', label: 'After' as const, alt: 'Roof cleaning after result 1' },
  { src: '/beforeAfter/9.png', label: 'Before' as const, alt: 'Roof cleaning before result 2' },
  { src: '/beforeAfter/10.png', label: 'After' as const, alt: 'Roof cleaning after result 2' },
  { src: '/beforeAfter/3.png', label: 'Before' as const, alt: 'Roof cleaning before result 3' },
  { src: '/beforeAfter/4.png', label: 'After' as const, alt: 'Roof cleaning after result 3' },
];

const RoofCleaningPage: React.FC = () => {
  return (
    <PageFrame>
      <Hero
        titleHighlight="Roof Cleaning Deal"
        benefits={[
          { title: 'Full Roof Cleaning', subtitle: 'Starting From $899' },
          { title: 'Mould Prevention', subtitle: 'Roof Treatment' },
        ]}
        sectionClassName="min-h-[72vh] md:min-h-[88vh]"
      />

      <section className="bg-everbright-blue py-12 px-6 text-center">
        <h2 className="mx-auto max-w-2xl font-display text-4xl font-bold uppercase leading-tight tracking-tight text-brand-sky md:text-5xl">
          Ready to Clean &
          <br />
          Protect Your Roof?
        </h2>
      </section>

      <Gallery images={galleryImages} sectionClassName="grid grid-cols-2 gap-1 bg-black border-y border-black md:grid-cols-3" />

      <ValueProp
        heading="WE'LL BRING YOUR ROOF BACK TO LIFE"
        paragraphs={[
          "Say goodbye to mould-stained tiles and hello to a professionally cleaned roof that stays fresher for longer.",
          "Our proven roof cleaning process restores presentation, supports surface protection, and improves street appeal.",
        ]}
        tagline="Clean Today. Protected for Longer."
      />

      <section id="form" className="relative z-10 mt-6 bg-[#003249] py-6 md:py-8">
        <div className="mx-auto w-full max-w-2xl px-4">
          <LeadForm
            serviceLabel="roof cleaning"
            typeQuestion="What type of roof do you have?"
            typeOptions={['Concrete tile', 'Terracotta tile', 'Colorbond / metal', 'Not sure']}
            conditionQuestion="How would you describe your roof's current condition?"
            conditionOptions={[
              'Light surface staining',
              'Moderate mould / lichen',
              'Heavy mould & build-up',
              'Not sure - needs inspection',
            ]}
            messagePlaceholder="Tell us about your roof..."
          />
        </div>
      </section>

      <section className="border-t border-white/10 bg-banner-dark py-8 px-6 text-center">
        <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-brand-sky md:text-5xl">
          A Service You
          <br />
          Can Rely On
        </h2>
      </section>

      <Features features={features} />

      <TrustSection
        heading="See How We've Cleaned and Protected Roofs Across Adelaide"
        description="We combine roof-safe cleaning methods with practical treatment to deliver reliable, long-lasting outcomes. Homeowners trust our team for quality workmanship and clear communication."
      />

      <Reviews heading="See What Adelaide Homeowners Are Saying" reviews={buildServiceReviews('roof cleaning')} />

      <FinalCTA description="Limited availability - protect and refresh your roof with Adelaide's trusted roof cleaning specialists." />

      <MapSection
        heading="Trusted Roof Cleaning Specialists"
        checkPoints={[
          'Fully Insured & Safety Focused',
          'Roof-Safe Cleaning Methods',
          'Premium Approved Treatments',
          'Highly Experienced Local Team',
        ]}
      />
    </PageFrame>
  );
};

export default RoofCleaningPage;
