import React from 'react';

const FinalCTA: React.FC = () => {
  return (
    <section className="bg-navy-dark pb-20 px-6 text-center">
      <div className="max-w-2xl mx-auto pt-10 border-t border-white/5">
        <h2 className="font-display font-black tracking-tighter text-white text-5xl md:text-7xl mb-6 uppercase leading-[0.85]">
          CONTACT US <span className="text-brand-sky">TODAY</span>
        </h2>
        <p className="text-white text-xl md:text-2xl font-light leading-snug px-4 opacity-90 max-w-lg mx-auto">
          Limited availability -- <span className="text-brand-sky font-bold">restore</span> and{' '}
          <span className="text-brand-sky font-bold">protect</span> your roof with Adelaide's trusted
          specialists.
        </p>

        <a
          href="#form"
          className="mt-12 inline-block bg-brand-sky hover:bg-sky-400 active:scale-95 text-white font-bold py-5 px-14 rounded-full transition-all shadow-[0_15px_40px_-10px_rgba(56,189,248,0.5)] uppercase tracking-widest text-xl"
        >
          Get Your Free Quote
        </a>
      </div>
    </section>
  );
};

export default FinalCTA;
