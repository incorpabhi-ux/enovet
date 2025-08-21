'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SparklesIcon, ChartBarIcon, UserGroupIcon, RocketLaunchIcon } from '@heroicons/react/24/outline'

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

const stats = [
  {
    icon: ChartBarIcon,
    value: '300%',
    label: 'Average Client Growth',
    description: 'Our clients experience significant growth in their digital presence'
  },
  {
    icon: UserGroupIcon,
    value: '100+',
    label: 'Projects Completed',
    description: 'Trusted by businesses across various industries'
  },
  {
    icon: RocketLaunchIcon,
    value: '98%',
    label: 'Client Satisfaction',
    description: 'Consistently high satisfaction ratings from our clients'
  }
]

export default function Stats() {
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
            <span className="text-white">Our Impact</span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-secondary to-white bg-clip-text text-transparent"
          >
            Proven Results
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            We've helped hundreds of businesses achieve remarkable growth through our digital solutions.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              
              <div className="relative">
                {/* Icon */}
                <div className="mb-6">
                  <stat.icon className="w-12 h-12 text-secondary" />
                </div>

                {/* Value */}
                <h3 className="text-4xl font-bold text-white mb-2">
                  {stat.value}
                </h3>

                {/* Label */}
                <p className="text-xl font-semibold text-gray-300 mb-4">
                  {stat.label}
                </p>

                {/* Description */}
                <p className="text-gray-400">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Stats */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { value: '1.5+', label: 'Years Experience' },
            { value: '100+', label: 'Projects Completed' },
            { value: '10+', label: 'Team Members' },
            { value: '24/7', label: 'Support Available' }
          ].map((stat, index) => (
            <div
              key={index}
              className="p-4 rounded-xl bg-white/5 backdrop-blur-sm text-center"
            >
              <div className="text-2xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 