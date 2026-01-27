
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
            <img 
              alt="Map of Adelaide showing service area" 
              className="w-full h-72 md:h-[400px] object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlC0qgKKSy3PyBTj6N7I9ttNzn-TsWQF64hpEpLYVM71GCrSvFlDQg8v3ZALbAVJq0KIsO5LxX5ot7l7lWrdyFolZdZYInew91LVy17emaYt1aHAtQH9KTCtweBnd-3VHE2d7P-79zIXepOaNS0X2UaVC6slG9qMkJJizx9iAG8hspWVsC_Ywx3mSyt_8ZtqOn82hMakiGVz-8Xxt-wfvX-r12YVA4oIYohHMNV9wBL9cByPGaHGsAND30kSLlf4FrhLVpnrsPB8En" 
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
              href="#quiz"
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
