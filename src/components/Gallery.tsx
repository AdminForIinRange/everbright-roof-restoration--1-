
import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWSeoFEDkWuGLocoYgzcaFcFoskT_TsUE1KHusYDvxDMPIYU6s0IPU0ZdxVr4pUb-5cN9pJrl7vgVmU5Tj9ZIvXl5E5RJKDeanAP7dEOmntoLurYNZHstBtA4zDpaU_wDrZLvtyS8D6XGLNH9HkgJQ0gkuzGThgyA07XrvI0Q8kB0_VJl8RNyEaHdjfgVekjnCaGHw4NwQsa9JrY1CeOr9x7aMyZFlDgMAPHDKdnAs4zmgZh0a3SZGWbB2bS4xgl64hsZ1OTMDy8rs",
      label: "Before",
      alt: "Roof before cleaning showing moss and stains"
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3fDnfSwvvd4eQTc-jRXsMPx3oCdEBbH1imMCaWhcog3MNkZCVjgC3Ohie6N107pfue2DZ3qz35pzKWf8H96tq2c86l3GbKOtmFGyJ1r7IXJ3-4AXbb5an7C1s4kowRB8hkWeZcvZdVAGI4nkQ9eVtEJNMPBZgijT4buLl9SF1azXBbOn3ueKVmOFSgA8VaI1y5GBlkIqJP7rtKJXhl_1xHLqAI7LOvAMM9-7KMlBKfWBw0VnSLj7wMK8TG3JSjz-pdjflkdPe_DQz",
      label: "After",
      alt: "Roof after professional cleaning"
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUdb0Jp0-F2N1nbJZcxNVW1NZrfiFQvgaMyT6roElYlbLIWyWnBsdAaI9ZMq28BHAjaMFjhNDIIzoPbGvs48SdpSW0axNf5qYAvIa039Y-ybOIBi2rcqpP5_DgKN5yT6PsF-l41umAguDFTlE4JACVjpIOx9KkQQ8ehfgHcEetxXC5xSaGMSZzYq5ZMwI5jfgcn9mKqktJUF8u4Vr_6nCNoqfjCNduhoY0qKw5gkSLFTC3cHLhGi-6l3intQBstc1s2UPvY2iF8HlT",
      label: "Before",
      alt: "Damaged roof tiles before treatment"
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBy-auc_cKX9nE_2Rj_42LYSF9Gu0CHM745SxMjpqnQpz7u5WPSy11MMLlTO3iisMWd-ibJJH5sgY-bVj3HthKh6LN5dTtOG1qnOpgXNUFuiilAqfUkHsg4GiDQV4Jpgv8LvQETQz3enyAA2a6Dm7ZzNq3Vm0NtIOMP14gMO6DvSFg2l75gq8ozUJ8X5b_Urt-OajFtkU1V-D8NqYlR18M8vYiB_jp2feHLCBcIdpEze3KqoiRqsPY-sln_f9H92BsV2v8oBFJhQV1Z",
      label: "After",
      alt: "Clean red tiles after treatment"
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6Qw4E22B-r4qlvfVRGweHV4GvZp6i9aeaEpBez9rQJu6gHqOjwA-Xy3UpeXNq1vgg2mH6P2wrUfXKTDERbLWL3nEHntOEPPTh5mPWWeL7g7qlB2DfUSJ-u-ex4BkKNqQZBzpY4gWWcs5A6KG1oh0hhDDWbWL760KuhQaMWbU-dPjjarNeUuA-_WoTks58bMLgNIj8OeTnn1ow2PZrbsdFuVZoHFDJbNcf9rrMl9qj2BstXAZELkqLzi_hUwdYJ3wpvVvmGR6quBQM",
      label: "Before",
      alt: "Dirty roof before service"
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYGAuOdU-JPbeAE2W1NLidv1KVp96ChS19FE8hAUVR3Gn4aFWVpHoVpbExhWGkWyhVXMLHYzoinCXW9z1KQ793HV77YRcqtesYO3EnShcPL5g6Jr1HjHn-KbicfaJPkqspwOF7Ctb7jWn4E7Ke_EiFokwOsaxfFL82PaaMbdKVTgb3BZ8Q08BMnMTiFVSiYiDCKs--v5CANl5WuGsPYSl8YjQG-lkPp-c1XzaR6lYPhL1c3-0vs_nJBWXmIMWgjxdxuY9QFqUa_KSb",
      label: "After",
      alt: "Restored roof after service"
    }
  ];

  return (
    <section className="bg-black border-y border-black">
      <div className="flex flex-nowrap gap-0.5 overflow-x-auto md:overflow-x-hidden hide-scrollbar py-2">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative overflow-hidden aspect-[3/4] w-32 sm:w-36 md:w-0 md:flex-1 md:basis-0 shrink-0 md:shrink"
          >
            <img 
              alt={img.alt} 
              className={`object-cover w-full h-full ${img.label === 'Before' ? 'opacity-80' : 'opacity-100'}`} 
              src={img.src} 
            />
            <span className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/70 text-white text-[9px] md:text-[10px] px-2.5 py-0.5 rounded-sm font-bold uppercase tracking-widest">
              {img.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
