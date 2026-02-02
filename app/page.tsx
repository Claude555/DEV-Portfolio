import { HeroSection } from "@/components/sections/hero"
import { WhyHireMeSection } from "@/components/sections/why-hire-me"
import { ProjectsSection } from "@/components/sections/projects"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { BlogPreviewSection } from "@/components/sections/blog-preview"
import { StatsSection } from "@/components/sections/stats"
import { CTASection } from "@/components/sections/cta"
import { ContactSection } from "@/components/sections/contact"

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <WhyHireMeSection />
      <TestimonialsSection />
      <BlogPreviewSection />
      <StatsSection />
      <CTASection />
      <ContactSection />
    </>
  )
}
