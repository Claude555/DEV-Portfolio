"use client"

import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 md:px-16">
      <div className="max-w-xl mx-auto glass rounded-2xl p-8">
        <h3 className="text-2xl font-bold">
          Start a Conversation
        </h3>

        <p className="mt-4 text-muted-foreground">
          Tell me about your project and I’ll get back to you quickly.
        </p>

        <form className="mt-8 space-y-4">
          <input
            className="w-full rounded-lg bg-white/10 p-3"
            placeholder="Your Name"
          />
          <input
            className="w-full rounded-lg bg-white/10 p-3"
            placeholder="Email Address"
          />
          <textarea
            className="w-full rounded-lg bg-white/10 p-3 h-32"
            placeholder="Project details..."
          />
          <Button className="w-full" size="lg">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  )
}
