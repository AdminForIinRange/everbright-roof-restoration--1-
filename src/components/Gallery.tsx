
import React from 'react';
import Image from 'next/image';

const Gallery: React.FC = () => {
  const images = [
    {
      src: "/beforeAfter/3.png",
      label: "Before",
      alt: "Roof before cleaning 1"
    },
    {
      src: "/beforeAfter/4.png",
      label: "After",
      alt: "Roof after cleaning 1"
    },
    {
      src: "/beforeAfter/5.png",
      label: "Before",
      alt: "Roof before cleaning 2"
    },
    {
      src: "/beforeAfter/6.png",
      label: "After",
      alt: "Roof after cleaning 2"
    },
    {
      src: "/beforeAfter/9.png",
      label: "Before",
      alt: "Roof before cleaning 3"
    },
    {
      src: "/beforeAfter/10.png",
      label: "After",
      alt: "Roof after cleaning 3"
    }
  ];

  return (
    <section className="grid grid-cols-2 md:grid-cols-3 gap-0.5 bg-black border-y border-black">
      {images.map((img, index) => (
        <div key={index} className="relative overflow-hidden aspect-[3/4]">
          <Image 
            alt={img.alt} 
            src={img.src} 
            fill
            sizes="(min-width: 768px) 33vw, 50vw"
            className={`object-cover ${img.label === 'Before' ? 'opacity-80' : 'opacity-100'}`} 
          />
        </div>
      ))}
    </section>
  );
};

export default Gallery;
