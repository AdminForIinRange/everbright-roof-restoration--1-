
'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const serviceLinks = [
  { label: 'Home', href: '/' },
  { label: 'Roof Cleaning', href: '/roof-restoration' },
  { label: 'Pressure Washing', href: '/pressure-washing' },
  { label: 'Solar Cleaning', href: '/solar-cleaning' },
  { label: 'Gutter Cleaning', href: '/gutter-cleaning' },
  { label: 'House Washing', href: '/house-washing' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const handlePhoneClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== '/roof-restoration') {
      return;
    }

    const { gtag_report_conversion: reportConversion } = window as Window & typeof globalThis & {
      gtag_report_conversion?: (url?: string) => boolean;
    };

    if (typeof reportConversion !== 'function') {
      return;
    }

    event.preventDefault();
    reportConversion(event.currentTarget.getAttribute('href') ?? undefined);
  };

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-[1000] h-20 border-b border-navy-dark/80 bg-navy-dark px-4 text-white md:h-24 md:px-8">
        <div className="mx-auto flex h-full w-full items-center justify-between md:max-w-6xl xl:max-w-7xl">
          <Link href="/" className="flex flex-col items-center">
            <Image
              src="/Presure%20washing-%20Driveways,%20houses,%20patios%20and%20more-3.png"
              alt="EverBright Pressure Washing logo"
              width={600}
              height={408}
              sizes="(min-width: 768px) 12rem, 10rem"
              className="h-14 w-auto object-contain md:h-12 lg:h-14"
            />
          </Link>

          <div className="flex items-center justify-end gap-3 text-right">
           

            <a
              className="inline-flex h-10 w-10 items-center justify-center rounded-md text-white transition-colors hover:text-brand-sky"
              href="tel:+61 411 017 366"
              aria-label="Call +61 411 017 366"
              data-analytics-event="header_phone_icon_click"
              data-analytics-location="header"
              data-analytics-type="phone"
              onClick={handlePhoneClick}
            >
              <span className="material-icons text-[20px]">phone</span>
            </a>

            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md text-white transition-colors hover:text-brand-sky"
              aria-label="Open menu"
            >
              <span className="material-icons text-[22px]">menu</span>
            </button>
          </div>
        </div>
      </header>

      <div className="h-20 md:h-24" aria-hidden />

      <div className={`fixed inset-0 z-[1100] ${isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        <button
          type="button"
          aria-label="Close menu overlay"
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsMenuOpen(false)}
        />

        <aside
          className={`absolute right-0 top-0 flex h-full w-[85vw] max-w-sm flex-col border-l border-white/10 bg-[#0f1727] p-6 text-white shadow-2xl transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div className="mb-6 border-b border-white/10 pb-5">
            <Link href="/" className="mb-4 block w-fit" onClick={() => setIsMenuOpen(false)}>
              <Image
                src="/Presure%20washing-%20Driveways,%20houses,%20patios%20and%20more-3.png"
                alt="EverBright Pressure Washing logo"
                width={600}
                height={408}
                sizes="9rem"
                className="h-10 w-auto object-contain"
              />
            </Link>
          </div>

          <div className="mb-6 flex items-center justify-between">
            <p className="font-display text-2xl font-bold uppercase tracking-wide text-brand-sky">Menu</p>
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/25 transition-colors hover:border-brand-sky hover:text-brand-sky"
              aria-label="Close menu"
            >
              <span className="material-icons text-[20px]">close</span>
            </button>
          </div>

          <nav className="flex-1 space-y-1 overflow-y-auto pr-1">
            {serviceLinks.map((link) => {
              const isActive = link.href !== '/#form' && pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block rounded-md px-3 py-2.5 text-base font-semibold transition-colors ${isActive ? 'bg-brand-sky/20 text-brand-sky' : 'text-white hover:bg-white/10 hover:text-brand-sky'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-6 border-t border-white/10 pt-5">
            <Link
              href="/#form"
              className="flex w-full items-center justify-center rounded-full bg-brand-sky px-5 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-sky/90"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Free Quote
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Header;
