import React from 'react';

import ServicePageTemplate from '@/services/shared/ServicePageTemplate';

const heroBackgroundImage = '/SolarCleaning.jpeg';

const features = [
  {
    title: 'Certified & Fully Insured',
    desc: 'Every solar cleaning service is fully insured and completed using strict safety standards.',
  },
  {
    title: 'Panel Safe Cleaning Methods',
    desc: 'Non-abrasive cleaning safely removes dirt and film without damaging panel surfaces.',
  },
  {
    title: 'Performance Focused Cleaning',
    desc: 'Cleaner panels help maximize sunlight absorption and maintain consistent energy output.',
  },
  {
    title: 'Experienced & Trusted Locally',
    desc: 'Our team has hands-on experience safely cleaning residential and commercial solar systems across Adelaide.',
  },
];

const SolarCleaningPage: React.FC = () => {
  return (
    <ServicePageTemplate
      heroTitleLine="Solar Cleaning"
      heroTitleHighlight="Services"
      heroLeftAlignBenefits
      heroBenefits={[
        { title: 'Boost Solar Efficiency', subtitle: 'Maximize sunlight absorption.' },
        { title: 'Panel-Safe Cleaning', subtitle: 'Safe, gentle cleaning for your panels.' },
      ]}
      heroSingleBackgroundImage
      heroLeftImageSrc={heroBackgroundImage}
      heroLeftImageAlt="Solar panels after professional cleaning"
      readyHeadingLine1="Ready to Improve"
      readyHeadingLine2="Solar Performance?"
      galleryImages={[]}
      valueHeading="Get More From Your Solar Panels"
      valueParagraphs={[
        'Dust, grime, and bird droppings can block sunlight and reduce solar efficiency. Our professional solar panel cleaning removes buildup and restores clean surfaces so your system can perform at its best.',
        'Using panel-safe methods and pure water cleaning, we protect your system while delivering a streak-free finish.',
      ]}
      valueTagline="Clean Panels. Better Performance."
      valueSectionClassName="bg-white px-6 py-20 text-left"
      formServiceLabel="solar cleaning"
      formTypeQuestion="What solar setup do you have?"
      formTypeOptions={['Single-storey roof', 'Double-storey roof', 'Ground-mounted panels', 'Not sure']}
      formConditionQuestion="How would you describe your panel condition?"
      formConditionOptions={['Light dust', 'Bird droppings / grime', 'Heavy build-up', 'Not sure - needs inspection']}
      formMessagePlaceholder="Tell us about your solar system and access..."
      reliabilityHeadingLine1="Precision You"
      reliabilityHeadingLine2="Can Trust"
      features={features}
      trustHeading="Solar Panel Cleaning Results Across Adelaide"
      trustDescription="Our solar cleaning service focuses on safety, consistent workmanship, and long-term panel care. Homeowners trust us for reliable service, clear communication, and dependable results."
      trustTagline="Customer Satisfaction Matters"
      trustAlign="center"
      trustVariant="stacked"
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
