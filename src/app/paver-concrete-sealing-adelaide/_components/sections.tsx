"use client";

import { useState } from "react";

import { paverSealingFaqs } from "./faq-data";
import { GoogleIcon, HouseIcon, HourglassIcon, PlusIcon, StarIcon } from "./icons";

const IMAGE_BASE = "/roof-restoration-v0/images";

export function StatsStrip() {
  const stats = [
    { icon: <GoogleIcon className="text-brand" />, num: "40+", label: "5-star reviews" },
    { icon: <HouseIcon className="text-brand" />, num: "200+", label: "Adelaide Homes Cleaned" },
    { icon: <HourglassIcon className="text-brand" />, num: "Fully insured", label: "Peace of mind" },
  ];

  return (
    <div className="relative z-20 mt-2 w-full px-0">
      <div className="flex w-full divide-x divide-border border-y border-border bg-card shadow-lg md:rounded-[2rem]">
        {stats.map((item) => (
          <div key={item.label} className="flex flex-1 items-center justify-center gap-1.5 px-2 py-4 md:gap-3 md:px-6 md:py-6">
            <div className="flex-shrink-0">{item.icon}</div>
            <div>
              <div
                className={`font-[family-name:var(--font-slab)] font-extrabold leading-none text-black ${
                  item.num === "Fully insured" ? "text-lg md:text-3xl" : "text-2xl md:text-4xl"
                }`}
              >
                {item.num}
              </div>
              <div className="mt-0.5 text-xs font-medium text-black md:mt-1 md:text-base">{item.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Intro() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-10 text-center md:px-8 md:py-14">
      <h2 className="mb-8 font-[family-name:var(--font-poppins)] text-4xl font-extrabold tracking-tight md:text-6xl">
        <span className="text-brand">Paver &amp; Concrete Sealing</span>{" "}
        <span className="text-[#002844]">Services in Adelaide</span>
      </h2>
      <div className="space-y-4 text-left text-base leading-relaxed text-black md:text-lg">
        <p>
          Over time, pavers and concrete can fade, stain and lose their clean look, especially in
          driveways and paths that see daily wear and constant sun.
        </p>
        <p>
          Left unsealed, that surface becomes more likely to absorb oil, dirt and stains
          permanently, making it harder and more expensive to bring back later.
        </p>
        <p>
          Using industry-best sealers and careful application, we protect against daily wear,
          enhance colour and keep outdoor areas looking well maintained for longer.
        </p>
        <p>
          It&apos;s one of the easiest ways to lift your home&apos;s street appeal, with a
          sharper finish and easier ongoing cleaning across Adelaide.
        </p>
      </div>
    </section>
  );
}

export function HowItWorks() {
  const steps = [
    {
      num: "1",
      title: "Fill in Your Details",
      desc: "Tell us your name and the best way to reach you. It takes about 30 seconds, with no obligation.",
    },
    {
      num: "2",
      title: "We Call You With a Quote",
      desc: "We'll call you same day to give you a quote over the phone. For larger sealing jobs we'll come in person to assess. Completely free.",
    },
    {
      num: "3",
      title: "Get a Clear, Fixed Price",
      desc: "You receive a same-day quote with no surprises. We only get started once you're happy.",
    },
  ];
  const scrollToForm = () => document.getElementById("assessment")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="mx-auto max-w-5xl px-4 py-12 md:px-8 md:py-20 lg:px-16">
      <div className="mb-8 text-center md:mb-12">
        <p className="mb-2 text-base font-extrabold uppercase tracking-[0.25em] text-brand md:text-lg">How it works</p>
        <h2 className="font-heading text-3xl font-extrabold tracking-wide text-[#0f2a4a] md:text-7xl">
          Three simple steps to a sealed surface
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
        {steps.map((s) => (
          <div key={s.num} className="rounded-lg border border-border bg-secondary p-6 text-left md:p-8">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#0f2a4a] font-heading text-3xl leading-none text-background">
              {s.num}
            </div>
            <h3 className="mb-2 text-lg font-bold text-foreground">{s.title}</h3>
            <p className="text-sm leading-relaxed text-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 flex flex-col items-center gap-5 rounded-lg bg-[#0f2a4a] px-6 py-10 text-center md:items-start md:px-10 md:text-left">
        <p className="text-balance text-2xl font-extrabold text-background md:text-3xl">
          Ready To Protect Your Surfaces For Longer?
        </p>
        <a
          href="#assessment"
          onClick={scrollToForm}
          className="rounded-md bg-brand px-8 py-3 text-base font-bold text-brand-foreground transition-opacity hover:opacity-90"
        >
          Get My Free Sealing Quote
        </a>
      </div>
    </section>
  );
}

export function FAQ() {
  const faqs = paverSealingFaqs;
  const [open, setOpen] = useState<number | null>(null);
  const columns = [faqs.slice(0, 3), faqs.slice(3)];

  return (
    <section className="bg-secondary py-12 md:py-20">
      <div className="mx-auto max-w-3xl px-4 md:max-w-6xl md:px-6">
        <div className="mb-6 text-center md:mb-10">
          <h2 className="text-balance font-heading text-4xl tracking-wide text-brand md:text-8xl">FAQ</h2>
          <p className="mx-auto mt-3 max-w-xl text-pretty text-sm leading-relaxed text-foreground md:text-base">
            Thinking about getting your pavers or concrete sealed? Here are quick answers to what Adelaide homeowners ask us most.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:items-start md:gap-4">
          {columns.map((column, columnIndex) => (
            <div key={columnIndex} className="flex flex-col gap-3">
              {column.map((faq, itemIndex) => {
                const i = columnIndex * 3 + itemIndex;
                const isOpen = open === i;

                return (
                  <div key={faq.q} className="overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-colors">
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left hover:bg-secondary/50 active:bg-secondary"
                      aria-expanded={isOpen}
                      aria-controls={`paver-faq-answer-${i}`}
                    >
                      <span className="text-sm font-bold text-card-foreground md:text-base">{faq.q}</span>
                      <PlusIcon className={`shrink-0 text-brand transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`} />
                    </button>
                    <div
                      id={`paver-faq-answer-${i}`}
                      className={`px-5 pb-5 pt-0 text-sm leading-relaxed text-foreground ${isOpen ? "" : "hidden"}`}
                    >
                      <p>{faq.a}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Transformations() {
  const items = [
    {
      src: "/betterPavingPhotos/8.png",
      alt: "Paver driveway before and after professional sealing near Adelaide",
    },
    {
      src: "/betterPavingPhotos/redone.png",
      alt: "Stamped concrete driveway before professional sealing",
    },
    {
      src: "/betterPavingPhotos/1232.png",
      alt: "Stamped concrete driveway after professional sealing",
    },
  ];
  const scrollToForm = () => document.getElementById("assessment")?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <section className="pb-0">
        <div className="bg-background px-4 pb-6 pt-5 text-center md:px-8 md:pb-8 md:pt-6 lg:px-16">
          <h2 className="font-[family-name:var(--font-poppins)] text-3xl font-bold uppercase tracking-tight text-[#002844] sm:text-4xl md:text-6xl">
            <span className="block">See the Difference Our</span>
            <span className="block">
              <span className="text-brand">Sealing</span> Makes
            </span>
          </h2>
        </div>
        <div className="sm:grid sm:grid-cols-3 sm:gap-[4px]">
          {items.map((item) => (
            <div key={item.src} style={{ fontSize: 0, lineHeight: 0 }}>
              <img
                src={item.src}
                alt={item.alt}
                decoding="async"
                loading="lazy"
                style={{ display: "block", width: "100%", height: "auto", margin: 0, padding: 0 }}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#002844] py-12 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-2xl font-extrabold text-white md:text-3xl">Ready for a protected surface</p>
            <p className="mt-1 text-2xl font-extrabold text-white md:text-3xl">and a better looking home?</p>
          </div>
          <a
            href="#assessment"
            onClick={scrollToForm}
            className="mt-6 rounded-lg bg-brand px-10 py-4 text-xl font-extrabold text-brand-foreground shadow-lg transition-transform hover:scale-[1.02]"
          >
            Get My Free Sealing Quote
          </a>
          <p className="mt-3 text-sm text-[#d7e5ff]">No obligation. We reply within 24 hours.</p>
        </div>
      </section>
    </>
  );
}

export function Reviews() {
  const reviews = [
    {
      name: "Al Bliss",
      location: "Adelaide, SA",
      text: "Great result on old pavers. Clear communication, on time, and no surprises.",
    },
    {
      name: "Navrose Dhaliwal",
      location: "Adelaide, SA",
      text: "Great job on our driveway. It hasn't looked this good in years.",
    },
    {
      name: "Jane M",
      location: "Adelaide, SA",
      text: "Easy communication and an excellent finish on our driveway. Couldn't be happier.",
    },
    {
      name: "Inshaaf Bhattarai",
      location: "Adelaide, SA",
      text: "Driveway was left spotless. Great value, respectful team, and a very strong result.",
    },
  ];

  return (
    <section className="bg-secondary py-12 md:py-20">
      <div className="mx-auto max-w-5xl px-4 md:max-w-6xl md:px-8">
        <div className="mb-8 text-center md:mb-12">
          <div className="mb-3 flex items-center justify-center gap-2">
            <GoogleIcon />
            <div className="flex text-brand">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="text-[#FBBC05]" />
              ))}
            </div>
          </div>
          <h2 className="font-heading text-4xl tracking-wide text-foreground md:text-5xl">What Our Customers Say</h2>
          <p className="mt-2 text-base font-medium text-muted-foreground md:text-lg">
            Paver &amp; concrete sealing reviews from Adelaide homeowners
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-lg border border-border bg-card p-6 text-left shadow-sm">
              <div className="mb-3 flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="text-[#FBBC05]" />
                ))}
              </div>
              <p className="mb-4 text-sm leading-relaxed text-card-foreground">{r.text}</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-foreground">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.location}</p>
                </div>
                <GoogleIcon className="opacity-70" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactUsStrip() {
  return (
    <section className="bg-background px-4 py-8 text-center">
      <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-brand">Contact Us</p>
      <h3 className="mt-2 text-2xl font-extrabold text-[#002844] md:text-3xl">Get In Touch</h3>
      <div className="mt-4 flex flex-col items-center gap-3 md:flex-row md:justify-center md:gap-8">
        <a
          href="tel:0411017366"
          className="flex items-center gap-2 text-base font-bold text-[#002844] transition-colors hover:text-brand md:text-lg"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand/10 text-brand">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 0 1 2-2h3.28a1 1 0 0 1 .948.684l1.498 4.493a1 1 0 0 1-.502 1.21l-2.257 1.13a11.042 11.042 0 0 0 5.516 5.516l1.13-2.257a1 1 0 0 1 1.21-.502l4.493 1.498a1 1 0 0 1 .684.949V19a2 2 0 0 1-2 2h-1C9.716 21 3 14.284 3 8V5z" />
            </svg>
          </span>
          0411 017 366
        </a>
        <div className="hidden h-5 w-px bg-border md:block" />
        <a
          href="mailto:everbrightpressurewashing@gmail.com"
          className="flex items-center gap-2 text-base font-bold text-[#002844] transition-colors hover:text-brand md:text-lg"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand/10 text-brand">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" />
            </svg>
          </span>
          everbrightpressurewashing@gmail.com
        </a>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-[#002844] px-3 py-1 text-white md:px-6 md:py-2">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-0 text-center">
        <img
          src={`${IMAGE_BASE}/logo-white.png`}
          alt="EverBright Pressure Washing"
          decoding="async"
          loading="lazy"
          className="h-32 w-auto md:h-48"
        />
        <p className="-mt-8 text-xs leading-tight md:-mt-14">Serving Adelaide &amp; surrounding areas</p>
        <p className="text-xs leading-tight">&copy; {new Date().getFullYear()} EverBright Pressure Washing</p>
      </div>
    </footer>
  );
}
