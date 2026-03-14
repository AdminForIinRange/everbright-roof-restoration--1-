import React from 'react';

type FinalCTAProps = {
  headingLine?: string;
  headingHighlight?: string;
  description: string;
  sectionClassName?: string;
  headingClassName?: string;
};

const FinalCTA: React.FC<FinalCTAProps> = ({
  headingLine = 'CONTACT US',
  headingHighlight = 'TODAY',
  description,
  sectionClassName = 'bg-navy-dark px-6 pb-20 text-center md:pb-24',
  headingClassName,
}) => {
  return (
    <section className={sectionClassName}>
      <div className="mx-auto max-w-4xl border-t border-white/5 pt-10 lg:max-w-5xl">
        <h2
          className={`mb-6 font-display text-5xl font-black uppercase leading-[0.85] tracking-tighter text-white md:text-7xl lg:text-8xl ${headingClassName ?? ''}`}
        >
          {headingLine} <span className="text-brand-sky">{headingHighlight}</span>
        </h2>
        <p className="mx-auto max-w-2xl px-4 text-xl font-light leading-snug text-white opacity-90 md:text-2xl lg:max-w-3xl">
          {description}
        </p>

        <a
          href="#form"
          className="mt-12 inline-block rounded-full bg-brand-sky px-14 py-5 text-xl font-bold uppercase tracking-widest text-white shadow-[0_15px_40px_-10px_rgba(56,189,248,0.5)] transition-all hover:bg-sky-400 active:scale-95"
        >
          Get Your Free Quote
        </a>
      </div>
    </section>
  );
};

export default FinalCTA;
