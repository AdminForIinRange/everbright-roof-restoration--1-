import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";

import Footer from "@/components/Footer";
import { buildPageMetadata } from "@lib/seo";
import ForceLightMode from "./ForceLightMode";
import RoofReviewsCarousel from "./RoofReviewsCarousel";
import LeadForm from "@/components/LeadForm";
import Header from "@/components/Header";

export const metadata: Metadata = buildPageMetadata({
  title: "New",
  description: "Draft landing page build area for the new page.",
  path: "/new",
  noIndex: true,
});

type RoofCleaningReview = {
  name: string;
  date: string;
  reviewText: string;
  stars: number;
};

const secondaryRoofCleaningReviews: RoofCleaningReview[] = [
  {
    name: "Isabell Hann",
    date: "2 months ago",
    reviewText:
      "Shayal and his team were fantastic to deal with. He cleaned our terracotta roof and did an amazing job. Great communication the whole way through and we're very happy with the results. Highly recommend his service.",
    stars: 5,
  },
  {
    name: "Mairi Ivy",
    date: "2 months ago",
    reviewText:
      "Shayal and his team did a great job cleaning our roof. they came on time, cleaned our roof that was covered in mould, and cleaned up after the job. highly recommend the team!",
    stars: 5,
  },
  {
    name: "Yama Amiri",
    date: "a month ago",
    reviewText:
      "Shayal and his team did an amazing job cleaning our roof that was covered in mould. The roof now looks new and refreshed.",
    stars: 5,
  },
  {
    name: "Yogesh Mandavkar",
    date: "2 months ago",
    reviewText:
      "Roof cleaning job was done very processionally and cleaned all the mess after work .looking place nice and clean . very polite and respectful",
    stars: 5,
  },
  {
    name: "Sudip Ramdam",
    date: "9 months ago",
    reviewText:
      "We had our roof soft washed by Shayal from EverBright the results were honestly better than we expected. The roof had years of built up grime, moss, and black streaks, now it looks clean and refreshed without any damage to the tiles.",
    stars: 5,
  },
];

const transformationShowcaseImages = [
  {
    key: "transformation-3",
    src: "/beforeAfter/3.webp",
    alt: "Exterior cleaning transformation result 3",
  },
  {
    key: "transformation-4",
    src: "/beforeAfter/4.webp",
    alt: "Exterior cleaning transformation result 4",
  },
  {
    key: "transformation-5",
    src: "/beforeAfter/5.webp",
    alt: "Exterior cleaning transformation result 5",
  },
  {
    key: "transformation-6",
    src: "/beforeAfter/6.webp",
    alt: "Exterior cleaning transformation result 6",
  },
  {
    key: "transformation-9",
    src: "/beforeAfter/9.webp",
    alt: "Exterior cleaning transformation result 9",
  },
  {
    key: "transformation-10",
    src: "/beforeAfter/10.webp",
    alt: "Exterior cleaning transformation result 10",
  },
] as const;

const newPageServiceCards = [
  {
    key: "roof-cleaning",
    category: "Roof Care",
    title: "Roof Cleaning",
    imageSrc: "/genrealPhotos/RoofcleaingServiceCard.png",
    imageFrameClassName: "aspect-[5/3]",
    imageClassName: "object-cover",
    imageAlt:
      "Before and after comparison of a roof cleaning service showing dark mossy tiles versus clean red tiles",
    summary:
      "A safe, controlled roof clean that removes staining and helps the whole home look fresher from the street.",
    features: [
      "Targets mould, lichen, and built up roof staining",
      "Helps restore colour and improve overall street appeal",
      "Designed for a cleaner finish without harsh, uncontrolled blasting",
    ],
    bestFor:
      "Tiled roofs with patchy discolouration, moss, or heavy dark staining.",
  },
  {
    key: "pressure-washing",
    category: "Surface Care",
    title: "Pressure Washing",
    imageSrc: "/genrealPhotos/Pressure%20WashingServiceCardImage.webp",
    imageFrameClassName: "aspect-[3/2]",
    imageClassName: "object-cover object-[center_18%]",
    imageAlt: "Pressure washing service cleaning outdoor hard surfaces",
    summary:
      "High-impact cleaning for outdoor surfaces so driveways, paths, and paved areas look cleaner, brighter, and better maintained.",
    features: [
      "Great for driveways, paths, patios, and exterior hard surfaces",
      "Lifts built up grime, dirt, and slippery surface residue",
      "Helps refresh tired outdoor areas before sale, guests, or routine upkeep",
    ],
    bestFor: "Concrete, paving, and outdoor zones that need a visible reset.",
  },
  {
    key: "gutter-cleaning",
    category: "Flow Protection",
    title: "Gutter Cleaning",
    imageSrc: "/genrealPhotos/Gutter%20CleaningServicePage.webp",
    imageFrameClassName: "aspect-[5/3]",
    imageClassName: "object-cover",
    imageAlt: "Gutter cleaning service clearing debris from roof gutters",
    summary:
      "Clear, free-flowing gutters help protect your roofline and reduce the risk of overflow around the home during heavy rain.",
    features: [
      "Removes leaves, debris, and compacted gutter blockages",
      "Helps reduce overflow, staining, and water-related issues",
      "Keeps roof drainage working the way it should",
    ],
    bestFor:
      "Homes with nearby trees, seasonal debris, or slow-draining gutters.",
  },
] as const;

