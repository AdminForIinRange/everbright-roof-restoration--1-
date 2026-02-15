
import React from 'react';
import Image from 'next/image';

type HeroBenefit = {
  title: string;
  subtitle: string;
};

type HeroProps = {
  titleLine?: string;
  titleHighlight: string;
  benefits: HeroBenefit[];
  ctaLabel?: string;
  leftImageSrc?: string;
  leftImageAlt?: string;
  rightImageSrc?: string;
  rightImageAlt?: string;
  sectionClassName?: string;
  leftAlignBenefits?: boolean;
  singleBackgroundImage?: boolean;
};

const Hero: React.FC<HeroProps> = ({
  titleLine = "Secure This Month's",
  titleHighlight,
  benefits,
  ctaLabel = 'Get Your Free Quote',
  leftImageSrc = '/heroimg/7.png',
  leftImageAlt = 'Exterior cleaning in progress',
  rightImageSrc = '/heroimg/8.png',
  rightImageAlt = 'Freshly cleaned exterior surface',
  sectionClassName = 'min-h-[70vh] md:min-h-[80vh]',
  leftAlignBenefits = false,
  singleBackgroundImage = false,
}) => {
  const benefitsClassName = leftAlignBenefits
    ? 'mb-6 max-w-sm space-y-2 text-left md:max-w-md'
    : 'mx-auto mb-6 max-w-sm space-y-2 text-left md:max-w-md';

  return (
    <section className={`relative flex items-center overflow-hidden bg-brand-dark md:py-20 lg:py-24 ${sectionClassName}`}>
      {/* Background Images Split */}
      <div className="absolute inset-0 z-0">
        {singleBackgroundImage ? (
          <div className="relative h-full w-full">
            <Image
              alt={leftImageAlt}
              src={leftImageSrc}
              fill
              sizes="100vw"
              className="object-cover opacity-40 md:opacity-50"
              priority
            />
          </div>
        ) : (
          <div className="flex h-full w-full">
            <div className="w-1/2 h-full relative">
              <Image
                alt={leftImageAlt}
                src={leftImageSrc}
                fill
                sizes="50vw"
                className="object-cover object-[100%_100%] opacity-35 md:opacity-45"
                priority
              />
            </div>
            <div className="w-1/2 h-full relative">
              <Image
                alt={rightImageAlt}
                src={rightImageSrc}
                fill
                sizes="50vw"
                className="object-cover object-[0%_100%] opacity-45 md:opacity-55"
                loading="eager"
              />
            </div>
          </div>
        )}
        <div className="absolute inset-0 roof-gradient-overlay"></div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 text-left text-white md:px-10 lg:px-12 xl:max-w-7xl">
        <h1 className="font-display mb-7 mt-10 text-5xl font-bold uppercase leading-[0.95] drop-shadow-xl sm:text-6xl md:max-w-5xl md:text-7xl lg:text-8xl xl:text-[8.75rem]">
          {titleLine}
          <br />
          <span className="text-brand-sky">{titleHighlight}</span>
        </h1>

        <div className={benefitsClassName}>
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start justify-start text-left space-x-3">
              <div className="bg-brand-sky rounded-md w-6 h-6 md:w-7 md:h-7 flex items-center justify-center shadow-lg flex-shrink-0">
                <span className="material-icons text-white font-bold text-base md:text-lg">check</span>
              </div>
              <div>
                <p className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight">{benefit.title}</p>
                <p className="text-xl md:text-2xl lg:text-3xl font-bold text-brand-sky">{benefit.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof */}
        <div className="mt-4 flex flex-col items-start justify-start space-y-2">
          <div className="flex items-center space-x-2 py-1">
            <div className="bg-white p-1 rounded-full w-6 h-6 flex items-center justify-center shadow-inner">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
              </svg>
            </div>
            <span className="text-lg font-bold text-amber-400 md:text-xl">5.0</span>
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-icons text-lg">star</span>
              ))}
            </div>
          </div>
          <p className="text-xs font-bold uppercase tracking-widest text-gray-300 md:text-sm">
            Google 5-Stars Rated
          </p>
        </div>

        <a
          href="#form"
          className="mt-7 inline-flex items-center justify-center rounded-full bg-brand-sky px-8 py-4 text-base font-bold uppercase tracking-widest text-white shadow-[0_15px_40px_-10px_rgba(56,189,248,0.5)] transition-all hover:bg-sky-400 active:scale-95 md:px-10 md:text-lg lg:px-12 lg:py-5 lg:text-xl"
        >
          {ctaLabel}
        </a>
      </div>

 
    </section>
  );
};

export default Hero;
