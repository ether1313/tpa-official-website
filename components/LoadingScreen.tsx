'use client'

import { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // 禁止滚动
    document.body.style.overflow = 'hidden'

    const timer = setTimeout(() => {
      setLoading(false)
      document.body.style.overflow = ''
    }, 2000)

    return () => {
      clearTimeout(timer)
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center transition-opacity duration-700 z-[9999] ${
        loading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* 背景玻璃层 */}
      <div className="absolute inset-0 bg-gray-200/25 backdrop-blur-md"></div>

      {/* 内容区 */}
      <div className="relative flex flex-col items-center justify-center text-center px-6 bg-white/10 backdrop-blur-2xl rounded-2xl border border-white/30 shadow-lg p-10 md:p-16">
        {/* Logo */}
        <img
          src="/tpa-authorize.png"
          alt="TPA Logo"
          className="w-48 md:w-56 h-auto drop-shadow-md animate-pulse mb-8"
        />

        {/* Loader pattern */}
        <div className="loader mb-12"></div>

        {/* Tagline */}
        <p className="text-sm md:text-base text-gray-700 font-medium max-w-xs md:max-w-md leading-relaxed tracking-wide">
          Australia’s Trusted Authority for Gaming Verification and Compliance
        </p>
      </div>
    </div>
  )
}
