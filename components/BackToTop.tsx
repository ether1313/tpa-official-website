"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowUp } from "lucide-react"

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY + window.innerHeight
      const height = document.documentElement.scrollHeight
      setVisible(scrollY > height * 0.5)
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={visible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
      transition={{ duration: 0.3 }}
      onClick={scrollTop}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-50 bg-gray-200/80 hover:bg-gray-300 text-gray-700 p-3 sm:p-4 rounded-full shadow-lg backdrop-blur-md transition-all duration-300"
    >
      <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6" />
    </motion.button>
  )
}
