"use client"

import { motion } from "framer-motion"

const stats = [
  { label: "Happy Clients", value: "50+" },
  { label: "Projects Completed", value: "80+" },
  { label: "Years Experience", value: "5+" },
  { label: "Templates Sold", value: "20+" },
]

export function StatsSection() {
  return (
    <section className="py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center glass rounded-2xl py-8"
          >
            <p className="text-4xl font-extrabold text-primary">
              {stat.value}
            </p>
            <p className="mt-2 text-muted-foreground">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
