"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface SkillBarProps {
  skill: string
  percentage: number
}

export default function SkillBar({ skill, percentage }: SkillBarProps) {
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    setIsInView(true)
  }, [])

  return (
    <div className="space-y-2 p-4 rounded-lg glass-card overflow-hidden">
      <div className="flex flex-wrap justify-between items-center gap-2">
        <span className="font-medium truncate">{skill}</span>
        <span className="text-sm font-bold px-2 py-1 gradient-bg-blue text-white rounded-full">{percentage}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full gradient-bg-blue rounded-full"
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${percentage}%` : "0%" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        />
      </div>
    </div>
  )
}

