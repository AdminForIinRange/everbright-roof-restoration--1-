import React from 'react';

import ServicePageTemplate from '@/services/shared/ServicePageTemplate';

const features = [
  {
    title: 'Restore Colour & Improve Street Appeal',
    desc: 'Bring dull, tired areas back to life with a richer tone and cleaner, more modern appearance.',
  },
  {
    title: 'Reliable Local Team You Can Trust',
    desc: 'Experienced and certified technicians who arrive on time, communicate clearly and take care to leave your property tidy.',
  },
  {
    title: 'Even Finish That Lasts Longer',
    desc: 'Premium sealers combined with expert application deliver a smoother, longer lasting finish that protects against patchiness, peeling and premature wear.',
  },
  {
    title: 'Fully Insured For Your Peace Of Mind',
    desc: 'All sealing work is covered by public liability insurance for added protection and confidence.',
  },
];

const galleryImages = [
  { src: '/betterPavingPhotos/7.png', label: 'Before' as const, alt: 'Stamped driveway before paver and concrete sealing' },
  { src: '/betterPavingPhotos/8.png', label: 'After' as const, alt: 'Stamped driveway after paver and concrete sealing' },
  { src: '/betterPavingPhotos/4.png', label: 'Before' as const, alt: 'Curved pathway before paver and concrete sealing' },
  { src: '/betterPavingPhotos/5.png', label: 'After' as const, alt: 'Curved pathway after paver and concrete sealing' },
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
      heroLeftImageSrc="/betterPavingPhotos/Blocked%20Gutters%20Clean%20Them%20Before%20Fire%20Season-8.png"
      heroLeftImageAlt="Exterior surface restoration background image"
      heroSingleBackgroundImage
      readyHeadingLine1="Ready to Upgrade"
      readyHeadingLine2="The Look Of Your Surface?"
      readyHeadingClassName="text-[1.9rem] md:text-[2.8rem] lg:text-[3.6rem]"
      galleryImages={galleryImages}
      valueHeading="PROTECT YOUR PAVERS & CONCRETE FOR LONGER"
      valueHeadingClassName="text-[1.6rem] md:text-[2.7rem] lg:text-[3.5rem]"
      valueBodyClassName="mx-auto max-w-3xl text-left"
      valueTaglineClassName="text-center"
      valueParagraphs={[
        'Over time, pavers and concrete can fade, stain and lose their clean look. Professional sealing helps guard against daily wear, enhances colour and keeps outdoor areas looking well maintained for longer.',
        'Using the industry best sealers and careful application, you get a sharper finish, stronger protection and easier ongoing cleaning.',
      ]}
      valueTagline="Restore Colour. Protect Your Surfaces."
      formServiceLabel="paver & concrete sealing"
      formTypeQuestion="What surface needs sealing?"
      formTypeOptions={['Concrete driveway', 'Pavers / patio area', 'Paths / walkways', 'Not sure']}
      formConditionQuestion="How would you describe the surface condition?"
      formConditionOptions={['Clean and ready to seal', 'Some fading or staining', 'Heavy weathering / patchy finish', 'Not sure - needs inspection']}
      formMessagePlaceholder="Tell us about the surface, size and access..."
      reliabilityHeadingLine1="PROTECTION THAT"
      reliabilityHeadingLine2="LASTS LONGER"
      features={features}
      trustHeading="Real Surface Transformation Results Across Adelaide"
      trustDescription="From faded driveways to tired patios, we help homeowners restore colour, improve appearance and protect their pavers and concrete for longer-lasting results."
      reviewsHeading="See What Adelaide Property Owners Are Saying"
      reviewServiceLabel="paver & concrete sealing"
      finalCtaDescription="Book your free quote for a professional sealing service with our Adelaide team."
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
