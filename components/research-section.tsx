"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, ChevronRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const researchAreas = [
  {
    id: "mycoplasma",
    title: <><i>Mycoplasma gallisepticum</i></>,
    subtitle: "Emerging Disease in Wild Birds",
    description: <>Investigating the ecology, evolution, and epidemiology of <i>Mycoplasma gallisepticum</i> infections in wild House Finches across North America. This research examines host-pathogen dynamics, tissue tropism changes, and potential spillover events.</>,
    tags: ["Disease Ecology", "Evolution", "Epidemiology"],
    papers: 8,
  },
  {
    id: "haemosporidia",
    title: "Haemosporidian Parasites",
    subtitle: "Avian Malaria & Related Diseases",
    description: "Studying the prevalence, diversity, and genetic structure of Haemosporidian parasites (avian malaria) in various bird species. Research includes seasonal detection patterns, co-infection dynamics, and methodology comparisons.",
    tags: ["Parasitology", "Molecular Biology", "Genetics"],
    papers: 6,
  },
  {
    id: "coinfection",
    title: "Co-infection Dynamics",
    subtitle: "Complex Host-Pathogen Interactions",
    description: "Exploring how multiple pathogens interact within the same host, particularly examining the relationship between bacterial (Mycoplasma) and parasitic (Haemosporidia) infections and their combined effects on host health.",
    tags: ["Immunology", "Ecology", "Experimental"],
    papers: 4,
  },
]

export function ResearchSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeArea, setActiveArea] = useState(researchAreas[0].id)

  const activeResearch = researchAreas.find(r => r.id === activeArea) || researchAreas[0]

  return (
    <section id="research" className="py-32 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Research Focus</p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground text-balance">
            Understanding Disease in
            <span className="text-primary"> Wild Populations</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Research area selector */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-3"
          >
            {researchAreas.map((area) => (
              <button
                key={area.id}
                onClick={() => setActiveArea(area.id)}
                className={`w-full text-left p-5 rounded-xl border transition-all duration-300 group ${
                  activeArea === area.id
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card border-border hover:border-primary/30"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className={`font-semibold mb-1 ${activeArea === area.id ? "text-primary-foreground" : "text-foreground"}`}>
                      {area.title}
                    </h3>
                    <p className={`text-sm ${activeArea === area.id ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                      {area.subtitle}
                    </p>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform ${activeArea === area.id ? "rotate-90" : "group-hover:translate-x-1"}`} />
                </div>
              </button>
            ))}
          </motion.div>

          {/* Research details */}
          <motion.div
            key={activeArea}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 bg-card rounded-2xl border border-border p-8"
          >
            <div className="flex flex-wrap gap-2 mb-6">
              {activeResearch.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary border-0">
                  {tag}
                </Badge>
              ))}
            </div>
            
            <h3 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-2">
              {activeResearch.title}
            </h3>
            <p className="text-primary mb-6">{activeResearch.subtitle}</p>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              {activeResearch.description}
            </p>

            <div className="flex items-center gap-6 pt-6 border-t border-border">
              <div>
                <p className="text-3xl font-serif font-medium text-primary">{activeResearch.papers}</p>
                <p className="text-sm text-muted-foreground">Publications</p>
              </div>
              <a 
                href="#publications" 
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('publications')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="flex items-center gap-2 text-primary hover:underline"
              >
                View papers <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
