"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full flex justify-center px-4 sm:px-6 mt-10 mb-6 sm:mb-8"
    >
      <div className="backdrop-blur-lg bg-white/30 border border-white/20 rounded-2xl px-4 sm:px-8 py-3 sm:py-4 shadow-md w-full max-w-5xl flex flex-row items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="hover:scale-105 transition-transform duration-300 flex items-center"
        >
          <Image
            src="/tpa-logo.png"
            alt="TPA Logo"
            width={65}
            height={20}
            priority
            className="opacity-90"
          />
        </Link>

        {/* Copyright */}
        <p className="text-black/60 text-xs sm:text-sm text-right leading-relaxed">
          © 2025 TPA — Trusted Pokies Australia.
          <br className="block sm:hidden" />
          <span className="hidden sm:inline"> </span>
          All rights reserved.
        </p>
      </div>
    </motion.footer>
  )
}
