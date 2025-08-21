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
  ChatBubbleLeftRightIcon,
  RocketLaunchIcon,
  DevicePhoneMobileIcon,
  HashtagIcon
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

export default function SocialBoostCampaignPage() {
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
              <ChatBubbleLeftRightIcon className="w-4 h-4 text-secondary" />
              <span className="text-white">Social Media Marketing</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              SocialBoost <span className="bg-gradient-to-r from-white via-secondary to-white bg-clip-text text-transparent">Campaign</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Viral social media campaign for India's leading fitness brand, achieving unprecedented engagement 
              and brand awareness across multiple platforms in the competitive Indian fitness market.
            </p>
            
            {/* Project Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <HeartIcon className="w-6 h-6 text-secondary mx-auto mb-2" />
                <div className="text-2xl font-bold text-white mb-1">500%</div>
                <div className="text-sm text-gray-400">Engagement Rate</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <ShareIcon className="w-6 h-6 text-secondary mx-auto mb-2" />
                <div className="text-2xl font-bold text-white mb-1">2M+</div>
                <div className="text-sm text-gray-400">Reach</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <HashtagIcon className="w-6 h-6 text-secondary mx-auto mb-2" />
                <div className="text-2xl font-bold text-white mb-1">15</div>
                <div className="text-sm text-gray-400">Trending Hashtags</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <DevicePhoneMobileIcon className="w-6 h-6 text-secondary mx-auto mb-2" />
                <div className="text-2xl font-bold text-white mb-1">8</div>
                <div className="text-sm text-gray-400">Platforms</div>
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
                SocialBoost, a Pune-based fitness brand, wanted to break into the crowded Indian fitness market 
                dominated by international players. They needed a viral social media campaign that would create 
                buzz and establish their brand identity among India's fitness-conscious youth.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Enovet Media Private Limited created a multi-platform social media campaign featuring influencer 
                collaborations, user-generated content challenges, and culturally relevant fitness content that 
                resonated with Indian audiences across 8 major social media platforms.
              </p>
              
              {/* Project Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                  <div className="flex items-center mb-2">
                    <ClockIcon className="w-5 h-5 text-secondary mr-2" />
                    <span className="text-white font-semibold">Duration</span>
                  </div>
                  <p className="text-gray-400">3 months</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                  <div className="flex items-center mb-2">
                    <UserGroupIcon className="w-5 h-5 text-secondary mr-2" />
                    <span className="text-white font-semibold">Team</span>
                  </div>
                  <p className="text-gray-400">3 social media managers, 2 designers, 1 strategist</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                  <div className="flex items-center mb-2">
                    <GlobeAltIcon className="w-5 h-5 text-secondary mr-2" />
                    <span className="text-white font-semibold">Client</span>
                  </div>
                  <p className="text-gray-400">SocialBoost Fitness (Pune, India)</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                  <div className="flex items-center mb-2">
                    <ChatBubbleLeftRightIcon className="w-5 h-5 text-secondary mr-2" />
                    <span className="text-white font-semibold">Industry</span>
                  </div>
                  <p className="text-gray-400">Fitness & Wellness</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image
                  src="/portfolio/social.jpg"
                  alt="SocialBoost Campaign"
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

      {/* Indian Social Media Landscape */}
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
              Indian Social Media <span className="text-secondary">Landscape</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Understanding the unique dynamics of India's diverse social media ecosystem
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
              <h3 className="text-xl font-bold text-white mb-4">Mobile-First Users</h3>
              <p className="text-gray-300">
                95% of Indian social media users access platforms via mobile. We optimized all content for 
                mobile viewing with vertical video formats and mobile-friendly interactive elements.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                <HashtagIcon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Regional Content</h3>
              <p className="text-gray-300">
                India's diverse culture requires regional content strategies. We created content in 8 languages 
                and collaborated with regional influencers to maximize local engagement and cultural relevance.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                <ChatBubbleLeftRightIcon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Community Engagement</h3>
              <p className="text-gray-300">
                Indian users prefer community-driven content and interactive experiences. We built engagement 
                through challenges, user-generated content, and real-time community interactions.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Campaign Strategy Components */}
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
              Multi-Platform <span className="text-secondary">Campaign Strategy</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Comprehensive approach across 8 social media platforms with platform-specific content
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
              { title: "Influencer Collaborations", description: "Strategic partnerships with 50+ fitness influencers across India, from micro to macro influencers" },
              { title: "User-Generated Content", description: "Viral fitness challenges encouraging user participation with branded hashtags and rewards" },
              { title: "Regional Content", description: "Platform-specific content in 8 languages with cultural context and local fitness trends" },
              { title: "Real-time Engagement", description: "Live Q&A sessions, workout streams, and community building through interactive content" }
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
              How we overcame market challenges to create a viral social media campaign
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
                  'Breaking through the noise in India\'s crowded fitness social media space',
                  'Creating content that resonates across diverse regional cultures and languages',
                  'Managing influencer relationships across 8 different social media platforms',
                  'Maintaining consistent engagement across multiple time zones and user behaviors'
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
                  'Developed unique fitness challenges with cultural relevance and viral potential',
                  'Created platform-specific content strategies with regional language optimization',
                  'Built comprehensive influencer management system with performance tracking',
                  'Implemented 24/7 community management with automated and human responses'
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
              Measurable outcomes that demonstrate the success of our social media campaign
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
              { metric: "Engagement Rate", value: "500%", icon: HeartIcon, color: "text-blue-400", description: "Increase in social media engagement" },
              { metric: "Reach", value: "2M+", icon: ShareIcon, color: "text-pink-400", description: "Total campaign reach across platforms" },
              { metric: "Trending Hashtags", value: "15", icon: HashtagIcon, color: "text-green-400", description: "Hashtags that trended nationally" },
              { metric: "Platforms", value: "8", icon: DevicePhoneMobileIcon, color: "text-purple-400", description: "Social media platforms utilized" }
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
                "Enovet Media's social media campaign was absolutely phenomenal! They created content that went viral 
                across India and helped us establish our brand in the competitive fitness market. The engagement rates 
                were incredible, and we gained 2M+ reach. Their understanding of Indian social media culture is unmatched."
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                  <UserGroupIcon className="w-8 h-8 text-secondary" />
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold">Riya Patel</div>
                  <div className="text-gray-400">Marketing Director, SocialBoost</div>
                  <div className="text-secondary text-sm">Pune, India</div>
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
                Ready to Go <span className="text-secondary">Viral?</span>
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss how Enovet Media Private Limited can create a viral social media campaign that 
                drives engagement, builds brand awareness, and connects with Indian audiences across all platforms.
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