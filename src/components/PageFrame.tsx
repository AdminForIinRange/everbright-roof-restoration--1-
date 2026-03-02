import React from 'react';

import AnnouncementBar from './AnnouncementBar';
import Footer from './Footer';
import Header from './Header';


type PageFrameProps = {
  children: React.ReactNode;
  showOfferBanner?: boolean;
};

const PageFrame: React.FC<PageFrameProps> = ({ children, showOfferBanner = true }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <AnnouncementBar />
 
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default PageFrame;
