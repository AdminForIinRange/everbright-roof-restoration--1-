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
    desc: 'Every solar cleaning job is fully insured and delivered with strict safety procedures.',
  },
  {
    title: 'Panel-Safe Cleaning',
    desc: 'Non-abrasive methods help remove film and grime without harsh residue on panel surfaces.',
  },
  {
    title: 'Performance Focused',
    desc: 'Cleaner panel surfaces support better sunlight capture and steady system output over time.',
  },
  {
    title: 'Experienced & Trusted',
    desc: 'Our team has practical experience cleaning residential solar systems safely across Adelaide.',
  },
];

const galleryImages = [
  { src: '/beforeAfter/9.png', label: 'Before' as const, alt: 'Solar cleaning before result 1' },
  { src: '/beforeAfter/10.png', label: 'After' as const, alt: 'Solar cleaning after result 1' },
  { src: '/beforeAfter/3.png', label: 'Before' as const, alt: 'Solar cleaning before result 2' },
  { src: '/beforeAfter/4.png', label: 'After' as const, alt: 'Solar cleaning after result 2' },
  { src: '/beforeAfter/5.png', label: 'Before' as const, alt: 'Solar cleaning before result 3' },
  { src: '/beforeAfter/6.png', label: 'After' as const, alt: 'Solar cleaning after result 3' },
];

const SolarCleaningPage: React.FC = () => {
  return (
    <PageFrame>
      <Hero
        titleHighlight="Solar Cleaning Offer"
        benefits={[
          { title: 'Panel-Safe Cleaning', subtitle: 'Pure-Water Method' },
          { title: 'Performance Focused', subtitle: 'Protect Output' },
        ]}
        leftImageSrc="/beforeAfter/9.png"
        rightImageSrc="/beforeAfter/10.png"
        leftImageAlt="Dusty solar panel before cleaning"
        rightImageAlt="Clean solar panel after cleaning"
        sectionClassName="min-h-[78vh] md:min-h-[92vh]"
      />

      <section className="bg-everbright-blue py-16 px-6 text-center">
        <h2 className="mx-auto max-w-3xl font-display text-4xl font-bold uppercase leading-tight tracking-tight text-brand-sky md:text-6xl">
          Ready to Improve
          <br />
          Solar Performance?
        </h2>
      </section>

      <Gallery
        images={galleryImages}
        sectionClassName="grid grid-cols-2 gap-1 bg-black border-y border-black md:grid-cols-3"
        tileClassName="relative overflow-hidden aspect-[4/3]"
      />

      <ValueProp
        heading="WE'LL HELP YOUR SOLAR PANELS PERFORM BETTER"
        paragraphs={[
          'Dust, film, and bird droppings can reduce panel efficiency. Our solar cleaning service restores cleaner panel surfaces for better day-to-day performance.',
          'We use panel-safe methods and water-fed cleaning approaches that prioritize system longevity and presentation.',
        ]}
        tagline="Cleaner Panels. Smarter Energy."
      />

      <section id="form" className="relative z-10 mt-6 bg-[#003249] py-8 md:py-10">
        <div className="mx-auto w-full max-w-2xl px-4">
          <LeadForm
            serviceLabel="solar cleaning"
            typeQuestion="What solar setup do you have?"
            typeOptions={['Single-storey roof', 'Double-storey roof', 'Ground-mounted panels', 'Not sure']}
            conditionQuestion="How would you describe your panel condition?"
            conditionOptions={['Light dust', 'Bird droppings / grime', 'Heavy build-up', 'Not sure - needs inspection']}
            messagePlaceholder="Tell us about your solar system and access..."
          />
        </div>
      </section>

      <section className="border-t border-white/10 bg-banner-dark px-6 py-8 text-center">
        <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-brand-sky md:text-5xl">
          Precision You
          <br />
          Can Trust
        </h2>
      </section>

      <Features features={features} sectionClassName="bg-dark-navy pt-14 pb-20 px-6" />

      <TrustSection
        heading="See How We've Helped Maintain Solar Systems Across Adelaide"
        description="Our solar cleaning process emphasizes safety, consistent workmanship, and long-term panel care. Homeowners rely on us for dependable service and clear communication."
      />

      <Reviews heading="See What Adelaide Homeowners Are Saying" reviews={buildServiceReviews('solar cleaning')} />

      <FinalCTA description="Limited availability - protect your system with Adelaide's trusted solar cleaning specialists." />

      <MapSection
        heading="Trusted Solar Cleaning Specialists"
        checkPoints={[
          'Fully Insured & Safety Focused',
          'Panel-Safe Cleaning Methods',
          'Pure-Water Finish',
          'Highly Experienced Local Team',
        ]}
      />
    </PageFrame>
  );
};

export default SolarCleaningPage;
