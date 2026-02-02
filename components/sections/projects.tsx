import Link from "next/link"
import { projects } from "@/data/projects"
import { ProjectCard } from "@/components/project-card"

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end">
          <div>
            <p className="uppercase text-sm tracking-widest text-muted-foreground">
              Selected Work
            </p>
            <h2 className="mt-2 text-4xl font-bold">
              Featured Projects
            </h2>
          </div>

          <Link
            href="/projects"
            className="hidden md:block text-sm underline"
          >
            View All →
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.slice(0, 3).map(project => (
            <ProjectCard
              key={project.slug}
              project={project}
            />
          ))}
        </div>

        {/* Mobile View All */}
        <div className="mt-12 text-center md:hidden">
          <Link href="/projects" className="underline">
            View All Projects →
          </Link>
        </div>
      </div>
    </section>
  )
}
