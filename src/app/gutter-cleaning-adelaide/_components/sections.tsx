"use client"

import { useState } from "react"
import { GoogleIcon, HouseIcon, ShieldCheckIcon, PlusIcon, StarIcon } from "./icons"
import { introFaqs } from "./intro-faq-data"

export function StatsStrip() {
  const stats = [
    { icon: <GoogleIcon className="text-brand" />, num: "40+", label: "5-star reviews" },
    { icon: <HouseIcon className="text-brand" />, num: "200+", label: "Adelaide Homes Cleaned" },
    { icon: <ShieldCheckIcon className="text-brand" />, num: "Fully insured", label: "Peace of mind" },
  ]

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
  )
}

export function Intro() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-10 text-center md:px-8 md:py-14">
      <h2 className="mb-8 font-[family-name:var(--font-poppins)] text-4xl font-extrabold tracking-tight md:text-6xl">
        <span className="text-brand">Gutter Cleaning</span>{" "}
        <span className="text-[#002844]">Services in Adelaide</span>
      </h2>
      <div className="space-y-4 text-left text-base leading-relaxed text-black md:text-lg">
        <p>
          Cleaning your gutters is simple maintenance, but it&apos;s a job most people would
          rather not do themselves, especially the ladder work on a two-storey home. Left too
          long, blocked gutters stop draining and can lead to overflow, leaks and water damage.
        </p>
        <p>
          We clear all the debris, flush the downpipes, hose everything down and check it&apos;s
          flowing freely. Easy gutter cleaning that keeps your Adelaide home protected.
        </p>
      </div>
    </section>
  );
}

export function IntroFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="mx-auto max-w-3xl px-4 pb-10 md:px-8 md:pb-14">
      <div className="flex flex-col gap-3">
        {introFaqs.map((faq, i) => {
          const isOpen = open === i;

          return (
            <div
              key={faq.q}
              className="overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-colors"
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left hover:bg-secondary/50 active:bg-secondary"
                aria-expanded={isOpen}
                aria-controls={`gutter-intro-faq-answer-${i}`}
              >
                <span className="text-base font-bold text-black md:text-lg">{faq.q}</span>
                <PlusIcon className={`shrink-0 text-brand transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`} />
              </button>
              <div
                id={`gutter-intro-faq-answer-${i}`}
                className={`px-5 pb-5 pt-0 text-sm leading-relaxed text-black ${isOpen ? "" : "hidden"}`}
              >
                <p>{faq.a}</p>
              </div>
            </div>
          );
        })}
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
      desc: "We'll call you same day to give you a quote over the phone. For larger gutter cleaning jobs we'll come in person to assess. Completely free.",
    },
    {
      num: "3",
      title: "Get a Clear, Fixed Price",
      desc: "You receive a same-day quote with no surprises. We only get started once you're happy.",
    },
  ]
  const scrollToForm = () => document.getElementById("assessment")?.scrollIntoView({ behavior: "smooth" })

  return (
    <section className="mx-auto max-w-5xl px-4 py-12 md:px-8 md:py-20 lg:px-16">
      <div className="mb-8 text-center md:mb-12">
        <p className="mb-2 text-base font-extrabold uppercase tracking-[0.25em] text-brand md:text-lg">How it works</p>
        <h2 className="font-heading text-3xl font-extrabold tracking-wide text-[#0f2a4a] md:text-7xl">
          Three simple steps to clean gutters
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
          Ready To Get Rid Of Blocked Gutters For Good?
        </p>
        <a
          href="#assessment"
          onClick={scrollToForm}
          className="w-full rounded-lg bg-brand px-8 py-4 text-base font-bold text-brand-foreground transition-opacity hover:opacity-90 md:w-auto"
        >
          Get My Free Gutter Cleaning Quote
        </a>
      </div>
    </section>
  )
}

