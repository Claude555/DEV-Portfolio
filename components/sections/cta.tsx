"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function CTASection() {
  return (
    <section className="relative py-32 px-6 md:px-16 text-center overflow-hidden">
      
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative max-w-3xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold">
          Let’s Work Together
        </h2>

        <p className="mt-6 text-lg text-muted-foreground">
          Have an idea or project in mind? Let’s build something exceptional
          together.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Button size="lg">Contact Me</Button>
          <Button size="lg" variant="outline">
            View Upwork Profile
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
