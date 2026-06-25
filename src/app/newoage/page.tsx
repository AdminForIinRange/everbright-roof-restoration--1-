import type { Metadata } from "next";

import { buildPageMetadata, buildServiceJsonLd } from "@lib/seo";

import V0PressureWashingLanding from "./_components/V0PressureWashingLanding";

export const metadata: Metadata = buildPageMetadata({
  title: "New Pressure Washing Adelaide",
  description:
    "New pressure washing landing page for Adelaide homeowners with fast free quote requests for driveways, patios and paving.",
  path: "/newoage",
  keywords: ["pressure washing Adelaide", "driveway cleaning Adelaide", "new pressure washing page"],
  noIndex: true,
});

const serviceJsonLd = buildServiceJsonLd({
  name: "New Pressure Washing Adelaide",
  description:
    "New pressure washing landing page for Adelaide homeowners with fast free quote requests for driveways, patios and paving.",
  path: "/newoage",
  serviceType: "Pressure washing",
});

export default function NewOagePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <V0PressureWashingLanding />
    </>
  );
}
