import React from 'react';

import ServicePageTemplate from '@/services/shared/ServicePageTemplate';

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
  { src: '/beforeAfter/3.webp', label: 'Before' as const, alt: 'Roof restoration before result 1' },
  { src: '/beforeAfter/4.webp', label: 'After' as const, alt: 'Roof restoration after result 1' },
  { src: '/beforeAfter/5.webp', label: 'Before' as const, alt: 'Roof restoration before result 2' },
  { src: '/beforeAfter/6.webp', label: 'After' as const, alt: 'Roof restoration after result 2' },
  { src: '/beforeAfter/9.webp', label: 'Before' as const, alt: 'Roof restoration before result 3' },
  { src: '/beforeAfter/10.webp', label: 'After' as const, alt: 'Roof restoration after result 3' },
];

const RoofRestorationPage: React.FC = () => {
  return (
    <ServicePageTemplate
      heroTitleHighlight="Exclusive Deal"
      heroBenefits={[
        { title: 'Full Roof Cleaning', subtitle: 'Starting From $899' },
        { title: 'Premium Treatment', subtitle: 'Mould Prevention' },
      ]}
      heroLeftAlignBenefits
      readyHeadingLine1="Ready to Restore &"
      readyHeadingLine2="Protect Your Roof?"
      galleryImages={galleryImages}
      valueHeading="WE'LL BRING YOUR ROOF BACK TO LIFE"
      valueParagraphs={[
        "Say goodbye to mould-stained tiles and hello to a professionally cleaned and treated roof that stays cleaner for longer.",
        'Our roof restoration process improves presentation, helps protect your surface, and supports long-term property value.',
      ]}
      valueTagline="Restore Today. Protect for Longer."
      formServiceLabel="roof restoration"
      formTypeQuestion="What type of roof do you have?"
      formTypeOptions={['Concrete tile', 'Terracotta tile', 'Colorbond / metal', 'Not sure']}
      formConditionQuestion="How would you describe your roof's current condition?"
      formConditionOptions={[
        'Light surface staining',
        'Moderate mould / lichen',
        'Heavy mould & build-up',
        'Not sure - needs inspection',
      ]}
      formMessagePlaceholder="Tell us about your roof restoration needs..."
      reliabilityHeadingLine1="A Service You"
      reliabilityHeadingLine2="Can Rely On"
      features={features}
      trustHeading="See How We've Restored Roofs Across Adelaide"
      trustDescription="Homeowners choose us for reliable workmanship, clear communication, and consistent restoration outcomes. We deliver practical, roof-safe solutions designed for Adelaide conditions."
      reviewsHeading="See What Adelaide Homeowners Are Saying"
      reviewServiceLabel="roof restoration"
      finalCtaDescription="Limited availability - restore and protect your roof with Adelaide's trusted roof restoration specialists."
      mapHeading="Trusted Roof Restoration Specialists"
      mapCheckPoints={[
        'Fully Insured & Safety Focused',
        'Roof-Safe Cleaning & Treatment',
        'Premium Approved Products',
        'Highly Experienced Local Team',
      ]}
    />
  );
};

export default RoofRestorationPage;
