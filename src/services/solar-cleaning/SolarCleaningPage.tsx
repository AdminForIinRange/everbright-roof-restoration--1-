import React from 'react';

import ServicePageTemplate from '@/services/shared/ServicePageTemplate';

const solarImage = '/solaorcleaingImages/IMG_1021.webp';

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
  { src: solarImage, label: 'After' as const, alt: 'Solar cleaning service result' },
];

const SolarCleaningPage: React.FC = () => {
  return (
    <ServicePageTemplate
      heroTitleLine="Solar Cleaning"
      heroTitleHighlight="Services"
      heroLeftAlignBenefits
      heroBenefits={[
        { title: 'Panel-Safe Cleaning', subtitle: 'Pure-Water Method' },
        { title: 'Performance Focused', subtitle: 'Protect Output' },
      ]}
      heroSingleBackgroundImage
      heroLeftImageSrc={solarImage}
      heroLeftImageAlt="Solar panels after professional cleaning"
      readyHeadingLine1="Ready to Improve"
      readyHeadingLine2="Solar Performance?"
      galleryImages={galleryImages}
      valueHeading="WE'LL HELP YOUR SOLAR PANELS PERFORM BETTER"
      valueParagraphs={[
        'Dust, film, and bird droppings can reduce panel efficiency. Our solar cleaning service restores cleaner panel surfaces for better day-to-day performance.',
        'We use panel-safe methods and water-fed cleaning approaches that prioritize system longevity and presentation.',
      ]}
      valueTagline="Cleaner Panels. Smarter Energy."
      formServiceLabel="solar cleaning"
      formTypeQuestion="What solar setup do you have?"
      formTypeOptions={['Single-storey roof', 'Double-storey roof', 'Ground-mounted panels', 'Not sure']}
      formConditionQuestion="How would you describe your panel condition?"
      formConditionOptions={['Light dust', 'Bird droppings / grime', 'Heavy build-up', 'Not sure - needs inspection']}
      formMessagePlaceholder="Tell us about your solar system and access..."
      reliabilityHeadingLine1="Precision You"
      reliabilityHeadingLine2="Can Trust"
      features={features}
      trustHeading="See How We've Helped Maintain Solar Systems Across Adelaide"
      trustDescription="Our solar cleaning process emphasizes safety, consistent workmanship, and long-term panel care. Homeowners rely on us for dependable service and clear communication."
      reviewsHeading="See What Adelaide Homeowners Are Saying"
      reviewServiceLabel="solar cleaning"
      finalCtaDescription="Limited availability - protect your system with Adelaide's trusted solar cleaning specialists."
      mapHeading="Trusted Solar Cleaning Specialists"
      mapCheckPoints={[
        'Fully Insured & Safety Focused',
        'Panel-Safe Cleaning Methods',
        'Pure-Water Finish',
        'Highly Experienced Local Team',
      ]}
    />
  );
};

export default SolarCleaningPage;
