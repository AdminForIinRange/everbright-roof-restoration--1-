
import React from 'react';

type FeatureItem = {
  title: string;
  desc: string;
};

type FeaturesProps = {
  features: FeatureItem[];
  sectionClassName?: string;
};

const Features: React.FC<FeaturesProps> = ({ features, sectionClassName = 'bg-dark-navy px-6 pb-20 pt-12 md:pt-16 lg:pb-24' }) => {

  return (
    <section className={sectionClassName}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 space-y-10 md:grid md:grid-cols-2 md:gap-x-10 md:gap-y-12 md:space-y-0 lg:gap-x-14 lg:gap-y-14">
          {features.map((f, i) => (
            <div key={i} className="flex items-start gap-5 md:rounded-2xl md:border md:border-white/10 md:bg-white/[0.02] md:p-6 lg:min-h-[235px] lg:p-7">
              <div className="flex-shrink-0 mt-1">
                <span className="material-icons text-brand-sky text-4xl">check_circle_outline</span>
              </div>
              <div>
                <h3 className="mb-2 font-display text-2xl font-bold uppercase tracking-wide text-white md:text-[1.75rem] lg:text-[2rem]">
                  {f.title}-
                </h3>
                <p className="font-body text-base leading-relaxed text-gray-300 md:text-lg">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#form"
            className="inline-block w-full max-w-md rounded-full bg-brand-sky py-6 shadow-[0_10px_30px_-5px_rgba(56,189,248,0.4)] transition-all hover:bg-brand-sky/90 active:scale-[0.98] md:w-auto md:min-w-[360px]"
          >
            <span className="font-display text-3xl font-bold uppercase tracking-wider text-white">
              Book Your Free Quote
            </span>
          </a>
        </div>
      </div>
      <div className="h-10 md:h-0"></div>
    </section>
  );
};

export default Features;
