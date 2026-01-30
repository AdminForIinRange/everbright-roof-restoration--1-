
import React from 'react';

const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-[#1a1a1a] text-white py-3 px-4 text-center border-b border-gray-800">
      <p className="text-md md:text-lg font-medium tracking-wide">
        Attention <span className="text-brand-sky font-bold">Adelaide</span> Homeowners
      </p>
    </div>
  );
};

export default AnnouncementBar;
