"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import GlassCard from "@/components/GlassCard"
import PageTransition from "@/components/PageTransition"
import Link from "next/link"

export default function HomePage() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {})
          } else {
            video.pause()
          }
        })
      },
      { threshold: 0.5 }
    )

    observer.observe(video)

    return () => {
      observer.disconnect()
    }
  }, [])

  const stats = [
    { number: "102+", label: "Verified Sites", icon: "ri-shield-check-line" },
    { number: "10K+", label: "Player Reviews", icon: "ri-user-star-line" },
    { number: "$2M+", label: "Bonus Claimed", icon: "ri-gift-line" },
  ]

  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* ================= HERO ================= */}
        <section className="relative min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] flex items-center justify-center px-4 sm:px-6">
          {/* 背景图与渐层 */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/casino-bg.png')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent"></div>
          </div>

          {/* 内容 */}
          <div className="relative z-10 max-w-5xl mx-auto text-center px-2 sm:px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-3 sm:space-y-6"
            >
              {/* Title */}
              <h1 className="font-bowlby text-xl sm:text-3xl md:text-5xl text-black leading-snug tracking-tight">
                Play Safe. Play Smart.
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent inline-block mt-1 sm:mt-2">
                  Trusted by TPA.
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-xs sm:text-base md:text-xl text-black/70 max-w-xs sm:max-w-2xl mx-auto leading-relaxed">
                Your trusted pokies verification authority.
              </p>

              {/* Button */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/verified"
                  className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white 
                  px-4 sm:px-8 py-2 sm:py-3 rounded-full font-semibold text-xs sm:text-sm 
                  shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                >
                  Explore Trusted Platforms
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>


        {/* ===== VIDEO SECTION ===== */}
        <section className="py-10 sm:py-16 px-4 sm:px-6 relative">
          <div className="max-w-6xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-4xl md:text-5xl font-bold font-['Orbitron'] text-black mb-6 sm:mb-10"
            >
              Heard TPA Said.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative overflow-hidden backdrop-blur-xl border border-white/30 shadow-2xl bg-white/20 
              rounded-md sm:rounded-xl md:rounded-2xl"
            >
              <div className="aspect-video w-full">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover cursor-pointer rounded-md sm:rounded-xl md:rounded-2xl"
                  src="/videos/tpa-video-final.mp4"
                  playsInline
                  preload="metadata"
                  muted
                  controls
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ================= STATS ================= */}
        <section className="py-8 sm:py-16 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 sm:grid-cols-3 gap-3 sm:gap-8 text-center"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <GlassCard className="flex flex-col justify-center items-center h-[110px] sm:h-[220px] rounded-2xl sm:rounded-3xl py-3 sm:py-8 px-2 sm:px-4">
                    {/* Icon */}
                    <div className="w-8 h-8 sm:w-16 sm:h-16 mb-2 sm:mb-4 flex items-center justify-center">
                      <i className={`${stat.icon} text-2xl sm:text-4xl text-blue-600`}></i>
                    </div>

                    {/* Number */}
                    <motion.h3
                      className="text-lg sm:text-4xl font-bold font-['Orbitron'] text-black mb-0 sm:mb-2"
                      initial={{ scale: 0.9 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    >
                      {stat.number}
                    </motion.h3>

                    {/* Label */}
                    <p className="text-[11px] sm:text-base text-black/70 font-medium mt-1 sm:mt-0">
                      {stat.label}
                    </p>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ================= FEATURES ================= */}
        <section className="py-8 sm:py-16 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-8 sm:mb-16"
            >
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold font-['Orbitron'] text-black mb-3 sm:mb-6">
                Why Choose TPA?
              </h2>
              <p className="text-sm sm:text-xl text-black/70 max-w-sm sm:max-w-3xl mx-auto leading-relaxed">
                We provide comprehensive verification and review standards to ensure your gaming experience is reliable, compliant, and enjoyable.
              </p>
            </motion.div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
              {[
                {
                  title: 'Verified Security',
                  description: 'All platforms undergo rigorous security audits and licensing verification.',
                  icon: 'ri-shield-check-line',
                  image: 'https://readdy.ai/api/search-image?query=Digital%20security%20shield%20with%20glowing%20blue%20protection%20symbols%2C%20cybersecurity%20concept%2C%20transparent%20glass%20effect%2C%20modern%20tech%20design%2C%20clean%20white%20background%2C%20professional%20lighting%2C%20high-tech%20security%20visualization&width=400&height=300&seq=security&orientation=landscape'
                },
                {
                  title: 'Fair Play Guarantee',
                  description: 'We ensure all games use certified random number generators and fair algorithms.',
                  icon: 'ri-scales-line',
                  image: 'https://readdy.ai/api/search-image?query=Balanced%20scales%20of%20justice%20with%20digital%20elements%2C%20fair%20play%20concept%2C%20transparent%20glass%20surfaces%2C%20blue%20and%20purple%20neon%20lighting%2C%20modern%20minimalist%20design%2C%20clean%20white%20background&width=400&height=300&seq=fairplay&orientation=landscape'
                },
                {
                  title: 'Expert Reviews',
                  description: 'Our team of gaming experts provides detailed, unbiased reviews and ratings.',
                  icon: 'ri-star-line',
                  image: 'https://readdy.ai/api/search-image?query=Professional%20gaming%20expert%20analyzing%20data%20on%20holographic%20displays%2C%20modern%20office%20environment%2C%20glass%20surfaces%2C%20blue%20lighting%2C%20clean%20white%20background%2C%20high-tech%20analysis%20tools&width=400&height=300&seq=expert&orientation=landscape'
                },
                {
                  title: 'Responsible Gaming',
                  description: 'We promote safe gambling practices and provide resources for responsible gaming.',
                  icon: 'ri-heart-line',
                  image: 'https://readdy.ai/api/search-image?query=Caring%20hands%20protecting%20a%20heart%20symbol%20with%20digital%20wellness%20elements%2C%20responsible%20gaming%20concept%2C%20soft%20blue%20glow%2C%20glass%20transparency%20effects%2C%20clean%20white%20background&width=400&height=300&seq=responsible&orientation=landscape'
                },
                {
                  title: 'Real Player Reviews',
                  description: 'Authentic feedback from verified players to help you make informed decisions.',
                  icon: 'ri-chat-3-line',
                  image: 'https://readdy.ai/api/search-image?query=Speech%20bubbles%20with%20star%20ratings%20floating%20in%20digital%20space%2C%20player%20review%20concept%2C%20transparent%20glass%20effects%2C%20blue%20and%20purple%20lighting%2C%20modern%20design%2C%20clean%20white%20background&width=400&height=300&seq=reviews&orientation=landscape'
                },
                {
                  title: '24/7 Support',
                  description: 'Round-the-clock assistance for all your gaming and verification needs.',
                  icon: 'ri-customer-service-line',
                  image: 'https://readdy.ai/api/search-image?query=Customer%20support%20representative%20with%20headset%20in%20futuristic%20office%2C%2024%2F7%20service%20concept%2C%20glass%20surfaces%2C%20blue%20neon%20lighting%2C%20professional%20environment%2C%20clean%20white%20background&width=400&height=300&seq=support&orientation=landscape'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <GlassCard className="overflow-hidden flex flex-col items-center text-center py-4 sm:py-6">
                    {/* Image */}
                    <div className="relative w-full h-28 sm:h-48 mb-3 sm:mb-6 rounded-xl overflow-hidden">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent"></div>
                    </div>

                    {/* Icon + Title + Description */}
                    <div className="flex flex-col items-center px-2 sm:px-4">
                      <div className="w-8 h-8 sm:w-12 sm:h-12 mb-2 sm:mb-4 flex items-center justify-center">
                        <i className={`${feature.icon} text-xl sm:text-2xl text-blue-600`}></i>
                      </div>
                      <h3 className="text-base sm:text-xl font-bold text-black mb-1 sm:mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-xs sm:text-base text-black/70 leading-relaxed max-w-[240px] sm:max-w-none">
                        {feature.description}
                      </p>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="py-8 sm:py-16 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <GlassCard className="text-center p-4 sm:p-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* 標題 */}
                <h2 className="text-xl sm:text-4xl font-bold font-['Orbitron'] text-black mb-3 sm:mb-6 leading-snug">
                  Ready to Start Playing Safely?
                </h2>

                {/* 內容 */}
                <p className="text-sm sm:text-xl text-black/70 mb-5 sm:mb-8 max-w-xs sm:max-w-2xl mx-auto leading-relaxed">
                  Join thousands of Australian players who trust TPA for their online gaming experience.
                </p>

                {/* 按鈕組 */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Link
                    href="/verified"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 sm:px-8 sm:py-4 rounded-full font-semibold text-sm sm:text-lg shadow-md sm:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                  >
                    Browse Verified Sites
                  </Link>
                  <Link
                    href="/about"
                    className="border border-blue-600 text-blue-600 px-4 py-2 sm:px-8 sm:py-4 rounded-full font-semibold text-sm sm:text-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            </GlassCard>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
