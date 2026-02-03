
import React from 'react';
import Image from 'next/image';
import LeadForm from './LeadForm';

const Hero: React.FC = () => {
  const benefits = [
    { title: "Full Roof Cleaning", subtitle: "Starting From $899" },
    { title: "Mould Prevention", subtitle: "Roof Treatment" }
  ];

  return (
    <section className="relative bg-brand-dark min-h-[70vh] md:min-h-[80vh] overflow-hidden flex items-center md:py-20">
      {/* Background Images Split */}
      <div className="absolute inset-0 z-0">
        <div className="flex h-full w-full">
          <div className="w-1/2 h-full relative">
            <Image
              alt="Roof cleaning in progress"
              src="/heroimg/7.png"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-[100%_100%] opacity-35 md:opacity-45"
              priority
            />
          </div>
          <div className="w-1/2 h-full relative">
            <Image
              alt="Clean roof after restoration"
              src="/heroimg/8.png"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-[0%_100%] opacity-45 md:opacity-55"
              priority
            />
          </div>
        </div>
        <div className="absolute inset-0 roof-gradient-overlay"></div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 text-white text-left">
        <h1 className="font-display text-5xl sm:text-6xl md:text-8xl uppercase font-bold leading-[0.95] mb-7 drop-shadow-xl">
          Secure This Month's<br/>
          <span className="text-brand-sky">Exclusive Deal</span>
        </h1>

        <div className="space-y-2 max-w-sm mx-auto mb-6 text-left">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start justify-start text-left space-x-3">
              <div className="bg-brand-sky rounded-md w-6 h-6 md:w-7 md:h-7 flex items-center justify-center shadow-lg flex-shrink-0">
                <span className="material-icons text-white font-bold text-base md:text-lg">check</span>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-bold leading-tight">{benefit.title}</p>
                <p className="text-xl md:text-2xl font-bold text-brand-sky">{benefit.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof */}
        <div className="flex flex-col items-start justify-start space-y-2 mt-4">
          <div className="flex items-center space-x-2 py-1">
            <div className="bg-white p-1 rounded-full w-6 h-6 flex items-center justify-center shadow-inner">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
              </svg>
            </div>
            <span className="text-lg font-bold text-amber-400">5.0</span>
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-icons text-lg">star</span>
              ))}
            </div>
          </div>
          <p className="text-xs font-bold uppercase tracking-widest text-gray-300">
            Google 5-Stars Rated
          </p>
        </div>

        <a
          href="#form"
          className="mt-7 inline-flex items-center justify-center bg-brand-sky hover:bg-sky-400 active:scale-95 text-white font-bold py-4 px-8 rounded-full transition-all shadow-[0_15px_40px_-10px_rgba(56,189,248,0.5)] uppercase tracking-widest text-base md:text-lg"
        >
          Get Your Free Quote
        </a>
      </div>

 
    </section>
  );
};

export default Hero;
