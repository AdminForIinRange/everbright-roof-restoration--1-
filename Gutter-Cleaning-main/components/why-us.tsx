import { CheckIcon } from "@/components/icons"

export function WhyUs() {
  const points = [
    "Exact, transparent pricing. No hidden fees, ever.",
    "Free on-site assessment before you commit",
    "Locally operated, Adelaide-based team",
    "Fully insured with professional equipment",
  ]
  const stats = [
    { num: "38+", label: "Five-star reviews" },
    { num: "200+", label: "Adelaide Homes Cleaned" },
    { num: "6", label: "Years of experience" },
    { num: "$0", label: "Cost for your assessment" },
  ]

  return (
    <section className="bg-navy py-20 text-navy-foreground">
      <div className="mx-auto grid max-w-4xl grid-cols-1 items-center gap-12 px-4 md:grid-cols-2">
        <div>
          <h2 className="mb-4 font-heading text-4xl leading-tight tracking-wide">
            Why Adelaide homeowners <span className="text-brand">trust EverBright</span>
          </h2>
          <p className="mb-6 text-sm font-light leading-relaxed text-navy-foreground/70">
            Six years of experience pressure washing hundreds of homes right here in Adelaide.
          </p>
          <div className="flex flex-col gap-3">
            {points.map((point) => (
              <div key={point} className="flex items-start gap-3">
                <CheckIcon className="mt-0.5 flex-shrink-0 text-brand" />
                <p className="text-sm font-light text-navy-foreground/90">{point}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-lg border border-white/10 bg-white/5 p-5">
              <div className="mb-1 font-heading text-3xl leading-none">{s.num}</div>
              <div className="text-xs text-navy-foreground/60">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