export function FAQ() {
  const faqs = [
    {
      q: "Is gutter cleaning safe for my roof and gutters?",
      a: "Yes. We take care not to damage your gutters, roof tiles or fascia boards. We use the right tools and techniques for your gutter type to clean thoroughly without causing any harm.",
    },
    {
      q: "Is the quote really free?",
      a: "100% free. We give you a clear fixed price over the phone same day, with no obligation. For larger jobs we'll come out in person to assess at no cost.",
    },
    {
      q: "Do I need to be home for the clean?",
      a: "Not always. We just need safe access to your gutters and roof. Many customers are happy to leave us to it. Just let us know what suits you.",
    },
    {
      q: "How long does gutter cleaning take?",
      a: "Most homes are done within 1–2 hours in a single visit. We'll give you a clear time estimate with your quote based on the size and condition of your gutters.",
    },
    {
      q: "How do I know if my gutters need cleaning?",
      a: "If water is overflowing during rain, plants are growing in your gutters, or it's been more than 12 months since your last clean, it's time. Blocked gutters can cause serious water damage if left.",
    },
    {
      q: "Do you cover my area?",
      a: "We clean gutters right across Adelaide and surrounding suburbs. Not sure if you're in our area? Just ask when you request your quote and we'll confirm straight away.",
    },
  ]
  const [open, setOpen] = useState<number | null>(null)
  const columns = [faqs.slice(0, 3), faqs.slice(3)]

  return (
    <section className="bg-secondary py-12 md:py-20">
      <div className="mx-auto max-w-3xl px-4 md:max-w-6xl md:px-6">
        <div className="mb-6 text-center md:mb-10">
          <h2 className="text-balance font-heading text-4xl tracking-wide text-brand md:text-8xl">FAQ</h2>
          <p className="mx-auto mt-3 max-w-xl text-pretty text-sm leading-relaxed text-foreground md:text-base">
            Thinking about getting your gutters cleaned? Here are quick answers to what Adelaide homeowners ask us most.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:items-start md:gap-4">
          {columns.map((column, columnIndex) => (
            <div key={columnIndex} className="flex flex-col gap-3">
              {column.map((faq, itemIndex) => {
                const i = columnIndex * 3 + itemIndex
                const isOpen = open === i

                return (
                  <div
                    key={faq.q}
                    className="overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left hover:bg-secondary/50 active:bg-secondary"
                      aria-expanded={isOpen}
                    >
                      <span className="text-sm font-bold text-card-foreground md:text-base">{faq.q}</span>
                      <PlusIcon
                        className={`shrink-0 text-brand transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-0 text-sm leading-relaxed text-foreground">
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Transformations() {
  const items = [
    {
      src: "/gutter-cleaning-v0/images/2.png",
      alt: "Pressure washing results",
      aspect: "1414/850",
    },
    {
      src: "/gutter-cleaning-v0/images/3.png",
      alt: "Pressure washing results",
      aspect: "1414/918",
    },
    {
      src: "/gutter-cleaning-v0/images/4.png",
      alt: "Pressure washing results",
      aspect: "1414/918",
    },
  ]
  const scrollToForm = () => document.getElementById("assessment")?.scrollIntoView({ behavior: "smooth" })

  return (
    <>
      <section className="pb-0">
        <div className="bg-background px-4 pb-3 pt-5 text-center md:px-8 md:pb-4 md:pt-6 lg:px-16">
          <h2 className="font-[family-name:var(--font-poppins)] text-4xl font-extrabold tracking-tight text-[#002844] md:text-6xl">
            <span className="block">See the Difference Our</span>
            <span className="block">
              <span className="text-brand">Gutter Cleaning</span> Makes
            </span>
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 0, overflow: "hidden" }} className="md:[grid-template-columns:1fr_1fr_1fr]">
          {items.map((item) => (
            <div key={item.src} style={{ margin: 0, padding: 0, lineHeight: 0, fontSize: 0, overflow: "hidden", minWidth: 0 }}>
              <img
                src={item.src || "/placeholder.svg"}
                alt={item.alt}
                style={{ display: "block", width: "100%", maxWidth: "100%", height: "auto", margin: 0, padding: 0 }}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#002844] py-12 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-2xl font-extrabold text-white md:text-3xl">Ready for clean, clear gutters</p>
            <p className="mt-1 text-2xl font-extrabold text-white md:text-3xl">and a protected home?</p>
          </div>
          <a
            href="#assessment"
            onClick={scrollToForm}
            className="mt-6 rounded-lg bg-brand px-10 py-4 text-xl font-extrabold text-brand-foreground shadow-lg transition-transform hover:scale-[1.02]"
          >
            Get My Free Gutter Cleaning Quote
          </a>
          <p className="mt-3 text-sm text-[#d7e5ff]">No obligation. We reply within 24 hours.</p>
        </div>
      </section>
    </>
  )
}

export function Reviews() {
  const reviews = [
    {
      name: "Sarah M.",
      location: "Burnside, SA",
      text: "EverBright did an incredible job on our gutters. Years of leaf build-up and blockages completely cleared. Water is flowing perfectly now. Professional, on time and great value. Highly recommend!",
    },
    {
      name: "David T.",
      location: "Glenelg, SA",
      text: "Fantastic service from start to finish. The team was friendly, gave me a clear fixed quote with no surprises, and the result was outstanding. Our gutters have never looked better.",
    },
    {
      name: "Emma R.",
      location: "Norwood, SA",
      text: "Could not be happier with the gutter clean. They were thorough, tidy and respectful of our property. The before and after honestly speak for themselves. Five stars!",
    },
    {
      name: "Michael C.",
      location: "Prospect, SA",
      text: "Booked EverBright after seeing their work on a neighbour's gutters. They turned up on time, worked efficiently and cleared everything completely. Excellent communication throughout.",
    },
  ]

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
            Gutter cleaning reviews from Adelaide homeowners
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
  )
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 8V5z" />
            </svg>
          </span>
          0411 017 366
        </a>
        <div className="hidden h-5 w-px bg-border md:block" />
        <a
          href="mailto:Everbrightpressurewashing@gmail.com"
          className="flex items-center gap-2 text-base font-bold text-[#002844] transition-colors hover:text-brand md:text-lg"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand/10 text-brand">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </span>
          Everbrightpressurewashing@gmail.com
        </a>
      </div>
    </section>
  )
}

export function SiteFooter() {
  return (
    <footer className="bg-[#002844] px-3 py-1 text-white md:px-6 md:py-2">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-0 text-center">
        <img src="/gutter-cleaning-v0/images/logo-white.png" alt="EverBright Pressure Washing" className="h-32 w-auto md:h-48" />
        <p className="-mt-8 text-xs leading-tight md:-mt-14">Serving Adelaide &amp; surrounding areas</p>
        <p className="text-xs leading-tight">© {new Date().getFullYear()} EverBright Pressure Washing</p>
      </div>
    </footer>
  )
}
