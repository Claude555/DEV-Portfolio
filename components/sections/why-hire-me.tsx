"use client"

import { motion } from "framer-motion"
import { Code2, Sparkles, Rocket, Shield } from "lucide-react"

const reasons = [
  {
    icon: Code2,
    title: "Production-Ready Code",
    description:
      "Clean, scalable, and maintainable code using modern frameworks and best practices.",
  },
  {
    icon: Sparkles,
    title: "Design-Driven Development",
    description:
      "Pixel-perfect UI with smooth animations that elevate your brand and user experience.",
  },
  {
    icon: Rocket,
    title: "Built for Performance",
    description:
      "Fast load times, SEO-friendly, and optimized for conversions across all devices.",
  },
  {
    icon: Shield,
    title: "Reliable & Communicative",
    description:
      "Clear communication, realistic timelines, and a strong focus on client satisfaction.",
  },
]

export function WhyHireMeSection() {
  return (
    <section className="relative py-24 px-6 md:px-16">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="uppercase tracking-widest text-sm text-muted-foreground">
            Why choose me
          </p>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold">
            Why You Should Hire Me
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            I don’t just build websites — I create high-performing digital
            experiences that help businesses grow.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass rounded-2xl p-6"
            >
              <reason.icon className="h-8 w-8 text-primary" />

              <h3 className="mt-6 text-xl font-semibold">
                {reason.title}
              </h3>

              <p className="mt-4 text-muted-foreground">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
