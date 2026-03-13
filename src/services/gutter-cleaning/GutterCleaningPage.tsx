import React from 'react';

import ServicePageTemplate from '@/services/shared/ServicePageTemplate';

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
  { src: '/bettergutterimgs/3.png', label: 'Before' as const, alt: 'Blocked gutter before cleaning with heavy plant growth' },
  { src: '/bettergutterimgs/4.png', label: 'After' as const, alt: 'Clean gutter after debris removal and gutter cleaning' },
  { src: '/bettergutterimgs/5.png', label: 'Before' as const, alt: 'Blocked gutter before cleaning with leaf build-up' },
  { src: '/bettergutterimgs/6.png', label: 'After' as const, alt: 'Clean gutter after leaf and debris removal' },
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
      heroLeftImageSrc="/bettergutterimgs/5.png"
      heroRightImageSrc="/bettergutterimgs/6.png"
      heroLeftImageAlt="Blocked gutter before cleaning with heavy growth"
      heroRightImageAlt="Clean gutter after debris removal"
      readyHeadingLine1="Ready to Clear & Protect"
      readyHeadingLine2="Your Gutters?"
      galleryImages={galleryImages}
      valueHeading="WE'LL CLEAR YOUR GUTTERS THE RIGHT WAY"
      valueParagraphs={[
        'Blocked gutters can lead to overflow, staining, and long term water issues. We remove built up debris and restore reliable flow.',
        'Our team works safely and efficiently with clean, professional job completion from start to finish.',
      ]}
      valueTagline="Clear Gutters. Better Protection."
      formServiceLabel="gutter cleaning"
      formTypeQuestion="What type of property is this for?"
      formTypeOptions={['Single-storey home', 'Double-storey home', 'Townhouse / unit', 'Not sure']}
      formConditionQuestion="How blocked are the gutters?"
      formConditionOptions={['Light leaf build-up', 'Moderate blockage', 'Heavy blockage / overflow', 'Not sure - needs inspection']}
      formMessagePlaceholder="Tell us about access and any overflow areas..."
      reliabilityHeadingLine1="Practical Service,"
      reliabilityHeadingLine2="Proven Outcome"
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
