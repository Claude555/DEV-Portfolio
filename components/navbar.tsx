"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

const navLinks = [
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-background/60 border-b">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-bold text-lg">
            Claude
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link key={link.label} href={link.href}>
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden"
          >
            <Menu />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed inset-0 z-50 bg-background/90 backdrop-blur-lg"
          >
            <div className="flex justify-between items-center px-6 h-16">
              <span className="font-bold">Menu</span>
              <button onClick={() => setOpen(false)}>
                <X />
              </button>
            </div>

            <div className="flex flex-col items-center justify-center h-full gap-10 text-2xl">
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
