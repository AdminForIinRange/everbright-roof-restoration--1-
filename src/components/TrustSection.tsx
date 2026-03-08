
import React from 'react';

type TrustSectionProps = {
  heading: string;
  description: string;
  tagline?: string;
  align?: 'center' | 'left';
  variant?: 'default' | 'titleOnly' | 'stacked';
  sectionClassName?: string;
};

const TrustSection: React.FC<TrustSectionProps> = ({
  heading,
  description,
  tagline,
  align = 'center',
  variant = 'default',
  sectionClassName = 'bg-white px-6 py-16 md:py-20',
}) => {
  if (variant === 'titleOnly') {
    return (
      <section className={sectionClassName}>
        <div className="mx-auto max-w-6xl xl:max-w-7xl">
          <h2 className="mx-auto max-w-4xl text-center font-display text-3xl font-bold uppercase leading-tight tracking-tight text-dark-navy md:text-5xl lg:text-6xl">
            {heading}
          </h2>
        </div>
      </section>
    );
  }

  if (variant === 'stacked') {
    return (
      <section className={sectionClassName}>
        <div className="mx-auto max-w-6xl xl:max-w-7xl">
          <h2 className="mx-auto max-w-4xl text-center font-display text-3xl font-bold uppercase leading-tight tracking-tight text-dark-navy md:text-5xl lg:text-6xl">
            {heading}
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-left text-lg leading-relaxed text-slate-700 md:text-xl">
            {description}
          </p>

          {tagline && (
            <p className="mx-auto mt-8 max-w-4xl text-center font-display text-xl font-bold uppercase tracking-wide text-dark-navy md:text-2xl">
              {tagline}
            </p>
          )}

          <div className="mt-8 flex justify-center">
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
      </section>
    );
  }

  const contentAlignClassName =
    align === 'left'
      ? 'max-w-xl text-left lg:grid lg:max-w-none lg:grid-cols-[minmax(0,1fr)_240px] lg:items-center lg:gap-14'
      : 'mx-auto max-w-xl text-center lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-[minmax(0,1fr)_240px] lg:items-center lg:gap-14 lg:text-left';

  const badgeAlignClassName =
    align === 'left' ? 'mt-4 flex justify-start lg:mt-0 lg:justify-end' : 'mt-4 flex justify-center lg:mt-0 lg:justify-end';

  return (
    <section className={sectionClassName}>
      <div className="mx-auto max-w-6xl xl:max-w-7xl">
        <div className={contentAlignClassName}>
          <div>
            <h2 className="mb-8 font-display text-3xl font-bold uppercase leading-tight tracking-tight text-dark-navy md:text-5xl lg:text-6xl">
              {heading}
            </h2>
            {tagline ? (
              <>
                <p className="text-lg leading-relaxed text-slate-700 md:text-xl">
                  {description}
                </p>
                <p className="mb-10 mt-6 font-display text-xl font-bold uppercase tracking-wide text-dark-navy md:text-2xl lg:mb-0">
                  {tagline}
                </p>
              </>
            ) : (
              <p className="mb-10 text-lg leading-relaxed text-slate-700 md:text-xl lg:mb-0">
                {description}
              </p>
            )}
          </div>

          <div className={badgeAlignClassName}>
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
