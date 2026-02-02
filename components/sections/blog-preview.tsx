"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const posts = [
  {
    title: "How AI Is Changing Modern Web Development",
    excerpt: "Exploring how AI tools are transforming frontend workflows.",
  },
  {
    title: "Building High-Converting Landing Pages",
    excerpt: "Design and performance strategies that actually convert.",
  },
  {
    title: "Next.js + Tailwind Best Practices",
    excerpt: "Lessons learned from building production-grade apps.",
  },
]

export function BlogPreviewSection() {
  return (
    <section id="blog" className="py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="max-w-2xl">
          <p className="uppercase tracking-widest text-sm text-muted-foreground">
            Blog
          </p>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold">
            Insights & Articles
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            AI-generated and curated content around development, design, and
            technology.
          </p>
        </div>

        {/* LIST */}
        <div className="mt-16 space-y-6">
          {posts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 flex items-center justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold">
                  {post.title}
                </h3>
                <p className="mt-2 text-muted-foreground">
                  {post.excerpt}
                </p>
              </div>

              <ArrowRight className="h-5 w-5 text-primary" />
            </motion.div>
          ))}
        </div>

        <div className="mt-12">
          <Button size="lg">View All Articles</Button>
        </div>
      </div>
    </section>
  )
}
