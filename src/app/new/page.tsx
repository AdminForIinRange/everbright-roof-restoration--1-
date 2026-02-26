import type { Metadata } from 'next';
import Script from 'next/script';

import { buildPageMetadata } from '@lib/seo';
import ForceLightMode from './ForceLightMode';

export const metadata: Metadata = buildPageMetadata({
  title: 'New',
  description: 'Draft landing page build area for the new page.',
  path: '/new',
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
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
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
                  primary: "#0B2B4A",
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
                  'hero-pattern': "url('https://images.unsplash.com/photo-1628624747186-a941c725611b?q=80&w=2574&auto=format&fit=crop')",
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
        .custom-checkbox {
          appearance: none;
          background-color: transparent;
          margin: 0;
          font: inherit;
          color: currentColor;
          width: 1.5em;
          height: 1.5em;
          border: 1px solid #0B2B4A;
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
          box-shadow: inset 1em 1em #0B2B4A;
          transform-origin: center;
          clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
        }
        .checkbox-square {
          appearance: none;
          -webkit-appearance: none;
          height: 24px;
          width: 24px;
          background-color: #0B2B4A;
          cursor: pointer;
          display: inline-block;
          position: relative;
        }
        .checkbox-square:checked {
          background-color: #0B2B4A;
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
      `}</style>
      <style>{`
        /* Keep the hero form visually identical to the provided light-mode screenshot on /new only. */
        .new-hero-light .dark\\:bg-gray-800 {
          background-color: #ffffff !important;
        }
        .new-hero-light .dark\\:text-white {
          color: #0B2B4A !important;
        }
        .new-hero-light .dark\\:bg-gray-700 {
          background-color: #ffffff !important;
        }
        .new-hero-light .dark\\:border-gray-400 {
          border-color: #0B2B4A !important;
        }
        .new-hero-light .dark\\:text-gray-200 {
          color: #0B2B4A !important;
        }
      `}</style>

      <main className="new-hero-light font-body antialiased text-gray-900 bg-background-light dark:bg-background-dark min-h-screen relative">
        <div className="fixed inset-0 z-0">
          <img
            alt="Terracotta roof tiles under a blue sky"
            className="w-full h-full object-cover object-center"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDace6eM2V-uG13weeEgTbesLs6y4S_4Djh-1dUwWCbSsbcFzSRtCn4R0hlrCnjudD50OlBblVjtzcsW31U_jq8RE0esHCLUj6QlWj2FN-QoXoCVfvPYxZiG6lMZ_0GsuOUeDkct7kAfK7q2qfLVqU3GICkLF_p49SmACLQs_fvS15wOZ2-ikCxVzORVv-LGD1qYevOkq7TFUpKw5A3BQx_HC6UZpNtPgY5O_sN0qmj6LiFoVNXxmYsyNChS3emt0Wddgo4ZgbrOFI"
          />
          <div className="absolute inset-0 bg-primary/80 dark:bg-black/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-black/60"></div>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-start min-h-screen px-4 py-8 max-w-md mx-auto w-full text-center">
          <a className="w-full mb-8 group" href="tel:0411017366">
            <div className="bg-primary/90 border-4 border-blue-500 py-3 px-2 shadow-lg hover:bg-primary transition-colors duration-300">
              <span className="text-white font-display text-2xl tracking-wide font-medium uppercase group-hover:scale-105 inline-block transition-transform">
                Click to call: 0411 017 366
              </span>
            </div>
          </a>
          <div className="space-y-2 mb-8">
            <h2 className="text-[#ff4444] dark:text-[#ff6666] font-medium text-xl tracking-wide text-shadow">
              Bring Your Home Back to Life!
            </h2>
            <h1 className="text-white font-display text-6xl font-bold uppercase leading-none tracking-tight text-shadow drop-shadow-xl">
              Roof Cleaning
            </h1>
            <div className="pt-4 pb-2">
              <p className="text-white text-2xl font-light leading-tight text-shadow">
                Serving Adelaide
                <br />
                &amp; Surrounding Areas
              </p>
            </div>
          </div>
          <div className="mb-8 space-y-6">
            <div className="font-display font-bold text-5xl leading-none text-shadow">
              <span className="text-white block mb-1">Spring Sale Roof</span>
              <span className="text-white">Cleaning from </span>
              <span className="text-[#ff3333] inline-block transform scale-110 ml-1 drop-shadow-md">
                $899
              </span>
            </div>
            <p className="text-white text-lg font-medium tracking-wide text-shadow max-w-[80%] mx-auto">
              Fill out the form below to grab this offer{' '}
              <span className="font-bold uppercase">Today</span>
            </p>
          </div>
          <div className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-2xl overflow-hidden mt-auto mb-4">
            <div className="p-6 pb-8">
              <h3 className="text-primary dark:text-white font-bold text-2xl mb-6 text-left leading-tight">
                What is the size of your roof?
              </h3>
              <form className="space-y-4">
                <label className="flex items-center space-x-4 cursor-pointer group">
                  <div className="relative flex items-center">
                    <input
                      className="peer h-6 w-6 cursor-pointer appearance-none border-2 border-primary bg-white transition-all checked:bg-primary hover:border-blue-600 dark:border-gray-400 dark:bg-gray-700 dark:checked:bg-primary"
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
                <label className="flex items-center space-x-4 cursor-pointer group">
                  <div className="relative flex items-center">
                    <input
                      className="peer h-6 w-6 cursor-pointer appearance-none border-2 border-primary bg-white transition-all checked:bg-primary hover:border-blue-600 dark:border-gray-400 dark:bg-gray-700 dark:checked:bg-primary"
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
                <label className="flex items-center space-x-4 cursor-pointer group">
                  <div className="relative flex items-center">
                    <input
                      className="peer h-6 w-6 cursor-pointer appearance-none border-2 border-primary bg-white transition-all checked:bg-primary hover:border-blue-600 dark:border-gray-400 dark:bg-gray-700 dark:checked:bg-primary"
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
                <div className="pt-6">
                  <button
                    className="w-full bg-primary hover:bg-blue-900 text-white font-bold text-3xl py-4 rounded shadow-lg transition-transform transform active:scale-95 uppercase tracking-wide"
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
          <section className="bg-white dark:bg-gray-800 px-6 py-10 text-center border-b border-gray-200 dark:border-gray-700">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-primary dark:text-white uppercase leading-tight tracking-tight mb-4">
              Local Exterior Cleaners You <br />
              Can <span className="text-secondary">Trust</span>
            </h1>
            <div className="flex flex-col items-center justify-center mb-8">
              <div className="flex items-center space-x-2 mb-1">
                <svg className="w-6 h-6" version="1.1" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
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
                <span className="text-xl font-bold text-gray-800 dark:text-gray-100">5.0</span>
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
            <div className="flex overflow-x-auto space-x-4 pb-4 px-2 no-scrollbar snap-x">
              <div className="bg-primary flex-shrink-0 w-64 rounded-xl p-4 text-left shadow-lg snap-center relative">
                <div className="flex items-center space-x-1 mb-2">
                  <span className="text-star-yellow font-bold text-sm">5.0</span>
                  <div className="flex text-star-yellow">
                    <i className="material-icons text-xs">star</i>
                    <i className="material-icons text-xs">star</i>
                    <i className="material-icons text-xs">star</i>
                    <i className="material-icons text-xs">star</i>
                    <i className="material-icons text-xs">star</i>
                  </div>
                </div>
                <p className="text-white text-xs leading-relaxed mb-3 font-light">
                  "Really solid cleaning by Shuyal and his team, they did an amazing job! They arrived on time, had
                  excellent communication, and left everything spotless. We will definitely be hiring them again for
                  our other properties."
                </p>
                <div className="flex items-center space-x-3 mt-auto">
                  <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-300">
                    <img
                      alt="Customer Profile"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4gBR53wYlahjFfmMROMhBckEuHm32FsvQvzRvTA8qqUHJk11GG3u2RaXbkbhvgKf32k_flqr20sOk42gSiljd9pl0CXKr58sFs84NgpWdaNUeb2rqTyNPXLw5GpFYhogBR01wZDHJAzSEG2FDZOg8707VKjABbpfAbS48tJ3ypBXziPED1fkYIEHZ1bhwC50zLuhscr_cQO9x4wBCg-m_F7DBwycgLe9ljUFm1v0S_B4DKDr6PfegOBqGjCAkFwb2YAzgWjn-yHw"
                    />
                  </div>
                  <div className="h-1 w-full bg-transparent"></div>
                </div>
              </div>
              <div className="bg-primary flex-shrink-0 w-64 rounded-xl p-4 text-left shadow-lg snap-center">
                <div className="flex items-center space-x-1 mb-2">
                  <span className="text-star-yellow font-bold text-sm">5.0</span>
                  <div className="flex text-star-yellow">
                    <i className="material-icons text-xs">star</i>
                    <i className="material-icons text-xs">star</i>
                    <i className="material-icons text-xs">star</i>
                    <i className="material-icons text-xs">star</i>
                    <i className="material-icons text-xs">star</i>
                  </div>
                </div>
                <p className="text-white text-xs leading-relaxed mb-3 font-light">
                  "Shuyal did an amazing job cleaning my gutters, very happy with the clean up afterwards too. Would
                  highly recommend!"
                </p>
                <div className="flex items-center space-x-3 mt-auto">
                  <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-300">
                    <img
                      alt="Customer Profile"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBw3V_R9Hef2am2ULtwbJYauO8tr8MFWcH4XHHhB727NqRhwRgwNLhQbudgTTJEmaNwvsPFs_bVFR0uaN4tLFGhXEQTg5OB3UNgiasRURtSS3kIWwt1gokskxsTOuZF_o2DyeewL-TtTaHqnJ3zB17y87DZmOY542Z025R5M6DK6WfWCKQ5GkxYISBvIn7_2qFIUJNg_JWFRv8BgWH_TpWRK4m8WAacmTDzcm3EZDRs3_3dw8LAs2IBuK2Jkv2ihKhHsz6vx1T9aOA"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-primary flex-shrink-0 w-64 rounded-xl p-4 text-left shadow-lg snap-center">
                <div className="flex items-center space-x-1 mb-2">
                  <span className="text-star-yellow font-bold text-sm">5.0</span>
                  <div className="flex text-star-yellow">
                    <i className="material-icons text-xs">star</i>
                    <i className="material-icons text-xs">star</i>
                    <i className="material-icons text-xs">star</i>
                    <i className="material-icons text-xs">star</i>
                    <i className="material-icons text-xs">star</i>
                  </div>
                </div>
                <p className="text-white text-xs leading-relaxed mb-3 font-light">
                  "Fantastic service. The team was professional and the results were beyond my expectations. My roof
                  looks brand new again."
                </p>
                <div className="flex items-center space-x-3 mt-auto">
                  <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-300">
                    <img
                      alt="Customer Profile"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIG75-c3ChPeb87A-B_0-sB_Yy2kSc63gpNoF0edCN3pJGn52TTOIb14kJbWqxPwDAe08fqYRjueqWVEdaaRNpjqobX7DrFTveiKaUYiesBz2SLPZnJiT5zC-lYIAJJBs2486epNtg7FdMcR3QzbCtoyCElS8U0t6nVrGea8lDJiAgv66acafCS2G8O7Ak38sWnHskxTkbZius_GmglRmQaVWFlMDnEYRROPqiWsrk7RHO-MDxIEB-3cCBQaDMtaBPztJylnM40SI"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-primary flex-shrink-0 w-64 rounded-xl p-4 text-left shadow-lg snap-center">
                <div className="flex items-center space-x-1 mb-2">
                  <span className="text-star-yellow font-bold text-sm">5.0</span>
                  <div className="flex text-star-yellow">
                    <i className="material-icons text-xs">star</i>
                    <i className="material-icons text-xs">star</i>
                    <i className="material-icons text-xs">star</i>
                    <i className="material-icons text-xs">star</i>
                    <i className="material-icons text-xs">star</i>
                  </div>
                </div>
                <p className="text-white text-xs leading-relaxed mb-3 font-light">
                  "Prompt, polite and thorough. I've recommended EverBright to all my neighbors already. Great value
                  for the price."
                </p>
                <div className="flex items-center space-x-3 mt-auto">
                  <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-300">
                    <img
                      alt="Customer Profile"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKke2ZwMzUruxHWpvXzKOnrEvl3RToOMqis7QCYBVZzj92BUcu63qGrwHnky7bIM0ISLf-gpZ7R2BJ_cnxdj6LIYfCfxXD1rGs7gae1o36JmF9JBdN5V05wTvMR9MzMXLmSYERjhUOkoWbR3vB2MC7G4AqebWM8KSnPQDFHzjKfOgEYFKgStvIrsZ7CTz65Rt-4CEFhQzQb8PBOPNR-750PZiC6CtCpTsN-vn16YLcwBihxlx77iA-7qjLyjTUrH9g15Dy7hzH1t4"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-primary flex-grow px-6 py-12 pb-16 text-center relative overflow-hidden">
            <div className="flex flex-col items-center justify-center mb-10">
              <div className="mb-2 relative w-64">
                <svg
                  className="w-full h-auto drop-shadow-lg"
                  fill="none"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="8"
                  viewBox="0 0 300 100"
                >
                  <path d="M50 80 L100 40"></path>
                  <path d="M80 60 L120 30 L160 60"></path>
                  <path d="M125 35 L125 25 L135 25" strokeWidth="5"></path>
                  <rect fill="transparent" height="20" rx="2" strokeWidth="4" width="20" x="110" y="55"></rect>
                  <line strokeWidth="3" x1="120" x2="120" y1="55" y2="75"></line>
                  <line strokeWidth="3" x1="110" x2="130" y1="65" y2="65"></line>
                  <rect fill="transparent" height="16" rx="1" strokeWidth="3" width="16" x="70" y="70"></rect>
                  <line strokeWidth="2" x1="78" x2="78" y1="70" y2="86"></line>
                  <line strokeWidth="2" x1="70" x2="86" y1="78" y2="78"></line>
                  <path d="M100 85 C 120 95, 140 60, 180 30" strokeWidth="8"></path>
                </svg>
                <div className="text-right -mt-4 ml-16">
                  <h2 className="text-4xl font-display font-bold text-white tracking-wide uppercase drop-shadow-md">
                    EverBright
                  </h2>
                  <p className="text-white font-serif text-sm tracking-widest uppercase opacity-90">
                    Pressure Washing
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white uppercase leading-none tracking-tight mb-2">
                Dirty Roof Today. <span className="text-accent block mt-1">Expensive</span>
              </h2>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-accent uppercase leading-none tracking-tight">
                Repairs Tomorrow.
              </h2>
            </div>
            <blockquote className="text-xl md:text-2xl font-serif italic text-white mb-6 opacity-90">
              “I’ll get around to it.”
            </blockquote>
            <div className="max-w-prose mx-auto text-white text-base md:text-lg leading-relaxed space-y-4 opacity-95 font-light">
              <p>
                That’s what most homeowners say — until the roof starts making the whole house look older than it is...
              </p>
              <p>
                You’ve seen the stains creeping across the tiles. You know it hasn’t been cleaned in years.
              </p>
              <p>
                But life’s busy. And let’s be honest, climbing up there with a pressure washer isn’t how you want to
                spend your weekend.
              </p>
            </div>
            <h3 className="mt-8 text-xl font-bold text-white">But waiting comes with a cost:</h3>
          </section>

          <section className="bg-white dark:bg-gray-800 px-6 py-10 text-center border-t border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary dark:text-white uppercase leading-tight tracking-tight">
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
                      <span className="material-icons-outlined text-red-500" style={{ fontSize: '20px' }}>
                        close
                      </span>
                    </div>
                  </div>
                  <p className="text-white text-[15px] leading-snug font-medium opacity-95">
                    Mould stained roofs make your entire home look older than it is
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-8 h-8 rounded-full border-2 border-red-500 flex items-center justify-center">
                      <span className="material-icons-outlined text-red-500" style={{ fontSize: '20px' }}>
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
                      <span className="material-icons-outlined text-red-500" style={{ fontSize: '20px' }}>
                        close
                      </span>
                    </div>
                  </div>
                  <p className="text-white text-[15px] leading-snug font-medium opacity-95">
                    Moisture trapped on your roof can lead to cracked tiles and hidden leaks
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-8 h-8 rounded-full border-2 border-red-500 flex items-center justify-center">
                      <span className="material-icons-outlined text-red-500" style={{ fontSize: '20px' }}>
                        close
                      </span>
                    </div>
                  </div>
                  <p className="text-white text-[15px] leading-snug font-medium opacity-95">
                    Neglected roofs can knock thousands off perceived property value
                  </p>
                </div>
              </div>
            </section>
            <section className="space-y-2">
              <div className="relative w-full rounded-lg overflow-hidden shadow-md group">
                <div className="absolute top-0 left-0 bg-primary px-4 py-1.5 z-10">
                  <span className="text-white font-bold text-sm tracking-wide">Before</span>
                </div>
                <img
                  alt="Dirty roof covered in lichen and mold before pressure washing"
                  className="w-full h-64 object-cover transform transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJG0rHPb107XjCgUoJjWj69oLDeqacLwAKd3R1hiWqewiDx6TbHYizTdAKwuIOkIz42qMVC1cS-Weywb-mn_ETchgZWb30w2aJohxtIxcSYS-VMSpvQs3gGr-0gZPDPdTtTaQUxAIiN7vMezqX9_7QHBk4RpDzeujh1Y6fdR7IXDuWuomIj0dsDZWEK4GHiW0TqR-XGpV7XKWcQK6pQGHWWAF_SNJLivIrZiVgqjbWiyYL2bGPQQxY5pUEZmltI6m-5BtjBhea8fc"
                />
              </div>
              <div className="relative w-full rounded-lg overflow-hidden shadow-md group">
                <div className="absolute top-0 left-0 bg-primary px-4 py-1.5 z-10">
                  <span className="text-white font-bold text-sm tracking-wide">After</span>
                </div>
                <img
                  alt="Clean and bright red terracotta roof after professional cleaning"
                  className="w-full h-64 object-cover transform transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsgQZ6FblQwjBG5E5v1Hv69hHtdrZ62LfksW_sU9C_rlJeHta3n7CLv6yN_dVUBVJrkyDxNDxeGoDE8CWPtkJBIH9EmJ1h_58Gq2XUbfJfQbf9m_BMyxNjYWyPoR0q_vkE5VGTfXi4sfj09-7c2mzpKj0uIWDGClKSE3zmXXSAHrfgyIFEdhiTfQdFR1m4AW6RipR2O1iE6e1Mhnpb0bbSaQkDrxFCtb7UxpZYS4zPx-P9mHzcxFkep6lSbMU2A4_X9xr52Jct42E"
                />
              </div>
            </section>
          </div>
        </div>

        <div className="new-section-4 relative z-10 w-full bg-navy-custom text-white antialiased">
          <div className="max-w-[430px] mx-auto p-8 font-body">
            <header className="mb-8" data-purpose="page-title">
              <h1 className="text-[26px] font-heading font-bold text-center uppercase tracking-tight">
                Professional Roof Cleaning That <span className="text-accent-blue">Restores Your Home</span> –
                Without Risk
              </h1>
            </header>

            <section className="space-y-6 text-[17px] leading-relaxed mb-10" data-purpose="marketing-copy">
              <p>
                You want a home you’re proud to pull into. You want a roof that looks clean, well-kept, and properly
                maintained, not stained, streaked, or ageing your entire property.
              </p>
              <p>
                You want peace of mind knowing mould and lichen aren’t slowly damaging your tiles. You want it handled
                safely, correctly, and without risking injury or costly mistakes.
              </p>
              <p>
                At EverBright, we make it happen safely, professionally, and without shortcuts.
              </p>
            </section>

            <section
              className="border border-card-custom rounded-lg bg-opacity-50 overflow-hidden"
              data-purpose="benefits-checklist"
            >
              <div aria-hidden="true" className="px-4 py-3 border-b border-card-custom flex gap-1.5">
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
                    Every job is fully insured and handled by certified technician
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
                    Cleaned roofs stay visibly cleaner for 3+ years after just our treatment
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
                    We help you protect one of the most expensive parts of your home.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="new-section-5 relative z-10 w-full bg-white font-body antialiased">
          <header className="bg-navy py-3 px-4 text-center" data-purpose="top-announcement">
            <h2 className="text-white font-heading text-xl md:text-2xl font-bold uppercase tracking-wider">
              And we can help you too!
            </h2>
          </header>

          <div className="py-8 text-center" data-purpose="services-overview">
            <section className="mb-6 px-6">
              <h1 className="text-navy font-heading text-4xl font-bold uppercase mb-2">Our Services</h1>
              <p className="text-navy font-heading text-xl font-medium">100% Satisfaction Guaranteed</p>
            </section>

            <section className="service-section-padding mb-8">
              <p className="text-body-blue text-[15px] leading-relaxed text-left mx-auto max-w-sm">
                We deliver professional roof and exterior cleaning for homeowners across Adelaide and surrounding
                suburbs. Our mission is to restore and protect your home with safe, controlled cleaning that keeps your
                home looking its best year-round.
              </p>
            </section>

            <section className="service-section-padding text-left max-w-md mx-auto" data-purpose="roof-cleaning-card">
              <div className="mb-6">
                <img
                  alt="Before and after comparison of a roof cleaning service showing dark mossy tiles versus clean red tiles"
                  className="w-full h-auto rounded-sm shadow-sm"
                  data-purpose="service-comparison-image"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6mT2yfIZePjP29_pIrJ8vxI3miS4kEoKzyqlZ1BbvqVJMfr8opuHbzbCskMz-WAmbGSdJZK88jmPJeSFkrivJuKvxg4CA-eubUROynlnnHOFOAUOa8htcJ_xQPE4GfzN1NAQcVbffbOi2X1r2gaZcjlb1LdHFKYcDAyj9Bq4q46oHVHnPSRON_ajC2H-BKJECOcS-wIkDR08DEGLaTlDLC0m6r61U1k_CzizopefCK7J6lIConUzuO5n5xbHq1XAjY-BIbrWlWQI"
                />
              </div>

              <h3 className="text-navy font-heading text-3xl font-bold uppercase mb-4">Roof Cleaning</h3>

              <p className="text-body-blue text-[15px] leading-snug mb-4">
                Keep your roof clean, protected, and looking its best with our professional roof cleaning service.
              </p>

              <ul className="text-black font-bold text-[13px] space-y-1 mb-5" data-purpose="service-features">
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
          </div>
        </div>
      </main>
    </>
  );
}
