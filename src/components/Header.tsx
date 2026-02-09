
import React from 'react';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="bg-navy-dark text-white px-4 py-4 md:px-8 flex justify-between items-center border-b border-navy-dark/80">
      <div className="flex flex-col items-center">
        <Image
          src="/Presure%20washing-%20Driveways,%20houses,%20patios%20and%20more-3.png"
          alt="EverBright Pressure Washing logo"
          width={600}
          height={408}
          sizes="(min-width: 768px) 12rem, 10rem"
          className="h-10 md:h-12 w-auto object-contain"
          priority
        />
      </div>
      
      <div className="text-right">
        <p className="text-[10px] md:text-[12px] text-white/80 uppercase font-bold tracking-wider">Have A Question?</p>
        <a 
          className="text-sm md:text-base font-bold hover:text-brand-sky transition-colors flex items-center justify-end" 
          href="tel:+61 411 017 366"
        >
          <span className="material-icons text-sm mr-1 md:hidden">phone</span>
          +61 411 017 366
        </a>
      </div>
    </header>
  );
};

export default Header;
