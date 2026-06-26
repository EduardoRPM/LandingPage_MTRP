"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, BookOpen, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"

const publications = [
  {
    year: 2025,
    title: <>Emerging genetic diversity of <i>Mycoplasma gallisepticum</i> in Mexican house finches: Evidence of possible independent spillover events</>,
    journal: "Infection, Genetics and Evolution",
    authors: "Reinoso-Pérez, M.T., Díaz-Ávila, L.E., Jacobo, S.G., Rodríguez-García, V.M. and Dhondt, A.A.",
    tags: ["Mycoplasma", "Genetics"],
  },
  {
    year: 2025,
    title: "Pathogen-Induced Stress in Wild House Finches (Haemorhous mexicanus): Leukocyte Dynamics as Health Indicators",
    journal: "Journal of Wildlife Diseases",
    authors: "Reinoso-Pérez, M.T., Dhondt, K.V., Yánez Abad, A.A., Rodríguez-García, V.M. and Dhondt, A.A.",
    tags: ["Immunology", "Health"],
  },
  {
    year: 2024,
    title: "Gyrfalcon Disease Ecology: A Survey Across Western Alaska",
    journal: "Journal of Raptor Research",
    authors: "Radcliffe, R.W., Booms, T.L., Henderson, M.T., et al. (including Reinoso-Pérez, M.T.)",
    tags: ["Disease Ecology", "Raptors"],
  },
  {
    year: 2024,
    title: "Seasonal variation in detection of Haemosporidia in a bird community: A comparison of nested PCR and microscopy",
    journal: "The Journal of Wildlife Diseases",
    authors: "Reinoso-Pérez, M.T., Dhondt, K.V., Dulcet, H., Katzenstein, N., Sydenstricker, A.V. and Dhondt, A.A.",
    tags: ["Haemosporidia", "Methodology"],
  },
  {
    year: 2023,
    title: "Are Purple Finches (Haemorhous purpureus) the Next Host for a Mycoplasmal Conjunctivitis Epidemic?",
    journal: "Avian Diseases",
    authors: "Reinoso-Pérez, M.T., Dhondt, K.V., Levitskiy, A.A., et al.",
    tags: ["Mycoplasma", "Host Jump"],
  },
  {
    year: 2022,
    title: <>Changes in tissue tropism of <i>Mycoplasma gallisepticum</i> following host jump</>,
    journal: "Journal of Wildlife Diseases",
    authors: "Reinoso-Pérez, M.T., Levitskiy, A.A., Dhondt, K.V., Cole, N., Tulman, E., Geary, S.J. and Dhondt, A.A.",
    tags: ["Mycoplasma", "Evolution"],
  },
  {
    year: 2020,
    title: "Complex interactions between bacteria and haemosporidia in coinfected hosts: An experiment",
    journal: "Ecology and Evolution",
    authors: "Reinoso‐Pérez, M.T., Dhondt, K.V., Sydenstricker, A.V., Heylen, D. and Dhondt, A.A.",
    tags: ["Co-infection", "Experimental"],
  },
  {
    year: 2020,
    title: "Ectoparasitism during an avian disease outbreak: An experiment with Mycoplasma-infected house finches and ticks",
    journal: "International Journal for Parasitology: Parasites and Wildlife",
    authors: "Heylen, D.J., Reinoso-Pérez, M.T., Goodman, L., Dhondt, K.V. and Dhondt, A.A.",
    tags: ["Ectoparasites", "Disease"],
  },
  {
    year: 2016,
    title: "Haemosporidian parasite prevalence, parasitemia, and diversity in three resident bird species at a shrubland dominated landscape of the Mexican highland plateau",
    journal: "Parasites & Vectors",
    authors: "Reinoso-Pérez, M.T., Canales-Delgadillo, J.C., Chapa-Vargas, L., y Riego-Ruiz, L.",
    tags: ["Haemosporidia", "Diversity"],
  },
]

const allTags = [...new Set(publications.flatMap(p => p.tags))]

export function PublicationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [showAll, setShowAll] = useState(false)

  const filteredPublications = selectedTag 
    ? publications.filter(p => p.tags.includes(selectedTag))
    : publications

  const displayedPublications = showAll ? filteredPublications : filteredPublications.slice(0, 5)

  return (
    <section id="publications" className="py-32 px-6 bg-card">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Publications</p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-4">
            Peer-Reviewed <span className="text-primary">Articles</span>
          </h2>
          <p className="text-muted-foreground">
            Contributing to our understanding of avian diseases through scientific research
          </p>
        </motion.div>

        {/* Filter tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-10"
        >
          <Filter className="w-4 h-4 text-muted-foreground mr-2" />
          <button
            onClick={() => setSelectedTag(null)}
            className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
              !selectedTag 
                ? "bg-primary text-primary-foreground" 
                : "bg-secondary text-secondary-foreground hover:bg-primary/10"
            }`}
          >
            All
          </button>
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
              className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                selectedTag === tag 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-secondary text-secondary-foreground hover:bg-primary/10"
              }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        {/* Publications list */}
        <div className="space-y-4">
          {displayedPublications.map((pub, index) => (
            <motion.article
              key={`${pub.title}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group p-6 bg-background rounded-xl border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="hidden sm:flex w-14 h-14 rounded-lg bg-primary/10 items-center justify-center shrink-0">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-medium text-primary">{pub.year}</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground truncate">{pub.journal}</span>
                  </div>
                  <h3 className="font-medium text-foreground mb-2 leading-snug group-hover:text-primary transition-colors">
                    {pub.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-1">
                    {pub.authors}
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
              </div>
            </motion.article>
          ))}
        </div>

        {filteredPublications.length > 5 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-8"
          >
            <Button 
              variant="outline" 
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show Less" : `View All ${filteredPublications.length} Publications`}
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
