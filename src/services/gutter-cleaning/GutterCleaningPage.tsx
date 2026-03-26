import React from 'react';

import ServicePageTemplate from '@/services/shared/ServicePageTemplate';

const heroBackgroundImage = '/040CFA29-6DAC-4F38-A17E-616811E42121.PNG';

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
  {
    title: 'Reliable Local Team Across Adelaide',
    desc: 'On-time arrivals, clear communication and a clean finish, trusted by homeowners for consistent, quality clean.',
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
      heroSingleBackgroundImage
      heroLeftImageSrc={heroBackgroundImage}
      heroLeftImageAlt="Professional gutter cleaning service in Adelaide"
      readyHeadingLine1="Ready to Clear & Protect"
      readyHeadingLine2="Your Gutters?"
      readySectionClassName="!py-8 md:!py-10 lg:!py-12"
      galleryImages={galleryImages}
      valueHeading="STOP GUTTER OVERFLOW BEFORE IT DAMAGES YOUR HOME"
      valueSectionClassName="bg-white px-6 py-12 text-center md:py-14"
      valueBodyClassName="mx-auto max-w-3xl text-left"
      valueTaglineClassName="text-center"
      valueParagraphs={[
        'Clogged gutters can lead to leaks, wall staining and expensive repairs. Our team clears debris, ensures downpipes are flowing and leaves your property clean and protected.',
        'Professional service done right the first time.',
      ]}
      valueTagline="Clean Gutters. No Stress."
      formPlacement="afterHero"
      formServiceLabel="gutter cleaning"
      formTypeQuestion="What type of property is this for?"
      formTypeOptions={['Single-storey home', 'Double-storey home', 'Townhouse / unit', 'Not sure']}
      formConditionQuestion="How blocked are the gutters?"
      formConditionOptions={['Light leaf build-up', 'Moderate blockage', 'Heavy blockage / overflow', 'Not sure - needs inspection']}
      formMessagePlaceholder="Tell us about access and any overflow areas..."
      formSectionClassName="relative z-10 bg-[#003249] py-8 md:py-12 lg:py-14"
      reliabilityHeadingLine1="Professional Gutter"
      reliabilityHeadingLine2="Cleaning Done Right"
      features={features}
      trustHeading="Protecting Adelaide Homes"
      trustDescription="From heavy debris removal to restoring proper water flow, our professional service is designed to keep your gutters working in every season."
      reviewsHeading="See What Adelaide Homeowners Are Saying"
      reviewServiceLabel="gutter cleaning"
      finalCtaHeadingLine="BOOK YOUR GUTTER CLEAN"
      finalCtaHeadingHighlight="TODAY"
      finalCtaDescription="Protect your home with Adelaide's trusted gutter cleaning specialists."
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
