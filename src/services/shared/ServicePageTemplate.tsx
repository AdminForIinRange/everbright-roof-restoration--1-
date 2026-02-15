import React from 'react';

import Features from '@/components/Features';
import FinalCTA from '@/components/FinalCTA';
import Gallery from '@/components/Gallery';
import Hero from '@/components/Hero';
import LeadForm from '@/components/LeadForm';
import MapSection from '@/components/MapSection';
import PageFrame from '@/components/PageFrame';
import Reviews from '@/components/Reviews';
import TrustSection from '@/components/TrustSection';
import ValueProp from '@/components/ValueProp';
import { buildServiceReviews } from '@/services/shared/reviews';

type FeatureItem = {
  title: string;
  desc: string;
};

type GalleryImage = {
  src: string;
  label: 'Before' | 'After';
  alt: string;
};

type ServicePageTemplateProps = {
  showOfferBanner?: boolean;
  heroTitleLine?: string;
  heroTitleHighlight: string;
  heroBenefits: Array<{ title: string; subtitle: string }>;
  heroLeftImageSrc?: string;
  heroRightImageSrc?: string;
  heroLeftImageAlt?: string;
  heroRightImageAlt?: string;
  heroLeftAlignBenefits?: boolean;
  heroSingleBackgroundImage?: boolean;
  readyHeadingLine1: string;
  readyHeadingLine2: string;
  galleryImages: GalleryImage[];
  valueHeading: string;
  valueParagraphs: string[];
  valueTagline: string;
  formServiceLabel: string;
  formTypeQuestion: string;
  formTypeOptions: string[];
  formConditionQuestion: string;
  formConditionOptions: string[];
  formMessagePlaceholder: string;
  reliabilityHeadingLine1: string;
  reliabilityHeadingLine2: string;
  features: FeatureItem[];
  trustHeading: string;
  trustDescription: string;
  reviewsHeading: string;
  reviewServiceLabel: string;
  finalCtaDescription: string;
  mapHeading: string;
  mapCheckPoints: string[];
};

const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({
  showOfferBanner = false,
  heroTitleLine,
  heroTitleHighlight,
  heroBenefits,
  heroLeftImageSrc,
  heroRightImageSrc,
  heroLeftImageAlt,
  heroRightImageAlt,
  heroLeftAlignBenefits = false,
  heroSingleBackgroundImage = false,
  readyHeadingLine1,
  readyHeadingLine2,
  galleryImages,
  valueHeading,
  valueParagraphs,
  valueTagline,
  formServiceLabel,
  formTypeQuestion,
  formTypeOptions,
  formConditionQuestion,
  formConditionOptions,
  formMessagePlaceholder,
  reliabilityHeadingLine1,
  reliabilityHeadingLine2,
  features,
  trustHeading,
  trustDescription,
  reviewsHeading,
  reviewServiceLabel,
  finalCtaDescription,
  mapHeading,
  mapCheckPoints,
}) => {
  return (
    <PageFrame showOfferBanner={showOfferBanner}>
      <Hero
        titleLine={heroTitleLine}
        titleHighlight={heroTitleHighlight}
        benefits={heroBenefits}
        leftImageSrc={heroLeftImageSrc}
        rightImageSrc={heroRightImageSrc}
        leftImageAlt={heroLeftImageAlt}
        rightImageAlt={heroRightImageAlt}
        leftAlignBenefits={heroLeftAlignBenefits}
        singleBackgroundImage={heroSingleBackgroundImage}
        sectionClassName="min-h-[76vh] md:min-h-[90vh]"
      />

      <section className="bg-everbright-blue px-6 py-14 text-center md:py-16 lg:py-20">
        <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold uppercase leading-tight tracking-tight text-white md:max-w-4xl md:text-5xl lg:text-6xl">
          {readyHeadingLine1}
          <br />
          {readyHeadingLine2}
        </h2>
      </section>

      <Gallery
        images={galleryImages}
        sectionClassName={
          galleryImages.length === 1
            ? 'grid grid-cols-1 bg-black border-y border-black'
            : 'grid grid-cols-2 gap-1 bg-black border-y border-black md:grid-cols-3'
        }
      />

      <ValueProp heading={valueHeading} paragraphs={valueParagraphs} tagline={valueTagline} sectionClassName="bg-white px-6 py-20 text-center" />

      <section id="form" className="relative z-10 mt-6 bg-[#003249] py-8 md:py-12 lg:py-14">
        <div className="mx-auto w-full max-w-2xl px-4 md:max-w-5xl lg:max-w-6xl">
          <LeadForm
            serviceLabel={formServiceLabel}
            typeQuestion={formTypeQuestion}
            typeOptions={formTypeOptions}
            conditionQuestion={formConditionQuestion}
            conditionOptions={formConditionOptions}
            messagePlaceholder={formMessagePlaceholder}
          />
        </div>
      </section>

      <section className="border-t border-white/10 bg-banner-dark px-6 py-8 text-center md:py-10">
        <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-white md:text-5xl lg:text-6xl">
          {reliabilityHeadingLine1}
          <br />
          {reliabilityHeadingLine2}
        </h2>
      </section>

      <Features features={features} />

      <TrustSection heading={trustHeading} description={trustDescription} />

      <Reviews heading={reviewsHeading} reviews={buildServiceReviews(reviewServiceLabel)} />

      <FinalCTA description={finalCtaDescription} />

      <MapSection heading={mapHeading} checkPoints={mapCheckPoints} />
    </PageFrame>
  );
};

export default ServicePageTemplate;
