'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuLinks = [
  { label: 'Home', href: '/' },
  { label: 'Roof Cleaning', href: '/roof-restoration' },
  { label: 'Pressure Washing', href: '/pressure-washing' },
  { label: 'Solar Cleaning', href: '/solar-cleaning' },
  { label: 'Gutter Cleaning', href: '/gutter-cleaning' },
  { label: 'Paver & Concrete Sealing', href: '/paver-concrete-sealing' },
];

export default function HeroTopBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const handlePhoneClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== '/roof-restoration') {
      return;
    }

    const { gtag_report_conversion: reportConversion } = window as Window &
      typeof globalThis & {
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
      <div className="fixed inset-x-0 top-0 z-[2500] border-b border-white/10 bg-[#0B1E2B]/96 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-md">
        <div className="mx-auto flex h-[72px] w-full max-w-md items-center gap-3 px-4">
          <Link
            href="/"
            className="flex h-10 shrink-0 items-center justify-center overflow-hidden"
            aria-label="Go to homepage"
          >
            <Image
              src="/Presure%20washing-%20Driveways,%20houses,%20patios%20and%20more-3.png"
              alt="EverBright logo"
              width={88}
              height={60}
              sizes="48px"
              className="h-8 w-auto object-contain"
            />
          </Link>

          <a className="group min-w-0 flex-1" href="tel:0411017366" onClick={handlePhoneClick}>
            <div className="bg-primary/90 border-4 border-[#38BDF8] px-2 py-1 transition-colors duration-300 hover:bg-primary">
              <span className="block truncate text-white font-display text-[0.95rem] font-medium uppercase tracking-wide transition-transform group-hover:scale-[1.01]">
                Click to call: 0411 017 366
              </span>
            </div>
          </a>

          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-white transition-colors hover:bg-white/10"
            aria-label="Open menu"
          >
            <span className="material-icons text-[28px] leading-none">menu</span>
          </button>
        </div>
      </div>

      <div className="mb-8 h-[72px]" aria-hidden />

      <div className={`fixed inset-0 z-[2600] ${isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        <button
          type="button"
          aria-label="Close menu overlay"
          className={`absolute inset-0 bg-black/55 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsMenuOpen(false)}
        />

        <aside
          className={`absolute right-0 top-0 flex h-full w-[86vw] max-w-[320px] flex-col bg-[#111827] px-5 pb-6 pt-5 text-white shadow-2xl transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div className="pb-5">
            <Link href="/" className="block w-fit" onClick={() => setIsMenuOpen(false)}>
              <Image
                src="/Presure%20washing-%20Driveways,%20houses,%20patios%20and%20more-3.png"
                alt="EverBright logo"
                width={92}
                height={62}
                sizes="92px"
                className="h-11 w-auto object-contain"
              />
            </Link>
          </div>

          <div className="mb-5 border-b border-white/10" />

          <div className="mb-8 flex items-center justify-between">
            <p className="font-display text-[2rem] font-bold uppercase leading-none tracking-wide text-[#38BDF8]">
              Menu
            </p>
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/25 text-white transition-colors hover:border-[#38BDF8] hover:text-[#38BDF8]"
              aria-label="Close menu"
            >
              <span className="material-icons text-[24px] leading-none">close</span>
            </button>
          </div>

          <nav className="flex-1 space-y-2 overflow-y-auto">
            {menuLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block rounded-lg px-3 py-3 text-left text-[1.05rem] font-semibold transition-colors ${
                    isActive
                      ? 'bg-[#173a57] text-[#38BDF8]'
                      : 'text-white hover:bg-white/5 hover:text-[#38BDF8]'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-6 border-t border-white/10 pt-6">
            <Link
              href="#form"
              className="flex w-full items-center justify-center rounded-full bg-[#42b8f4] px-5 py-4 text-base font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#69c8f6]"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Free Quote
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
}
