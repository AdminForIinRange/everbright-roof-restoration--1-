import React from 'react';

import ServicePageTemplate from '@/services/shared/ServicePageTemplate';

const features = [
  {
    title: 'Proper Surface Preparation',
    desc: 'We prepare pavers and concrete correctly before sealing so the finish applies evenly and lasts longer.',
  },
  {
    title: 'Professional Sealer Application',
    desc: 'Suitable sealing products are applied carefully to help protect your surface from stains, moisture, and daily wear.',
  },
  {
    title: 'Cleaner, Richer Finish',
    desc: 'Sealing can enhance the look of your pavers or concrete with a cleaner and more polished appearance.',
  },
  {
    title: 'Experienced & Trusted Locally',
    desc: 'Our team has hands-on experience restoring and protecting outdoor hard surfaces across Adelaide.',
  },
];

const galleryImages = [
  { src: '/betterPavingPhotos/7.png', label: 'Before' as const, alt: 'Stamped driveway before paver and concrete sealing' },
  { src: '/betterPavingPhotos/8.png', label: 'After' as const, alt: 'Stamped driveway after paver and concrete sealing' },
  { src: '/betterPavingPhotos/10.png', label: 'Before' as const, alt: 'Concrete carport before paver and concrete sealing' },
  { src: '/betterPavingPhotos/9.png', label: 'After' as const, alt: 'Concrete carport after paver and concrete sealing' },
  { src: '/betterPavingPhotos/redone.png', label: 'Before' as const, alt: 'Driveway before paver and concrete sealing' },
  { src: '/betterPavingPhotos/1232.png', label: 'After' as const, alt: 'Driveway after paver and concrete sealing' },
];

const PaverConcreteSealingPage: React.FC = () => {
  return (
    <ServicePageTemplate
      heroTitleLine="Paver & Concrete Sealing"
      heroTitleHighlight="Services"
      heroLeftAlignBenefits
      heroBenefits={[
        {
          title: 'Resist Stains & Fading',
          subtitle: 'Maintain a well kept, lasting surface.',
        },
        {
          title: 'Restore Rich Colour & Modern Look',
          subtitle: 'Refresh dull areas with deeper, even colour.',
        },
      ]}
      heroLeftImageSrc="/scrollerImage/1.webp"
      heroRightImageSrc="/scrollerImage/2.webp"
      heroLeftImageAlt="Paved outdoor area before surface treatment"
      heroRightImageAlt="Paved outdoor area after surface treatment"
      readyHeadingLine1="Ready to Upgrade"
      readyHeadingLine2="The Look Of Your Surface?"
      readyHeadingClassName="text-[2.35rem] md:text-[3.4rem] lg:text-[4.2rem]"
      galleryImages={galleryImages}
      valueHeading="PROTECT YOUR PAVERS AND CONCRETE FOR LONGER"
      valueParagraphs={[
        'Professional sealing helps protect pavers and concrete from staining, weathering, moisture, and everyday wear while keeping outdoor surfaces looking better for longer.',
        'We prepare the surface properly and apply suitable sealing products to enhance the finish, support easier maintenance, and leave your paved areas with a cleaner, richer look.',
      ]}
      valueTagline="Protected Surface. Better Finish."
      formServiceLabel="paver & concrete sealing"
      formTypeQuestion="What surface needs sealing?"
      formTypeOptions={['Concrete driveway', 'Pavers / patio area', 'Paths / walkways', 'Not sure']}
      formConditionQuestion="How would you describe the surface condition?"
      formConditionOptions={['Clean and ready to seal', 'Some fading or staining', 'Heavy weathering / patchy finish', 'Not sure - needs inspection']}
      formMessagePlaceholder="Tell us about the surface, size and access..."
      reliabilityHeadingLine1="PROTECTION THAT"
      reliabilityHeadingLine2="LASTS LONGER"
      features={features}
      trustHeading="Paver & Concrete Sealing Results Across Adelaide"
      trustDescription="From driveways and paths to patios and paved entertaining areas, we help Adelaide property owners protect hard surfaces with careful preparation, suitable sealing products, and a cleaner-looking finish."
      reviewsHeading="See What Adelaide Property Owners Are Saying"
      reviewServiceLabel="paver & concrete sealing"
      finalCtaDescription="Protect your pavers and concrete with Adelaide's trusted sealing specialists."
      mapHeading="Trusted Paver & Concrete Sealing Specialists"
      mapCheckPoints={[
        'Surface Preparation Before Sealing',
        'Suitable Products for Pavers & Concrete',
        'Protection From Stains & Weather',
        'Experienced Local Team',
      ]}
    />
  );
};

export default PaverConcreteSealingPage;
