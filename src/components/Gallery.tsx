
import React from 'react';
import Image from 'next/image';

type GalleryImage = {
  src: string;
  label: 'Before' | 'After';
  alt: string;
};

type GalleryProps = {
  altPrefix?: string;
  images?: GalleryImage[];
  showLabelOverlay?: boolean;
  sectionClassName?: string;
  tileClassName?: string;
  imageSizes?: string;
};

const Gallery: React.FC<GalleryProps> = ({
  altPrefix = 'Roof',
  images,
  showLabelOverlay = false,
  sectionClassName = 'grid grid-cols-2 md:grid-cols-3 gap-0.5 bg-black border-y border-black',
  tileClassName = 'relative overflow-hidden aspect-[3/4]',
  imageSizes = '(min-width: 768px) 33vw, 50vw',
}) => {
  const defaultImages: GalleryImage[] = [
    {
      src: "/beforeAfter/3.webp",
      label: "Before",
      alt: `${altPrefix} before cleaning 1`
    },
    {
      src: "/beforeAfter/4.webp",
      label: "After",
      alt: `${altPrefix} after cleaning 1`
    },
    {
      src: "/beforeAfter/5.webp",
      label: "Before",
      alt: `${altPrefix} before cleaning 2`
    },
    {
      src: "/beforeAfter/6.webp",
      label: "After",
      alt: `${altPrefix} after cleaning 2`
    },
    {
      src: "/beforeAfter/9.webp",
      label: "Before",
      alt: `${altPrefix} before cleaning 3`
    },
    {
      src: "/beforeAfter/10.webp",
      label: "After",
      alt: `${altPrefix} after cleaning 3`
    }
  ];

  return (
    <section className={sectionClassName}>
      {(images ?? defaultImages).map((img, index) => (
        <div key={index} className={tileClassName}>
          <Image 
            alt={img.alt} 
            src={img.src} 
            fill
            sizes={imageSizes}
            quality={62}
            className={`object-cover ${img.label === 'Before' ? 'opacity-80' : 'opacity-100'}`} 
          />
          {showLabelOverlay && (
            <div className="pointer-events-none absolute bottom-5 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center justify-center rounded-none border border-white/15 bg-[linear-gradient(180deg,rgba(11,21,32,0.96)_0%,rgba(6,12,18,0.96)_100%)] px-7 py-2.5 shadow-[0_18px_45px_-22px_rgba(0,0,0,0.9)] md:px-9 md:py-3">
                <span
                  className={`font-display text-3xl font-black leading-none tracking-tight drop-shadow-[0_2px_0_rgba(0,0,0,0.75)] md:text-4xl ${
                    img.label === 'Before' ? 'text-white/90' : 'text-white'
                  }`}
                >
                  {img.label}
                </span>
              </span>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default Gallery;
