import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ResearchSection } from "@/components/research-section"
import { PublicationsSection } from "@/components/publications-section"
import { TimelineSection } from "@/components/timeline-section"
import { SkillsSection } from "@/components/skills-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ResearchSection />
      <PublicationsSection />
      <TimelineSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
