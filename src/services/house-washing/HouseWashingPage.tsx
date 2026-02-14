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
    desc: 'Your home exterior is cleaned by a fully insured team using reliable site-safe methods.',
  },
  {
    title: 'Soft-Wash Approach',
    desc: 'We adapt pressure and detergents by surface so cladding, render, and painted areas are treated correctly.',
  },
  {
    title: 'Longer Lasting Finish',
    desc: 'Targeted washing and treatment helps reduce quick return of mould and grime on exterior walls.',
  },
  {
    title: 'Experienced & Trusted',
    desc: 'Our team delivers detailed house washing results with strong attention to presentation.',
  },
];

const galleryImages = [
  { src: '/beforeAfter/9.png', label: 'Before' as const, alt: 'House washing before result 1' },
  { src: '/beforeAfter/10.png', label: 'After' as const, alt: 'House washing after result 1' },
  { src: '/beforeAfter/5.png', label: 'Before' as const, alt: 'House washing before result 2' },
  { src: '/beforeAfter/6.png', label: 'After' as const, alt: 'House washing after result 2' },
  { src: '/beforeAfter/3.png', label: 'Before' as const, alt: 'House washing before result 3' },
  { src: '/beforeAfter/4.png', label: 'After' as const, alt: 'House washing after result 3' },
];

const HouseWashingPage: React.FC = () => {
  return (
    <PageFrame>
      <Hero
        titleHighlight="House Washing Offer"
        benefits={[
          { title: 'Full Exterior Wash', subtitle: 'Surface-Safe Method' },
          { title: 'Mould & Dirt Removal', subtitle: 'Refresh Street Appeal' },
        ]}
        leftImageSrc="/beforeAfter/9.png"
        rightImageSrc="/beforeAfter/10.png"
        leftImageAlt="House exterior before washing"
        rightImageAlt="House exterior after washing"
        sectionClassName="min-h-[74vh] md:min-h-[86vh]"
      />

      <section className="bg-everbright-blue py-12 px-6 text-center">
        <h2 className="mx-auto max-w-3xl font-display text-4xl font-bold uppercase leading-tight tracking-tight text-brand-sky md:text-5xl">
          Ready to Refresh Your
          <br />
          Home Exterior?
        </h2>
      </section>

      <Gallery
        images={galleryImages}
        sectionClassName="grid grid-cols-2 gap-1 bg-black border-y border-black md:grid-cols-3"
        tileClassName="relative overflow-hidden aspect-[3/2]"
      />

      <ValueProp
        heading="WE'LL REFRESH YOUR HOME'S EXTERIOR"
        paragraphs={[
          'Our house washing service removes built-up dirt, organic growth, and surface grime to dramatically improve exterior appearance.',
          'We tailor the cleaning method to your surface type, delivering a reliable clean while helping protect exterior finishes.',
        ]}
        tagline="Fresh Exterior. Strong First Impression."
        sectionClassName="bg-white py-16 px-6 text-center"
      />

      <section id="form" className="relative z-10 mt-6 bg-[#003249] py-8 md:py-10">
        <div className="mx-auto w-full max-w-2xl px-4">
          <LeadForm
            serviceLabel="house washing"
            typeQuestion="What exterior needs house washing?"
            typeOptions={['Brick exterior', 'Rendered exterior', 'Weatherboard / cladding', 'Not sure']}
            conditionQuestion="How would you describe the exterior condition?"
            conditionOptions={['Light dirt', 'Mould / mildew patches', 'Heavy grime build-up', 'Not sure - needs inspection']}
            messagePlaceholder="Tell us what parts of the home need washing..."
          />
        </div>
      </section>

      <section className="border-t border-white/10 bg-banner-dark py-8 px-6 text-center">
        <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-brand-sky md:text-5xl">
          Built Around
          <br />
          Your Home
        </h2>
      </section>

      <Features features={features} />

      <TrustSection
        heading="See How We've Refreshed Home Exteriors Across Adelaide"
        description="From brick to render and cladding, we apply surface-appropriate washing methods for consistent quality, safe cleaning, and visible curb appeal improvements."
      />

      <Reviews heading="See What Adelaide Homeowners Are Saying" reviews={buildServiceReviews('house washing')} />

      <FinalCTA description="Limited availability - refresh your home's exterior with Adelaide's trusted house washing specialists." />

      <MapSection
        heading="Trusted House Washing Specialists"
        checkPoints={[
          'Fully Insured & Safety Focused',
          'Soft-Wash Surface-Safe Methods',
          'Mould Treatment Options',
          'Highly Experienced Local Team',
        ]}
      />
    </PageFrame>
  );
};

export default HouseWashingPage;
