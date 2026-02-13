"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Bird, FlaskConical, Microscope, GraduationCap } from "lucide-react"

const highlights = [
  {
    icon: Bird,
    title: "Ornithology",
    description: "Specializing in avian disease ecology and wild bird populations",
  },
  {
    icon: FlaskConical,
    title: "Molecular Biology",
    description: "Expert in PCR, DNA sequencing, and genetic analysis",
  },
  {
    icon: Microscope,
    title: "Parasitology",
    description: "Research on Haemosporidia and Mycoplasma pathogens",
  },
  {
    icon: GraduationCap,
    title: "Teaching",
    description: "Teaching assistant for ecology and biology courses at Cornell",
  },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-32 px-6 bg-card">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">About</p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium mb-8 text-foreground">
              Exploring the
              <span className="text-primary"> Ecology of Disease</span>
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I am a disease ecologist passionate about understanding host-pathogen interactions 
                in wild bird populations. My research combines field ecology, molecular biology, 
                and evolutionary perspectives to address questions about emerging infectious diseases.
              </p>
              <p>
                With a PhD from Cornell University, I have spent over a decade studying the ecology, 
                evolution, and epidemiology of avian diseases, particularly focusing on 
                <span className="text-foreground font-medium"> Mycoplasma gallisepticum</span> infections 
                in House Finches and <span className="text-foreground font-medium">Haemosporidian</span> parasites 
                across various bird species.
              </p>
              <p>
                Currently, I am a Postdoctoral Research Associate at the University of Arizona, 
                continuing my work on disease dynamics in wild avian populations.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group p-6 bg-background rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
