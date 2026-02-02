import Link from "next/link"
import Image from "next/image"

export default function HireMePage() {
  return (
    <section className="max-w-5xl mx-auto py-24 px-6">
      {/* HERO */}
      <div className="text-center">
        <h1 className="text-5xl font-extrabold">
          Let’s Build Something Great
        </h1>

        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          I help startups and businesses design and build fast, scalable,
          and conversion-focused web applications.
        </p>

        <Link
          href="#contact"
          className="inline-block mt-10 px-10 py-4 rounded-full bg-primary text-primary-foreground font-medium"
        >
          Start Your Project
        </Link>
      </div>

      {/* WHO THIS IS FOR */}
      <div className="mt-32 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-bold">
            Who I Work With
          </h2>
          <p className="mt-6 text-muted-foreground">
            I partner with founders, startups, and growing businesses
            who need a reliable developer to turn ideas into production-ready
            products.
          </p>

          <ul className="mt-6 space-y-3">
            <li>• SaaS products</li>
            <li>• MVPs & startups</li>
            <li>• Marketing & landing pages</li>
            <li>• AI-powered web apps</li>
          </ul>
        </div>

        <Image
          src="/hero-bg.jpg"
          alt="Work preview"
          width={500}
          height={400}
          className="rounded-2xl"
        />
      </div>

      {/* PROCESS */}
      <div className="mt-32">
        <h2 className="text-3xl font-bold text-center">
          My Process
        </h2>

        <div className="mt-16 grid md:grid-cols-3 gap-10">
          {[
            ["Discovery", "We clarify goals, scope, and timeline."],
            ["Build", "I design and develop the solution."],
            ["Launch", "We test, optimize, and deploy."],
          ].map(step => (
            <div key={step[0]} className="glass p-8 rounded-2xl">
              <h3 className="text-xl font-semibold">{step[0]}</h3>
              <p className="mt-4 text-muted-foreground">{step[1]}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div
        id="contact"
        className="mt-32 glass rounded-2xl p-12 text-center"
      >
        <h2 className="text-3xl font-bold">
          Ready to Get Started?
        </h2>

        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          Send me a message with your project details and I’ll get back to you
          within 24 hours.
        </p>

        <Link
          href="/#contact"
          className="inline-block mt-8 px-10 py-4 rounded-full bg-primary"
        >
          Contact Me
        </Link>
      </div>
    </section>
  )
}
