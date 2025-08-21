'use client'

import { motion } from 'framer-motion'
import { 
  SparklesIcon,
  ChartBarIcon,
  UserGroupIcon,
  ClockIcon,
  ShieldCheckIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: ChartBarIcon,
      title: 'Proven Results',
      description: 'Track record of delivering measurable results and ROI for our clients.',
      stats: '300% average client growth'
    },
    {
      icon: UserGroupIcon,
      title: 'Expert Team',
      description: 'Certified professionals with years of industry experience.',
      stats: '15+ years combined experience'
    },
    {
      icon: ClockIcon,
      title: 'Quick Turnaround',
      description: 'Fast implementation and rapid results delivery.',
      stats: '48-hour response time'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Data-Driven Approach',
      description: 'Strategic decisions based on analytics and market research.',
      stats: '95% success rate'
    },
    {
      icon: RocketLaunchIcon,
      title: 'Innovative Solutions',
      description: 'Cutting-edge strategies and technologies for maximum impact.',
      stats: 'Latest industry tools'
    },
    {
      icon: SparklesIcon,
      title: 'Customized Strategy',
      description: 'Tailored solutions that align with your business goals.',
      stats: '100% client satisfaction'
    }
  ]

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-primary/20">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent animate-pulse" />
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium mb-4"
          >
            <SparklesIcon className="w-4 h-4 text-secondary" />
            <span className="text-white">Why Choose Us</span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-secondary to-white bg-clip-text text-transparent"
          >
            The Enovet Advantage
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            We combine expertise, innovation, and dedication to deliver exceptional results for your business.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              
              <div className="relative">
                <reason.icon className="w-12 h-12 text-secondary mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">{reason.title}</h3>
                <p className="text-gray-300 mb-6">{reason.description}</p>
                <div className="text-sm font-medium text-secondary">{reason.stats}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 