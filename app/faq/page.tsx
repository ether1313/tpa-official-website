"use client"

import { motion } from 'framer-motion'
import { useState } from 'react'
import GlassCard from '@/components/GlassCard'
import PageTransition from '@/components/PageTransition'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export default function FAQPage() {
  const [activeModal, setActiveModal] = useState<string | null>(null)

  const faqCategories = [
    {
      title: 'General Questions',
      faqs: [
        {
          question: 'What is TPA and what do you do?',
          answer:
            'TPA (Trusted Pokies Australia) is an independent casino review and verification service. We test and evaluate online casinos to ensure they meet strict standards for security, fairness, and player protection.'
        },
        {
          question: 'How do you make money?',
          answer:
            'We earn commissions from casinos when players sign up through our links. However, this never influences our reviews or ratings.'
        },
        {
          question: 'Are your reviews biased?',
          answer:
            'No. Our reviews are completely independent and unbiased. We have a strict editorial policy separating review and business teams.'
        },
        {
          question: 'How often do you update your reviews?',
          answer:
            'We monitor all casinos and update our reviews monthly. If issues arise, we investigate immediately.'
        }
      ]
    },
    {
      title: 'Verification Process',
      faqs: [
        {
          question: 'What does your verification process involve?',
          answer:
            'Our 50-point verification process covers licensing, security, fairness, support, and player feedback.'
        },
        {
          question: 'How long does verification take?',
          answer:
            'Initial verification takes 4–6 weeks plus a 3-month monitoring period.'
        },
        {
          question: 'Can casinos pay for verification?',
          answer:
            'Absolutely not. Verification cannot be purchased or influenced by payment.'
        },
        {
          question: 'What happens if a verified casino fails your standards?',
          answer:
            'We immediately investigate. Depending on severity, we may revoke verification.'
        }
      ]
    },
    {
      title: 'Safety & Security',
      faqs: [
        {
          question: 'How do you ensure casino security?',
          answer:
            'We verify SSL encryption, valid licenses, fund segregation, and regular audits.'
        },
        {
          question: 'What should I do if I have a problem with a casino?',
          answer:
            'Contact the casino’s support first, then licensing authority, or report to us.'
        },
        {
          question: 'Are the games fair?',
          answer:
            'All verified casinos use RNG-certified games tested by independent auditors.'
        },
        {
          question: 'How do I know my personal information is safe?',
          answer:
            'Our verified casinos comply with data protection laws and encryption standards.'
        }
      ]
    }
  ]

  const helpCards = [
    {
      icon: 'ri-mail-line',
      title: 'Email Support',
      desc: 'Get detailed answers through email.',
      colors: 'from-blue-500 to-purple-500',
      btn: 'Contact Us',
      id: 'email',
      action: () => window.open('mailto:trustedpokiesau@yahoo.com', '_blank')
    },
    {
      icon: 'ri-chat-3-line',
      title: 'Live Chat',
      desc: 'Chat with our experts in real-time.',
      colors: 'from-green-500 to-blue-500',
      btn: 'Start Chat',
      id: 'livechat',
      action: () =>
        setActiveModal(prev => (prev === 'livechat' ? null : 'livechat'))
    },
    {
      icon: 'ri-telegram-line',
      title: 'Telegram Support',
      desc: 'Message us on Telegram.',
      colors: 'from-sky-500 to-blue-600',
      btn: 'Open Telegram',
      id: 'telegram',
      action: () => window.open('https://t.me/tpaaustralia', '_blank')
    }
  ]

  return (
    <PageTransition direction="right">
      <div className="min-h-screen px-3 sm:px-6">
        {/* FAQ Section */}
        <section className="py-6 sm:py-10">
          <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
              >
                <GlassCard>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-['bowlby'] text-black mb-5 sm:mb-8 text-center">
                    {category.title}
                  </h2>
                  <Accordion
                    type="single"
                    collapsible
                    className="space-y-3 sm:space-y-4"
                  >
                    {category.faqs.map((faq, faqIndex) => (
                      <AccordionItem
                        key={faqIndex}
                        value={`${categoryIndex}-${faqIndex}`}
                        className="backdrop-blur-sm bg-white/5 border border-white/20 rounded-xl px-4 sm:px-6"
                      >
                        <AccordionTrigger className="text-left text-sm sm:text-base text-black hover:text-blue-600 font-semibold">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-black/70 text-sm sm:text-base leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Quick Help Section */}
        <section className="py-6 sm:py-12">
          <div className="max-w-7xl mx-auto px-3 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-8 sm:mb-16"
            >
              <h2 className="text-xl sm:text-3xl md:text-4xl font-bold font-['bowlby'] text-black mb-3 sm:mb-6 text-center">
                Need More Help?
              </h2>
              <p className="text-sm sm:text-lg text-black/70 max-w-md sm:max-w-2xl mx-auto leading-relaxed">
                Can’t find what you’re looking for? We’re here to help with any
                questions about online casino safety and verification.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
              {helpCards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <GlassCard className="relative text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-md hover:shadow-blue-100/40">
                    <div
                      className={`w-10 h-10 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-6 bg-gradient-to-r ${card.colors} rounded-full flex items-center justify-center shadow-sm shadow-blue-200/40`}
                    >
                      <i
                        className={`${card.icon} text-base sm:text-xl text-white`}
                      ></i>
                    </div>

                    <h3 className="text-base sm:text-xl font-semibold text-black mb-1 sm:mb-3">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-base text-black/70 mb-3 sm:mb-4 leading-relaxed">
                      {card.desc}
                    </p>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={card.action}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs sm:text-base px-5 py-2 sm:px-6 sm:py-2.5 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 whitespace-nowrap"
                    >
                      {card.btn}
                    </motion.button>

                    {/* Inline Modal */}
                    {activeModal === card.id && card.id === 'livechat' && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4 relative bg-white/70 backdrop-blur-md border border-blue-100 shadow-md rounded-xl p-4 text-sm text-black"
                      >
                        {/* Close Button */}
                        <button
                          onClick={() => setActiveModal(null)}
                          className="absolute top-2 right-3 text-gray-500 hover:text-black text-lg leading-none"
                        >
                          ✕
                        </button>

                        <p className="mb-3 pr-4">
                          Our live chat bot is coming soon! Kindly contact us
                          through our Telegram Support.
                        </p>
                        <button
                          onClick={() =>
                            window.open('https://t.me/tpaaustralia', '_blank')
                          }
                          className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-4 py-2 rounded-full text-xs font-medium hover:shadow-md transition"
                        >
                          Open Telegram
                        </button>
                      </motion.div>
                    )}
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
