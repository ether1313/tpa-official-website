"use client"

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Header() {
  const [scrollY, setScrollY] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/verified', label: 'Verified' },
    { href: '/responsible', label: 'Responsible' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' }
  ]

  return (
    <>
      {/* === Floating Header === */}
      <motion.header
        className="fixed top-6 inset-x-0 z-50 flex justify-center px-6"
        animate={{ y: Math.sin(scrollY * 0.01) * 2 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
      >
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-8 py-4 shadow-2xl w-full max-w-5xl flex items-center justify-between">

          {/* Left Logo */}
          <Link href="/" className="hover:scale-105 transition-transform duration-300 flex items-center">
            {/* ✅ Desktop Logo */}
            <div className="hidden md:block">
              <Image
                src="/tpa-logo.png"
                alt="TPA Logo"
                width={70}   // ← Desktop 版 Logo 大小
                height={20}
                priority
              />
            </div>

            {/* ✅ Mobile Logo */}
            <div className="block md:hidden">
              <Image
                src="/tpa-logo.png"
                alt="TPA Logo Mobile"
                width={60}   // ← Mobile 版 Logo 小一點
                height={10}
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center space-x-8 mx-auto">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative font-medium whitespace-nowrap transition-colors duration-300 group ${
                  pathname === item.href ? 'text-blue-600' : 'text-black hover:text-blue-600'
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 shadow-lg shadow-blue-500/50 ${
                    pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-8 h-8 flex items-center justify-center cursor-pointer"
          >
            <div className="relative w-6 h-6">
              <motion.span
                className="absolute top-1 left-0 w-6 h-0.5 bg-black rounded-full"
                animate={{
                  rotate: isMobileMenuOpen ? 45 : 0,
                  y: isMobileMenuOpen ? 8 : 0
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="absolute top-3 left-0 w-6 h-0.5 bg-black rounded-full"
                animate={{
                  opacity: isMobileMenuOpen ? 0 : 1
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="absolute top-5 left-0 w-6 h-0.5 bg-black rounded-full"
                animate={{
                  rotate: isMobileMenuOpen ? -45 : 0,
                  y: isMobileMenuOpen ? -8 : 0
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </button>
        </div>
      </motion.header>

      {/* === Mobile Dropdown === */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-24 inset-x-0 z-40 flex justify-center md:hidden"
          >
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-4 shadow-2xl w-full max-w-sm mx-6">
              <nav className="flex flex-col space-y-2 text-center">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`relative font-medium text-base py-1 whitespace-nowrap transition-colors duration-300 group ${
                      pathname === item.href ? 'text-blue-600' : 'text-black hover:text-blue-600'
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 shadow-lg shadow-blue-500/50 ${
                        pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    ></span>
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* === Backdrop === */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  )
}
