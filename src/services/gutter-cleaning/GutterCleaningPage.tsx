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
    desc: 'All gutter cleaning works are completed under full public liability cover with safety-first procedures.',
  },
  {
    title: 'Blocked Gutter Clearing',
    desc: 'We remove leaf build-up, debris, and sludge so water can flow through your guttering system properly.',
  },
  {
    title: 'Overflow Prevention',
    desc: 'Regular gutter maintenance helps reduce overflow risk and helps protect fascia, walls, and foundations.',
  },
  {
    title: 'Experienced & Trusted',
    desc: 'Our local technicians provide reliable gutter cleaning services across Adelaide suburbs.',
  },
];

const galleryImages = [
  { src: '/beforeAfter/5.png', label: 'Before' as const, alt: 'Gutter cleaning before result 1' },
  { src: '/beforeAfter/6.png', label: 'After' as const, alt: 'Gutter cleaning after result 1' },
  { src: '/beforeAfter/3.png', label: 'Before' as const, alt: 'Gutter cleaning before result 2' },
  { src: '/beforeAfter/4.png', label: 'After' as const, alt: 'Gutter cleaning after result 2' },
  { src: '/beforeAfter/9.png', label: 'Before' as const, alt: 'Gutter cleaning before result 3' },
  { src: '/beforeAfter/10.png', label: 'After' as const, alt: 'Gutter cleaning after result 3' },
];

const GutterCleaningPage: React.FC = () => {
  return (
    <PageFrame>
      <Hero
        titleHighlight="Gutter Cleaning Offer"
        benefits={[
          { title: 'Full Gutter Clean', subtitle: 'Debris Removed' },
          { title: 'Flow Restored', subtitle: 'Downpipe Check' },
        ]}
        leftImageSrc="/beforeAfter/5.png"
        rightImageSrc="/beforeAfter/6.png"
        leftImageAlt="Blocked gutter before cleaning"
        rightImageAlt="Clean gutter after service"
        sectionClassName="min-h-[66vh] md:min-h-[82vh]"
      />

      <section className="bg-everbright-blue py-11 px-6 text-center">
        <h2 className="mx-auto max-w-3xl font-display text-4xl font-bold uppercase leading-tight tracking-tight text-brand-sky md:text-5xl">
          Ready to Clear & Protect
          <br />
          Your Gutters?
        </h2>
      </section>

      <Gallery
        images={galleryImages}
        sectionClassName="grid grid-cols-2 gap-1 bg-black border-y border-black md:grid-cols-3"
        tileClassName="relative overflow-hidden aspect-[5/4]"
      />

      <ValueProp
        heading="WE'LL CLEAR YOUR GUTTERS THE RIGHT WAY"
        paragraphs={[
          'Blocked gutters can lead to overflow, staining, and long-term water issues. We remove built-up debris and restore reliable flow.',
          'Our team works safely and efficiently with clean, professional job completion from start to finish.',
        ]}
        tagline="Clear Gutters. Better Protection."
      />

      <section id="form" className="relative z-10 mt-6 bg-[#003249] py-8">
        <div className="mx-auto w-full max-w-2xl px-4">
          <LeadForm
            serviceLabel="gutter cleaning"
            typeQuestion="What type of property is this for?"
            typeOptions={['Single-storey home', 'Double-storey home', 'Townhouse / unit', 'Not sure']}
            conditionQuestion="How blocked are the gutters?"
            conditionOptions={[
              'Light leaf build-up',
              'Moderate blockage',
              'Heavy blockage / overflow',
              'Not sure - needs inspection',
            ]}
            messagePlaceholder="Tell us about access and any overflow areas..."
          />
        </div>
      </section>

      <section className="border-t border-white/10 bg-banner-dark py-8 px-6 text-center">
        <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-brand-sky md:text-5xl">
          Practical Service,
          <br />
          Proven Outcome
        </h2>
      </section>

      <Features features={features} />

      <TrustSection
        heading="See How We've Helped Protect Homes Across Adelaide"
        description="Our gutter cleaning process focuses on safe access, complete debris removal, and dependable service quality to help protect homes in all seasons."
      />

      <Reviews heading="See What Adelaide Homeowners Are Saying" reviews={buildServiceReviews('gutter cleaning')} />

      <FinalCTA description="Limited availability - protect your property with Adelaide's trusted gutter cleaning specialists." />

      <MapSection
        heading="Trusted Gutter Cleaning Specialists"
        checkPoints={[
          'Fully Insured & Safety Focused',
          'Ladder & Height Safety Procedures',
          'Downpipe Flow Checks Included',
          'Highly Experienced Local Team',
        ]}
      />
    </PageFrame>
  );
};

export default GutterCleaningPage;
