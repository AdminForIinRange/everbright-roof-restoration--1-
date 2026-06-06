import { Anton, Bebas_Neue, Inter, Playfair_Display, Poppins, Roboto_Slab } from "next/font/google";

import { AssessmentForm } from "./assessment-form";
import { Hero } from "./hero";
import { ContactUsStrip, FAQ, HowItWorks, Reviews, SiteFooter, StatsStrip, Transformations } from "./sections";
import styles from "./roof-restoration-v0.module.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-playfair",
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

export default function V0RoofRestorationLanding() {
  return (
    <main
      className={`${styles.scope} ${inter.variable} ${bebas.variable} ${robotoSlab.variable} ${playfair.variable} ${anton.variable} ${poppins.variable} min-h-screen overflow-x-hidden bg-background antialiased`}
    >
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
