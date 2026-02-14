
import React from 'react';

type FeatureItem = {
  title: string;
  desc: string;
};

type FeaturesProps = {
  features: FeatureItem[];
  sectionClassName?: string;
};

const Features: React.FC<FeaturesProps> = ({ features, sectionClassName = 'bg-dark-navy pt-12 pb-20 px-6' }) => {

  return (
    <section className={sectionClassName}>
      <div className="max-w-2xl mx-auto">
        <div className="space-y-10 mb-16">
          {features.map((f, i) => (
            <div key={i} className="flex items-start gap-5">
              <div className="flex-shrink-0 mt-1">
                <span className="material-icons text-brand-sky text-4xl">check_circle_outline</span>
              </div>
              <div>
                <h3 className="font-display text-white text-2xl font-bold tracking-wide mb-2 uppercase">
                  {f.title}-
                </h3>
                <p className="font-body text-gray-300 text-base md:text-lg leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#form"
            className="inline-block w-full max-w-md bg-brand-sky hover:bg-brand-sky/90 active:scale-[0.98] transition-all py-6 rounded-full shadow-[0_10px_30px_-5px_rgba(56,189,248,0.4)]"
          >
            <span className="font-display text-white text-3xl font-bold uppercase tracking-wider">
              Book Your Free Quote
            </span>
          </a>
        </div>
      </div>
      <div className="h-10"></div>
    </section>
  );
};

export default Features;
