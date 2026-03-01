import type { Metadata } from "next";
import Script from "next/script";

import Footer from "@/components/Footer";
import { buildPageMetadata } from "@lib/seo";
import ForceLightMode from "./ForceLightMode";
import RoofReviewsCarousel from "./RoofReviewsCarousel";

export const metadata: Metadata = buildPageMetadata({
  title: "New",
  description: "Draft landing page build area for the new page.",
  path: "/new",
  noIndex: true,
});

export default function New() {
  return (
    <>
      <ForceLightMode />
      <link
        href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;700&family=Roboto:wght@400;500;700;900&family=Merriweather:ital,wght@0,400;1,400&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Anton&family=Archivo+Narrow:wght@400;600;700&family=Oswald:wght@400;500;700&family=Roboto+Condensed:wght@400;700&family=Roboto:wght@400;500;700&display=swap"
        rel="stylesheet"
      />

      <Script id="new-tailwind-config" strategy="beforeInteractive">
        {`
          window.tailwind = window.tailwind || {};
          window.tailwind.config = {
            darkMode: "class",
            theme: {
              extend: {
                colors: {
                  primary: "#0B1E2B",
                  secondary: "#ff3333",
                  accent: "#FF4500",
                  "background-light": "#ffffff",
                  "background-dark": "#1a202c",
                  "border-bright": "#2563EB",
                },
                fontFamily: {
                  display: ["Oswald", "sans-serif"],
                  body: ["Roboto", "sans-serif"],
                },
                borderRadius: {
                  DEFAULT: "0.5rem",
                  xl: "1rem",
                },
                backgroundImage: {
                  'hero-pattern': "url('/newhosuebackground.png')",
                }
              },
            },
          };
        `}
      </Script>
      <Script
        src="https://cdn.tailwindcss.com?plugins=forms,typography"
        strategy="beforeInteractive"
      />

      <style>{`
        .text-shadow {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }
        .impact-offer-font {
          font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
          letter-spacing: 0.01em;
        }
        .custom-checkbox {
          appearance: none;
          background-color: transparent;
          margin: 0;
          font: inherit;
          color: currentColor;
          width: 1.5em;
          height: 1.5em;
          border: 1px solid #0B1E2B;
          border-radius: 0;
          display: grid;
          place-content: center;
        }
        .custom-checkbox::before {
          content: "";
          width: 1em;
          height: 1em;
          transform: scale(0);
          transition: 120ms transform ease-in-out;
          box-shadow: inset 1em 1em #0B1E2B;
          transform-origin: center;
          clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
        }
        .checkbox-square {
          appearance: none;
          -webkit-appearance: none;
          height: 24px;
          width: 24px;
          background-color: #0B1E2B;
          cursor: pointer;
          display: inline-block;
          position: relative;
        }
        .checkbox-square:checked {
          background-color: #0B1E2B;
        }
        .form-checkbox:focus {
          box-shadow: none;
          border-color: transparent;
        }
      `}</style>
      <style>{`
        body {
          min-height: max(884px, 100dvh);
        }
      `}</style>
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /* Section-local token overrides for the second pasted Tailwind snippet */
        .new-section-2 .bg-primary {
          background-color: #0C3C60 !important;
        }
        .new-section-2 .text-primary {
          color: #0C3C60 !important;
        }
        .new-section-2 .text-secondary {
          color: #00AEEF !important;
        }
        .new-section-2 .text-accent {
          color: #FF2A2A !important;
        }
        .new-section-2 .text-star-yellow {
          color: #FBBC05 !important;
        }
        .new-section-2 .font-serif {
          font-family: "Merriweather", serif !important;
        }

        /* Section-local token overrides for the third pasted Tailwind snippet */
        .new-section-3 .bg-primary {
          background-color: #0F4C75 !important;
        }
        .new-section-3.bg-background-light,
        .new-section-3 .bg-background-light {
          background-color: #F3F4F6 !important;
        }
        .dark .new-section-3.dark\\:bg-background-dark,
        .dark .new-section-3 .dark\\:bg-background-dark {
          background-color: #111827 !important;
        }
        .new-section-3 .font-display,
        .new-section-3 .font-body {
          font-family: "Inter", sans-serif !important;
        }
        .new-section-3 .material-icons-outlined {
          font-size: 24px;
        }

        /* Section-local custom classes for the fourth pasted snippet */
        .new-section-4 {
          --bg-dark-blue: #0b2d4b;
          --accent-blue: #3b82f6;
          --card-border: #1a4163;
          --checkmark-green: #22c55e;
        }
        .new-section-4 .font-heading {
          font-family: 'Oswald', sans-serif;
          letter-spacing: -0.02em;
          line-height: 1.1;
        }
        .new-section-4.font-body,
        .new-section-4 .font-body {
          font-family: 'Inter', sans-serif;
          line-height: 1.5;
        }
        .new-section-4.bg-navy-custom,
        .new-section-4 .bg-navy-custom {
          background-color: var(--bg-dark-blue);
        }
        .new-section-4 .text-accent-blue {
          color: var(--accent-blue);
        }
        .new-section-4 .border-card-custom {
          border-color: var(--card-border);
        }

        /* Section-local custom classes for the fifth pasted snippet */
        .new-section-5 .font-heading {
          font-family: 'Oswald', sans-serif;
          letter-spacing: 0.02em;
        }
        .new-section-5.font-body,
        .new-section-5 .font-body {
          font-family: 'Inter', sans-serif;
        }
        .new-section-5 .text-navy {
          color: #0f2e4d;
        }
        .new-section-5 .bg-navy {
          background-color: #0f2e4d;
        }
        .new-section-5 .text-body-blue {
          color: #334e68;
        }
        .new-section-5 .service-section-padding {
          padding-left: 1.5rem;
          padding-right: 1.5rem;
        }

        /* Section-local custom classes for the sixth pasted snippet */
        .new-section-6,
        .new-section-6.bg-primary,
        .new-section-6 .bg-primary {
          background-color: #0e335b !important;
          background-image: none !important;
        }
        .new-section-6 .bg-card-light {
          background-color: #ffffff !important;
        }
        .dark .new-section-6 .dark\\:bg-card-dark {
          background-color: #1e293b !important;
        }
        .new-section-6.font-condensed,
        .new-section-6 .font-condensed {
          font-family: 'Roboto Condensed', sans-serif !important;
        }
        .new-section-6 .font-brand {
          font-family: 'Anton', sans-serif !important;
        }
        .new-section-6 .font-display {
          font-family: 'Oswald', sans-serif !important;
        }
        .new-section-6 .font-sans {
          font-family: 'Roboto', sans-serif !important;
        }
        .new-section-6 > header * {
          color: #ffffff;
        }

        /* Section-local custom classes for the seventh pasted snippet */
        .new-section-7,
        .new-section-7.bg-background-light,
        .new-section-7 .bg-background-light {
          background-color: #ffffff !important;
          background-image: none !important;
        }
        .dark .new-section-7.dark\\:bg-background-dark,
        .dark .new-section-7 .dark\\:bg-background-dark {
          background-color: #121212 !important;
          background-image: none !important;
        }
        .new-section-7 .bg-primary {
          background-color: #11304e !important;
        }
        .new-section-7 .bg-secondary {
          background-color: #1a4269 !important;
        }
        .new-section-7 .hover\\:bg-secondary:hover {
          background-color: #1a4269 !important;
        }
        .new-section-7 .text-primary {
          color: #11304e !important;
        }
        .new-section-7 .font-display {
          font-family: 'Anton', sans-serif !important;
        }
        .new-section-7.font-sans,
        .new-section-7 .font-sans {
          font-family: 'Roboto Condensed', sans-serif !important;
        }
        .new-section-7 .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .new-section-7 .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /* Section-local custom classes for the eighth pasted snippet */
        .new-section-8,
        .new-section-8.bg-background-light,
        .new-section-8 .bg-background-light {
          background-color: #0E2F50 !important;
          background-image: none !important;
        }
        .dark .new-section-8.dark\\:bg-background-dark,
        .dark .new-section-8 .dark\\:bg-background-dark {
          background-color: #0B2540 !important;
          background-image: none !important;
        }
        .new-section-8 .text-primary {
          color: #E02E2E !important;
        }
        .new-section-8 .border-navy-accent {
          border-color: #2B71EA !important;
        }
        .new-section-8 .focus\\:ring-navy-accent\\/50:focus {
          --tw-ring-color: rgb(43 113 234 / 0.5) !important;
        }
        .new-section-8 .selection\\:bg-navy-accent::selection,
        .new-section-8.selection\\:bg-navy-accent::selection {
          background-color: #2B71EA !important;
        }
        .new-section-8 .selection\\:text-white::selection,
        .new-section-8.selection\\:text-white::selection {
          color: #ffffff !important;
        }
        .new-section-8 ::selection {
          background-color: #2B71EA;
          color: #ffffff;
        }
        .new-section-8 .font-display {
          font-family: 'Roboto Condensed', sans-serif !important;
        }
        .new-section-8.font-body,
        .new-section-8 .font-body {
          font-family: 'Roboto', sans-serif !important;
        }
        .new-section-8 .animate-spin-slow {
          animation: new-section-8-spin 20s linear infinite;
        }
        .new-section-8 .bg-radial-gradient {
          background: radial-gradient(circle at center, rgba(255, 215, 0, 0.08) 0%, rgba(0, 0, 0, 0) 70%);
        }
        .new-page-footer {
          position: relative;
          z-index: 10;
          width: 100%;
          background: #11304e;
        }
        .new-page-footer footer {
          background-color: #11304e !important;
          background-image: none !important;
        }
        @keyframes new-section-8-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
      <style>{`
        /* Keep the hero form visually identical to the provided light-mode screenshot on /new only. */
        .new-hero-light .dark\\:bg-gray-800 {
          background-color: #ffffff !important;
        }
        .new-hero-light .dark\\:text-white {
          color: #0B1E2B !important;
        }
        .new-hero-light .dark\\:bg-gray-700 {
          background-color: #ffffff !important;
        }
        .new-hero-light .dark\\:border-gray-400 {
          border-color: #0B1E2B !important;
        }
        .new-hero-light .dark\\:text-gray-200 {
          color: #0B1E2B !important;
        }
        .new-hero-light .hero-next-button {
          background-color: #0B1E2B !important;
          color: #ffffff !important;
        }
        .new-hero-light .hero-next-button:hover {
          background-color: #1e3a8a !important;
        }
      `}</style>

       <main className="new-hero-light font-body antialiased text-gray-900 bg-background-light dark:bg-background-dark min-h-screen relative">
         <div className="fixed inset-0 z-0">
          <div className="flex h-full w-full">
            <div className="relative h-full w-1/2">
              <img
                alt="Exterior cleaning in progress"
                className="h-full w-full object-cover object-[100%_100%]"
                src="/heroimg/7.png"
              />
            </div>
            <div className="relative h-full w-1/2">
              <img
                alt="Freshly cleaned exterior surface"
                className="h-full w-full object-cover object-[0%_100%]"
                src="/heroimg/8.png"
              />
            </div>
          </div>
          <div className="absolute inset-0 bg-black/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/72 to-black/88"></div>
         </div>
        <div className="relative z-10 flex flex-col items-center justify-start min-h-screen px-4 py-8 pt-[10px] max-w-md mx-auto w-full text-center">
          <a className="w-[250px] mb-8 group" href="tel:0411017366">
            <div className="bg-primary/90 border-4 border-[#38BDF8] py-1 px-[0] shadow-lg hover:bg-primary transition-colors duration-300">
              <span className="text-white font-display text-1xl tracking-wid font-medium uppercase group-hover:scale-105 inline-block transition-transform">
                Click to call: 0411 017 366
              </span>
            </div>
          </a>
          <div className="space-y-2 mb-6 mt-[-00px]">
            <h2 className="text-[#38BDF8] font-medium text-xl tracking-wide text-shadow">
              Bring Your Home Back to Life!
            </h2>
            <h1 className="text-white  px-0 impact-offer-font text-[55px] text-nowrap font-bold uppercase leading-none tracking-tight text-shadow drop-shadow-xl">
              Roof Cleaning
            </h1>
            <div className="pt-0 pb-2">
              <p className="text-white text-[18px] font-light leading-tight text-shadow">
                Serving Adelaide
                <br />
                &amp; Surrounding Areas
              </p>
            </div>
          </div>
          <div className="mb-6 text-nowrap space-y-6 pt-4">
            <div className="font-display font-bold text-[25px] leading-none text-shadow">
              <span className="text-white block mb-1 uppercase">Spring Sale Roof</span>
              <span className="text-white uppercase">
                Cleaning from{" "}
                <span className="text-[#38BDF8] inline-block transform scale-110 ml-1 drop-shadow-md">
                  $899
                </span>{" "}
              </span>
            </div>
          </div>
          <div className="w-[85%] bg-white dark:bg-gray-800 rounded-lg shadow-2xl overflow-hidden mt-[25px] mb-4 ">
            <p className=" pl-6 text-black pt-[20px] text-[15px] text-left  font-normal tracking-wide  max-w-[100%] border-b border-gray-200 pb-1">
              Fill out the form below to grab <br />
              this offer <span className="font-bold uppercase text-brand-dark">Today</span>
            </p>
            <div className="p-6 pb-[15px] pt-[10px]">
              <h3 className="text-primary dark:text-white font-bold text-xl mb-2 text-left leading-tight">
                What is the size of your roof?
              </h3>
              <form className="space-y-2">
                <label className="flex items-center space-x-2 cursor-pointer group">
                  <div className="relative flex items-center">
                    <input
                      className="peer h-4 w-4 cursor-pointer appearance-none border-2 border-primary bg-white transition-all checked:bg-primary hover:border-blue-600 dark:border-gray-400 dark:bg-gray-700 dark:checked:bg-primary"
                      name="roof_size"
                      type="radio"
                      value="small"
                    />
                    <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100">
                      <svg
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clipRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <span className="text-primary dark:text-gray-200 font-bold text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    100-150m2 (Small)
                  </span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer group">
                  <div className="relative flex items-center">
                    <input
                      className="peer h-4 w-4 cursor-pointer appearance-none border-2 border-primary bg-white transition-all checked:bg-primary hover:border-blue-600 dark:border-gray-400 dark:bg-gray-700 dark:checked:bg-primary"
                      name="roof_size"
                      type="radio"
                      value="medium"
                    />
                    <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100">
                      <svg
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clipRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <span className="text-primary dark:text-gray-200 font-bold text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    150-250m2(Medium)
                  </span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer group">
                  <div className="relative flex items-center">
                    <input
                      className="peer h-4 w-4 cursor-pointer appearance-none border-2 border-primary bg-white transition-all checked:bg-primary hover:border-blue-600 dark:border-gray-400 dark:bg-gray-700 dark:checked:bg-primary"
                      name="roof_size"
                      type="radio"
                      value="big"
                    />
                    <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100">
                      <svg
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clipRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <span className="text-primary dark:text-gray-200 font-bold text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    250m2+ (Big)
                  </span>
                </label>
                <div className="pt-0">
                  <button
                    className="hero-next-button w-full bg-[#0B1E2B] hover:bg-blue-900 text-white font-bold text-3xl py-4 rounded shadow-lg transition-transform transform active:scale-95 uppercase tracking-wide"
                    type="submit"
                  >
                    Next
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="new-section-2 relative z-10">
          <section className="bg-white dark:bg-gray-800 px-6 py-3 text-center border-b border-gray-200 dark:border-gray-700">
            <h1 className="text-[25px] text-nowrap md:text-4xl font-display font-bold text-primary dark:text-white uppercase leading-tight tracking-tight mb-4">
              Local Exterior Cleaners <br />
              You Can <span className="text-secondary">Trust</span>
            </h1>
            <div className="flex flex-col items-center justify-center mb-8">
              <div className="flex items-center space-x-2 mb-1">
                <svg
                  className="w-6 h-6"
                  version="1.1"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                    fill="#EA4335"
                  ></path>
                  <path
                    d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                    fill="#4285F4"
                  ></path>
                  <path
                    d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                    fill="#FBBC05"
                  ></path>
                  <path
                    d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                    fill="#34A853"
                  ></path>
                </svg>
                <span className="text-xl font-bold text-[#FBBC05] dark:text-text-[#FBBC05]">
                  5.0
                </span>
                <div className="flex text-star-yellow">
                  <i className="material-icons text-lg">star</i>
                  <i className="material-icons text-lg">star</i>
                  <i className="material-icons text-lg">star</i>
                  <i className="material-icons text-lg">star</i>
                  <i className="material-icons text-lg">star</i>
                </div>
              </div>
             <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                Verified 5-Stars Reviews
              </p>
            </div>
            <RoofReviewsCarousel />
          </section>

          <section className="bg-[#0B1E2B] flex-grow px-6 py-12  pt-[20px] pb-16 text-center relative overflow-hidden">
            <div className="flex flex-col items-center justify-center mb-10">
              <div className="mb-[-5px] relative w-52 max-w-full">
                <img
                  alt="EverBright Pressure Washing logo"
                  className="mx-auto h-auto w-full object-contain drop-shadow-lg"
                  src="/Presure%20washing-%20Driveways,%20houses,%20patios%20and%20more-3.png"
                />
              </div>
            </div>
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white uppercase leading-none tracking-tight mb-2">
                Dirty Roof Today.{" "}
                <span className="text-accent block mt-1">
                  Expensive Repairs
                </span>
                <span className="text-accent block mt-1">Tomorrow</span>
              </h2>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-accent uppercase leading-none tracking-tight"></h2>
            </div>
            <blockquote className="text-xl md:text-2xl font-serif italic text-left text-white mb-6 opacity-90">
              “I’ll get around to it.”
            </blockquote>
            <div className="  text-left max-w-prose mx-auto text-white text-base md:text-lg leading-relaxed space-y-4 opacity-95 font-light">
              <p>
                That’s what most homeowners say until the roof starts making the
                whole house look older than it is...
              </p>
              <p>
                You’ve seen the stains creeping across the tiles. You know it
                hasn’t been cleaned in years.
              </p>
              <p>
                But life’s busy. And let’s be honest, climbing up there with a
                pressure washer isn’t how you want to spend your weekend.
              </p>
            </div>
            <h3 className="mt-8 text-left text-xl font-bold text-white">
              But waiting comes with a cost:
            </h3>
          </section>

          <section className="bg-white dark:bg-gray-800 px-6 py-10 text-center border-t border-gray-200 dark:border-gray-700">
            <h2 className="text-[22px]  md:text-4xl font-display font-bold text-primary dark:text-white uppercase leading-tight tracking-tight">
              The longer it’s left, the more <br />
              <span className="text-accent">expensive</span> it becomes to fix
            </h2>
          </section>
        </div>

        <div className="new-section-3 relative z-10 bg-background-light dark:bg-background-dark font-body antialiased min-h-screen flex justify-center">
          <div className="w-full max-w-md mx-auto p-4 space-y-6">
            <section className="bg-primary text-white rounded-2xl p-6 shadow-lg relative overflow-hidden">
              <div className="absolute top-4 left-4 flex space-x-1.5 opacity-30">
                <div className="w-3 h-3 rounded-full bg-black/40"></div>
                <div className="w-3 h-3 rounded-full bg-black/40"></div>
                <div className="w-3 h-3 rounded-full bg-black/40"></div>
              </div>
              <div className="w-full h-px bg-white/10 absolute top-12 left-0"></div>
              <div className="mt-10 space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-8 h-8 rounded-full border-2 border-red-500 flex items-center justify-center">
                      <span
                        className="material-icons-outlined text-red-500"
                        style={{ fontSize: "20px" }}
                      >
                        close
                      </span>
                    </div>
                  </div>
                  <p className="text-white text-[15px] leading-snug font-medium opacity-95">
                    Mould stained roofs make your entire home look older than it
                    is
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-8 h-8 rounded-full border-2 border-red-500 flex items-center justify-center">
                      <span
                        className="material-icons-outlined text-red-500"
                        style={{ fontSize: "20px" }}
                      >
                        close
                      </span>
                    </div>
                  </div>
                  <p className="text-white text-[15px] leading-snug font-medium opacity-95">
                    Built-up mould and lichen slowly eat into tile surfaces
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-8 h-8 rounded-full border-2 border-red-500 flex items-center justify-center">
                      <span
                        className="material-icons-outlined text-red-500"
                        style={{ fontSize: "20px" }}
                      >
                        close
                      </span>
                    </div>
                  </div>
                  <p className="text-white text-[15px] leading-snug font-medium opacity-95">
                    Moisture trapped on your roof can lead to cracked tiles and
                    hidden leaks
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-8 h-8 rounded-full border-2 border-red-500 flex items-center justify-center">
                      <span
                        className="material-icons-outlined text-red-500"
                        style={{ fontSize: "20px" }}
                      >
                        close
                      </span>
                    </div>
                  </div>
                  <p className="text-white text-[15px] leading-snug font-medium opacity-95">
                    Neglected roofs can knock thousands off perceived property
                    value
                  </p>
                </div>
              </div>
            </section>
            <section className="space-y-2">
              <div className="relative w-full rounded-lg overflow-hidden shadow-md group">
                <div className="absolute top-0 left-0 bg-primary px-4 py-1.5 z-10">
                  <span className="text-white font-bold text-sm tracking-wide">
                    Before
                  </span>
                </div>
                <img
                  alt="Dirty roof covered in lichen and mold before pressure washing"
                  className="w-full h-64 object-cover transform transition-transform duration-700 group-hover:scale-105"
                  src="/beforeAfter/5.png"
                />
              </div>
              <div className="relative w-full rounded-lg overflow-hidden shadow-md group">
                <div className="absolute top-0 left-0 bg-primary px-4 py-1.5 z-10">
                  <span className="text-white font-bold text-sm tracking-wide">
                    After
                  </span>
                </div>
                <img
                  alt="Clean and bright red terracotta roof after professional cleaning"
                  className="w-full h-64 object-cover transform transition-transform duration-700 group-hover:scale-105"
                  src="/beforeAfter/6.png"
                />
              </div>
            </section>
          </div>
        </div>

        <div className="new-section-4 relative z-10 w-full bg-navy-custom text-white antialiased">
          <div className="max-w-[430px] mx-auto p-8 font-body">
            <header className="mb-8" data-purpose="page-title">
              <h1 className="text-[26px] font-heading font-bold text-center uppercase tracking-tight">
                Professional Roof Cleaning That{" "}
                <span className="text-accent-blue">Restores Your Home</span> –
                Without Risk
              </h1>
            </header>

            <section
              className="space-y-6 text-[17px] leading-relaxed mb-10"
              data-purpose="marketing-copy"
            >
              <p>
                You want a home you’re proud to pull into. You want a roof that
                looks clean, well-kept, and properly maintained, not stained,
                streaked, or ageing your entire property.
              </p>
              <p>
                You want peace of mind knowing mould and lichen aren’t slowly
                damaging your tiles. You want it handled safely, correctly, and
                without risking injury or costly mistakes.
              </p>
              <p>
                At EverBright, we make it happen safely, professionally, and
                without shortcuts.
              </p>
            </section>

            <section
              className="border border-card-custom rounded-lg bg-opacity-50 overflow-hidden"
              data-purpose="benefits-checklist"
            >
              <div
                aria-hidden="true"
                className="px-4 py-3 border-b border-card-custom flex gap-1.5"
              >
                <div className="w-3 h-3 rounded-full bg-[#1a4163]"></div>
                <div className="w-3 h-3 rounded-full bg-[#1a4163]"></div>
                <div className="w-3 h-3 rounded-full bg-[#1a4163]"></div>
              </div>

              <div className="p-6 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 mt-0.5">
                    <svg
                      className="w-10 h-10 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      ></path>
                    </svg>
                  </div>
                  <p className="text-[16px] font-medium leading-snug">
                    Our customers say they wish they'd cleaned their roof sooner
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="shrink-0 mt-0.5">
                    <svg
                      className="w-10 h-10 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      ></path>
                    </svg>
                  </div>
                  <p className="text-[16px] font-medium leading-snug">
                    Every job is fully insured and handled by certified
                    technician
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="shrink-0 mt-0.5">
                    <svg
                      className="w-10 h-10 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      ></path>
                    </svg>
                  </div>
                  <p className="text-[16px] font-medium leading-snug">
                    Cleaned roofs stay visibly cleaner for 3+ years after just
                    our treatment
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="shrink-0 mt-0.5">
                    <svg
                      className="w-10 h-10 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      ></path>
                    </svg>
                  </div>
                  <p className="text-[16px] font-medium leading-snug">
                    We help you protect one of the most expensive parts of your
                    home.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="new-section-5 relative z-10 w-full bg-white font-body antialiased">
          <header
            className="bg-navy py-3 px-4 text-center"
            data-purpose="top-announcement"
          >
            <h2 className="text-white font-heading text-xl md:text-2xl font-bold uppercase tracking-wider">
              And we can help you too!
            </h2>
          </header>

          <div className="py-8 text-center" data-purpose="services-overview">
            <section className="mb-6 px-6">
              <h1 className="text-navy font-heading text-4xl font-bold uppercase mb-2">
                Our Services
              </h1>
              <p className="text-navy font-heading text-xl font-medium">
                100% Satisfaction Guaranteed
              </p>
            </section>

            <section className="service-section-padding mb-8">
              <p className="text-body-blue text-[15px] leading-relaxed text-left mx-auto max-w-sm">
                We deliver professional roof and exterior cleaning for
                homeowners across Adelaide and surrounding suburbs. Our mission
                is to restore and protect your home with safe, controlled
                cleaning that keeps your home looking its best year-round.
              </p>
            </section>

            <section
              className="service-section-padding text-left max-w-md mx-auto"
              data-purpose="roof-cleaning-card"
            >
              <div className="mb-6">
                <img
                  alt="Before and after comparison of a roof cleaning service showing dark mossy tiles versus clean red tiles"
                  className="w-full h-auto rounded-sm shadow-sm"
                  data-purpose="service-comparison-image"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6mT2yfIZePjP29_pIrJ8vxI3miS4kEoKzyqlZ1BbvqVJMfr8opuHbzbCskMz-WAmbGSdJZK88jmPJeSFkrivJuKvxg4CA-eubUROynlnnHOFOAUOa8htcJ_xQPE4GfzN1NAQcVbffbOi2X1r2gaZcjlb1LdHFKYcDAyj9Bq4q46oHVHnPSRON_ajC2H-BKJECOcS-wIkDR08DEGLaTlDLC0m6r61U1k_CzizopefCK7J6lIConUzuO5n5xbHq1XAjY-BIbrWlWQI"
                />
              </div>

              <h3 className="text-navy font-heading text-3xl font-bold uppercase mb-4">
                Roof Cleaning
              </h3>

              <p className="text-body-blue text-[15px] leading-snug mb-4">
                Keep your roof clean, protected, and looking its best with our
                professional roof cleaning service.
              </p>

              <ul
                className="text-black font-bold text-[13px] space-y-1 mb-5"
                data-purpose="service-features"
              >
                <li>• Safe removal of mould, lichen, and built-up stains</li>
                <li>• Designed to restore and protect your roof</li>
              </ul>

              <div className="mb-6">
                <p className="text-body-blue text-[13px] leading-tight">
                  Servicing Adelaide and surrounding suburbs.
                  <br />
                  Free inspections and quotes available enquire today.
                </p>
              </div>

              <div className="mt-4" data-purpose="cta-container">
                <a
                  className="block w-full border-[3px] border-blue-600 py-3 text-center text-navy font-heading text-2xl font-bold uppercase transition-colors hover:bg-blue-50"
                  href="#"
                  role="button"
                >
                  Get Your Quote
                </a>
              </div>
            </section>

            <section
              className="service-section-padding text-left max-w-md mx-auto mt-12"
              data-purpose="pressure-washing-card"
            >
              <div className="mb-6">
                <img
                  alt="Pressure washing service cleaning outdoor hard surfaces"
                  className="w-full h-auto rounded-sm shadow-sm"
                  data-purpose="service-comparison-image"
                  src="/genrealPhotos/Pressure%20WashingServiceCardImage.webp"
                />
              </div>

              <h3 className="text-navy font-heading text-3xl font-bold uppercase mb-4">
                Pressure Washing
              </h3>

              <p className="text-body-blue text-[15px] leading-snug mb-4">
                Keep your outdoor surfaces clean, protected, and looking their
                best with our professional pressure washing service.
              </p>

              <ul
                className="text-black font-bold text-[13px] space-y-1 mb-5"
                data-purpose="service-features"
              >
                <li>
                  • Suitable for driveways, paths, patios, and exterior hard
                  surfaces
                </li>
                <li>• Designed to restore appearance and protect surfaces</li>
              </ul>

              <div className="mb-6">
                <p className="text-body-blue text-[13px] leading-tight">
                  Servicing Adelaide and surrounding suburbs.
                  <br />
                  Free inspections and quotes available enquire today.
                </p>
              </div>

              <div className="mt-4" data-purpose="cta-container">
                <a
                  className="block w-full border-[3px] border-blue-600 py-3 text-center text-navy font-heading text-2xl font-bold uppercase transition-colors hover:bg-blue-50"
                  href="#"
                  role="button"
                >
                  Get Your Quote
                </a>
              </div>
            </section>

            <section
              className="service-section-padding text-left max-w-md mx-auto mt-12"
              data-purpose="gutter-cleaning-card"
            >
              <div className="mb-6">
                <img
                  alt="Gutter cleaning service clearing debris from roof gutters"
                  className="w-full h-auto rounded-sm shadow-sm"
                  data-purpose="service-comparison-image"
                  src="/genrealPhotos/Gutter%20CleaningServicePage.webp"
                />
              </div>

              <h3 className="text-navy font-heading text-3xl font-bold uppercase mb-4">
                Gutter Cleaning
              </h3>

              <p className="text-body-blue text-[15px] leading-snug mb-4">
                Keep your gutters clear, flowing, and protecting your home with
                our professional gutter cleaning service.
              </p>

              <ul
                className="text-black font-bold text-[13px] space-y-1 mb-5"
                data-purpose="service-features"
              >
                <li>• Removal of leaves, debris, and built-up blockages</li>
                <li>• Helps prevent water overflow and internal damage</li>
              </ul>

              <div className="mb-6">
                <p className="text-body-blue text-[13px] leading-tight">
                  Servicing Adelaide and surrounding suburbs.
                  <br />
                  Free inspections and quotes available enquire today.
                </p>
              </div>

              <div className="mt-4" data-purpose="cta-container">
                <a
                  className="block w-full border-[3px] border-blue-600 py-3 text-center text-navy font-heading text-2xl font-bold uppercase transition-colors hover:bg-blue-50"
                  href="#"
                  role="button"
                >
                  Get Your Quote
                </a>
              </div>
            </section>
          </div>
        </div>

        <div className="new-section-6 relative z-10 w-full bg-primary min-h-screen flex flex-col items-center py-10 antialiased font-condensed">
          <header className="text-center w-full max-w-md px-4 mb-8 space-y-1">
            <h2 className="text-white text-xl md:text-2xl font-normal tracking-wide">
              Adelaide Homeowner Love
            </h2>
            <h1 className="text-white text-5xl font-brand tracking-tight pt-1">
              EverBright
            </h1>
            <p className="text-white text-sm tracking-wider uppercase opacity-90 font-medium">
              Pressure Washing
            </p>
            <div className="pt-8">
              <h3 className="text-white text-3xl font-display font-bold uppercase tracking-wide leading-tight">
                What Others Are Saying
              </h3>
            </div>
          </header>

          <div className="w-full max-w-[340px] space-y-6 px-2">
            <div className="bg-card-light dark:bg-card-dark p-6 shadow-lg rounded-sm mx-auto">
              <div className="flex items-center space-x-3 mb-3">
                <img
                  alt="Portrait of Ray Done"
                  className="w-12 h-12 rounded-full object-cover border border-gray-100 dark:border-gray-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwXOo3pVJ5mXM4H0WSdSj8F1OwovPb72tEuDN6yzDhoSCHk1wc_ya-Bp48KQIE6T47IuvNKQoIhGT0Gm8CE8LVKDbtUrpWLNKUciE7Og2sGIcJh_veAfr4p-kzrhwwmFT_-76K75mtF-fZf06rG6fww2TyIzDzdrrVGHcsDYt4BXag_8cFdqzVOmdfY6xLrBC0IlSnOjsrVepoQtCcHdldiouQICUh4RqEyTvmdTdkt1A5Nn13ovpu5U2ASzhXHj1xqZ0Z71knvf8"
                />
                <span className="font-bold text-gray-900 dark:text-white text-lg tracking-tight font-sans">
                  Ray Done
                </span>
              </div>
              <p className="text-black dark:text-black text-[15px] leading-relaxed mb-4 font-sans">
                Shayal did an amazing job cleaning my gutters, very happy with
                the clean up afterwards too. Would highly recommend
              </p>
              <div className="flex items-center space-x-2">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  ></path>
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  ></path>
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  ></path>
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  ></path>
                </svg>
                <span className="text-[#f58634] font-bold text-xl font-sans">
                  5.0
                </span>
                <div className="flex space-x-0.5 text-[#f58634]">
                  <span className="material-icons text-2xl">star</span>
                  <span className="material-icons text-2xl">star</span>
                  <span className="material-icons text-2xl">star</span>
                  <span className="material-icons text-2xl">star</span>
                  <span className="material-icons text-2xl">star</span>
                </div>
              </div>
            </div>

            <div className="bg-card-light dark:bg-card-dark p-6 shadow-lg rounded-sm mx-auto">
              <div className="flex items-center space-x-3 mb-3">
                <img
                  alt="Portrait of Ray Done"
                  className="w-12 h-12 rounded-full object-cover border border-gray-100 dark:border-gray-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuADNDZITYifpTeyU-dhc8iSMZ217HCGkUJWezKL-p0EJENFOor2vJdQ7etwaWVTurOwQFgUapOvtRWPrYFhrDUF4Dn3Tz2HLUHdqW0pHUM6dY4Pn_CfM1MqGsYNqia5kUS7KZwNIuOXFgOt99kwIe0texGj99UO92ZyqcrQ7g3XhClwH1ReydNaKTkY3aCY8M9baMiHXY9Xyby5vY2DxXGtqb_x4mq9MFr2u64IMmx_gdNvaQ1L9RTG5fx09Bvz2FuluUkrL-q8UuQ"
                />
                <span className="font-bold text-gray-900 dark:text-white text-lg tracking-tight font-sans">
                  Ray Done
                </span>
              </div>
              <p className="text-black dark:text-black text-[15px] leading-relaxed mb-4 font-sans">
                Shayal did an amazing job cleaning my gutters, very happy with
                the clean up afterwards too. Would highly recommend
              </p>
              <div className="flex items-center space-x-2">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  ></path>
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  ></path>
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  ></path>
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  ></path>
                </svg>
                <span className="text-[#f58634] font-bold text-xl font-sans">
                  5.0
                </span>
                <div className="flex space-x-0.5 text-[#f58634]">
                  <span className="material-icons text-2xl">star</span>
                  <span className="material-icons text-2xl">star</span>
                  <span className="material-icons text-2xl">star</span>
                  <span className="material-icons text-2xl">star</span>
                  <span className="material-icons text-2xl">star</span>
                </div>
              </div>
            </div>

            <div className="bg-card-light dark:bg-card-dark p-6 shadow-lg rounded-sm mx-auto">
              <div className="flex items-center space-x-3 mb-3">
                <img
                  alt="Portrait of Ray Done"
                  className="w-12 h-12 rounded-full object-cover border border-gray-100 dark:border-gray-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwXOo3pVJ5mXM4H0WSdSj8F1OwovPb72tEuDN6yzDhoSCHk1wc_ya-Bp48KQIE6T47IuvNKQoIhGT0Gm8CE8LVKDbtUrpWLNKUciE7Og2sGIcJh_veAfr4p-kzrhwwmFT_-76K75mtF-fZf06rG6fww2TyIzDzdrrVGHcsDYt4BXag_8cFdqzVOmdfY6xLrBC0IlSnOjsrVepoQtCcHdldiouQICUh4RqEyTvmdTdkt1A5Nn13ovpu5U2ASzhXHj1xqZ0Z71knvf8"
                />
                <span className="font-bold text-gray-900 dark:text-white text-lg tracking-tight font-sans">
                  Ray Done
                </span>
              </div>
              <p className="text-black dark:text-black text-[15px] leading-relaxed mb-4 font-sans">
                Shayal did an amazing job cleaning my gutters, very happy with
                the clean up afterwards too. Would highly recommend
              </p>
              <div className="flex items-center space-x-2">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  ></path>
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  ></path>
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  ></path>
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  ></path>
                </svg>
                <span className="text-[#f58634] font-bold text-xl font-sans">
                  5.0
                </span>
                <div className="flex space-x-0.5 text-[#f58634]">
                  <span className="material-icons text-2xl">star</span>
                  <span className="material-icons text-2xl">star</span>
                  <span className="material-icons text-2xl">star</span>
                  <span className="material-icons text-2xl">star</span>
                  <span className="material-icons text-2xl">star</span>
                </div>
              </div>
            </div>

            <div className="bg-card-light dark:bg-card-dark p-6 shadow-lg rounded-sm mx-auto">
              <div className="flex items-center space-x-3 mb-3">
                <img
                  alt="Portrait of Ray Done"
                  className="w-12 h-12 rounded-full object-cover border border-gray-100 dark:border-gray-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuADNDZITYifpTeyU-dhc8iSMZ217HCGkUJWezKL-p0EJENFOor2vJdQ7etwaWVTurOwQFgUapOvtRWPrYFhrDUF4Dn3Tz2HLUHdqW0pHUM6dY4Pn_CfM1MqGsYNqia5kUS7KZwNIuOXFgOt99kwIe0texGj99UO92ZyqcrQ7g3XhClwH1ReydNaKTkY3aCY8M9baMiHXY9Xyby5vY2DxXGtqb_x4mq9MFr2u64IMmx_gdNvaQ1L9RTG5fx09Bvz2FuluUkrL-q8UuQ"
                />
                <span className="font-bold text-gray-900 dark:text-white text-lg tracking-tight font-sans">
                  Ray Done
                </span>
              </div>
              <p className="text-black dark:text-black text-[15px] leading-relaxed mb-4 font-sans">
                Shayal did an amazing job cleaning my gutters, very happy with
                the clean up afterwards too. Would highly recommend
              </p>
              <div className="flex items-center space-x-2">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  ></path>
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  ></path>
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  ></path>
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  ></path>
                </svg>
                <span className="text-[#f58634] font-bold text-xl font-sans">
                  5.0
                </span>
                <div className="flex space-x-0.5 text-[#f58634]">
                  <span className="material-icons text-2xl">star</span>
                  <span className="material-icons text-2xl">star</span>
                  <span className="material-icons text-2xl">star</span>
                  <span className="material-icons text-2xl">star</span>
                  <span className="material-icons text-2xl">star</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="new-section-7 relative z-10 w-full bg-background-light dark:bg-background-dark min-h-screen font-sans antialiased overflow-x-hidden">
          <div className="w-full max-w-md mx-auto relative flex flex-col items-center justify-center py-12 px-4 space-y-8 bg-background-light dark:bg-background-dark min-h-screen">
            <header className="w-full text-center px-2">
              <h1 className="text-5xl md:text-6xl text-primary font-display uppercase tracking-wide leading-tight dark:text-blue-100 drop-shadow-sm">
                Checkout these <br /> transformations!
              </h1>
            </header>

            <section className="w-full overflow-x-auto hide-scrollbar pb-4 -mx-4 px-4">
              <div className="flex flex-nowrap gap-1 min-w-max">
                <div className="relative w-40 h-72 rounded-sm overflow-hidden flex-shrink-0 group">
                  <img
                    alt="Dirty stone patio covered in moss and grime"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAm2KfVT7Ky3pFy51322DwDZ6cowBsBxsmbJIEstK5pZ2DkR2GH-jyP7eJud-Xt9r0lBPpRE_PImxlu-mx8KCPr05IYguFiaKKRZOMXl0_DEeEiGrNWrnSlbro2x-RSP3nxTIqJ3HNH9SZ7Krlik-V8ZKw8RFvrU0URc90lw-fBlvukUs-h7hypRii_mHHXljXDzfaiKcGtqIvJtxEoQ3kysAF4q4I1IDrHYsuASEhRxWNu3P-_Zd4TwNNiUzOeAQVIEUz_jgPZIKQ"
                  />
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white font-display uppercase text-lg px-3 py-1 tracking-wider shadow-lg">
                      Before
                    </span>
                  </div>
                </div>

                <div className="relative w-40 h-72 rounded-sm overflow-hidden flex-shrink-0 group">
                  <img
                    alt="Clean pristine stone patio after pressure washing"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUHWA2mPQ5FbA8vmSuyGBu-myPtZl_R860BYiKKx-ZBevrOt2zBqwEODAcDrSYB0dds5v9sRP-Wwlw9Wh09oM6ktnOWizci3x13lV7UFFBS0QMAj3VT1L4bvxBGFJ-bLhZEMLTCweUkuWYEDFBks157X4CrIMACGHBYyJdRyGWSKpaUz-iTUpI6hfeqCA7b6Qu4bVXlB2F3Kh32EG7HoTLuA0XbNLNnE1bZ06xVohDi-dEkQoA3TOeMCsh832yiGx1ll5VT2uCAr0"
                  />
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white font-display uppercase text-lg px-3 py-1 tracking-wider shadow-lg">
                      After
                    </span>
                  </div>
                </div>

                <div className="relative w-40 h-72 rounded-sm overflow-hidden flex-shrink-0 group">
                  <img
                    alt="Dirty exterior white wall with green algae and stains"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDx1h9L9mLEMcv6i3ZKgIxp6ZP5ssRKLzbxIjY_LTUDNjT7CO6sx5xARMeY5qHb2fBrAldBs4mJ30uKdYPyw4tnTWRkOi5vOoHOtISLVDdCsv5G7h93F6ZN0U9R5s-vT8Ra9aMKHr8tOc_41Wbdo_WIADiIA3Pa0HNIxVliLHgiU58bMNhkc5MO0p6i5XHPzPczcKqATV_YspsVVVEAKlhunv8EHEEmuew9EA9BdXfqlFxJptj3ZK1ZOszeFgUaD6lvU65qmcTajRs"
                  />
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white font-display uppercase text-lg px-3 py-1 tracking-wider shadow-lg">
                      Before
                    </span>
                  </div>
                </div>

                <div className="relative w-40 h-72 rounded-sm overflow-hidden flex-shrink-0 group">
                  <img
                    alt="Clean bright white exterior wall after cleaning"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWv58xktdF31Ai12qB72RRvCBIRw9gVDzis2EM9orqRL321kaMBXKrWWB7jKlveBzseH4jS8pavxvZLpu-8ptHRTQRzx2FrI0dlbvbI3eTmQ7S8YQuu9LJlIu6EeXgOxj3echlIPh7K7A0xa4587cj0KmAeNVXZVCM4KY8GG143kgChC1-DNWnKj5mMBFSwRYh-yS0slJFYebwinGNvU6dh6arwE8BLOR7ycgFXMoBhpTIXkKnJxQNg8Tai4fAK5iX3q-NP0Ia4AY"
                  />
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white font-display uppercase text-lg px-3 py-1 tracking-wider shadow-lg">
                      After
                    </span>
                  </div>
                </div>

                <div className="relative w-24 h-72 rounded-sm overflow-hidden flex-shrink-0 group opacity-90">
                  <img
                    alt="Dirty brick stairs leading up a garden path"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCs0m91OvKGBbIoCEUcN2PnvSswH90g4aEAd8kloCGZzPFfasw6o0zcveZkcKPLIleGW5A6Ej0VNsqDMqzC4oTrJLutoS3crXS_7BUES00MqjyE5hmjVaGD1sjFNqlcGp7FCetKtTbxWP8yc9dpaL2SrRaXR-kjm4VtHYAOIKRRj0wq-zGvVg26ujaDTiUnn6s4nrcDCnbkYmREWrApZYxlEilTqqpk9L4-EV6ptLpUxpcav-PuMpUWsBXDhz56Of0KUV8s84OFdBA"
                  />
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white font-display uppercase text-lg px-3 py-1 tracking-wider shadow-lg whitespace-nowrap">
                      Before
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-2 space-x-1 opacity-40 dark:opacity-60">
                <div className="w-1.5 h-1.5 rounded-full bg-primary dark:bg-blue-300"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600"></div>
              </div>
            </section>

            <section className="w-full mt-6">
              <a
                className="block w-full bg-primary hover:bg-secondary transition-colors duration-300 py-6 px-4 shadow-xl transform active:scale-95 text-center"
                href="tel:0411017366"
              >
                <span className="text-white font-display text-3xl md:text-4xl uppercase tracking-normal">
                  Call us Today:{" "}
                  <span className="whitespace-nowrap">0411 017 366</span>
                </span>
              </a>
            </section>
          </div>
        </div>

        <div className="new-section-8 relative z-10 w-full bg-background-light dark:bg-background-dark min-h-screen flex flex-col items-center justify-center p-6 text-center font-body antialiased selection:bg-navy-accent selection:text-white">
          <div className="max-w-md w-full flex flex-col items-center space-y-6">
            <div className="space-y-4">
              <h2 className="text-primary text-3xl font-bold tracking-tight">
                Still not sure?
              </h2>
              <h1 className="font-display text-white text-4xl leading-tight font-bold uppercase tracking-tighter drop-shadow-sm">
                100% FREE Roof Inspections &amp; Quotes - No Obligation
              </h1>
              <p className="text-white text-lg leading-snug px-2 opacity-95">
                Every quote is honest, detailed, and tailored to your roof, with
                no pushy sales tactics.
              </p>
            </div>

            <div className="pt-6 pb-4 w-full flex justify-center">
              <button className="group relative w-64 h-16 bg-[#0E2F50] dark:bg-[#0B2540] border-[6px] border-navy-accent transition-transform active:scale-95 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-navy-accent/50">
                <span className="font-display text-white text-2xl font-bold uppercase tracking-wide">
                  Get Your Quote
                </span>
              </button>
            </div>

            <div className="pt-4 relative">
              <div className="w-48 h-48 rounded-full bg-gradient-to-b from-yellow-300 via-yellow-600 to-yellow-800 p-2 shadow-2xl flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-black border-2 border-yellow-500 relative flex items-center justify-center">
                  <svg
                    className="absolute w-[90%] h-[90%] animate-spin-slow"
                    style={{ animationDuration: "20s" }}
                    viewBox="0 0 100 100"
                  >
                    <defs>
                      <path
                        d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                        id="circlePath"
                      ></path>
                    </defs>
                    <text
                      fill="white"
                      fontSize="8.5"
                      fontWeight="bold"
                      letterSpacing="2"
                    >
                      <textPath
                        href="#circlePath"
                        startOffset="50%"
                        textAnchor="middle"
                      >
                        SATISFACTION GUARANTEED
                      </textPath>
                    </text>
                  </svg>

                  <div className="absolute bottom-6 w-full text-center">
                    <svg
                      className="mx-auto transform rotate-180 opacity-90"
                      height="40"
                      viewBox="0 0 120 40"
                      width="120"
                    >
                      <path
                        d="M10,20 Q30,35 60,35 T110,20"
                        fill="transparent"
                        stroke="url(#goldGradient)"
                        strokeWidth="0"
                      ></path>
                      <text
                        className="tracking-widest uppercase"
                        fill="white"
                        fontSize="8"
                        fontWeight="bold"
                        textAnchor="middle"
                        transform="rotate(0 60,25)"
                        x="60"
                        y="25"
                      >
                        Guaranteed
                      </text>
                    </svg>
                  </div>

                  <div className="flex flex-col items-center justify-center z-10 bg-radial-gradient">
                    <div className="flex space-x-1 mb-0 text-yellow-400">
                      <i className="material-icons text-sm">star</i>
                      <i className="material-icons text-sm">star</i>
                      <i className="material-icons text-sm">star</i>
                    </div>
                    <span className="font-display text-yellow-400 text-6xl font-bold leading-none tracking-tighter drop-shadow-md">
                      100%
                    </span>
                    <div className="flex space-x-1 mt-1 text-yellow-400">
                      <i className="material-icons text-sm">star</i>
                      <i className="material-icons text-sm">star</i>
                      <i className="material-icons text-sm">star</i>
                    </div>
                  </div>

                  <div className="absolute left-2 top-1/2 -translate-y-1/2 -rotate-12 opacity-80">
                    <i
                      className="material-icons text-yellow-500 text-4xl"
                      style={{ transform: "scaleX(-1)" }}
                    >
                      emoji_nature
                    </i>
                  </div>
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 rotate-12 opacity-80">
                    <i className="material-icons text-yellow-500 text-4xl">
                      emoji_nature
                    </i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <svg height="0" width="0">
            <linearGradient id="goldGradient" x1="0%" x2="0%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="#FCD34D" stopOpacity="1"></stop>
              <stop offset="100%" stopColor="#D97706" stopOpacity="1"></stop>
            </linearGradient>
          </svg>
        </div>
      </main>
      <div className="new-page-footer">
        <Footer />
      </div>
    </>
  );
}
