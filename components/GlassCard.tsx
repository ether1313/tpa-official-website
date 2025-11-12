
"use client"

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function GlassCard({ children, className = '', hover = true }: GlassCardProps) {
  return (
    <motion.div
      className={`backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 shadow-2xl ${className}`}
      whileHover={hover ? {
        scale: 1.02,
        boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.25)',
        borderColor: 'rgba(59, 130, 246, 0.3)'
      } : {}}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}
