import Link from "next/link"

export function HireMeCTA() {
  return (
    <div className="mt-24 glass rounded-2xl p-10 text-center">
      <h3 className="text-2xl font-bold">
        Want a project like this?
      </h3>

      <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
        I help startups and businesses build fast, scalable, and
        conversion-focused web experiences.
      </p>

      <Link
        href="#contact"
        className="inline-block mt-8 px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium"
      >
        Hire Me →
      </Link>
    </div>
  )
}
