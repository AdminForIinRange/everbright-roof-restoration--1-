"use client";

import { useState } from "react";

import { CheckIcon } from "./icons";
import { usePressureWashingLeadAction } from "./use-pressure-washing-lead-action";

const FIELDS = [
  { label: "Full name", key: "fullName", type: "text", placeholder: "Jane Smith" },
  { label: "Phone number", key: "phone", type: "tel", placeholder: "04xx xxx xxx" },
  { label: "Email address", key: "email", type: "email", placeholder: "jane@example.com" },
  { label: "Property address", key: "address", type: "text", placeholder: "123 Example St, Adelaide SA" },
] as const;

type FormKey = (typeof FIELDS)[number]["key"];

export function AssessmentForm() {
  const [form, setForm] = useState<Record<FormKey, string>>({
    fullName: "",
    phone: "",
    email: "",
    address: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const selectedArea = "Free pressure washing quote request";
  const { error, formAction, handleSubmit, pending, sourcePath } = usePressureWashingLeadAction({
    formContext: "newoage-pressure-washing-assessment",
    selectedArea,
    serviceLabel: "pressure washing",
    onSuccess: () => setSubmitted(true),
  });

  return (
    <section id="assessment" className="border-t border-border bg-secondary px-4 py-12 md:px-10 md:py-20 lg:px-20">
      <div className="mx-auto max-w-lg text-center md:max-w-3xl">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-brand">Get started</p>
        <h2 className="mb-3 font-heading text-3xl tracking-wide text-foreground md:mb-4 md:text-5xl">
          Start your free pressure washing quote
        </h2>
        <p className="mb-5 text-sm text-muted-foreground md:mb-8">
          Fill in your details and we&apos;ll be in touch to arrange a time that works for you.
        </p>

        {submitted ? (
          <div className="rounded-lg border border-border bg-card p-8 text-center shadow-sm">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand/10 text-brand">
              <CheckIcon className="h-7 w-7" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-card-foreground">We&apos;ll be in touch!</h3>
            <p className="text-sm text-muted-foreground">
              Thanks for reaching out. We&apos;ll contact you within 24 hours.
            </p>
          </div>
        ) : (
          <form
            action={formAction}
            onSubmit={handleSubmit}
            className="rounded-lg border border-border bg-card p-6 shadow-sm md:grid md:grid-cols-2 md:gap-6 md:p-8"
          >
            <input type="hidden" name="roofType" value="Pressure washing" />
            <input type="hidden" name="roofCondition" value={selectedArea} />
            <input type="hidden" name="whatTypeOfService" value="pressure washing" />
            <input type="hidden" name="message" value={selectedArea} />
            <input type="hidden" name="formSource" value="newoage-pressure-washing-assessment" />
            <input type="hidden" name="sourcePath" value={sourcePath} />
            <input type="hidden" name="roofConcern" value={selectedArea} />

            {error && (
              <div className="mb-4 rounded-md border border-red-200 bg-red-50 px-3 py-2 text-left text-xs font-semibold text-red-700 md:col-span-2">
                {error}
              </div>
            )}

            {FIELDS.map((field) => (
              <div key={field.key} className="mb-4 text-left">
                <label
                  htmlFor={`newoage-assessment-${field.key}`}
                  className="mb-1 block text-xs font-semibold uppercase tracking-wide text-muted-foreground"
                >
                  {field.label}
                </label>
                <input
                  id={`newoage-assessment-${field.key}`}
                  name={field.key}
                  type={field.type}
                  required
                  maxLength={255}
                  placeholder={field.placeholder}
                  value={form[field.key]}
                  onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                  className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground transition-colors focus:border-brand focus:outline-none"
                />
              </div>
            ))}
            <button
              type="submit"
              disabled={pending}
              className="mt-2 w-full rounded-md bg-brand py-3 text-base font-bold tracking-wide text-brand-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 md:col-span-2"
            >
              Get My Free Pressure Washing Quote &rarr;
            </button>
            <p className="mt-3 text-center text-xs text-muted-foreground md:col-span-2 md:text-left">
              No obligation. No payment required. We&apos;ll contact you within 24 hours.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
