
"use client"

import { motion } from 'framer-motion'
import GlassCard from '@/components/GlassCard'
import PageTransition from '@/components/PageTransition'

export default function AboutPage() {
  const values = [
    {
      title: 'Trust',
      description: 'We build trust through transparency, rigorous verification processes, and honest reviews. Every platform we recommend has been thoroughly vetted for security and fairness.',
      icon: 'ri-shield-check-line',
      image: '/core-value/trust.png'
    },
    {
      title: 'Transparency',
      description:
        'Our review process is fully open and accountable. We disclose our methodology, funding sources, and any potential conflicts of interest to ensure total transparency.',
      icon: 'ri-eye-line',
      image: '/core-value/transparency.png'
    },
    {
      title: 'Equitable',
      description: 'We champion fair gaming practices and work only with operators who demonstrate genuine commitment to player protection and responsible gambling.',
      icon: 'ri-scales-line',
      image: '/core-value/fair.png'
    }
  ]

  const team = [
    {
      name: 'Sarah Mitchell',
      role: 'Chief Gaming Officer',
      experience: '15+ years in Gaming Regulation',
      image: '/team-member/sarah.png'
    },
    {
      name: 'David Chen',
      role: 'Security Analyst',
      experience: 'Cybersecurity Expert, former ACMA',
      image: '/team-member/david-chen.png'
    },
    {
      name: 'Emma Thompson',
      role: 'Player Advocate',
      experience: 'Responsible Gaming Specialist',
      image: '/team-member/emma-thompson.png'
    }
  ]

  return (
    <PageTransition direction="left">
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-10 sm:py-16 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-10 sm:mb-16"
            >
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-['bowlby'] text-black mb-4 sm:mb-6 leading-tight">
                About TPA
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-black/70 max-w-2xl sm:max-w-4xl mx-auto leading-relaxed sm:leading-loose px-2">
                Trusted Pokies Australia was founded with a vision to build a secure, transparent, and integrity-driven online gaming landscape. We believe every player should experience gaming that is equitable, responsible, and trustworthy.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-10 sm:py-12 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-10 sm:mb-20"
            >
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-['bowlby'] text-black mb-4 sm:mb-6 leading-snug">
                  Our Mission
                </h2>
                <p className="text-base sm:text-lg text-black/70 mb-4 sm:mb-6 leading-relaxed sm:leading-loose">
                  We are dedicated to protecting Australian players by delivering independent assessments, compliance verification, and player education programs. Our expert team ensures that every platform we endorse meets the strictest benchmarks of integrity, transparency, and security.
                </p>
                <p className="text-base sm:text-lg text-black/70 leading-relaxed sm:leading-loose">
                  Through rigorous testing, continuous monitoring, and transparent reporting, we help players make informed decisions about where to play online.
                </p>
              </div>

              <div className="relative order-first lg:order-last">
                <img
                  src="/tpa-mission.png"
                  alt="Our Mission"
                  className="w-full h-56 sm:h-80 md:h-96 object-cover object-center rounded-xl sm:rounded-2xl shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-10 sm:py-12 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-10 sm:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-['bowlby'] text-black mb-4 sm:mb-6">
                Our Core Values
              </h2>
              <p className="text-base sm:text-lg text-black/70 max-w-2xl sm:max-w-3xl mx-auto px-2">
                These principles guide everything we do and ensure we maintain the highest standards in our industry.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <GlassCard className="p-4 sm:p-6">
                    <div className="relative h-40 sm:h-48 mb-4 sm:mb-6 rounded-lg overflow-hidden">
                      <img
                        src={value.image}
                        alt={value.title}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-4 flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
                      <i className={`${value.icon} text-xl sm:text-2xl text-white`}></i>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold font-['bowlby'] text-black mb-2 sm:mb-4 text-center">
                      {value.title}
                    </h3>
                    <p className="text-sm sm:text-base text-black/70 leading-relaxed text-center px-2">
                      {value.description}
                    </p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-10 sm:py-12 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-10 sm:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-['bowlby'] text-black mb-4 sm:mb-6">
                Meet Our Team
              </h2>
              <p className="text-base sm:text-lg text-black/70 max-w-2xl sm:max-w-3xl mx-auto px-2">
                Our experienced team brings together expertise from gaming regulation, cybersecurity, and player advocacy.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <GlassCard>
                    <div className="relative h-56 sm:h-64 mb-4 sm:mb-6 rounded-lg overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div className="text-center px-2">
                      <h3 className="text-lg sm:text-xl font-bold text-black mb-1 sm:mb-2">
                        {member.name}
                      </h3>
                      <p className="text-blue-600 font-semibold text-sm sm:text-base mb-1">
                        {member.role}
                      </p>
                      <p className="text-black/70 text-xs sm:text-sm leading-relaxed">
                        {member.experience}
                      </p>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* Stats Section */}
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <GlassCard className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold font-['bowlby'] text-black mb-12">
                  Our Impact
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {[
                    { number: '5+', label: 'Years Experience' },
                    { number: '102+', label: 'Sites Reviewed' },
                    { number: '50K+', label: 'Players Protected' },
                    { number: '99.7%', label: 'Uptime Guarantee' }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <h3 className="text-3xl md:text-4xl font-bold font-['bowlby'] text-blue-600 mb-2">
                        {stat.number}
                      </h3>
                      <p className="text-black/70 font-medium">{stat.label}</p>
                    </motion.div>
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
