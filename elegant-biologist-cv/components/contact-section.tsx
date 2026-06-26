"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "mtreinosop@arizona.edu",
    href: "mailto:mtreinosop@arizona.edu",
  },
  {
    icon: Mail,
    label: "Alternative Email",
    value: "maryte.reinoso@gmail.com",
    href: "mailto:maryte.reinoso@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Tucson, Arizona, USA",
    href: null,
  },
]

const references = [
  {
    name: "Dr. André Dhondt",
    affiliation: "Cornell Lab of Ornithology, Cornell University",
    email: "aad4@cornell.edu",
  },
  {
    name: "Dr. Keila V. Dhondt",
    affiliation: "Department of Microbiology and Immunology, Cornell University",
    email: "kvs9@cornell.edu",
  },
  {
    name: "Dr. Víctor Manuel Rodríguez García",
    affiliation: "ITESM Querétaro",
    email: "vmrodrigg@itesm.mx",
  },
]

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Get in Touch</p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-4">
            Let{"'"}s <span className="text-primary">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Interested in collaboration, research opportunities, or have questions about my work? 
            I{"'"}d love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="font-serif text-2xl font-medium text-foreground mb-6">Contact Information</h3>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a 
                        href={item.href} 
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-8"
            >
              <Button size="lg" className="w-full sm:w-auto" asChild>
                <a href="mailto:mtreinosop@arizona.edu">
                  <Mail className="w-4 h-4 mr-2" />
                  Send an Email
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* References */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="font-serif text-2xl font-medium text-foreground mb-6">References</h3>
            <div className="space-y-4">
              {references.map((ref, index) => (
                <motion.div
                  key={ref.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="p-5 bg-card rounded-xl border border-border hover:border-primary/30 transition-all duration-300"
                >
                  <h4 className="font-semibold text-foreground mb-1">{ref.name}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{ref.affiliation}</p>
                  <a 
                    href={`mailto:${ref.email}`}
                    className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    {ref.email}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
