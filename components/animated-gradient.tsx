"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function AnimatedGradient() {
  const [position, setPosition] = useState({ x: 50, y: 50 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <motion.div
      className="absolute inset-0 -z-10"
      animate={{
        backgroundPosition: `${position.x}% ${position.y}%`,
      }}
      transition={{ type: "spring", stiffness: 40 }}
      style={{
        backgroundSize: "300% 300%",
        backgroundImage:
          "radial-gradient(circle at center, #6366f1, #312e81, #020617)",
      }}
    />
  )
}
