"use client"

import { useState } from "react"
import { CheckIcon, PhoneIcon } from "./icons"
import { useGutterCleaningLeadAction } from "./use-gutter-cleaning-lead-action"

const Q2_OPTIONS = [
  "Single Storey",
  "Double Storey",
]

const Q3_OPTIONS = [
  "ASAP / before the next rain",
  "Within a few weeks",
  "Just getting a price for now",
]

const FIELDS = [
  { label: "Full name", key: "fullName", type: "text", placeholder: "Jane Smith" },
  { label: "Email address", key: "email", type: "email", placeholder: "jane@example.com" },
  { label: "Phone number", key: "phone", type: "tel", placeholder: "04xx xxx xxx" },
  { label: "Property address", key: "address", type: "text", placeholder: "123 Example St, Adelaide SA" },
] as const

type FormKey = (typeof FIELDS)[number]["key"]

export function Hero() {
  const [step, setStep] = useState<"q2" | "q3" | "form" | "success">("q2")
  const [q2Selected, setQ2Selected] = useState<string | null>(null)
  const [q3Selected, setQ3Selected] = useState<string | null>(null)
  const [form, setForm] = useState<Record<FormKey, string>>({
    fullName: "",
    phone: "",
    email: "",
    address: "",
  })
  const selectedStoreys = q2Selected ?? "Not sure - needs inspection"
  const selectedTiming = q3Selected ?? "Just getting a price for now"
  const { error, formAction, handleSubmit, pending, sourcePath } = useGutterCleaningLeadAction({
    formContext: "gutter-cleaning-hero",
    selectedStoreys,
    selectedTiming,
    onSuccess: () => setStep("success"),
  })

  const optionClass = (selected: boolean) =>
    `w-full rounded-md border px-3 py-2 text-left text-sm transition-all ${
      selected
        ? "border-brand bg-brand font-semibold text-brand-foreground"
        : "border-border bg-card text-card-foreground hover:border-brand/50 hover:bg-secondary"
    }`

  return (
    <section className="relative flex min-h-[100dvh] flex-col">
      <img
        src="/gutter-cleaning-v0/images/hero-bg.png"
        alt="Gutter cleaning technician on a ladder cleaning gutters"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/82" aria-hidden="true" />

      <div className="relative z-10 flex flex-1 flex-col items-center px-4 pb-10 pt-0 text-center md:pb-16 md:px-10 md:text-left lg:px-20">
        <div className="-mb-14 -mt-8 flex items-center justify-center md:-mt-10">
          <img
            src="/gutter-cleaning-v0/images/logo-white.png"
            alt="EverBright Pressure Washing logo"
            className="h-44 w-auto md:h-56"
          />
        </div>

        <h1 className="mb-3 max-w-4xl font-[family-name:var(--font-poppins)] text-4xl font-bold uppercase leading-[1.15] tracking-tight text-background md:text-7xl md:leading-[1.1] md:text-center">
          <span className="block">Gutter Cleaning <span className="text-brand">Adelaide</span></span>
        </h1>

        <p className="mb-5 max-w-md text-pretty text-base font-bold leading-relaxed text-background/90 md:text-xl md:text-center">
          <span className="block">Avoid the ladder. Stop water damage before it starts</span>
        </p>

        {/* Step 1 — How many storeys? */}
        {step === "q2" && (
          <div className="w-full max-w-xs rounded-lg bg-card p-4 text-left shadow-2xl md:max-w-md md:p-6">
            <p className="mb-4 text-center text-base font-extrabold uppercase tracking-wide text-brand">
              Get a fast free quote
            </p>
            <h2 className="mb-3 text-center text-xl font-extrabold leading-snug text-card-foreground">
              How many storeys is your home?
            </h2>
            <div className="flex flex-col gap-1.5">
              {Q2_OPTIONS.map((opt) => (
                <button key={opt} onClick={() => setQ2Selected(opt)} className={optionClass(q2Selected === opt)}>
                  {opt}
                </button>
              ))}
            </div>
            <button
              onClick={() => { if (q2Selected) setStep("q3") }}
              disabled={!q2Selected}
              className="mt-3 w-full rounded-md bg-brand py-2.5 text-sm font-bold text-brand-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Next →
            </button>
            <button
              onClick={() => setStep("q2")}
              className="mt-2 w-full text-center text-xs text-muted-foreground underline"
            >
              ← Back
            </button>
          </div>
        )}

        {/* Step 3 — When? */}
        {step === "q3" && (
          <div className="w-full max-w-xs rounded-lg bg-card p-4 text-left shadow-2xl md:max-w-md md:p-6">
            <p className="mb-1 text-center text-base font-extrabold uppercase tracking-wide text-brand">
              Get a fast free quote
            </p>
            <h2 className="mb-3 text-center text-xl font-extrabold leading-snug text-card-foreground">
              When are you looking to get it cleaned?
            </h2>
            <div className="flex flex-col gap-1.5">
              {Q3_OPTIONS.map((opt) => (
                <button key={opt} onClick={() => setQ3Selected(opt)} className={optionClass(q3Selected === opt)}>
                  {opt}
                </button>
              ))}
            </div>
            <button
              onClick={() => { if (q3Selected) setStep("form") }}
              disabled={!q3Selected}
              className="mt-3 w-full rounded-md bg-brand py-2.5 text-sm font-bold text-brand-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Next →
            </button>
          </div>
        )}

        {/* Step 3 — Contact details */}
        {step === "form" && (
          <div className="w-full max-w-xs rounded-lg bg-card p-4 text-left shadow-2xl md:max-w-md md:p-6">
            <p className="mb-1 text-center text-base font-extrabold uppercase tracking-wide text-brand">
              Fill in your details
            </p>
            <p className="mb-3 text-center text-base font-bold leading-snug text-card-foreground">
              We&apos;ll be in touch within business hours for your quote
            </p>
            <form action={formAction} onSubmit={handleSubmit} className="space-y-3">
              <input type="hidden" name="roofType" value={selectedStoreys} />
              <input type="hidden" name="roofCondition" value={selectedTiming} />
              <input type="hidden" name="whatTypeOfService" value="gutter cleaning" />
              <input type="hidden" name="message" value={`Gutter cleaning timing: ${selectedTiming}`} />
              <input type="hidden" name="formSource" value="gutter-cleaning-hero" />
              <input type="hidden" name="sourcePath" value={sourcePath} />
              <input type="hidden" name="roofConcern" value={`Storeys: ${selectedStoreys}; Timing: ${selectedTiming}`} />
              {error && <div className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-xs font-semibold text-red-700">{error}</div>}
              {FIELDS.map((field) => (
                <div key={field.key}>
                  <label
                    htmlFor={field.key}
                    className="mb-1 block text-xs font-semibold uppercase tracking-wide text-black"
                  >
                    {field.label}
                  </label>
                  <input
                    id={`gutter-hero-${field.key}`}
                    name={field.key}
                    type={field.type}
                    required
                    placeholder={field.placeholder}
                    value={form[field.key]}
                    onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground transition-colors focus:border-brand focus:outline-none"
                  />
                </div>
              ))}
              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setStep("q3")}
                  className="flex-1 rounded-md border border-brand bg-transparent py-2.5 text-sm font-bold text-brand transition-colors hover:bg-brand/10"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={pending}
                  className="flex-1 rounded-md bg-brand py-2.5 text-sm font-bold text-brand-foreground transition-opacity hover:opacity-90"
                >
                  Submit →
                </button>
              </div>
            </form>
            <p className="mt-2 text-center text-xs text-muted-foreground">No obligation. No payment required.</p>
          </div>
        )}

        {/* Success */}
        {step === "success" && (
          <div className="w-full max-w-xs rounded-lg bg-card p-6 text-center shadow-2xl md:max-w-md">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand">
              <CheckIcon className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-lg font-bold text-card-foreground">We&apos;ll be in touch!</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              We will be in touch during business hours to talk about your quote.
            </p>
            <button
              onClick={() => {
                setStep("q2")
                setQ2Selected(null)
                setQ3Selected(null)
                setForm({ fullName: "", phone: "", email: "", address: "" })
              }}
              className="w-full rounded-md border border-brand bg-transparent py-2.5 text-sm font-bold text-brand transition-colors hover:bg-brand/10"
            >
              Start Another Quote
            </button>
          </div>
        )}

        <a
          href="tel:0411017366"
          className="mt-4 flex w-full max-w-xs items-center justify-center gap-2 rounded-lg border border-white bg-white px-4 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-100 md:max-w-sm"
        >
          <PhoneIcon className="h-5 w-5 text-brand" />
          <span className="text-base font-bold md:text-lg">
            Prefer to call? <span className="text-brand">0411 017 366</span>
          </span>
        </a>
      </div>
    </section>
  )
}
