"use client"

import { motion } from 'framer-motion'
import GlassCard from '@/components/GlassCard'
import PageTransition from '@/components/PageTransition'
import { useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus('✅ Thank you for your message! We’ll get back to you soon.')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setSubmitStatus(''), 3000)
      } else {
        setSubmitStatus(`⚠️ ${result.message || 'Something went wrong.'}`)
      }
    } catch (error) {
      console.error(error)
      setSubmitStatus('❌ Failed to send message. Please try again later.')
      setTimeout(() => setSubmitStatus(''), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const officeLocations = [
    {
      city: 'Sydney',
      address: 'Suite 5, 530 Collins Street, Melbourne VIC 3000, Australia',
      phone: '+6139088 3721',
      email: 'support.sydney@trustedpokies.com.au'
    }
  ]

  return (
    <PageTransition direction="left">
      <div className="min-h-screen px-3 sm:px-6">
        {/* Contact Form */}
        <section className="py-6 sm:py-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <GlassCard>
                <div className="text-center mb-6 sm:mb-8">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-['Orbitron'] text-black mb-3 sm:mb-4">
                    Send Us a Message
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg text-black/70">
                    Fill out the form below and we'll get back to you soon.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-black font-semibold text-sm sm:text-base mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-xl backdrop-blur-sm bg-white/20 border border-white/30 text-black placeholder-black/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-black font-semibold text-sm sm:text-base mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-xl backdrop-blur-sm bg-white/20 border border-white/30 text-black placeholder-black/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-black font-semibold text-sm sm:text-base mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-xl backdrop-blur-sm bg-white/20 border border-white/30 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                    >
                      <option value="">Select a subject</option>
                      <option value="verification">Casino Verification Question</option>
                      <option value="complaint">Report a Problem</option>
                      <option value="suggestion">Suggest a Casino</option>
                      <option value="technical">Technical Issue</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-black font-semibold text-sm sm:text-base mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      maxLength={500}
                      rows={5}
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-xl backdrop-blur-sm bg-white/20 border border-white/30 text-black placeholder-black/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-sm sm:text-base"
                      placeholder="Please provide details about your inquiry..."
                    />
                    <p className="text-xs sm:text-sm text-black/60 mt-1 sm:mt-2">
                      {formData.message.length}/500 characters
                    </p>
                  </div>

                  {submitStatus && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 sm:p-4 bg-green-100 border border-green-300 rounded-xl text-green-800 text-sm sm:text-base"
                    >
                      {submitStatus}
                    </motion.div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                  >
                    {isSubmitting ? 'Sending Message...' : 'Send Message'}
                  </motion.button>
                </form>
              </GlassCard>
            </motion.div>
          </div>
        </section>

        {/* Office Locations */}
        <section className="py-6 sm:py-10 px-3 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-10 sm:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-['Orbitron'] text-black mb-4 sm:mb-6">
                Our Offices
              </h2>
              <p className="text-base sm:text-lg text-black/70 max-w-2xl mx-auto">
                Visit us at one of our Australian offices or reach out to your local team.
              </p>
            </motion.div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              {officeLocations.map((office, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="max-w-sm w-full"
                >
                  <GlassCard>
                    <div className="relative w-full h-44 sm:h-56 rounded-xl overflow-hidden mb-4 sm:mb-6">
                      <img
                        src="/tpa-company-bg.png"
                        alt="Sydney Office"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/60 to-transparent"></div>
                    </div>

                    <div className="relative z-10">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <i className="ri-building-line text-base sm:text-xl text-white"></i>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-black mb-3 sm:mb-4">{office.city}</h3>

                      <div className="space-y-2 sm:space-y-3">
                        <div className="flex items-start space-x-2 sm:space-x-3">
                          <i className="ri-map-pin-line text-blue-600 mt-0.5 sm:mt-1 text-sm sm:text-base"></i>
                          <p className="text-black/70 text-xs sm:text-sm">{office.address}</p>
                        </div>
                        <div className="flex items-center space-x-2 sm:space-x-3">
                          <i className="ri-phone-line text-blue-600 text-sm sm:text-base"></i>
                          <p className="text-black/70 text-xs sm:text-sm">{office.phone}</p>
                        </div>
                        <div className="flex items-center space-x-2 sm:space-x-3">
                          <i className="ri-mail-line text-blue-600 text-sm sm:text-base"></i>
                          <p className="text-black/70 text-xs sm:text-sm">{office.email}</p>
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
