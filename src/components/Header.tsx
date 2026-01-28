
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-black text-white px-4 py-4 md:px-8 flex justify-between items-center border-b border-gray-800">
      <div className="flex flex-col items-center">
        <img
          src="/Presure%20washing-%20Driveways,%20houses,%20patios%20and%20more-3.png"
          alt="EverBright Pressure Washing logo"
          className="h-10 md:h-12 w-auto object-contain"
        />
      </div>
      
      <div className="text-right">
        <p className="text-[10px] md:text-[12px] text-gray-400 uppercase font-bold tracking-wider">Have A Question?</p>
        <a 
          className="text-sm md:text-base font-bold hover:text-brand-sky transition-colors flex items-center justify-end" 
          href="tel:+61411017386"
        >
          <span className="material-icons text-sm mr-1 md:hidden">phone</span>
          +61 411 017 386
        </a>
      </div>
    </header>
  );
};

export default Header;
