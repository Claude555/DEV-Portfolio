import { NextResponse } from "next/server"
import { openai } from "@/lib/openai"

export const dynamic = "force-dynamic";

export async function POST() {
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: "You write concise, high-quality tech blog posts.",
      },
      {
        role: "user",
        content: "Write a blog post about modern web development with AI.",
      },
    ],
  })

  return NextResponse.json({
    content: completion.choices[0].message.content,
  })
}
