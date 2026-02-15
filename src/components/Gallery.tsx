
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
  sectionClassName?: string;
  tileClassName?: string;
  imageSizes?: string;
};

const Gallery: React.FC<GalleryProps> = ({
  altPrefix = 'Roof',
  images,
  sectionClassName = 'grid grid-cols-2 md:grid-cols-3 gap-0.5 bg-black border-y border-black',
  tileClassName = 'relative overflow-hidden aspect-[3/4]',
  imageSizes = '(min-width: 768px) 33vw, 50vw',
}) => {
  const defaultImages: GalleryImage[] = [
    {
      src: "/beforeAfter/3.png",
      label: "Before",
      alt: `${altPrefix} before cleaning 1`
    },
    {
      src: "/beforeAfter/4.png",
      label: "After",
      alt: `${altPrefix} after cleaning 1`
    },
    {
      src: "/beforeAfter/5.png",
      label: "Before",
      alt: `${altPrefix} before cleaning 2`
    },
    {
      src: "/beforeAfter/6.png",
      label: "After",
      alt: `${altPrefix} after cleaning 2`
    },
    {
      src: "/beforeAfter/9.png",
      label: "Before",
      alt: `${altPrefix} before cleaning 3`
    },
    {
      src: "/beforeAfter/10.png",
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
            quality={74}
            className={`object-cover ${img.label === 'Before' ? 'opacity-80' : 'opacity-100'}`} 
          />
        </div>
      ))}
    </section>
  );
};

export default Gallery;
