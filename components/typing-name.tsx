"use client"

import { useEffect, useState } from "react"

const name = "CLAUDE G."

export function TypingName() {
  const [text, setText] = useState("")
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState<"forward" | "backward">("forward")

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (direction === "forward") {
        setText(name.slice(0, index + 1))
        setIndex(index + 1)
        if (index === name.length) setDirection("backward")
      } else {
        setText(name.slice(0, index - 1))
        setIndex(index - 1)
        if (index === 0) setDirection("forward")
      }
    }, 200)

    return () => clearTimeout(timeout)
  }, [index, direction])

  return (
    <h1 className="text-5xl md:text-7xl font-extrabold">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
        {text}
      </span>
      <span className="animate-pulse">|</span>
    </h1>
  )
}
