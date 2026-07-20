import { Hero } from "@/components/hero"
import { AssessmentForm } from "@/components/assessment-form"
import { StatsStrip, HowItWorks, Transformations, Reviews, FAQ, ContactUsStrip, SiteFooter } from "@/components/sections"

export default function Page() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
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
  )
}
