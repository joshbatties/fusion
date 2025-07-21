import HeroSection from "@/components/sections/hero-section"
import TrustedByBento from "@/components/sections/trusted-by-bento"
import FeaturesSection from "@/components/sections/features-section"
import HowItWorksSection from "@/components/sections/how-it-works-section"
import TestimonialsSection from "@/components/sections/testimonials-section"
import WaitlistSection from "@/components/sections/waitlist-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustedByBento />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <WaitlistSection />
    </>
  )
}
