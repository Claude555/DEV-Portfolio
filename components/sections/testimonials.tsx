"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah M.",
    role: "Startup Founder",
    feedback:
      "Exceptional work. The UI was stunning and the performance exceeded expectations.",
  },
  {
    name: "David L.",
    role: "Product Manager",
    feedback:
      "Clear communication, fast delivery, and top-tier quality. Highly recommended.",
  },
  {
    name: "Emily R.",
    role: "Agency Owner",
    feedback:
      "A true professional. Our clients loved the final result.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 md:px-16 bg-black/20">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="max-w-2xl">
          <p className="uppercase tracking-widest text-sm text-muted-foreground">
            Testimonials
          </p>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold">
            What Clients Say
          </h2>
        </div>

        {/* CARDS */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <div className="flex gap-1 text-primary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>

              <p className="mt-6 text-muted-foreground">
                “{t.feedback}”
              </p>

              <div className="mt-6">
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
