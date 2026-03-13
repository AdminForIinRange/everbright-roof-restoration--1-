import React from 'react';

import ServicePageTemplate from '@/services/shared/ServicePageTemplate';

const heroBackgroundImage = '/SolarCleaning.jpeg';

const features = [
  {
    title: 'Safe for Your Panels',
    desc: 'We use gentle, panel safe cleaning methods that remove dirt and buildup without causing damage.',
  },
  {
    title: 'Fully Insured Service',
    desc: 'You can book with confidence knowing every job is fully insured and carried out with care.',
  },
  {
    title: 'Better Solar Performance',
    desc: 'Clean panels can absorb sunlight more effectively, helping your system work at its best.',
  },
  {
    title: 'Experienced & Trusted Locally',
    desc: 'Our team has hands-on experience safely cleaning residential and commercial solar systems across Adelaide',
  },
];

const SolarCleaningPage: React.FC = () => {
  return (
    <ServicePageTemplate
      heroTitleLine="Solar Cleaning"
      heroTitleHighlight="Services"
      heroLeftAlignBenefits
      heroBenefits={[
        { title: 'Remove Grime & Buildup', subtitle: 'Clean off dirt and bird droppings.' },
        { title: 'Boost Solar Performance', subtitle: 'Maximise your panel efficiency.' },
      ]}
      heroSingleBackgroundImage
      heroLeftImageSrc={heroBackgroundImage}
      heroLeftImageAlt="Solar panels after professional cleaning"
      readyHeadingLine1="GET MORE FROM YOUR"
      readyHeadingLine2="SOLAR PANELS"
      galleryImages={[]}
      valueHeading=""
      valueImageSrc="/newsoloar/IMG_2873%20%281%29.JPG"
      valueImageAlt="Technician cleaning solar panels on a rooftop"
      valueImageWidth={564}
      valueImageHeight={670}
      valueImageClassName="mb-8 h-auto w-full max-w-full object-cover"
      valueParagraphs={[
        'Dust, grime and bird droppings can block sunlight and reduce your system\'s efficiency. Our professional solar panel cleaning removes built-up dirt and restores a cleaner surface so your panels can perform at their best.',
        'Using professional methods and purified water cleaning, we safely clean your panels without harsh residue, helping protect your system while delivering a spotless, streak-free finish.',
      ]}
      valueTagline="SOLAR PANEL CLEANING DONE SAFELY"
      valueSectionClassName="bg-white px-6 pt-0 pb-20 text-left"
      formServiceLabel="solar cleaning"
      formTypeQuestion="What solar setup do you have?"
      formTypeOptions={['Single-storey roof', 'Double-storey roof', 'Ground-mounted panels', 'Not sure']}
      formConditionQuestion="How would you describe your panel condition?"
      formConditionOptions={['Light dust', 'Bird droppings / grime', 'Heavy build-up', 'Not sure - needs inspection']}
      formMessagePlaceholder="Tell us about your solar system and access..."
      reliabilityHeadingLine1="SOLAR PANEL CLEANING"
      reliabilityHeadingLine2="DONE SAFELY"
      features={features}
      trustHeading="Solar Panel Cleaning Results Across Adelaide"
      trustDescription="Our solar cleaning service focuses on safety, consistent workmanship, and long-term panel care. Homeowners trust us for reliable service, clear communication, and dependable results."
      trustTagline="Customer Satisfaction Matters"
      trustAlign="center"
      trustVariant="stacked"
      reviewsHeading="See What Adelaide Homeowners Are Saying"
      reviewServiceLabel="solar cleaning"
      finalCtaDescription="protect your solor pannels with Adelaide's trusted solar cleaning specialists."
      mapHeading="Trusted Solar Cleaning Specialists"
      mapCheckPoints={[
        'Fully Insured & Safety Focused',
        'Panel Safe Cleaning Methods',
        'Pure Water Finish',
        'Highly Experienced Local Team',
      ]}
    />
  );
};

export default SolarCleaningPage;
