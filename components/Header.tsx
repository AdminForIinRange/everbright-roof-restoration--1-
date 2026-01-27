
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-black text-white px-4 py-4 md:px-8 flex justify-between items-center border-b border-gray-800">
      <div className="flex flex-col items-center">
        <div className="flex items-center space-x-1">
          <span className="material-icons text-2xl md:text-3xl text-brand-sky">home_repair_service</span>
          <span className="font-display text-xl md:text-2xl tracking-tight uppercase leading-none">EverBright</span>
        </div>
        <span className="text-[10px] md:text-[12px] uppercase tracking-[0.2em] text-gray-400 font-medium">Pressure Washing</span>
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
