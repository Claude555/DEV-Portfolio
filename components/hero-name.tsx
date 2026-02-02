"use client"

import { motion } from "framer-motion"

export function HeroName() {
  return (
    <motion.h1
      initial={{ backgroundPosition: "0% 50%" }}
      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
      transition={{ duration: 6, repeat: Infinity }}
      className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-[length:200%_200%] bg-clip-text text-transparent"
    >
      CLAUDE
    </motion.h1>
  )
}
