import { projects } from "@/data/projects"
import { ProjectCard } from "@/components/project-card"

export default function ProjectsPage() {
  return (
    <section className="max-w-[1100px] mx-auto py-24 px-6">
      <h1 className="text-5xl font-bold">Projects</h1>
      <p className="mt-4 text-muted-foreground max-w-2xl">
        A selection of projects showcasing my experience in modern web
        development, UI/UX, and AI integration.
      </p>

      {/* Grid updated to 4 columns on desktop */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {projects.map(project => (
          <ProjectCard
            key={project.slug}
            project={project}
          />
        ))}
      </div>
    </section>
  )
}
