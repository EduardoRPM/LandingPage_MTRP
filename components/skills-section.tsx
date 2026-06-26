"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { 
  FlaskConical, 
  Microscope, 
  Dna, 
  Code, 
  Map, 
  Languages,
  Mountain,
  Compass
} from "lucide-react"

const skillCategories = [
  {
    title: "Laboratory Techniques",
    icon: FlaskConical,
    skills: [
      "PCR & RT-PCR",
      "DNA Sequencing",
      "Fragment Analysis",
      "Cloning & Transformation",
      "Nucleic Acid Extraction",
      "Electrophoresis",
    ],
  },
  {
    title: "Microscopy & Analysis",
    icon: Microscope,
    skills: [
      "Optical Microscopy",
      "Histology",
      "Anatomic Dissections",
      "Immunological Techniques",
    ],
  },
  {
    title: "Bioinformatics",
    icon: Dna,
    skills: [
      "Molecular Systematics",
      "Phylogenetics",
      "MEGA & BEAST",
      "BioEdit",
      "Structure Analysis",
    ],
  },
  {
    title: "Programming",
    icon: Code,
    skills: [
      "R & RStudio",
      "Python",
      "Statistical Analysis",
      "Data Visualization",
    ],
  },
  {
    title: "GIS & Mapping",
    icon: Map,
    skills: [
      "ArcGIS",
      "ArcView",
      "Geneland",
      "Spatial Analysis",
    ],
  },
  {
    title: "Field Work",
    icon: Compass,
    skills: [
      "Bird Capture & Handling",
      "Biological Sampling",
      "GPS Navigation",
      "Wilderness Camping",
    ],
  },
]

const languages = [
  { name: "Spanish", level: "Native" },
  { name: "English", level: "Advanced" },
]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-32 px-6 bg-card">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Expertise</p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground">
            Skills & <span className="text-primary">Capabilities</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group p-6 bg-background rounded-2xl border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 p-6 bg-background rounded-2xl border border-border"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Languages className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground">Languages</h3>
          </div>
          <div className="flex flex-wrap gap-6">
            {languages.map((lang) => (
              <div key={lang.name} className="flex items-center gap-3">
                <Mountain className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium text-foreground">{lang.name}</p>
                  <p className="text-sm text-muted-foreground">{lang.level}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
