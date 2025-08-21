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
  MagnifyingGlassIcon,
  RocketLaunchIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon as GlobeIcon
} from '@heroicons/react/24/solid'

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

export default function SearchMasterSEOPage() {
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
              <MagnifyingGlassIcon className="w-4 h-4 text-secondary" />
              <span className="text-white">SEO & Digital Marketing</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              SearchMaster <span className="bg-gradient-to-r from-white via-secondary to-white bg-clip-text text-transparent">SEO Campaign</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive SEO strategy for India's leading educational technology platform, achieving top rankings 
              for competitive keywords and driving organic traffic growth across multiple Indian languages.
            </p>
            
            {/* Project Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <MagnifyingGlassIcon className="w-6 h-6 text-secondary mx-auto mb-2" />
                <div className="text-2xl font-bold text-white mb-1">300%</div>
                <div className="text-sm text-gray-400">Organic Traffic</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <RocketLaunchIcon className="w-6 h-6 text-secondary mx-auto mb-2" />
                <div className="text-2xl font-bold text-white mb-1">#1</div>
                <div className="text-sm text-gray-400">Keyword Rankings</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <DevicePhoneMobileIcon className="w-6 h-6 text-secondary mx-auto mb-2" />
                <div className="text-2xl font-bold text-white mb-1">85%</div>
                <div className="text-sm text-gray-400">Mobile Traffic</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <GlobeIcon className="w-6 h-6 text-secondary mx-auto mb-2" />
                <div className="text-2xl font-bold text-white mb-1">12</div>
                <div className="text-sm text-gray-400">Languages</div>
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
                SearchMaster, a Delhi-based edtech startup, was struggling to compete with established players like 
                BYJU'S and Unacademy in search results. Their website had poor visibility for high-value educational 
                keywords and lacked local SEO optimization for Indian markets.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Enovet Media Private Limited implemented a comprehensive SEO strategy including technical optimization, 
                content creation in multiple Indian languages, local SEO for 25+ cities, and mobile-first optimization 
                to capture India's growing mobile search market.
              </p>
              
              {/* Project Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                  <div className="flex items-center mb-2">
                    <ClockIcon className="w-5 h-5 text-secondary mr-2" />
                    <span className="text-white font-semibold">Duration</span>
                  </div>
                  <p className="text-gray-400">6 months</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                  <div className="flex items-center mb-2">
                    <UserGroupIcon className="w-5 h-5 text-secondary mr-2" />
                    <span className="text-white font-semibold">Team</span>
                  </div>
                  <p className="text-gray-400">2 SEO specialists, 1 content writer, 1 analyst</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                  <div className="flex items-center mb-2">
                    <GlobeAltIcon className="w-5 h-5 text-secondary mr-2" />
                    <span className="text-white font-semibold">Client</span>
                  </div>
                  <p className="text-gray-400">SearchMaster EdTech (Delhi, India)</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                  <div className="flex items-center mb-2">
                    <MagnifyingGlassIcon className="w-5 h-5 text-secondary mr-2" />
                    <span className="text-white font-semibold">Industry</span>
                  </div>
                  <p className="text-gray-400">Education Technology</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image
                  src="/portfolio/seo.jpg"
                  alt="SearchMaster SEO Campaign"
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

      {/* Indian SEO Market Analysis */}
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
              Indian SEO <span className="text-secondary">Market Analysis</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Understanding the unique challenges and opportunities in India's diverse search landscape
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
                <DevicePhoneMobileIcon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Mobile-First Search</h3>
              <p className="text-gray-300">
                85% of Indian searches happen on mobile devices. We optimized for mobile-first indexing, 
                voice search, and local intent queries that dominate Indian search behavior.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                <GlobeIcon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Multi-Language SEO</h3>
              <p className="text-gray-300">
                India has 22 official languages with unique search patterns. We created content in 12 major 
                languages and optimized for regional search engines and local business directories.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                <MagnifyingGlassIcon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Local Search Dominance</h3>
              <p className="text-gray-300">
                "Near me" searches are 3x higher in India than global average. We implemented comprehensive 
                local SEO strategies for 25+ major cities with location-specific content and citations.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SEO Strategy Components */}
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
              Comprehensive <span className="text-secondary">SEO Strategy</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Multi-faceted approach combining technical, content, and local SEO for maximum impact
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
              { title: "Technical SEO", description: "Core Web Vitals optimization, mobile-first indexing, and structured data markup for rich snippets" },
              { title: "Content Strategy", description: "Educational content in 12 languages, video optimization, and answer-focused content for featured snippets" },
              { title: "Local SEO", description: "Google My Business optimization, local citations, and city-specific landing pages for 25+ locations" },
              { title: "Voice Search", description: "Conversational keyword optimization and FAQ schema markup for voice assistant compatibility" }
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
              How we overcame competitive challenges to achieve top search rankings
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
                  'Competing with established edtech giants like BYJU\'S and Unacademy',
                  'Optimizing for 12 different Indian languages with unique search patterns',
                  'Improving Core Web Vitals scores for mobile-first indexing',
                  'Building local SEO presence across 25+ major Indian cities'
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
                  'Developed long-tail keyword strategy targeting underserved educational niches',
                  'Created native content in regional languages with local cultural context',
                  'Implemented advanced caching, CDN optimization, and image compression',
                  'Built comprehensive local citation network and city-specific content hubs'
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
              Measurable outcomes that demonstrate the success of our SEO campaign
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
              { metric: "Organic Traffic", value: "300%", icon: MagnifyingGlassIcon, color: "text-blue-400", description: "Increase in organic search traffic" },
              { metric: "Keyword Rankings", value: "#1", icon: RocketLaunchIcon, color: "text-pink-400", description: "Top rankings for target keywords" },
              { metric: "Mobile Traffic", value: "85%", icon: DevicePhoneMobileIcon, color: "text-green-400", description: "Percentage of mobile search traffic" },
              { metric: "Languages", value: "12", icon: GlobeIcon, color: "text-purple-400", description: "Regional languages optimized" }
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
                "Enovet Media's SEO expertise transformed our online presence completely. They understood the Indian 
                search landscape better than any agency we've worked with. Our organic traffic increased by 300% and 
                we're now ranking #1 for our target keywords. The multi-language approach was brilliant."
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                  <UserGroupIcon className="w-8 h-8 text-secondary" />
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold">Anjali Sharma</div>
                  <div className="text-gray-400">Marketing Director, SearchMaster</div>
                  <div className="text-secondary text-sm">Delhi, India</div>
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
                Ready to Dominate <span className="text-secondary">Search Rankings?</span>
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss how Enovet Media Private Limited can create a comprehensive SEO strategy that drives 
                organic traffic and helps you rank #1 for your target keywords in the Indian market.
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