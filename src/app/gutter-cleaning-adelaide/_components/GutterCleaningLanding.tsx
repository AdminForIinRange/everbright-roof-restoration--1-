import { Bebas_Neue, Inter, Poppins, Roboto_Slab } from "next/font/google";

import { AssessmentForm } from "./assessment-form";
import { Hero } from "./hero";
import { ContactUsStrip, FAQ, HowItWorks, Reviews, SiteFooter, StatsStrip, Transformations } from "./sections";
import styles from "./gutter-cleaning-v0.module.css";

const poppins = Poppins({ subsets: ["latin"], weight: "700", variable: "--font-poppins", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400", variable: "--font-bebas", display: "swap" });
const robotoSlab = Roboto_Slab({ subsets: ["latin"], weight: ["700", "800"], variable: "--font-slab", display: "swap" });

export function GutterCleaningLanding() {
  return (
    <main className={`${styles.scope} ${inter.variable} ${bebas.variable} ${robotoSlab.variable} ${poppins.variable} min-h-screen bg-background antialiased`}>
      <Hero />
      <StatsStrip />
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
