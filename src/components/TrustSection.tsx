
import React from 'react';

const TrustSection: React.FC = () => {
  return (
    <section className="px-6 py-16 bg-white">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-dark-navy leading-tight mb-8 uppercase tracking-tight">
          See How We've Restored and Protected Roofs Across Adelaide
        </h2>
        <p className="text-slate-700 text-lg md:text-xl leading-relaxed mb-10">
          With years of hands-on experience, we know homeowners care about 
          <span className="text-brand-sky font-bold"> trust, precision, and results that last.</span> 
          Our professional team specialises in roof cleaning and treatment services designed to 
          <span className="text-brand-sky font-bold"> safely restore your roof's appearance while helping slow mould and lichen return.</span> 
          We use proven, roof-safe methods and premium Australian-approved products to deliver consistent, high-quality results across Adelaide homes.
        </p>
        
        <div className="flex justify-center mt-4">
          <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center bg-black rounded-full border-4 border-gold shadow-2xl">
            <div className="text-center text-gold px-2">
              <div className="text-[10px] md:text-xs uppercase font-bold tracking-widest leading-none mb-1">Satisfaction</div>
              <div className="text-3xl md:text-4xl font-black leading-none my-0.5">100%</div>
              <div className="text-[10px] md:text-xs uppercase font-bold tracking-widest leading-none mt-1">Guaranteed</div>
              <div className="flex justify-center gap-0.5 mt-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-xs md:text-sm fill-current" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
