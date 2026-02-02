import { projects } from "@/data/projects"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Github, ExternalLink } from "lucide-react"

export const dynamicParams = false

export function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }))
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug)
  if (!project) return notFound()

  return (
    <section className="max-w-5xl mx-auto py-24 px-6">
      {/* HEADER */}
      <h1 className="text-4xl font-bold">{project.title}</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        {project.shortDescription}
      </p>

      {/* LINKS */}
      <div className="mt-6 flex gap-6">
        <Link href={project.live} target="_blank">
          <ExternalLink />
        </Link>
        <Link href={project.github} target="_blank">
          <Github />
        </Link>
      </div>

      {/* COVER */}
      <div className="mt-12 rounded-3xl overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={1200}
          height={700}
          className="object-cover"
        />
      </div>

      {/* GALLERY */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {project.images.map(img => (
          <Image
            key={img}
            src={img}
            alt=""
            width={400}
            height={300}
            className="rounded-xl"
          />
        ))}
      </div>

      {/* CONTENT */}
      <div className="mt-20 space-y-16">
        <Section title="Features">
          {project.problem}
        </Section>

        <Section title="The Solution">
          {project.solution}
        </Section>

        <Section title="Tech Stack">
          <ul className="space-y-2">
            {project.results.map(r => (
              <li key={r}>• {r}</li>
            ))}
          </ul>
        </Section>

        <Section title="Tech Stack">
          <div className="flex flex-wrap gap-3">
            {project.tech.map(t => (
              <span
                key={t}
                className="px-4 py-1 rounded-full bg-white/10"
              >
                {t}
              </span>
            ))}
          </div>
        </Section>
      </div>

      {/* CTA */}
      <div className="mt-32 glass p-10 rounded-2xl text-center">
        <h3 className="text-2xl font-bold">
          Want something similar?
        </h3>
        <p className="mt-4 text-muted-foreground">
          I help clients build fast, scalable, and beautiful web products.
        </p>
        <Link
          href="#contact"
          className="inline-block mt-8 px-8 py-3 bg-secondary rounded-full"
        >
          Hire Me
        </Link>
      </div>
    </section>
  )
}

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div>
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="mt-4 text-muted-foreground">
        {children}
      </div>
    </div>
  )
}
