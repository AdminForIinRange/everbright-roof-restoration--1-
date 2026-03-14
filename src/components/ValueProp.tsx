
import React from 'react';
import Image from 'next/image';

type ValuePropProps = {
  heading: string;
  paragraphs: string[];
  tagline: string;
  density?: 'default' | 'compact';
  headingPlacement?: 'top' | 'afterImage';
  sectionClassName?: string;
  headingClassName?: string;
  bodyClassName?: string;
  taglineClassName?: string;
  imageSrc?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageClassName?: string;
};

const ValueProp: React.FC<ValuePropProps> = ({
  heading,
  paragraphs,
  tagline,
  density = 'default',
  headingPlacement = 'top',
  sectionClassName = 'bg-white px-6 py-16 text-center md:py-20',
  headingClassName,
  bodyClassName,
  taglineClassName,
  imageSrc,
  imageAlt,
  imageWidth = 564,
  imageHeight = 670,
  imageClassName = 'mb-8 h-auto w-full max-w-md rounded-2xl border border-slate-200 object-cover shadow-sm',
}) => {
  const hasHeading = heading.trim().length > 0;
  const headingSpacingClassName = density === 'compact' ? 'mb-5' : 'mb-8';
  const bodySpacingClassName = density === 'compact' ? 'space-y-4' : 'space-y-6';
  const taglineSpacingClassName = density === 'compact' ? 'pt-2' : 'pt-4';
  const headingMarkup = hasHeading ? (
    <h2
      className={`${headingSpacingClassName} font-display text-3xl font-bold uppercase leading-[1.1] text-dark-navy md:text-5xl lg:text-6xl ${headingClassName ?? ''}`}
    >
      {heading}
    </h2>
  ) : null;

  return (
    <section className={sectionClassName}>
      <div className="mx-auto max-w-4xl lg:max-w-5xl">
        {headingPlacement === 'top' && headingMarkup}
        {imageSrc && imageAlt && (
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={imageWidth}
            height={imageHeight}
            sizes="(min-width: 1024px) 28rem, (min-width: 768px) 24rem, 100vw"
            className={imageClassName}
          />
        )}
        {headingPlacement === 'afterImage' && headingMarkup}
        <div
          className={`${bodySpacingClassName} font-body text-base leading-relaxed text-gray-700 md:text-lg lg:text-xl ${bodyClassName ?? ''}`}
        >
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <p
            className={`${taglineSpacingClassName} text-xl font-extrabold tracking-tight text-dark-navy md:text-2xl ${taglineClassName ?? ''}`}
          >
            {tagline}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ValueProp;
