
import React from 'react';

type ValuePropProps = {
  heading: string;
  paragraphs: string[];
  tagline: string;
  density?: 'default' | 'compact';
  sectionClassName?: string;
};

const ValueProp: React.FC<ValuePropProps> = ({
  heading,
  paragraphs,
  tagline,
  density = 'default',
  sectionClassName = 'bg-white px-6 py-16 text-center md:py-20',
}) => {
  const headingSpacingClassName = density === 'compact' ? 'mb-5' : 'mb-8';
  const bodySpacingClassName = density === 'compact' ? 'space-y-4' : 'space-y-6';
  const taglineSpacingClassName = density === 'compact' ? 'pt-2' : 'pt-4';

  return (
    <section className={sectionClassName}>
      <div className="mx-auto max-w-4xl lg:max-w-5xl">
        <h2 className={`${headingSpacingClassName} font-display text-3xl font-bold uppercase leading-[1.1] text-dark-navy md:text-5xl lg:text-6xl`}>
          {heading}
        </h2>
        <div className={`${bodySpacingClassName} font-body text-base leading-relaxed text-gray-700 md:text-lg lg:text-xl`}>
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <p className={`${taglineSpacingClassName} text-xl font-extrabold tracking-tight text-dark-navy md:text-2xl`}>
            {tagline}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ValueProp;
