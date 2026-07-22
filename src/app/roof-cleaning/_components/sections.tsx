"use client";

import { useState } from "react";

import { GoogleIcon, HouseIcon, HourglassIcon, PlusIcon, StarIcon } from "./icons";

const IMAGE_BASE = "/roof-restoration-v0/images";

export function StatsStrip() {
  const stats = [
    { icon: <GoogleIcon className="text-brand" />, num: "38+", label: "5-star reviews" },
    { icon: <HouseIcon className="text-brand" />, num: "100+", label: "Adelaide roofs cleaned" },
    { icon: <HourglassIcon className="text-brand" />, num: "Fully insured", label: "Peace of mind" },
  ];

  return (
    <div className="relative z-20 w-full px-0">
      <div className="flex w-full divide-x divide-border border-y border-border bg-card shadow-lg md:rounded-[2rem]">
        {stats.map((item) => (
          <div key={item.label} className="flex flex-1 items-center justify-center gap-1.5 px-2 py-4 md:gap-3 md:px-6 md:py-6">
            <div className="flex-shrink-0">{item.icon}</div>
            <div>
              <div
                className={`font-[family-name:var(--font-slab)] font-extrabold leading-none text-black ${
                  item.num === "Fully insured" ? "text-base md:text-3xl" : "text-xl md:text-4xl"
                }`}
              >
                {item.num}
              </div>
              <div className="mt-0.5 text-[10px] font-medium text-black md:mt-1 md:text-base">{item.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
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
      title: "We Assess Your Roof",
      desc: "We visit your home in Adelaide or surrounds and check your roof in person, completely free.",
    },
    {
      num: "3",
      title: "Get a Clear, Fixed Price",
      desc: "You receive a straightforward quote with no surprises. We only get started once you're happy.",
    },
  ];
  const scrollToForm = () => document.getElementById("assessment")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="mx-auto max-w-5xl px-4 py-12 md:px-8 md:py-20 lg:px-16">
      <div className="mb-8 text-center md:mb-12">
        <p className="mb-2 text-base font-extrabold uppercase tracking-[0.25em] text-brand md:text-lg">How it works</p>
        <h2 className="font-heading text-3xl font-extrabold tracking-wide text-[#0f2a4a] md:text-7xl">
          Three simple steps to a clean roof
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
          Ready To Get Rid Of Ugly Roof Stains For Good?
        </p>
        <a
          href="#assessment"
          onClick={scrollToForm}
          className="rounded-md bg-brand px-8 py-3 text-base font-bold text-brand-foreground transition-opacity hover:opacity-90"
        >
          Get My Free Roof Quote
        </a>
      </div>
    </section>
  );
}

export function FAQ() {
  const faqs = [
    {
      q: "Is roof cleaning safe for my roof?",
      a: "Yes. We use a gentle, low-pressure method matched to your roof type, so your tiles or metal stay protected. It lifts away stains, moss, and grime without harsh blasting or damage.",
    },
    {
      q: "Is the quote really free?",
      a: "It is. We come out, look at your roof properly, and give you a clear fixed price with no obligation. There's no cost to get a quote and no pressure to go ahead.",
    },
    {
      q: "Do I need to be home for the clean?",
      a: "Not always. We do need access to your property and roof, but many homeowners are happy to leave us to it. Just let us know what suits you when we book.",
    },
    {
      q: "How long does a roof clean take?",
      a: "Most homes are done in a single visit, often within a few hours depending on the size and condition of your roof. We'll give you a clear time estimate with your quote.",
    },
    {
      q: "Will it actually make a difference I can see?",
      a: "Yes, and the change is usually striking. Removing years of stains and streaks instantly brightens your roof and makes your whole home look cleaner and well cared for from the street.",
    },
    {
      q: "Do you cover my area?",
      a: "We clean roofs right across Adelaide and the surrounding suburbs. Not sure if you're in our patch? Just ask when you request your quote and we'll let you know.",
    },
  ];
  const [open, setOpen] = useState<number | null>(null);
  const columns = [faqs.slice(0, 3), faqs.slice(3)];

  return (
    <section className="bg-secondary py-12 md:py-20">
      <div className="mx-auto max-w-3xl px-4 md:max-w-6xl md:px-6">
        <div className="mb-6 text-center md:mb-10">
          <h2 className="text-balance font-heading text-4xl tracking-wide text-brand md:text-8xl">FAQ</h2>
          <p className="mx-auto mt-3 max-w-xl text-pretty text-sm leading-relaxed text-foreground md:text-base">
            Thinking about a fresh, clean roof? Here are quick answers to what Adelaide homeowners ask us most.
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
                    >
                      <span className="text-sm font-bold text-card-foreground md:text-base">{faq.q}</span>
                      <PlusIcon className={`shrink-0 text-brand transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`} />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-0 text-sm leading-relaxed text-foreground">
                        <p>{faq.a}</p>
                      </div>
                    )}
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
      src: `${IMAGE_BASE}/ba-1.png`,
      alt: "Before and after roof cleaning of a red tile roof, transformed from heavy moss and lichen to vibrant clean tiles",
      aspect: "1414/850",
    },
    {
      src: `${IMAGE_BASE}/starting-at-899-15.png`,
      alt: "Before and after roof cleaning of a suburban Adelaide tile roof with solar panels, before on the left and after on the right",
      aspect: "1414/918",
    },
    {
      src: `${IMAGE_BASE}/ba-3.png`,
      alt: "Before and after roof cleaning showing tiles caked in moss and debris restored to clean orange tiles",
      aspect: "1414/918",
    },
  ];
  const scrollToForm = () => document.getElementById("assessment")?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <section className="pb-0">
        <div className="mb-6 bg-background px-4 py-5 text-center md:px-8 md:py-8 lg:px-16">
          <h2 className="font-[family-name:var(--font-poppins)] text-3xl font-extrabold uppercase leading-tight tracking-tight text-[#002844] md:text-5xl">
            <span className="block">See the Difference Our</span>
            <span className="block">Roof Cleaning Makes</span>
          </h2>
          <p className="mt-3 font-sans text-sm font-bold uppercase text-[#002844] md:text-base">
            <span className="block">Roof cleaning results from</span>
            <span className="block">homes across Adelaide</span>
          </p>
        </div>
        <div className="grid grid-cols-1 gap-0 sm:grid-cols-3">
          {items.map((item, index) => (
            <div key={item.src} className={`overflow-hidden md:h-[320px]${index === 0 ? " border-b-[12px] border-white sm:border-b-0" : ""}`}>
              <img
                src={item.src}
                alt={item.alt}
                style={{ aspectRatio: item.aspect }}
                className="block h-full w-full object-cover object-top"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#002844] py-12 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-2xl font-extrabold text-white md:text-3xl">Ready for a cleaner roof</p>
            <p className="mt-1 text-2xl font-extrabold text-white md:text-3xl">and a better looking home?</p>
          </div>
          <a
            href="#assessment"
            onClick={scrollToForm}
            className="mt-6 rounded-lg bg-brand px-10 py-4 text-xl font-extrabold text-brand-foreground shadow-lg transition-transform hover:scale-[1.02]"
          >
            Get My Free Roof Quote
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
      name: "Sarah M.",
      location: "Burnside, SA",
      text: "EverBright did an incredible job on our tile roof. Years of moss and lichen completely gone - it looks brand new. Professional, on time and great value. Highly recommend!",
    },
    {
      name: "David T.",
      location: "Glenelg, SA",
      text: "Fantastic service from start to finish. The team was friendly, gave me a clear fixed quote with no surprises, and the result was outstanding. Our roof has never looked better.",
    },
    {
      name: "Emma R.",
      location: "Norwood, SA",
      text: "Could not be happier with the roof clean. They were thorough, tidy and respectful of our property. The before and after photos honestly speak for themselves. Five stars!",
    },
    {
      name: "Michael C.",
      location: "Prospect, SA",
      text: "Booked EverBright after seeing their work on a neighbour's roof. They turned up on time, worked safely and transformed our roof completely. Excellent communication throughout.",
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
          <p className="mt-2 text-base font-medium text-muted-foreground md:text-lg">Reviews from Adelaide homeowners</p>
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
    <section className="bg-background px-4 py-5 text-center">
      <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-brand">Contact us</p>
      <p className="mt-2 text-base font-bold text-[#002844] md:text-lg">
        0411017366 | everbrightpressurewashing@gmail.com
      </p>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-[#002844] px-3 py-1 text-white md:px-6 md:py-2">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-0 text-center">
        <img src={`${IMAGE_BASE}/logo-white.png`} alt="EverBright Pressure Washing logo" className="h-32 w-auto md:h-48" />
        <p className="-mt-8 text-xs leading-tight md:-mt-14">Serving Adelaide &amp; surrounding areas</p>
        <p className="text-xs leading-tight">&copy; 2025 EverBright Pressure Washing</p>
      </div>
    </footer>
  );
}
