"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Briefcase, Award } from "lucide-react"

const timelineItems = [
  {
    year: "2025",
    title: "Postdoctoral Research Associate I",
    organization: "University of Arizona",
    description: "McNew Lab of Disease Ecology, Department of Ecology & Evolutionary Biology",
    type: "work",
  },
  {
    year: "2024",
    title: "Research Support Specialist",
    organization: "Cornell Lab of Ornithology",
    description: "Supporting research projects in avian disease ecology",
    type: "work",
  },
  {
    year: "2018-2024",
    title: "PhD in Ecology & Evolutionary Biology",
    organization: "Cornell University",
    description: <>Thesis: Ecology, evolution and epidemiology of <i>Mycoplasma gallisepticum</i> infections in wild avian populations</>,
    type: "education",
  },
  {
    year: "2017",
    title: "Research Assistant",
    organization: "ITESM Querétaro",
    description: "Molecular markers for endangered raptor identification",
    type: "work",
  },
  {
    year: "2014-2015",
    title: "Laboratory Assistant",
    organization: "Genetics Lab, San Luis Potosí",
    description: "Human genetics laboratory work",
    type: "work",
  },
  {
    year: "2012-2014",
    title: "M.Sc. Molecular Biology",
    organization: "IPICYT, México",
    description: "Research on Haemosporidian diversity and population genetics in Passeriformes",
    type: "education",
  },
  {
    year: "2005-2011",
    title: "B.Sc. Biology",
    organization: "Universidad Autónoma de Querétaro",
    description: "Thesis: Asexual reproduction and genetic variability in Mexican Grusonioides populations",
    type: "education",
  },
]

const getIcon = (type: string) => {
  switch (type) {
    case "education":
      return GraduationCap
    case "award":
      return Award
    default:
      return Briefcase
  }
}

export function TimelineSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Journey</p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground">
            Academic <span className="text-primary">Timeline</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {timelineItems.map((item, index) => {
            const Icon = getIcon(item.type)
            const isLeft = index % 2 === 0

            return (
              <motion.div
                key={`${item.year}-${item.title}`}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className={`relative flex items-start gap-8 mb-12 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`flex-1 pl-10 md:pl-0 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-3">
                    {item.year}
                  </span>
                  <h3 className="font-semibold text-lg text-foreground mb-1">{item.title}</h3>
                  <p className="text-primary mb-2">{item.organization}</p>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>

                {/* Icon */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center z-10">
                  <Icon className="w-4 h-4 text-primary-foreground" />
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
