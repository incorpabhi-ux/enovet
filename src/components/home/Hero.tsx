'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SparklesIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'

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

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-primary/20">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent animate-pulse" />
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-white/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="text-center lg:text-left"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium mb-6"
            >
              <SparklesIcon className="w-4 h-4 text-secondary" />
              <span className="text-white">Digital Marketing Excellence</span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-white via-secondary to-white bg-clip-text text-transparent">
                Transform Your Digital Presence
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              We help businesses grow their online presence through strategic digital marketing solutions tailored to your unique needs.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full bg-secondary text-white font-medium hover:bg-secondary/90 transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Get Started</span>
                  <ArrowRightIcon className="w-5 h-5" />
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm text-white font-medium hover:bg-white/20 transition-colors duration-300"
              >
                Learn More
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeInUp}
              className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4"
            >
              {[
                { value: '300%', label: 'Average Growth' },
                { value: '100+', label: 'Projects Completed' },
                { value: '98%', label: 'Satisfaction' }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-white/5 backdrop-blur-sm"
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
          </motion.div>

          {/* Right Column - Image/Illustration */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="relative"
          >
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              {/* Dashboard Grid */}
              <div className="absolute inset-0 p-6 grid grid-cols-2 gap-4">
                {/* Traffic Growth Chart */}
                <div className="bg-white/10 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-white font-medium">Traffic Growth</div>
                    <div className="text-secondary text-sm">+45%</div>
                  </div>
                  <div className="h-32 flex items-end space-x-2">
                    {[30, 45, 35, 60, 50, 75, 65].map((height, i) => (
                      <div
                        key={i}
                        className="w-full bg-gradient-to-t from-secondary/60 to-secondary/40 rounded-t-sm transition-all duration-300 hover:from-secondary/80 hover:to-secondary/60"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Conversion Rate */}
                <div className="bg-white/10 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-white font-medium">Conversion Rate</div>
                    <div className="text-secondary text-sm">3.8%</div>
                  </div>
                  <div className="h-32 flex items-center justify-center">
                    <div className="relative w-24 h-24">
                      <div className="absolute inset-0 rounded-full border-4 border-secondary/40" />
                      <div className="absolute inset-0 rounded-full border-4 border-secondary border-t-transparent animate-spin" />
                      <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
                        3.8%
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Marketing Channels */}
                <div className="bg-white/10 rounded-xl p-4">
                  <div className="text-white font-medium mb-4">Channel Performance</div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-300">Social Media</div>
                      <div className="h-2 bg-secondary/40 rounded-full w-3/4" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-300">SEO</div>
                      <div className="h-2 bg-secondary/40 rounded-full w-1/2" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-300">PPC</div>
                      <div className="h-2 bg-secondary/40 rounded-full w-2/3" />
                    </div>
                  </div>
                </div>
                
                {/* Key Metrics */}
                <div className="bg-white/10 rounded-xl p-4">
                  <div className="text-white font-medium mb-4">Key Metrics</div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/5 rounded-lg p-3">
                      <div className="text-sm text-gray-300">ROI</div>
                      <div className="text-white font-bold">285%</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <div className="text-sm text-gray-300">CTR</div>
                      <div className="text-white font-bold">4.2%</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <div className="text-sm text-gray-300">CAC</div>
                      <div className="text-white font-bold">$45</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <div className="text-sm text-gray-300">LTV</div>
                      <div className="text-white font-bold">$320</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent" />
            </div>

            {/* Floating Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -left-6 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 shadow-xl"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                  <SparklesIcon className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <div className="text-white font-medium">Expert Team</div>
                  <div className="text-sm text-gray-400">Certified Professionals</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="absolute -top-6 -right-6 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 shadow-xl"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <SparklesIcon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-white font-medium">24/7 Support</div>
                  <div className="text-sm text-gray-400">Always Available</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 