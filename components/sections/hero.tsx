"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 px-6 md:px-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-transparent" />
        <div className="absolute inset-0 backdrop-blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="uppercase tracking-widest text-sm text-muted-foreground">
            Full-Stack Developer • UI Engineer • AI Integrations
          </p>

          <h1 className="mt-6 text-5xl md:text-6xl xl:text-7xl font-extrabold leading-tight">
            I build{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
              high-impact
            </span>{" "}
            web products that convert.
          </h1>

          <p className="mt-8 max-w-xl text-lg text-muted-foreground">
            I help startups, founders, and businesses turn ideas into
            fast, scalable, and beautifully designed digital products.
          </p>

          <div className="mt-12 flex flex-wrap gap-6">
            <Link
              href="/projects"
              className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium"
            >
              View Projects
            </Link>

            <Link
              href="/hire-me"
              className="px-8 py-4 rounded-full border border-white/20"
            >
              Hire Me
            </Link>
          </div>
        </motion.div>

        {/* RIGHT — Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block"
        >
          <div className="relative h-[420px] rounded-3xl glass overflow-hidden">
            <img
              src="/cover-image.png"
              alt="Product preview"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
