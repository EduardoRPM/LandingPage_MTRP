"use client"

import { useState, useEffect, useRef } from "react"
import Script from "next/script"
import { motion } from "framer-motion"
import { ArrowDown, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [threeLoaded, setThreeLoaded] = useState(false)
  const [vantaLoaded, setVantaLoaded] = useState(false)
  const myRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      if ((window as any).THREE) setThreeLoaded(true)
      if ((window as any).VANTA?.BIRDS) setVantaLoaded(true)
    }
  }, [])

  useEffect(() => {
    if (!vantaLoaded || !myRef.current) return

    let effect: any = null

    const initVanta = () => {
      if (effect) {
        effect.destroy()
        effect = null
      }

      if (typeof window !== "undefined" && (window as any).VANTA?.BIRDS) {
        const isDark = document.documentElement.classList.contains('dark')

        effect = (window as any).VANTA.BIRDS({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          backgroundColor: isDark ? 0x121118 : 0xfdfcff,
          color1: isDark ? 0xa855f7 : 0x7f44b2,
          color2: isDark ? 0xf3f4f6 : 0x221f2d,
          birdSize: 2.00,
          wingSpan: 15.00,
          speedLimit: 4.00,
          separation: 46.00,
          alignment: 51.00,
          cohesion: 54.00,
          quantity: 2.00
        })
      }
    }

    initVanta()

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          initVanta()
        }
      })
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })

    return () => {
      if (effect) {
        effect.destroy()
      }
      observer.disconnect()
    }
  }, [vantaLoaded])

  return (
    <>
      <Script
        src="/three.r134.min.js"
        strategy="afterInteractive"
        onLoad={() => setThreeLoaded(true)}
      />
      {threeLoaded && (
        <Script
          src="/vanta.birds.min.js"
          strategy="afterInteractive"
          onLoad={() => setVantaLoaded(true)}
        />
      )}

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Vanta background */}
        <div ref={myRef} className="absolute inset-0 z-0" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">
              Postdoctoral Research Associate
            </p>
          </motion.div>

          <motion.h1
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-foreground mb-6 tracking-tight text-balance"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            María Teresa
            <span className="block text-primary">Reinoso Pérez</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            PhD in Ecology & Evolutionary Biology
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              University of Arizona
            </span>
            <span className="hidden sm:block">•</span>
            <span>Cornell University Alumni</span>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              size="lg"
              className="group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="w-4 h-4 mr-2" />
              Get in Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.getElementById('research')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Research
            </Button>
          </motion.div>

          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
          </motion.div>
        </div>
      </section>
    </>
  )
}
