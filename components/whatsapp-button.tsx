"use client"

import Link from "next/link"
import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const phoneNumber = "254717956609" // include country code, no +

  return (
    <Link
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:scale-105 transition"
    >
      <MessageCircle className="text-white h-6 w-6" />
    </Link>
  )
}
