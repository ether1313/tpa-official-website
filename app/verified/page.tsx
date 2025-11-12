"use client"

import { motion } from 'framer-motion'
import GlassCard from '@/components/GlassCard'
import PageTransition from '@/components/PageTransition'
import SecurityScanModal from '@/components/SecurityScanModal'

export default function VerifiedPage() {
  const verifiedSites = [
    {
      name: 'IPAY9',
      rating: 4.8,
      bonus: 'Up to 100% Welcome Bonus',
      features: ['Microgaming Powered', 'Secure Payment', 'Licensed by Pagcor'],
      image: 'games/ipay9.png',
      url: 'https://www.ipay9aud.com/register/SMSRegister'
    },
    {
      name: 'KINGBET9',
      rating: 4.7,
      bonus: 'Up to $199.99 Free Credit New Register',
      features: ['500+ Pokies', 'Mobile Optimized', 'Licensed by GC'],
      image: 'games/kingbet9.png',
      url: 'https://www.kingbet9aus.com/register/SMSRegister'
    },
    {
      name: 'BIGPAY77',
      rating: 4.9,
      bonus: 'Up to $187.77 New Registration',
      features: ['Microgaming Powered', '500+ Pokies', 'Secure Payment'],
      image: 'games/bp77.png',
      url: 'https://bigpay77.net/register/SMSRegister'
    },
    {
      name: 'ME99',
      rating: 4.6,
      bonus: 'Up to $101 Starter Pack',
      features: ['Mobile Optimized', 'Licensed by Pagcor', 'Secure Payment'],
      image: 'games/me99.png',
      url: 'https://www.me99aud.com/register/SMSRegister'
    },
    {
      name: 'GUCCI9',
      rating: 4.8,
      bonus: 'New Register Free AUD109.99',
      features: ['500+ Pokies', 'Licensed by GC', 'Microgaming Powered'],
      image: 'games/gucci9.png',
      url: 'https://gucci9.vip/register/SMSRegister'
    },
    {
      name: 'ROLEX9',
      rating: 4.5,
      bonus: 'Free Credit $99.99 + $10',
      features: ['Microgaming Powered', 'Secure Payment', 'Licensed by GC'],
      image: 'games/rolex9.png',
      url: 'https://rolex9.net/register/SMSRegister'
    },
    {
      name: 'MICKY13',
      rating: 4.7,
      bonus: 'Up to $365 Daily Free Bonus',
      features: ['Mobile Optimized', '500+ Pokies', 'Licensed by Pagcor'],
      image: 'games/micky13.png',
      url: 'https://www.micky13.net/register/SMSRegister'
    },
    {
      name: 'SPONGEBOB13',
      rating: 4.6,
      bonus: 'Up to $113 Free Credit Bonus',
      features: ['Microgaming Powered', 'Mobile Optimized', 'Secure Payment'],
      image: 'games/spongebob13.png',
      url: 'https://www.spongebob13.net/register/SMSRegister'
    },
    {
      name: 'MRBEAN9',
      rating: 4.7,
      bonus: 'Up to $209.99 + 50% Welcome Bonus',
      features: ['500+ Pokies', 'Licensed by Pagcor', 'Secure Payment'],
      image: 'games/mrbean9.png',
      url: 'https://mrbean9.com/register/SMSRegister'
    },
    {
      name: 'WINNIE13',
      rating: 4.6,
      bonus: 'Up to $122 + 3 Free Spins',
      features: ['Licensed by GC', 'Microgaming Powered', 'Mobile Optimized'],
      image: 'games/winnie13.png',
      url: 'https://winnie13.net/register/SMSRegister'
    },
    {
      name: 'BYBID9',
      rating: 4.8,
      bonus: 'Welcome Bonus 50% + $70 Share Tasks',
      features: ['Microgaming Powered', '500+ Pokies', 'Licensed by Pagcor'],
      image: 'games/bybid9.png',
      url: 'https://bybid9.com/register/SMSRegister'
    },
    {
      name: 'POKEMON13',
      rating: 4.9,
      bonus: 'Up to $199.99 + 80% Welcome Bonus',
      features: ['Mobile Optimized', 'Secure Payment', 'Licensed by GC'],
      image: 'games/pokemon13.png',
      url: 'https://pokemon13.com/register/SMSRegister'
    },
    {
      name: 'QUEEN13',
      rating: 4.6,
      bonus: 'Up to $1825 Daily Free Bonus',
      features: ['Microgaming Powered', 'Mobile Optimized', '500+ Pokies'],
      image: 'games/queen13.png',
      url: 'https://queen13.net/register/SMSRegister'
    },
  ]

  return (
    <PageTransition direction="up">
      <div className="min-h-screen">
        {/* ===================== VERIFIED GRID ===================== */}
        <section className="py-10 sm:py-16 px-4 sm:px-6" data-product-shop>
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-10 sm:mb-16"
            >
              <h2 className="text-2xl sm:text-4xl font-bold font-['Orbitron'] text-black mb-4 sm:mb-6">
                TPA Verified Wallets
              </h2>
              <p className="text-base sm:text-xl text-black/70 max-w-md sm:max-w-3xl mx-auto leading-relaxed">
                Every listed casino has undergone our comprehensive 50-point certification protocol, ensuring full compliance with TPA’s standards of security, integrity, and player welfare.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {verifiedSites.map((site, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <GlassCard className="p-4 sm:p-6">
                    <div className="relative h-40 sm:h-48 mb-4 sm:mb-6 rounded-lg overflow-hidden">
                      <img
                        src={site.image}
                        alt={site.name}
                        className="w-full h-full object-cover object-top"
                      />
                      <div className="absolute top-3 right-3 bg-green-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                        Verified
                      </div>
                    </div>

                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg sm:text-xl font-bold text-black">{site.name}</h3>
                        <div className="flex items-center space-x-1">
                          <i className="ri-star-fill text-yellow-500 text-sm sm:text-base"></i>
                          <span className="font-semibold text-black text-sm sm:text-base">{site.rating}</span>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-2 sm:p-3 rounded-lg text-center">
                        <p className="font-semibold text-sm sm:text-base">{site.bonus}</p>
                      </div>

                      <div className="space-y-1 sm:space-y-2">
                        {site.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <i className="ri-check-line text-green-500 text-sm sm:text-base"></i>
                            <span className="text-black/70 text-xs sm:text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* ======== BUTTON SECTION ======== */}
                      <div className="flex justify-between items-center gap-3 pt-3 sm:pt-4">
                        {/* PLAY NOW 按钮（静态 + hover 效果） */}
                        <a
                          href={site.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center bg-[#46cd37]
                                    text-white py-2.5 sm:py-2.5 rounded-full font-semibold text-base
                                    shadow-md hover:shadow-green-400/40 transition-all duration-300
                                    hover:scale-105 hover:brightness-110
                                    min-w-[100px] sm:min-w-[120px]"
                        >
                          Play Now
                        </a>

                        {/* REVIEW / SCAN 按钮（静态） */}
                        <div className="w-[110px]">
                          <SecurityScanModal
                            siteName={site.name}
                            buttonClassName="w-full text-center bg-gradient-to-r from-amber-400 to-orange-500
                                            text-white py-2.5 rounded-full font-semibold text-base
                                            shadow-md hover:shadow-orange-400/30 hover:scale-105 hover:brightness-110
                                            transition-all duration-300"
                          />
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== TRUST INDICATORS ===================== */}
        <section className="py-10 sm:py-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <GlassCard className="text-center p-6 sm:p-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl sm:text-4xl font-bold font-['Orbitron'] text-black mb-6 sm:mb-8">
                  Why Trust Our Verification?
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                  {[
                    {
                      icon: 'ri-time-line',
                      title: 'Continuous Monitoring',
                      desc: 'We continuously monitor all verified sites to ensure they maintain our standards.'
                    },
                    {
                      icon: 'ri-team-line',
                      title: 'Expert Team',
                      desc: 'Our verification team includes former regulators and gaming industry experts.'
                    },
                    {
                      icon: 'ri-refresh-line',
                      title: 'Regular Updates',
                      desc: 'Our verification status is updated monthly based on the latest assessments.'
                    }
                  ].map((item, index) => (
                    <div key={index} className="space-y-3 sm:space-y-4">
                      <div className="w-12 sm:w-16 h-12 sm:h-16 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <i className={`${item.icon} text-lg sm:text-2xl text-white`}></i>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-black">{item.title}</h3>
                      <p className="text-sm sm:text-base text-black/70 max-w-xs sm:max-w-sm mx-auto leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </GlassCard>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
