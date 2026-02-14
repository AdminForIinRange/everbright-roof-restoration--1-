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
    desc: 'Your property is protected by full public liability cover for all pressure washing services.',
  },
  {
    title: 'Surface-Safe Pressure',
    desc: 'We adjust pressure and nozzles by surface type for effective cleaning without unnecessary wear.',
  },
  {
    title: 'Deep Grime Removal',
    desc: 'Driveways, paths, and hard surfaces get a thorough clean that restores look and traction.',
  },
  {
    title: 'Experienced & Trusted',
    desc: 'Our local Adelaide team delivers dependable pressure washing outcomes for homes and small commercial sites.',
  },
];

const galleryImages = [
  { src: '/beforeAfter/3.png', label: 'Before' as const, alt: 'Pressure washing before result 1' },
  { src: '/beforeAfter/4.png', label: 'After' as const, alt: 'Pressure washing after result 1' },
  { src: '/beforeAfter/9.png', label: 'Before' as const, alt: 'Pressure washing before result 2' },
  { src: '/beforeAfter/10.png', label: 'After' as const, alt: 'Pressure washing after result 2' },
  { src: '/beforeAfter/5.png', label: 'Before' as const, alt: 'Pressure washing before result 3' },
  { src: '/beforeAfter/6.png', label: 'After' as const, alt: 'Pressure washing after result 3' },
];

const PressureWashingPage: React.FC = () => {
  return (
    <PageFrame>
      <Hero
        titleHighlight="Pressure Washing Offer"
        benefits={[
          { title: 'Driveway & Paths', subtitle: 'Starting From $249' },
          { title: 'Patios & Exteriors', subtitle: 'Deep Surface Clean' },
        ]}
        leftImageSrc="/beforeAfter/3.png"
        rightImageSrc="/beforeAfter/4.png"
        leftImageAlt="Dirty driveway before pressure washing"
        rightImageAlt="Clean driveway after pressure washing"
        sectionClassName="min-h-[64vh] md:min-h-[78vh]"
      />

      <section className="bg-everbright-blue py-10 px-6 text-center">
        <h2 className="mx-auto max-w-3xl font-display text-4xl font-bold uppercase leading-tight tracking-tight text-brand-sky md:text-5xl">
          Ready to Refresh Your
          <br />
          Exterior Surfaces?
        </h2>
      </section>

      <Gallery
        images={galleryImages}
        sectionClassName="grid grid-cols-2 gap-1 bg-black border-y border-black md:grid-cols-3"
        tileClassName="relative overflow-hidden aspect-[16/10]"
      />

      <ValueProp
        heading="WE'LL BRING YOUR SURFACES BACK TO LIFE"
        paragraphs={[
          'Remove years of dirt, grime, and staining from concrete, paving, and outdoor hard surfaces.',
          'Our pressure washing process is built for strong visual results while protecting surface integrity.',
        ]}
        tagline="Cleaner Surfaces. Better Street Appeal."
        sectionClassName="bg-white py-14 px-6 text-center"
      />

      <section id="form" className="relative z-10 mt-6 bg-[#003249] py-7 md:py-9">
        <div className="mx-auto w-full max-w-2xl px-4">
          <LeadForm
            serviceLabel="pressure washing"
            typeQuestion="Which area needs pressure washing?"
            typeOptions={['Driveway / pathways', 'Patio / deck', 'Walls / fencing', 'Not sure']}
            conditionQuestion="How would you describe the surface condition?"
            conditionOptions={['Light dirt', 'Moderate staining', 'Heavy build-up', 'Not sure - needs inspection']}
            messagePlaceholder="Tell us what areas you need cleaned..."
          />
        </div>
      </section>

      <section className="border-t border-white/10 bg-banner-dark py-8 px-6 text-center">
        <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-brand-sky md:text-5xl">
          Built for
          <br />
          Reliable Results
        </h2>
      </section>

      <Features features={features} sectionClassName="bg-dark-navy pt-10 pb-20 px-6" />

      <TrustSection
        heading="See How We've Refreshed Outdoor Surfaces Across Adelaide"
        description="From driveways to patios, we deliver practical pressure washing built around safe settings, strong cleaning outcomes, and dependable service standards."
        sectionClassName="px-6 py-14 bg-white"
      />

      <Reviews
        heading="See What Adelaide Property Owners Are Saying"
        reviews={buildServiceReviews('pressure washing')}
        sectionClassName="bg-navy-dark py-14 px-6 overflow-hidden"
      />

      <FinalCTA description="Limited availability - refresh your outdoor surfaces with Adelaide's trusted pressure washing specialists." />

      <MapSection
        heading="Trusted Pressure Washing Specialists"
        checkPoints={[
          'Fully Insured & Safety Focused',
          'Surface-Safe Pressure Methods',
          'Premium Commercial Equipment',
          'Highly Experienced Local Team',
        ]}
      />
    </PageFrame>
  );
};

export default PressureWashingPage;
