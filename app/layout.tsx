// app/layout.tsx
import { Navbar } from "@/components/navbar"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Inter } from "next/font/google"
import { Toaster } from "sonner"
import { WhatsAppButton } from "@/components/whatsapp-button"




const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata = {
  title: "Claude – Full Stack Developer",
  description:
    "Modern web developer specializing in Next.js, Tailwind, and AI-powered solutions.",
  icons: {
    icon: "/favicon.png",
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
        >
          <Navbar />
          <main className="pt-16">{children}</main>
          
          <Toaster richColors position="top-right" />
        </ThemeProvider>
        <WhatsAppButton />
      </body>
    </html>
  )
}
