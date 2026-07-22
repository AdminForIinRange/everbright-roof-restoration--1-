import React from 'react';

import Footer from './Footer';
import Header from './Header';


type PageFrameProps = {
  children: React.ReactNode;
  showOfferBanner?: boolean;
};

const PageFrame: React.FC<PageFrameProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default PageFrame;
