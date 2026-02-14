import React from 'react';

import AnnouncementBar from './AnnouncementBar';
import Footer from './Footer';
import Header from './Header';
import OfferBanner from './OfferBanner';

type PageFrameProps = {
  children: React.ReactNode;
  showOfferBanner?: boolean;
};

const PageFrame: React.FC<PageFrameProps> = ({ children, showOfferBanner = true }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <AnnouncementBar />
      {showOfferBanner ? <OfferBanner /> : null}
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default PageFrame;
