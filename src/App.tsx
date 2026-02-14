import React from 'react';

import AnnouncementBar from './components/AnnouncementBar';
import Features from './components/Features';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Hero from './components/Hero';
import LeadForm from './components/LeadForm';
import MapSection from './components/MapSection';
import OfferBanner from './components/OfferBanner';
import Reviews from './components/Reviews';
import TrustSection from './components/TrustSection';
import ValueProp from './components/ValueProp';
import { buildServiceReviews } from './services/shared/reviews';

const features = [
  {
    title: 'Certified & Insured',
    desc: 'Your home is protected. We carry full public liability insurance for all roof restoration services.',
  },
  {
    title: 'Surface-Safe Methods',
    desc: 'We use controlled, roof-safe cleaning and treatment methods to restore appearance without avoidable damage.',
  },
  {
    title: 'Longer Lasting Protection',
    desc: 'Premium treatments help reduce quick regrowth of mould and lichen after cleaning.',
  },
  {
    title: 'Experienced & Trusted',
    desc: 'Every job is completed by trained local technicians with a strong track record across Adelaide.',
  },
];

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <AnnouncementBar />
      <OfferBanner />

      <main className="flex-grow">
        <Hero
          titleHighlight="Exclusive Deal"
          benefits={[
            { title: 'Full Roof Cleaning', subtitle: 'Starting From $899' },
            { title: 'Premium Treatment', subtitle: 'Mould Prevention' },
          ]}
          leftAlignBenefits
        />

        <section className="bg-everbright-blue px-6 py-12 text-center md:py-16 lg:py-20">
          <h2 className="font-display text-brand-sky text-4xl md:text-5xl font-bold uppercase leading-tight tracking-tight max-w-2xl mx-auto">
            Ready to Clean &
            <br />
            Protect Your Roof?
          </h2>
        </section>

        <Gallery />

        <ValueProp
          heading="WE'LL BRING YOUR ROOF BACK TO LIFE"
          paragraphs={[
            "Say goodbye to mould-stained tiles and hello to a professionally cleaned and treated roof that stays cleaner for longer.",
            'Our roof restoration process improves presentation, helps protect your surface, and supports long-term property value.',
          ]}
          tagline="Restore Today. Protect for Longer."
        />

        <section id="form" className="relative z-10 mt-6 bg-[#003249] py-6 md:py-12 lg:py-14">
          <div className="mx-auto w-full max-w-2xl px-4 md:max-w-3xl lg:max-w-4xl">
            <LeadForm
              serviceLabel="roof restoration"
              typeQuestion="What type of roof do you have?"
              typeOptions={['Concrete tile', 'Terracotta tile', 'Colorbond / metal', 'Not sure']}
              conditionQuestion="How would you describe your roof's current condition?"
              conditionOptions={[
                'Light surface staining',
                'Moderate mould / lichen',
                'Heavy mould & build-up',
                'Not sure - needs inspection',
              ]}
              messagePlaceholder="Tell us about your roof restoration needs..."
            />
          </div>
        </section>

        <section className="border-t border-white/10 bg-banner-dark px-6 py-8 text-center md:py-10">
          <h2 className="font-display text-white text-4xl md:text-5xl font-bold uppercase tracking-tight">
            A Service You
            <br />
            Can Rely On
          </h2>
        </section>

        <Features features={features} />

        <TrustSection
          heading="See How We've Restored Roofs Across Adelaide"
          description="Homeowners choose us for reliable workmanship, clear communication, and consistent restoration outcomes. We deliver practical, roof-safe solutions designed for Adelaide conditions."
        />

        <Reviews heading="See What Adelaide Homeowners Are Saying" reviews={buildServiceReviews('roof restoration')} />

        <FinalCTA description="Limited availability - restore and protect your roof with Adelaide's trusted roof restoration specialists." />

        <MapSection
          heading="Trusted Roof Restoration Specialists"
          checkPoints={[
            'Fully Insured & Safety Focused',
            'Roof-Safe Cleaning & Treatment',
            'Premium Approved Products',
            'Highly Experienced Local Team',
          ]}
        />
      </main>

      <Footer />
    </div>
  );
};

export default App;
