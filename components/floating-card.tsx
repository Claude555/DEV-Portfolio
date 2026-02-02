"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function FloatingCard() {
  return (
    <motion.div
      animate={{ y: [0, -20, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="relative h-[420px] w-[320px] rounded-2xl overflow-hidden glass "
    >
      <Image
        src="/profile.jpg"
        alt="Profile visual"
        fill
        className="object-cover"
      />

      {/* subtle overlay */}
      <div className="absolute inset-0 bg-black/20" />
    </motion.div>
  )
}
