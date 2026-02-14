
import React from 'react';

type ValuePropProps = {
  heading: string;
  paragraphs: string[];
  tagline: string;
  sectionClassName?: string;
};

const ValueProp: React.FC<ValuePropProps> = ({ heading, paragraphs, tagline, sectionClassName = 'bg-white px-6 py-16 text-center md:py-20' }) => {
  return (
    <section className={sectionClassName}>
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-8 font-display text-3xl font-bold uppercase leading-[1.1] text-dark-navy md:text-5xl">
          {heading}
        </h2>
        <div className="space-y-6 font-body text-base leading-relaxed text-gray-700 md:text-lg">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <p className="pt-4 text-xl font-extrabold tracking-tight text-dark-navy md:text-2xl">
            {tagline}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ValueProp;
