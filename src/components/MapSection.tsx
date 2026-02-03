
import React from 'react';

const MapSection: React.FC = () => {
  const checkPoints = [
    "Fully Insured & Safety Focused",
    "Roof-Safe Methods",
    "Premium Approved Treatments",
    "Highly Experienced Local Team"
  ];

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="w-full md:w-1/2 overflow-hidden rounded-2xl shadow-2xl border border-slate-200">
            <iframe
              title="Google Maps - Adelaide SA"
              className="w-full h-72 md:h-[400px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              src="https://www.google.com/maps?q=Adelaide%20SA&output=embed"
            />
          </div>
          
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-navy-custom mb-8 leading-none uppercase tracking-tight">
              Trusted Roof Cleaning Specialists
            </h2>
            
            <ul className="space-y-5 mb-12">
              {checkPoints.map((point, index) => (
                <li key={index} className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-brand-sky flex-shrink-0 text-3xl">check</span>
                  <span className="text-slate-800 font-bold text-lg md:text-xl tracking-tight">{point}</span>
                </li>
              ))}
            </ul>
            
            <a
              href="#form"
              className="block w-full bg-brand-sky hover:bg-sky-400 active:scale-[0.98] transition-all text-white font-display font-bold text-3xl py-6 rounded-full shadow-[0_15px_30px_-5px_rgba(56,189,248,0.4)] tracking-wide uppercase text-center"
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
