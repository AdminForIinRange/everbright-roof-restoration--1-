"use client";

import { useState } from "react";

import Header from "@/components/Header";
import { CheckIcon, PhoneIcon } from "./icons";
import { usePressureWashingLeadAction } from "./use-pressure-washing-lead-action";

const OPTIONS = ["Driveway", "Paths & walkways", "Patio / paving", "All around the house"];

const FIELDS = [
  { label: "Full name", key: "fullName", type: "text", placeholder: "Jane Smith" },
  { label: "Phone number", key: "phone", type: "tel", placeholder: "04xx xxx xxx" },
  { label: "Email address", key: "email", type: "email", placeholder: "jane@example.com" },
  { label: "Property address", key: "address", type: "text", placeholder: "123 Example St, Adelaide SA" },
] as const;

type FormKey = (typeof FIELDS)[number]["key"];

export function Hero() {
  const [step, setStep] = useState<"q1" | "form" | "success">("q1");
  const [q1Selected, setQ1Selected] = useState<string | null>(null);
  const [form, setForm] = useState<Record<FormKey, string>>({
    fullName: "",
    phone: "",
    email: "",
    address: "",
  });
  const selectedArea = q1Selected ?? "Not sure - needs inspection";
  const { error, formAction, handleSubmit, pending, sourcePath } = usePressureWashingLeadAction({
    formContext: "newoage-pressure-washing-hero",
    selectedArea,
    serviceLabel: "pressure washing",
    onSuccess: () => setStep("success"),
  });

  const handleQ1Next = () => {
    if (q1Selected) setStep("form");
  };

  return (
    <>
      <Header />
      <section className="relative flex flex-col">
        <img
          src="/pressure-washing-v0/images/image-optimized.jpg"
          alt="Before and after comparison of a pressure washing job, showing a dirty driveway transformed to a clean, like-new surface"
          decoding="async"
          fetchPriority="high"
          loading="eager"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/82" aria-hidden="true" />

        <div className="relative z-10 flex flex-1 flex-col items-center px-4 pb-10 pt-8 text-center md:px-10 md:pb-16 md:pt-10 md:text-left lg:px-20">
          <h1 className="mb-3 max-w-4xl font-[family-name:var(--font-poppins)] text-4xl font-bold uppercase leading-[1.15] tracking-tight text-background md:text-center md:text-6xl md:leading-[1.1]">
            <span className="text-brand">Pressure Washing</span> Adelaide
          </h1>

          <p className="mb-5 max-w-md text-pretty text-base font-bold leading-relaxed text-background/90 md:text-center md:text-lg">
            <span className="block">Bring your driveway, pavers and patios back to life</span>
          </p>

          {step === "q1" && (
            <div className="w-full max-w-xs rounded-lg bg-card p-4 text-left shadow-2xl md:max-w-md md:p-6">
              <p className="mb-1 text-center text-base font-extrabold uppercase tracking-wide text-brand">
                Get a fast free quote
              </p>
              <p className="mb-3 text-center text-lg font-extrabold leading-snug text-card-foreground md:text-xl">
                What needs a clean?
              </p>
              <div className="flex flex-col gap-1.5">
                {OPTIONS.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setQ1Selected(opt)}
                    className={`flex w-full items-center gap-2.5 rounded-md border px-3 py-2 text-left text-sm transition-all ${
                      q1Selected === opt
                        ? "border-brand bg-brand font-semibold text-brand-foreground"
                        : "border-border bg-card text-card-foreground hover:border-brand/50 hover:bg-secondary"
                    }`}
                    type="button"
                  >
                    <span
                      className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border-2 ${
                        q1Selected === opt ? "border-brand-foreground bg-brand-foreground" : "border-current"
                      }`}
                    >
                      {q1Selected === opt && <CheckIcon className="h-2.5 w-2.5 text-brand" />}
                    </span>
                    {opt}
                  </button>
                ))}
              </div>
              <button
                onClick={handleQ1Next}
                disabled={!q1Selected}
                className="mt-3 w-full rounded-md bg-brand py-2.5 text-sm font-bold text-brand-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                type="button"
              >
                Next &rarr;
              </button>
              <p className="mt-2 text-center text-xs text-muted-foreground">
                No obligation. We reply within 24 hours.
              </p>
            </div>
          )}

          {step === "form" && (
            <div className="w-full max-w-xs rounded-lg bg-card p-4 text-left shadow-2xl md:max-w-md md:p-6">
              <p className="mb-1 text-center text-base font-extrabold uppercase tracking-wide text-brand">
                Fill in your details
              </p>
              <p className="mb-3 text-center text-sm font-bold leading-snug text-card-foreground">
                and we&apos;ll be in touch within business hours for your quote
              </p>
              <form action={formAction} onSubmit={handleSubmit} className="space-y-3">
                <input type="hidden" name="roofType" value="Pressure washing" />
                <input type="hidden" name="roofCondition" value={selectedArea} />
                <input type="hidden" name="whatTypeOfService" value="pressure washing" />
                <input type="hidden" name="message" value={`Pressure washing area selected: ${selectedArea}`} />
                <input type="hidden" name="formSource" value="newoage-pressure-washing-hero" />
                <input type="hidden" name="sourcePath" value={sourcePath} />
                <input type="hidden" name="roofConcern" value={selectedArea} />

                {error && (
                  <div className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-xs font-semibold text-red-700">
                    {error}
                  </div>
                )}

                {FIELDS.map((field) => (
                  <div key={field.key}>
                    <label
                      htmlFor={`newoage-hero-${field.key}`}
                      className="mb-1 block text-xs font-semibold uppercase tracking-wide text-muted-foreground"
                    >
                      {field.label}
                    </label>
                    <input
                      id={`newoage-hero-${field.key}`}
                      name={field.key}
                      type={field.type}
                      required
                      maxLength={255}
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
                    onClick={() => {
                      setStep("q1");
                      setForm({ fullName: "", phone: "", email: "", address: "" });
                    }}
                    className="flex-1 rounded-md border border-brand bg-transparent py-2.5 text-sm font-bold text-brand transition-colors hover:bg-brand/10"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={pending}
                    className="flex-1 rounded-md bg-brand py-2.5 text-sm font-bold text-brand-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    Submit &rarr;
                  </button>
                </div>
              </form>
              <p className="mt-2 text-center text-xs text-muted-foreground">No obligation. No payment required.</p>
            </div>
          )}

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
                  setStep("q1");
                  setQ1Selected(null);
                  setForm({ fullName: "", phone: "", email: "", address: "" });
                }}
                className="w-full rounded-md border border-brand bg-transparent py-2.5 text-sm font-bold text-brand transition-colors hover:bg-brand/10"
                type="button"
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
    </>
  );
}
