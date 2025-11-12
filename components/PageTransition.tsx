
"use client"

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface PageTransitionProps {
  children: ReactNode
  direction?: 'left' | 'right' | 'up' | 'down'
}

export default function PageTransition({ children, direction = 'right' }: PageTransitionProps) {
  const variants = {
    initial: {
      x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
      y: direction === 'up' ? -100 : direction === 'down' ? 100 : 0,
      opacity: 0,
      filter: 'blur(10px)'
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      filter: 'blur(0px)'
    },
    exit: {
      x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
      opacity: 0,
      filter: 'blur(10px)'
    }
  }

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      {children}
    </motion.div>
  )
}
