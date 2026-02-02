"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ExternalLink, Eye, Github } from "lucide-react"

interface ProjectCardProps {
  project: {
    slug: string
    title: string
    shortDescription: string
    image: string // Matches your data property
    tech: string[]
    live?: string
    github?: string
  }
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="group flex flex-col h-full bg-white dark:bg-[#1c1c1c] border border-gray-200 dark:border-white/10 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all"
    >
      {/* Thumbnail Area */}
      <div className="relative aspect-video overflow-hidden bg-gray-100 dark:bg-neutral-800">
        <img
          src={project.image} // Fixed: using .cover from your data
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Hover Overlay - View Case Study Icon */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
           <Link 
            href={`/projects/${project.slug}`}
            className="p-3 bg-white rounded-full text-black hover:bg-gray-100 transition-colors shadow-xl"
           >
            <Eye size={22} />
           </Link>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-[15px] font-bold text-gray-900 dark:text-white line-clamp-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
          {project.tech.map((tech, i) => (
            <span key={i} className="hover:underline cursor-pointer">{tech}</span>
          ))}
        </p>

        {/* Action Bar */}
        <div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-100 dark:border-white/5">
           <div className="flex gap-2">
              {/* Live Preview Moved to the Left */}
              <Link
                href={project.live || "#"}
                target="_blank"
                className="flex items-center gap-1.5 px-3 py-1.5 bg-[#82b440] hover:bg-[#719d37] text-white text-[11px] font-bold rounded shadow-sm transition-colors"
              >
                <ExternalLink size={14} /> Live Preview
              </Link>
           </div>

           {/* GitHub Button/Icon */}
    <Link
      href={project.github || "#"}
      target="_blank"
      className="flex items-center justify-center p-1.5 bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 text-gray-700 dark:text-gray-300 rounded transition-colors"
      title="View Source on GitHub"
    >
      <Github size={16} />
    </Link>
        </div>
      </div>
    </motion.div>
  )
}