function getReviewInitials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

function RoofCleaningReviewCard({ review }: { review: RoofCleaningReview }) {
  return (
    <>

      <div className="bg-card-light dark:bg-card-dark mx-auto rounded-sm p-6 shadow-lg">
        <div className="mb-3 flex items-center space-x-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
            {getReviewInitials(review.name)}
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-bold text-gray-900 dark:text-white text-lg tracking-tight font-sans">
              {review.name}
            </span>
            <span className="font-sans text-xs uppercase tracking-wide text-gray-500 dark:text-gray-300">
              {review.date}
            </span>
          </div>
        </div>
        <p className="mb-4 font-sans text-[15px] leading-relaxed text-black dark:text-black">
          {review.reviewText}
        </p>
        <div className="flex items-center space-x-2">
          <svg
            className="h-6 w-6"
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
          <span className="font-sans text-xl font-bold text-[#f58634]">
            {review.stars.toFixed(1)}
          </span>
          <div className="flex space-x-0.5 text-[#f58634]">
            {Array.from({ length: review.stars }).map((_, starIndex) => (
              <span key={starIndex} className="material-icons text-2xl">
                star
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function TransformationShowcaseTile({
  item,
}: {
  item: (typeof transformationShowcaseImages)[number];
}) {
  return (
    <article className="transformation-showcase-card relative aspect-[3/4] min-w-[41vw] shrink-0 overflow-hidden bg-white sm:min-w-[240px]">
      <Image
        src={item.src}
        alt={item.alt}
        fill
        sizes="(min-width: 768px) 240px, 41vw"
        quality={68}
        className="object-cover"
      />
    </article>
  );
}

function ServiceOverviewCard({
  service,
  className = "",
}: {
  service: (typeof newPageServiceCards)[number];
  className?: string;
}) {
  return (
    <section
      className={`service-section-padding max-w-md mx-auto text-left ${className}`.trim()}
      data-purpose={`${service.key}-card`}
    >
      <article className="service-card-shell overflow-hidden">
        <div
          className={`relative ${service.imageFrameClassName}`}
          data-purpose="service-comparison-image"
        >
          <Image
            src={service.imageSrc}
            alt={service.imageAlt}
            fill
            sizes="(min-width: 768px) 448px, calc(100vw - 48px)"
            className={service.imageClassName}
          />
        </div>

        <div className="service-card-content">
          <h3 className="service-card-title text-primary font-heading font-bold uppercase">
            {service.title}
          </h3>

          <p className="service-card-summary mt-4">{service.summary}</p>

          <div className="service-card-divider" />

          <ul className="service-card-features" data-purpose="service-features">
            {service.features.map((feature) => (
              <li key={feature} className="service-card-feature">
                <span className="service-card-check" aria-hidden="true">
                  <svg
                    className="h-3.5 w-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.25"
                    />
                  </svg>
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6" data-purpose="cta-container">
            <a className="service-card-cta" href="#" role="button">
              Get Your Quote
            </a>
          </div>
        </div>
      </article>
    </section>
  );
}

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
        .sale-offer-font {
          font-family: "Anton", "Archivo Narrow", "Oswald", sans-serif;
          letter-spacing: 0.015em;
          line-height: 0.88;
        }
        .sale-offer-white {
          color: #f8fafc;
          -webkit-text-stroke: 1px rgba(11, 30, 43, 0.35);
          text-shadow: 0 2px 0 rgba(11, 30, 43, 0.85), 0 8px 18px rgba(0, 0, 0, 0.35);
        }
        .sale-offer-price {
          color: #ff3b30;
          text-shadow: 0 2px 0 rgba(120, 18, 12, 0.85), 0 8px 18px rgba(0, 0, 0, 0.25);
        }
        .transformation-showcase-shell {
          overflow: hidden;
          background: #efefef;
          border-top: 1px solid #d9d9d9;
          border-bottom: 1px solid #d9d9d9;
        }
        .transformation-showcase-track {
          display: flex;
          width: max-content;
          animation: transformation-showcase-scroll 26s linear infinite;
          will-change: transform;
        }
        .transformation-showcase-copy {
          display: flex;
          gap: 2px;
          padding-right: 2px;
        }
        .transformation-showcase-card {
          border-left: 1px solid #f6f6f6;
          border-right: 1px solid #f6f6f6;
        }
        .transformation-showcase-shell:hover .transformation-showcase-track {
          animation-play-state: paused;
        }
        @keyframes transformation-showcase-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .transformation-showcase-track {
            animation: none;
          }
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
          background-color: #0B1E2B !important;
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
          background-color: #0B1E2B !important;
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
          --bg-dark-blue: #0B1E2B;
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
        .new-section-5 .service-card-shell {
          border: 1px solid #d9e3ec;
          border-radius: 1.5rem;
          background: #ffffff;
          box-shadow: 0 18px 42px rgba(15, 46, 77, 0.08);
        }
        .new-section-5 .service-card-content {
          padding: 1.4rem 1.25rem 1.35rem;
        }
        .new-section-5 .service-card-kicker,
        .new-section-5 .service-card-location {
          display: inline-flex;
          align-items: center;
          border-radius: 9999px;
          padding: 0.45rem 0.8rem;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }
        .new-section-5 .service-card-kicker {
          background: #eaf6ff;
          color: #0f2e4d;
        }
        .new-section-5 .service-card-location {
          background: #f5f9fc;
          color: #577089;
        }
        .new-section-5 .service-card-title {
          font-size: clamp(2.15rem, 6vw, 2.7rem);
          line-height: 0.95;
          letter-spacing: 0.01em;
        }
        .new-section-5 .service-card-summary {
          color: #334e68;
          font-size: 1rem;
          line-height: 1.65;
        }
        .new-section-5 .service-card-divider {
          margin: 1.2rem 0;
          height: 1px;
          width: 100%;
          background: linear-gradient(90deg, rgba(56, 189, 248, 0.4), rgba(217, 227, 236, 0.75));
        }
        .new-section-5 .service-card-features {
          display: grid;
          gap: 0.8rem;
          margin-bottom: 1.25rem;
        }
        .new-section-5 .service-card-feature {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          color: #102a43;
          font-size: 0.97rem;
          font-weight: 600;
          line-height: 1.5;
        }
        .new-section-5 .service-card-check {
          display: inline-flex;
          height: 1.65rem;
          width: 1.65rem;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
          border-radius: 9999px;
          background: #e8f7ee;
          color: #15803d;
          margin-top: 0.05rem;
        }
        .new-section-5 .service-card-meta-grid {
          display: grid;
          gap: 0.8rem;
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        @media (max-width: 420px) {
          .new-section-5 .service-card-meta-grid {
            grid-template-columns: 1fr;
          }
        }
        .new-section-5 .service-card-meta {
          border: 1px solid #d9e3ec;
          border-radius: 1rem;
          background: #f8fbfd;
          padding: 0.95rem 1rem;
        }
        .new-section-5 .service-card-meta-label {
          display: block;
          margin-bottom: 0.35rem;
          color: #577089;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }
        .new-section-5 .service-card-meta-value {
          color: #102a43;
          font-size: 0.92rem;
          font-weight: 600;
          line-height: 1.45;
        }
        .new-section-5 .service-card-cta {
          display: block;
          width: 100%;
          border: 3px solid #38BDF8;
          border-radius: 1rem;
          background: #38BDF8;
          padding: 0.95rem 1rem;
          text-align: center;
          color: #0f2e4d;
          font-size: 1.65rem;
          font-weight: 700;
          line-height: 1;
          text-transform: uppercase;
          transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
        }
        .new-section-5 .service-card-cta:hover {
          background: #dff4ff;
          box-shadow: 0 12px 24px rgba(56, 189, 248, 0.2);
          transform: translateY(-1px);
        }

        /* Section-local custom classes for the sixth pasted snippet */
        .new-section-6,
        .new-section-6.bg-primary,
        .new-section-6 .bg-primary {
          background-color: #0B1E2B !important;
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
          background-color: #0B1E2B !important;
        }
        .new-section-7 .bg-secondary {
          background-color: #0B1E2B !important;
        }
        .new-section-7 .hover\\:bg-secondary:hover {
          background-color: #0B1E2B !important;
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

        /* Section-local custom classes for the eighth pasted snippet */
        .new-section-8,
        .new-section-8.bg-background-light,
        .new-section-8 .bg-background-light {
          background-color: #0B1E2B !important;
          background-image: none !important;
        }
        .dark .new-section-8.dark\\:bg-background-dark,
        .dark .new-section-8 .dark\\:bg-background-dark {
          background-color: #0B1E2B !important;
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
          background: #0B1E2B;
        }
        .new-page-footer footer {
          background-color: #0B1E2B !important;
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
          <div className="absolute inset-0 bg-black/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/30 to-black/30"></div>
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
          <div className="mb-6 space-y-6 pt-4">
            <div className="sale-offer-font text-center uppercase">
              <span className="sale-offer-white block text-[32px] sm:text-[36px]">
                Spring Sale Roof
              </span>
              <span className="sale-offer-white pt-[10px] block text-[34px] sm:text-[38px]">
                Cleaning from{" "}
                <span className=" text-[#38BDF8] inline-block pl-1">$899</span>
              </span>
            </div>
          </div>
          <div className="w-[100%] bg-white dark:bg-gray-800 rounded-lg shadow-2xl overflow-hidden mt-[25px] mb-4 ">
            <LeadForm />
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
            <h3 className="mt-12 text-left text-2xl impact-offer-font text-white">
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
            <section className="bg-[#0B1E2B] text-white rounded-2xl p-6 shadow-lg relative overflow-hidden">
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
                    Built up mould and lichen slowly eat into tile surfaces
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
              <h1 className="text-[26px] font-heading font-bold text-strat uppercase tracking-tight">
                Professional Roof Cleaning That{" "}
                <span className="text-brand-sky">Restores Your Home</span> –
                Without Risk
              </h1>
            </header>

            <section
              className="space-y-6 text-[17px] leading-relaxed mb-10"
              data-purpose="marketing-copy"
            >
              <p>
                You want a home you’re proud to pull into. You want a roof that
                looks clean, well kept, and properly maintained, not stained,
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
              className="border border-card-custom bg-white rounded-lg  overflow-hidden"
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
                  <p className="text-[16px] text-dark-navy font-medium leading-snug">
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
                  <p className="text-[16px] text-dark-navy font-medium leading-snug">
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
                  <p className="text-[16px] text-dark-navy font-medium leading-snug">
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
                  <p className="text-[16px] text-dark-navy font-medium leading-snug">
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
            className="bg-primary py-3 px-4 text-center"
            data-purpose="top-announcement"
          >
            <h2 className="text-white font-heading text-xl md:text-2xl font-bold uppercase tracking-wider">
              And we can help you too!
            </h2>
          </header>

          <div
            className="py-8 pt-[0px] text-center"
            data-purpose="services-overview"
          >
            <section className="mb-6 px-6">
              <h1 className="text-primary font-heading text-5xl font-bold uppercase mb-2">
                Our Services
              </h1>
              <p className="text-[#38BDF8]  font-heading text-xl font-medium">
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
            {newPageServiceCards.map((service, index) => (
              <ServiceOverviewCard
                key={service.key}
                service={service}
                className={index === 0 ? "" : "mt-12"}
              />
            ))}
          </div>
        </div>

        <div className="new-section-6 relative z-10 w-full bg-primary min-h-screen flex flex-col items-center py-10 antialiased font-condensed">
          <div className="flex flex-col items-center justify-center mb-10">
            <div className="mb-[-5px] relative w-52 max-w-full">
              <img
                alt="EverBright Pressure Washing logo"
                className="mx-auto h-auto w-full object-contain drop-shadow-lg"
                src="/Presure%20washing-%20Driveways,%20houses,%20patios%20and%20more-3.png"
              />
            </div>
          </div>

          <div className="w-full max-w-[340px] space-y-6 px-2">
            {secondaryRoofCleaningReviews.map((review) => (
              <RoofCleaningReviewCard
                key={`${review.name}-${review.date}`}
                review={review}
              />
            ))}
          </div>
        </div>

        <div className="new-section-7 relative z-10 w-full overflow-x-hidden bg-background-light dark:bg-background-dark font-sans antialiased">
          <div className="w-full max-w-md mx-auto relative flex flex-col items-center px-0 py-12 space-y-8 bg-background-light dark:bg-background-dark">
            <header className="w-full px-4">
              <h1 className="font-['Anton'] text-[3.55rem] uppercase leading-[0.88] tracking-[0.01em] text-primary dark:text-blue-100">
                Checkout these
                <span className="block pt-[10px]">transformations!</span>
              </h1>
            </header>

            <section className="transformation-showcase-shell w-full py-3">
              <div className="transformation-showcase-track">
                {[0, 1].map((copyIndex) => (
                  <div
                    key={`transformation-showcase-copy-${copyIndex}`}
                    className="transformation-showcase-copy"
                    aria-hidden={copyIndex === 1}
                  >
                    {transformationShowcaseImages.map((item) => (
                      <TransformationShowcaseTile
                        key={`${copyIndex}-${item.key}`}
                        item={item}
                      />
                    ))}
                  </div>
                ))}
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

            <div className="relative w-72 max-w-full aspect-square">
              <Image
                src="/genrealPhotos/image-removebg-preview.png"
                alt="EverBright service illustration"
                fill
                sizes="(min-width: 768px) 288px, min(18rem, 100vw - 3rem)"
                className="object-contain"
              />
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
