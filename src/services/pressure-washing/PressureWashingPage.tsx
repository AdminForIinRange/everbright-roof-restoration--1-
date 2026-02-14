import React from 'react';

import ServicePageTemplate from '@/services/shared/ServicePageTemplate';

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
  { src: '/prussewshingImges/19.png', label: 'Before' as const, alt: 'Pressure washing before result 1' },
  { src: '/prussewshingImges/20.png', label: 'After' as const, alt: 'Pressure washing after result 1' },
  { src: '/prussewshingImges/21.png', label: 'Before' as const, alt: 'Pressure washing before result 2' },
  { src: '/prussewshingImges/22.png', label: 'After' as const, alt: 'Pressure washing after result 2' },
  { src: '/prussewshingImges/23.png', label: 'Before' as const, alt: 'Pressure washing before result 3' },
  { src: '/prussewshingImges/24.png', label: 'After' as const, alt: 'Pressure washing after result 3' },
];

const PressureWashingPage: React.FC = () => {
  return (
    <ServicePageTemplate
      heroTitleLine="Pressure Cleaning"
      heroTitleHighlight="Services"
      heroBenefits={[
        { title: 'Driveway & Paths', subtitle: 'Starting From $249' },
        { title: 'Patios & Exteriors', subtitle: 'Deep Surface Clean' },
      ]}
      heroLeftImageSrc="/prussewshingImges/19.png"
      heroRightImageSrc="/prussewshingImges/20.png"
      heroLeftImageAlt="Dirty driveway before pressure washing"
      heroRightImageAlt="Clean driveway after pressure washing"
      readyHeadingLine1="Ready to Refresh Your"
      readyHeadingLine2="Exterior Surfaces?"
      galleryImages={galleryImages}
      valueHeading="WE'LL BRING YOUR SURFACES BACK TO LIFE"
      valueParagraphs={[
        'Remove years of dirt, grime, and staining from concrete, paving, and outdoor hard surfaces.',
        'Our pressure washing process is built for strong visual results while protecting surface integrity.',
      ]}
      valueTagline="Cleaner Surfaces. Better Street Appeal."
      formServiceLabel="pressure washing"
      formTypeQuestion="Which area needs pressure washing?"
      formTypeOptions={['Driveway / pathways', 'Patio / deck', 'Walls / fencing', 'Not sure']}
      formConditionQuestion="How would you describe the surface condition?"
      formConditionOptions={['Light dirt', 'Moderate staining', 'Heavy build-up', 'Not sure - needs inspection']}
      formMessagePlaceholder="Tell us what areas you need cleaned..."
      reliabilityHeadingLine1="Built for"
      reliabilityHeadingLine2="Reliable Results"
      features={features}
      trustHeading="See How We've Refreshed Outdoor Surfaces Across Adelaide"
      trustDescription="From driveways to patios, we deliver practical pressure washing built around safe settings, strong cleaning outcomes, and dependable service standards."
      reviewsHeading="See What Adelaide Property Owners Are Saying"
      reviewServiceLabel="pressure washing"
      finalCtaDescription="Limited availability - refresh your outdoor surfaces with Adelaide's trusted pressure washing specialists."
      mapHeading="Trusted Pressure Washing Specialists"
      mapCheckPoints={[
        'Fully Insured & Safety Focused',
        'Surface-Safe Pressure Methods',
        'Premium Commercial Equipment',
        'Highly Experienced Local Team',
      ]}
    />
  );
};

export default PressureWashingPage;
