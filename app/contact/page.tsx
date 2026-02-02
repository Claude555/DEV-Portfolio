// app/contact/page.tsx
"use client"

import { useState } from "react"
import { toast } from "sonner"
import { Send, Mail } from "lucide-react"

export default function ContactPage() {
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    console.log("FORM SUBMITTED") // 🔍 debug check

    setLoading(true)
    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      })

      if (!res.ok) throw new Error("Failed")

      form.reset()
      toast.success("Message sent! I’ll get back to you shortly.")
    } catch (err) {
      console.error(err)
      toast.error("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="max-w-5xl mx-auto py-24 px-6">
      {/* HEADER */}
      <div className="text-center">
        <h1 className="text-5xl font-extrabold">
          Get in Touch
        </h1>
        <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
          Have a project in mind? Fill out the form or contact me directly.
          I typically respond within 24 hours.
        </p>
      </div>

      {/* CONTENT */}
      <div className="mt-20 grid md:grid-cols-2 gap-16">
        {/* LEFT — INFO */}
        <div>
          <h2 className="text-2xl font-semibold">
            Contact Information
          </h2>

          <p className="mt-6 text-muted-foreground">
            Feel free to reach out using any of the options below.
          </p>

          <div className="mt-8 space-y-6">
            <div className="flex items-center gap-4">
              <Mail />
              <span>ibrahimclaude009@gmail.com</span>
            </div>

            <p className="text-sm text-muted-foreground">
              Prefer WhatsApp? Use the green button in the corner for
              instant messaging.
            </p>
          </div>
        </div>

        {/* RIGHT — FORM */}
        <form
          onSubmit={handleSubmit}
          className="glass rounded-2xl p-8 space-y-6"
        >
          <div>
            <label className="block text-sm mb-2">Name</label>
            <input
              name="name"
              required
              className="w-full px-4 py-3 rounded-lg bg-background border"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Email</label>
            <input
              name="email"
              type="email"
              required
              className="w-full px-4 py-3 rounded-lg bg-background border"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Message</label>
            <textarea
              name="message"
              rows={5}
              required
              className="w-full px-4 py-3 rounded-lg bg-background border"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground"
          >
            {loading ? "Sending..." : "Send Message"}
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </section>
  )
}
