import React from 'react';

import ServicePageTemplate from '@/services/shared/ServicePageTemplate';

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
    <ServicePageTemplate
      heroTitleHighlight="House Washing Offer"
      heroBenefits={[
        { title: 'Full Exterior Wash', subtitle: 'Surface-Safe Method' },
        { title: 'Mould & Dirt Removal', subtitle: 'Refresh Street Appeal' },
      ]}
      heroLeftImageSrc="/beforeAfter/9.png"
      heroRightImageSrc="/beforeAfter/10.png"
      heroLeftImageAlt="House exterior before washing"
      heroRightImageAlt="House exterior after washing"
      readyHeadingLine1="Ready to Refresh Your"
      readyHeadingLine2="Home Exterior?"
      galleryImages={galleryImages}
      valueHeading="WE'LL REFRESH YOUR HOME'S EXTERIOR"
      valueParagraphs={[
        'Our house washing service removes built-up dirt, organic growth, and surface grime to dramatically improve exterior appearance.',
        'We tailor the cleaning method to your surface type, delivering a reliable clean while helping protect exterior finishes.',
      ]}
      valueTagline="Fresh Exterior. Strong First Impression."
      formServiceLabel="house washing"
      formTypeQuestion="What exterior needs house washing?"
      formTypeOptions={['Brick exterior', 'Rendered exterior', 'Weatherboard / cladding', 'Not sure']}
      formConditionQuestion="How would you describe the exterior condition?"
      formConditionOptions={['Light dirt', 'Mould / mildew patches', 'Heavy grime build-up', 'Not sure - needs inspection']}
      formMessagePlaceholder="Tell us what parts of the home need washing..."
      reliabilityHeadingLine1="Built Around"
      reliabilityHeadingLine2="Your Home"
      features={features}
      trustHeading="See How We've Refreshed Home Exteriors Across Adelaide"
      trustDescription="From brick to render and cladding, we apply surface-appropriate washing methods for consistent quality, safe cleaning, and visible curb appeal improvements."
      reviewsHeading="See What Adelaide Homeowners Are Saying"
      reviewServiceLabel="house washing"
      finalCtaDescription="Limited availability - refresh your home's exterior with Adelaide's trusted house washing specialists."
      mapHeading="Trusted House Washing Specialists"
      mapCheckPoints={[
        'Fully Insured & Safety Focused',
        'Soft-Wash Surface-Safe Methods',
        'Mould Treatment Options',
        'Highly Experienced Local Team',
      ]}
    />
  );
};

export default HouseWashingPage;
