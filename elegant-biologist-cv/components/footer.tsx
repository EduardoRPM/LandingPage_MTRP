"use client"

import { motion } from "framer-motion"
import { Bird } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Bird className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-serif font-medium text-foreground">María Teresa Reinoso Pérez</p>
              <p className="text-sm text-muted-foreground">PhD in Ecology & Evolutionary Biology</p>
            </div>
          </div>

          <motion.p 
            className="text-sm text-muted-foreground text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Dedicated to understanding disease ecology in wild bird populations
          </motion.p>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
