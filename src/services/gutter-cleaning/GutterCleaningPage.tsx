import React from 'react';

import ServicePageTemplate from '@/services/shared/ServicePageTemplate';

const features = [
  {
    title: 'Fully Insured. No Risk to You.',
    desc: 'Certified, insured and safety-focused technicians who respect your home and complete every job to professional standards.',
  },
  {
    title: 'Complete Gutter & Downpipe Clean',
    desc: 'We remove heavy leaf build-up, mud and debris by hand and ensure downpipes are clear so water can flow away properly.',
  },
  {
    title: 'Help Prevent Costly Water Damage',
    desc: 'Regular professional cleaning reduces the risk of gutter overflow, fascia rot, wall staining and foundation issues.',
  },
];

const galleryImages = [
  { src: '/bettergutterimgs/24.png', label: 'Before' as const, alt: 'Blocked gutter before cleaning with heavy plant growth' },
  { src: '/bettergutterimgs/25.png', label: 'After' as const, alt: 'Clean gutter after debris removal and gutter cleaning' },
  { src: '/bettergutterimgs/26.png', label: 'Before' as const, alt: 'Blocked gutter before cleaning with heavy grass and debris build-up' },
  { src: '/bettergutterimgs/27.png', label: 'After' as const, alt: 'Clean gutter after removal of grass and debris' },
  { src: '/bettergutterimgs/28.png', label: 'Before' as const, alt: 'Blocked gutter before cleaning with leaf build-up' },
  { src: '/bettergutterimgs/29.png', label: 'After' as const, alt: 'Clean gutter after leaf and debris removal' },
];

const GutterCleaningPage: React.FC = () => {
  return (
    <ServicePageTemplate
      heroTitleLine="Gutter Cleaning"
      heroTitleHighlight="Services"
      heroLeftAlignBenefits
      heroBenefits={[
        { title: 'Full Gutter Clean', subtitle: 'Debris Removed' },
        { title: 'Flow Restored', subtitle: 'Downpipe Check' },
      ]}
      heroLeftImageSrc="/bettergutterimgs/28.png"
      heroRightImageSrc="/bettergutterimgs/29.png"
      heroLeftImageAlt="Blocked gutter before cleaning with leaf build-up"
      heroRightImageAlt="Clean gutter after debris removal"
      readyHeadingLine1="Ready to Clear & Protect"
      readyHeadingLine2="Your Gutters?"
      galleryImages={galleryImages}
      valueHeading="STOP GUTTER OVERFLOW BEFORE IT DAMAGES YOUR HOME"
      valueBodyClassName="mx-auto max-w-3xl text-left"
      valueTaglineClassName="text-center"
      valueParagraphs={[
        'Clogged gutters can lead to leaks, wall staining and expensive repairs. Our team clears debris, ensures downpipes are flowing and leaves your property clean and protected.',
        'Professional service done right the first time.',
      ]}
      valueTagline="Clean Gutters. No Stress."
      formServiceLabel="gutter cleaning"
      formTypeQuestion="What type of property is this for?"
      formTypeOptions={['Single-storey home', 'Double-storey home', 'Townhouse / unit', 'Not sure']}
      formConditionQuestion="How blocked are the gutters?"
      formConditionOptions={['Light leaf build-up', 'Moderate blockage', 'Heavy blockage / overflow', 'Not sure - needs inspection']}
      formMessagePlaceholder="Tell us about access and any overflow areas..."
      reliabilityHeadingLine1="Professional Gutter"
      reliabilityHeadingLine2="Cleaning Done Right"
      features={features}
      trustHeading="See How We've Helped Protect Homes Across Adelaide"
      trustDescription="Our gutter cleaning process focuses on safe access, complete debris removal, and dependable service quality to help protect homes in all seasons."
      reviewsHeading="See What Adelaide Homeowners Are Saying"
      reviewServiceLabel="gutter cleaning"
      finalCtaDescription="Limited availability - protect your property with Adelaide's trusted gutter cleaning specialists."
      mapHeading="Trusted Gutter Cleaning Specialists"
      mapCheckPoints={[
        'Fully Insured & Safety Focused',
        'Ladder & Height Safety Procedures',
        'Downpipe Flow Checks Included',
        'Highly Experienced Local Team',
      ]}
    />
  );
};

export default GutterCleaningPage;
