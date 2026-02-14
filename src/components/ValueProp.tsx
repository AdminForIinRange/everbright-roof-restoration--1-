
import React from 'react';

type ValuePropProps = {
  heading: string;
  paragraphs: string[];
  tagline: string;
  sectionClassName?: string;
};

const ValueProp: React.FC<ValuePropProps> = ({ heading, paragraphs, tagline, sectionClassName = 'bg-white py-16 px-6 text-center' }) => {
  return (
    <section className={sectionClassName}>
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-dark-navy text-3xl md:text-5xl font-bold uppercase mb-8 leading-[1.1]">
          {heading}
        </h2>
        <div className="font-body text-gray-700 space-y-6 text-base md:text-lg leading-relaxed">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <p className="font-extrabold text-dark-navy tracking-tight text-xl md:text-2xl pt-4">
            {tagline}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ValueProp;
