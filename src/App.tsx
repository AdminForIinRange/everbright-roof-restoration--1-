
import React from 'react';
import Header from './components/Header';
import AnnouncementBar from './components/AnnouncementBar';
import OfferBanner from './components/OfferBanner';
import Hero from './components/Hero';
import LeadForm from './components/LeadForm';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import ValueProp from './components/ValueProp';
import Features from './components/Features';
import TrustSection from './components/TrustSection';
import Reviews from './components/Reviews';
import FinalCTA from './components/FinalCTA';
import MapSection from './components/MapSection';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <AnnouncementBar />
      <OfferBanner />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Main Form Section */}
        <section id="quiz" className="bg-everbright-blue px-4 pt-10 pb-20 -mt-16 md:-mt-24 relative z-20">
          <LeadForm />
        </section>

        {/* Gallery and Service Details */}
        <section className="bg-banner-dark py-12 px-6 text-center">
          <h2 className="font-display text-brand-sky text-4xl md:text-5xl font-bold uppercase leading-tight tracking-tight max-w-2xl mx-auto">
            Ready to Clean &<br/>Protect Your Roof?
          </h2>
        </section>

        <Gallery />
        <ValueProp />
        
        <section className="bg-banner-dark py-8 px-6 text-center border-t border-white/10">
          <h2 className="font-display text-brand-sky text-4xl md:text-5xl font-bold uppercase tracking-tight">
            A Service You Can Rely On
          </h2>
        </section>

        <Features />

        <TrustSection />
        <Reviews />
        <FinalCTA />
        
        {/* Final Map Segment */}
        <MapSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;
