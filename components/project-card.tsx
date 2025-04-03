"use client"

import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

interface ProjectCardProps {
  title: string
  description: string
  imageSrc: string
  projectUrl?: string // Optional link
  index: number
  reversed?: boolean
}

export default function ProjectCard({
  title,
  description,
  imageSrc,
  projectUrl,
  index,
  reversed = false,
}: ProjectCardProps) {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center ${reversed ? "lg:flex-row-reverse" : ""}`}
    >
      <div className={`space-y-4 ${reversed ? "lg:order-2" : ""}`}>
        <div className="highlight-gradient"></div>
        <h3 className="font-playfair text-2xl md:text-3xl font-bold gradient-text">{title}</h3>
        <p className="text-muted-foreground">{description}</p>

        {/* Show link only if projectUrl is provided */}
        {projectUrl && (
          <Link
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-primary/20 to-accent/20 px-4 py-2 rounded-full text-primary hover:from-primary/30 hover:to-accent/30 transition-all"
          >
            {projectUrl.replace("https://", "")} {/* Display clean link */}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        )}
      </div>

      <div className={`${reversed ? "lg:order-1" : ""}`}>
        <motion.div
          className="rounded-2xl overflow-hidden"
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 6,
            delay: index * 0.2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <Image
            src={imageSrc || "/placeholder.svg"}
            width={800}
            height={400} // Reduced height for better fit
            alt={title}
            className="rounded-2xl shadow-xl object-cover w-full h-auto"
          />
        </motion.div>
      </div>
    </div>
  )
}

