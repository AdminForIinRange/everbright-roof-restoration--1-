import React from 'react';

import ServicePageTemplate from '@/services/shared/ServicePageTemplate';

const features = [
  {
    title: 'Fully Insured & Professional',
    desc: 'Your property is protected with full public liability cover, giving you peace of mind with every clean.',
  },
  {
    title: 'Surface Safe Pressure Cleaning',
    desc: 'We carefully adjust pressure and equipment for each surface to deliver a powerful clean without causing damage.',
  },
  {
    title: 'Remove Years of Built Up Grime',
    desc: 'Driveways, pathways, and outdoor hard surfaces are restored by removing stubborn dirt, algae, mould, and stains.',
  },
  {
    title: 'Instant Street Appeal',
    desc: 'A professional pressure wash dramatically improves the look of your home, making surfaces brighter, cleaner, and safer.',
  },
  {
    title: 'Experienced & Reliable Service',
    desc: 'We show up on time, do the job properly, and leave your property looking noticeably better.',
  },
];

const galleryImages = [
  { src: '/preussewashingnewimages/4.png', label: 'Before' as const, alt: 'Pressure washing driveway before result 1' },
  { src: '/preussewashingnewimages/5.png', label: 'After' as const, alt: 'Pressure washing driveway after result 1' },
  { src: '/preussewashingnewimages/6.png', label: 'Before' as const, alt: 'Pressure washing patio before result 2' },
  { src: '/preussewashingnewimages/7%20%281%29.png', label: 'After' as const, alt: 'Pressure washing patio after result 2' },
  { src: '/preussewashingnewimages/8%20%281%29.png', label: 'Before' as const, alt: 'Pressure washing paved area before result 3' },
  { src: '/preussewashingnewimages/9.png', label: 'After' as const, alt: 'Pressure washing paved area after result 3' },
];

const PressureWashingPage: React.FC = () => {
  return (
    <ServicePageTemplate
      heroTitleLine="Pressure Cleaning"
      heroTitleHighlight="Services"
      heroLeftAlignBenefits
      heroBenefits={[
        { title: 'Driveway & Paths', subtitle: 'Starting From $249' },
        { title: 'Patios & Exteriors', subtitle: 'Deep Surface Clean' },
      ]}
      heroBenefitSubtitleClassName="text-3xl md:text-3xl lg:text-4xl"
      heroLeftImageSrc="/prussewshingImges/19.webp"
      heroRightImageSrc="/prussewshingImges/20.webp"
      heroLeftImageAlt="Dirty driveway before pressure washing"
      heroRightImageAlt="Clean driveway after pressure washing"
      readyHeadingLine1="Ready to Refresh"
      readyHeadingLine2="Your Exterior Surface?"
      galleryImages={galleryImages}
      valueHeading="WE'LL BRING YOUR SURFACES BACK TO LIFE"
      valueParagraphs={[
        'Remove years of built up dirt, grime, and stains from concrete, paving, and outdoor hard surfaces.',
        'Our professional pressure washing process delivers powerful visual results while protecting the integrity of your surfaces.',
      ]}
      valueTagline="Cleaner Surfaces. Stronger Street Appeal."
      valueSectionClassName="bg-white px-6 pt-20 pb-6 text-left"
      valueDensity="compact"
      formServiceLabel="pressure washing"
      formTypeQuestion="Which area needs pressure washing?"
      formTypeOptions={['Driveway / pathways', 'Patio / deck', 'Walls / fencing', 'Not sure']}
      formConditionQuestion="How would you describe the surface condition?"
      formConditionOptions={['Light dirt', 'Moderate staining', 'Heavy build-up', 'Not sure - needs inspection']}
      formMessagePlaceholder="Tell us what areas you need cleaned..."
      formSectionClassName="relative z-10 mt-2 bg-[#003249] py-8 md:py-12 lg:py-14"
      reliabilityHeadingLine1="Built for Real"
      reliabilityHeadingLine2="Results"
      features={features}
      trustHeading="See How We've Refreshed Outdoor Surfaces Across Adelaide"
      trustDescription="From driveways to patios, we deliver practical pressure washing built around safe settings, strong cleaning outcomes, and dependable service standards."
      trustDescriptionClassName="text-left"
      reviewsHeading="See What Adelaide Home Owners Are Saying"
      reviewServiceLabel="pressure washing"
      finalCtaDescription="Limited availability - refresh your outdoor surfaces with Adelaide's trusted pressure washing specialists."
      mapHeading="Trusted Pressure Washing Specialists"
      mapCheckPoints={[
        'Fully Insured & Safety Focused',
        'Surface Safe Pressure Methods',
        'Premium Commercial Equipment',
        'Highly Experienced Local Team',
      ]}
    />
  );
};

export default PressureWashingPage;
