"use client"

import { motion } from 'framer-motion'
import GlassCard from '@/components/GlassCard'
import PageTransition from '@/components/PageTransition'

export default function ResponsiblePage() {
  const tools = [
    {
      title: 'Deposit Limits',
      description: 'Set daily, weekly, or monthly deposit limits to control your spending.',
      icon: 'ri-wallet-line',
      image: 'https://readdy.ai/api/search-image?query=Digital%20wallet%20with%20spending%20limit%20controls%2C%20financial%20management%20interface%2C%20glass%20surfaces%2C%20blue%20and%20green%20lighting%2C%20modern%20banking%20app%20design%2C%20clean%20white%20background&width=400&height=300&seq=deposit&orientation=landscape'
    },
    {
      title: 'Time Limits',
      description: 'Control how long you spend gaming with session time reminders.',
      icon: 'ri-time-line',
      image: 'https://readdy.ai/api/search-image?query=Digital%20clock%20with%20time%20management%20controls%2C%20productivity%20interface%2C%20glass%20surfaces%2C%20blue%20lighting%2C%20modern%20time%20tracking%20app%2C%20clean%20white%20background&width=400&height=300&seq=time&orientation=landscape'
    },
    {
      title: 'Self-Exclusion',
      description: 'Take a break from gaming with temporary or permanent exclusion options.',
      icon: 'ri-pause-circle-line',
      image: 'https://readdy.ai/api/search-image?query=Pause%20button%20with%20protective%20shield%2C%20self-control%20concept%2C%20glass%20surfaces%2C%20calming%20blue%20lighting%2C%20wellness%20app%20interface%2C%20clean%20white%20background&width=400&height=300&seq=exclusion&orientation=landscape'
    },
    {
      title: 'Reality Checks',
      description: 'Regular pop-up reminders about time spent and money wagered.',
      icon: 'ri-notification-line',
      image: 'https://readdy.ai/api/search-image?query=Notification%20bell%20with%20awareness%20symbols%2C%20mindfulness%20reminder%20interface%2C%20glass%20surfaces%2C%20gentle%20lighting%2C%20wellness%20app%20design%2C%20clean%20white%20background&width=400&height=300&seq=reality&orientation=landscape'
    },
    {
      title: 'Loss Limits',
      description: 'Set maximum loss amounts to prevent excessive spending.',
      icon: 'ri-shield-line',
      image: 'https://readdy.ai/api/search-image?query=Protective%20shield%20with%20financial%20security%20symbols%2C%20loss%20prevention%20interface%2C%20glass%20surfaces%2C%20green%20and%20blue%20lighting%2C%20security%20app%20design%2C%20clean%20white%20background&width=400&height=300&seq=loss&orientation=landscape'
    },
    {
      title: 'Cool-off Periods',
      description: 'Take short breaks from gaming when you need to step back.',
      icon: 'ri-refresh-line',
      image: 'https://readdy.ai/api/search-image?query=Refresh%20symbol%20with%20cooling%20elements%2C%20break%20time%20concept%2C%20glass%20surfaces%2C%20calming%20blue%20lighting%2C%20wellness%20interface%2C%20clean%20white%20background&width=400&height=300&seq=cooloff&orientation=landscape'
    }
  ]

  const warningSigns = [
    'Spending more money than you can afford',
    'Chasing losses with bigger bets',
    'Lying about gambling activities',
    'Neglecting work, family, or social responsibilities',
    'Feeling anxious or depressed about gambling',
    'Borrowing money to gamble',
    'Unable to stop or control gambling urges',
    'Gambling to escape problems or negative emotions'
  ]

  const supportOrganizations = [
    { name: 'Gambling Help Online', description: 'Free 24/7 counselling and support services' },
    { name: 'Lifeline Australia', description: 'Crisis support and suicide prevention' },
    { name: 'Gamblers Anonymous', description: 'Peer support groups and meetings' }
  ]

  return (
    <PageTransition direction="down">
      <div className="min-h-screen px-3 sm:px-6">
        {/* Gaming Guidelines */}
        <section className="py-6 sm:py-14">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-20"
            >
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-['bowlby'] text-black mb-4 sm:mb-6 text-center sm:text-left">
                  Healthy Gaming Guidelines
                </h2>
                <div className="space-y-3 sm:space-y-4">
                  {[
                    'Set a budget before you start playing and stick to it',
                    'Never gamble with money you cannot afford to lose',
                    'Take regular breaks and set time limits',
                    'Don\'t chase losses with bigger bets',
                    'Keep gambling as entertainment, not a way to make money',
                    'Don\'t gamble when you\'re upset, depressed, or under the influence',
                    'Balance gambling with other activities and hobbies',
                    'Seek help if gambling becomes a problem'
                  ].map((guideline, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-2 sm:space-x-3"
                    >
                      <i className="ri-check-line text-green-500 text-lg sm:text-xl mt-1"></i>
                      <p className="text-sm sm:text-base text-black/70">{guideline}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img
                  src="/healthy-gaming.png"
                  alt="Responsible Gaming Guidelines"
                  className="w-full h-60 sm:h-96 object-cover object-top rounded-2xl shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Responsible Gaming Tools */}
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
                Responsible Gaming Tools
              </h2>
              <p className="text-sm sm:text-lg text-black/70 max-w-md sm:max-w-3xl mx-auto leading-relaxed">
                All our verified casinos offer these tools to help you maintain control over your gaming experience.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <GlassCard className="p-4 sm:p-6 rounded-xl sm:rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-md hover:shadow-blue-100/40">
                    <div className="relative h-32 sm:h-48 mb-3 sm:mb-6 rounded-lg overflow-hidden">
                      <img
                        src={tool.image}
                        alt={tool.title}
                        className="w-full h-full object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent"></div>
                    </div>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 mb-3 flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-sm shadow-blue-200/50 mx-auto">
                      <i className={`${tool.icon} text-base sm:text-xl text-white`}></i>
                    </div>
                    <h3 className="text-base sm:text-xl font-semibold text-black mb-1 sm:mb-3 text-center">
                      {tool.title}
                    </h3>
                    <p className="text-xs sm:text-base text-black/70 leading-relaxed text-center">
                      {tool.description}
                    </p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* Warning Signs */}
        <section className="py-6 sm:py-12">
          <div className="max-w-6xl mx-auto px-3 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <GlassCard className="bg-gradient-to-r from-red-50/60 to-orange-50/60 border border-red-200/30 shadow-sm sm:shadow-md rounded-xl sm:rounded-2xl px-4 sm:px-10 py-6 sm:py-10">
                {/* ===== Header ===== */}
                <div className="text-center mb-6 sm:mb-12">
                  <div className="w-10 h-10 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-6 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center shadow-md shadow-red-100/60">
                    <i className="ri-alert-line text-base sm:text-2xl text-white"></i>
                  </div>
                  <h2 className="text-xl sm:text-3xl md:text-4xl font-bold font-['bowlby'] text-black mb-2 sm:mb-4 text-center">
                    Warning Signs of Problem Gambling
                  </h2>
                  <p className="text-sm sm:text-lg text-black/70 max-w-md sm:max-w-3xl mx-auto leading-relaxed">
                    If you recognize any of these signs in yourself or someone you know, it may be time to seek help.
                  </p>
                </div>

                {/* ===== List of Warning Signs ===== */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6">
                  {warningSigns.map((sign, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-2 sm:gap-3 p-2 sm:p-0 rounded-lg sm:rounded-none hover:bg-white/40 transition-colors duration-200"
                    >
                      <i className="ri-alert-fill text-red-500 text-base sm:text-xl mt-1"></i>
                      <p className="text-sm sm:text-base text-black/70 leading-relaxed">{sign}</p>
                    </motion.div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </section>

        {/* Support Organizations */}
        <section className="py-6 sm:py-10">
          <div className="max-w-7xl mx-auto px-3 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-8 sm:mb-16"
            >
              <h2 className="text-xl sm:text-3xl md:text-4xl font-bold font-['bowlby'] text-black mb-3 sm:mb-6 text-center">
                Get Help & Support
              </h2>
              <p className="text-sm sm:text-lg text-black/70 max-w-md sm:max-w-3xl mx-auto leading-relaxed">
                If you or someone you know needs help with gambling problems, these organizations provide free, confidential support.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
              {supportOrganizations.map((org, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <GlassCard className="text-center py-4 sm:py-6 px-3 sm:px-6 rounded-xl sm:rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-100/40">
                    <div className="w-10 h-10 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-5 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                      <i className="ri-heart-line text-base sm:text-2xl text-white"></i>
                    </div>
                    <h3 className="text-base sm:text-xl font-semibold text-black mb-1 sm:mb-2">
                      {org.name}
                    </h3>
                    <p className="text-xs sm:text-base text-black/70 leading-relaxed">
                      {org.description}
                    </p>
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
