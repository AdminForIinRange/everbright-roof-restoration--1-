
import React from 'react';

type MapSectionProps = {
  heading: string;
  checkPoints: string[];
  sectionClassName?: string;
};

const MapSection: React.FC<MapSectionProps> = ({ heading, checkPoints, sectionClassName = 'bg-white py-16 px-6' }) => {

  return (
    <section className={sectionClassName}>
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-stretch md:gap-12 lg:gap-16">
          <div className="w-full overflow-hidden rounded-2xl border border-slate-200 shadow-2xl md:w-1/2">
            <iframe
              title="Google Maps - Adelaide SA"
              className="h-72 w-full border-0 md:h-[420px] lg:h-[460px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              src="https://www.google.com/maps?q=Adelaide%20SA&output=embed"
            />
          </div>
          
          <div className="flex w-full flex-col justify-center md:w-1/2">
            <h2 className="mb-8 font-display text-3xl font-extrabold uppercase leading-none tracking-tight text-navy-custom md:text-5xl">
              {heading}
            </h2>
            
            <ul className="mb-12 space-y-5">
              {checkPoints.map((point, index) => (
                <li key={index} className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-brand-sky flex-shrink-0 text-3xl">check</span>
                  <span className="text-slate-800 font-bold text-lg md:text-xl tracking-tight">{point}</span>
                </li>
              ))}
            </ul>
            
            <a
              href="#form"
              className="block w-full rounded-full bg-brand-sky py-6 text-center font-display text-3xl font-bold uppercase tracking-wide text-white shadow-[0_15px_30px_-5px_rgba(56,189,248,0.4)] transition-all hover:bg-sky-400 active:scale-[0.98] md:max-w-md"
            >
              Book Your Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
