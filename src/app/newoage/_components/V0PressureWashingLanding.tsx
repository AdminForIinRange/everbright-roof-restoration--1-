import { Bebas_Neue, Inter, Poppins, Roboto_Slab } from "next/font/google";

import { AssessmentForm } from "./assessment-form";
import { Hero } from "./hero";
import { ContactUsStrip, FAQ, HowItWorks, IntroPending, Reviews, SiteFooter, StatsStrip, Transformations } from "./sections";
import styles from "./pressure-washing-v0.module.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
  display: "swap",
});

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-slab",
  display: "swap",
});

export default function V0PressureWashingLanding() {
  return (
    <main
      data-newoage-page="true"
      className={`${styles.scope} ${inter.variable} ${bebas.variable} ${robotoSlab.variable} ${poppins.variable} min-h-screen bg-background antialiased`}
    >
      <Hero />
      <StatsStrip />
      <IntroPending />
      <Transformations />
      <Reviews />
      <HowItWorks />
      <FAQ />
      <AssessmentForm />
      <ContactUsStrip />
      <SiteFooter />
    </main>
  );
}
