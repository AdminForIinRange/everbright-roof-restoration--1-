
import React from 'react';

type TrustSectionProps = {
  heading: string;
  description: string;
  sectionClassName?: string;
};

const TrustSection: React.FC<TrustSectionProps> = ({ heading, description, sectionClassName = 'bg-white px-6 py-16 md:py-20' }) => {
  return (
    <section className={sectionClassName}>
      <div className="mx-auto max-w-6xl xl:max-w-7xl">
        <div className="mx-auto max-w-xl text-center lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-[minmax(0,1fr)_240px] lg:items-center lg:gap-14 lg:text-left">
          <div>
            <h2 className="mb-8 font-display text-3xl font-bold uppercase leading-tight tracking-tight text-dark-navy md:text-5xl lg:text-6xl">
              {heading}
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-slate-700 md:text-xl lg:mb-0">
              {description}
            </p>
          </div>

          <div className="mt-4 flex justify-center lg:mt-0 lg:justify-end">
            <div className="relative flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border-4 border-gold bg-black shadow-2xl sm:h-36 sm:w-36 md:h-40 md:w-40">
              <div className="px-2 text-center text-gold">
                <div className="mb-1 text-[9px] font-bold uppercase leading-none tracking-widest sm:text-[10px] md:text-xs">Satisfaction</div>
                <div className="my-0.5 text-2xl font-black leading-none sm:text-3xl md:text-4xl">100%</div>
                <div className="mt-1 text-[9px] font-bold uppercase leading-none tracking-widest sm:text-[10px] md:text-xs">Guaranteed</div>
                <div className="mt-1 flex justify-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined fill-current text-xs sm:text-sm md:text-base" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
