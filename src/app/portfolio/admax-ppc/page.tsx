'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ArrowLeftIcon,
  StarIcon,
  ChartBarIcon,
  EyeIcon,
  HeartIcon,
  ShareIcon,
  ClockIcon,
  UserGroupIcon,
  CheckCircleIcon,
  PaintBrushIcon,
  GlobeAltIcon,
  ArrowTrendingUpIcon,
  CursorArrowRaysIcon,
  PlayIcon,
  SparklesIcon,
  CurrencyDollarIcon,
  RocketLaunchIcon,
  DevicePhoneMobileIcon
} from '@heroicons/react/24/solid'

import { TagIcon } from '@heroicons/react/24/outline'

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

export default function AdMaxPPCPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-primary/30">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background with animated elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-white/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link 
              href="/portfolio" 
              className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeftIcon className="w-5 h-5 mr-2" />
              Back to Portfolio
            </Link>
          </motion.div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium mb-6"
            >
              <TagIcon className="w-4 h-4 text-secondary" />
              <span className="text-white">PPC & Google Ads</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AdMax <span className="bg-gradient-to-r from-white via-secondary to-white bg-clip-text text-transparent">PPC Campaign</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Strategic PPC campaign for India's fastest-growing digital advertising agency, achieving exceptional 
              ROI and dominating competitive keywords in the Indian digital marketing landscape.
            </p>
            
            {/* Project Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <CurrencyDollarIcon className="w-6 h-6 text-secondary mx-auto mb-2" />
                <div className="text-2xl font-bold text-white mb-1">450%</div>
                <div className="text-sm text-gray-400">ROI Increase</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <TagIcon className="w-6 h-6 text-secondary mx-auto mb-2" />
                <div className="text-2xl font-bold text-white mb-1">85%</div>
                <div className="text-sm text-gray-400">Click-Through Rate</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <RocketLaunchIcon className="w-6 h-6 text-secondary mx-auto mb-2" />
                <div className="text-2xl font-bold text-white mb-1">60%</div>
                <div className="text-sm text-gray-400">Cost Reduction</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <DevicePhoneMobileIcon className="w-6 h-6 text-secondary mx-auto mb-2" />
                <div className="text-2xl font-bold text-white mb-1">15</div>
                <div className="text-sm text-gray-400">Cities Targeted</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Project <span className="text-secondary">Overview</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                AdMax, a Chennai-based digital advertising agency, was struggling with high cost-per-click rates 
                and low conversion rates in their Google Ads campaigns. They were spending heavily but not seeing 
                the desired returns in India's competitive digital marketing space.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Enovet Media Private Limited developed a comprehensive PPC strategy including audience targeting, 
                ad copy optimization, landing page improvements, and bid management across 15 major Indian cities 
                to maximize ROI and reduce acquisition costs.
              </p>
              
              {/* Project Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                  <div className="flex items-center mb-2">
                    <ClockIcon className="w-5 h-5 text-secondary mr-2" />
                    <span className="text-white font-semibold">Duration</span>
                  </div>
                  <p className="text-gray-400">4 months</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                  <div className="flex items-center mb-2">
                    <UserGroupIcon className="w-5 h-5 text-secondary mr-2" />
                    <span className="text-white font-semibold">Team</span>
                  </div>
                  <p className="text-gray-400">2 PPC specialists, 1 copywriter, 1 analyst</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                  <div className="flex items-center mb-2">
                    <GlobeAltIcon className="w-5 h-5 text-secondary mr-2" />
                    <span className="text-white font-semibold">Client</span>
                  </div>
                  <p className="text-gray-400">AdMax Digital (Chennai, India)</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                  <div className="flex items-center mb-2">
                    <TagIcon className="w-5 h-5 text-secondary mr-2" />
                    <span className="text-white font-semibold">Industry</span>
                  </div>
                  <p className="text-gray-400">Digital Advertising</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image
                  src="/portfolio/ppc.jpg"
                  alt="AdMax PPC Campaign"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                
                {/* Play button for video */}
                <div className="absolute top-4 right-4">
                  <button className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
                    <PlayIcon className="w-6 h-6 text-white" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Indian PPC Market Analysis */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Indian PPC <span className="text-secondary">Market Analysis</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Understanding the unique challenges and opportunities in India's competitive PPC landscape
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp} className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                <CurrencyDollarIcon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">High Competition</h3>
              <p className="text-gray-300">
                Indian PPC market is highly competitive with major players bidding aggressively. We developed 
                smart bidding strategies and long-tail keyword targeting to reduce costs while maintaining visibility.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                <DevicePhoneMobileIcon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Mobile-First Audience</h3>
              <p className="text-gray-300">
                80% of Indian internet users access via mobile. We optimized campaigns for mobile devices, 
                created mobile-specific ad copy, and designed mobile-first landing pages for better conversions.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                <TagIcon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Regional Targeting</h3>
              <p className="text-gray-300">
                India's diverse market requires regional targeting. We created location-specific campaigns for 
                15 major cities with customized messaging and local business targeting for maximum relevance.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PPC Strategy Components */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive <span className="text-secondary">PPC Strategy</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Multi-channel approach combining Google Ads, display advertising, and remarketing for maximum impact
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { title: "Keyword Research", description: "Long-tail keyword targeting with regional variations and competitor analysis for optimal bid strategies" },
              { title: "Ad Copy Optimization", description: "A/B testing of ad copy in multiple languages with cultural context and local business messaging" },
              { title: "Landing Page Design", description: "Mobile-first landing pages with clear CTAs, trust signals, and regional content optimization" },
              { title: "Remarketing Campaigns", description: "Multi-stage remarketing funnels targeting different audience segments across 15 Indian cities" }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-6 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                <SparklesIcon className="w-8 h-8 text-secondary mb-4" />
                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Challenges & <span className="text-secondary">Solutions</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              How we overcame competitive challenges to achieve exceptional ROI
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Challenges */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold text-white mb-6">Challenges</h3>
              <div className="space-y-4">
                {[
                  'High cost-per-click rates due to aggressive competition from major players',
                  'Low conversion rates despite high click-through rates',
                  'Difficulty targeting specific regional markets across India',
                  'Managing multiple campaigns across different languages and cultures'
                ].map((challenge, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 rounded-xl bg-red-500/10 backdrop-blur-sm border border-red-500/20">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-300">{challenge}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Solutions */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold text-white mb-6">Solutions</h3>
              <div className="space-y-4">
                {[
                  'Implemented smart bidding strategies and long-tail keyword targeting to reduce costs',
                  'Created mobile-first landing pages with clear value propositions and trust signals',
                  'Developed location-specific campaigns with regional messaging and local business targeting',
                  'Built comprehensive remarketing funnels with multi-language support and cultural context'
                ].map((solution, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 rounded-xl bg-green-500/10 backdrop-blur-sm border border-green-500/20">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-300">{solution}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Results & <span className="text-secondary">Impact</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Measurable outcomes that demonstrate the success of our PPC campaign
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { metric: "ROI Increase", value: "450%", icon: CurrencyDollarIcon, color: "text-blue-400", description: "Return on investment improvement" },
              { metric: "Click-Through Rate", value: "85%", icon: TagIcon, color: "text-pink-400", description: "Increase in ad click-through rates" },
              { metric: "Cost Reduction", value: "60%", icon: RocketLaunchIcon, color: "text-green-400", description: "Reduction in cost-per-acquisition" },
              { metric: "Cities Targeted", value: "15", icon: DevicePhoneMobileIcon, color: "text-purple-400", description: "Major Indian cities covered" }
            ].map((result, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm text-center hover:bg-white/10 transition-all duration-300"
              >
                <result.icon className={`w-12 h-12 ${result.color} mx-auto mb-4`} />
                <div className="text-3xl font-bold text-white mb-2">{result.value}</div>
                <div className="text-gray-400 mb-3">{result.metric}</div>
                <p className="text-gray-500 text-sm">{result.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-3xl p-12 backdrop-blur-sm border border-white/10 overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            </div>
            
            <div className="relative text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-6 h-6 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-2xl text-white mb-8 italic">
                "Enovet Media's PPC expertise transformed our advertising ROI completely. They reduced our costs by 60% 
                while increasing our conversions by 450%. Their understanding of the Indian market and regional targeting 
                strategies gave us a competitive edge we never had before."
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                  <UserGroupIcon className="w-8 h-8 text-secondary" />
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold">Vikram Singh</div>
                  <div className="text-gray-400">Founder, AdMax Digital</div>
                  <div className="text-secondary text-sm">Chennai, India</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-3xl p-12 text-center backdrop-blur-sm border border-white/10 overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            </div>
            
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Maximize Your <span className="text-secondary">PPC ROI?</span>
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss how Enovet Media Private Limited can create a strategic PPC campaign that reduces costs, 
                increases conversions, and dominates your market in India.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-secondary text-white font-semibold rounded-full hover:bg-secondary/80 transition-colors"
                >
                  Start Your Project
                  <ArrowTrendingUpIcon className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-colors"
                >
                  View More Projects
                  <ArrowLeftIcon className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 