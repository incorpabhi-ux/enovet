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
  ShoppingCartIcon,
  DevicePhoneMobileIcon,
  CreditCardIcon,
  TruckIcon
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

export default function TechFlowEcommercePage() {
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
              <ShoppingCartIcon className="w-4 h-4 text-secondary" />
              <span className="text-white">E-commerce Development</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              TechFlow <span className="bg-gradient-to-r from-white via-secondary to-white bg-clip-text text-transparent">E-commerce Platform</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Complete e-commerce solution for India's fastest-growing tech accessories retailer, featuring advanced 
              features, mobile-first design, and seamless payment integration for the Indian market.
            </p>
            
            {/* Project Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <ShoppingCartIcon className="w-6 h-6 text-secondary mx-auto mb-2" />
                <div className="text-2xl font-bold text-white mb-1">250%</div>
                <div className="text-sm text-gray-400">Sales Growth</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <DevicePhoneMobileIcon className="w-6 h-6 text-secondary mx-auto mb-2" />
                <div className="text-2xl font-bold text-white mb-1">85%</div>
                <div className="text-sm text-gray-400">Mobile Traffic</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <CreditCardIcon className="w-6 h-6 text-secondary mx-auto mb-2" />
                <div className="text-2xl font-bold text-white mb-1">98%</div>
                <div className="text-sm text-gray-400">Payment Success</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <TruckIcon className="w-6 h-6 text-secondary mx-auto mb-2" />
                <div className="text-2xl font-bold text-white mb-1">24hr</div>
                <div className="text-sm text-gray-400">Delivery Time</div>
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
                TechFlow, a Bangalore-based tech accessories retailer, needed a modern e-commerce platform to compete 
                with international players like Amazon and Flipkart. Their existing website was outdated, slow, and 
                didn't support the growing mobile commerce trend in India.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Enovet Media Private Limited developed a comprehensive e-commerce solution with advanced features like 
                UPI integration, multiple payment gateways, real-time inventory management, and AI-powered product 
                recommendations tailored for Indian consumers.
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
                  <p className="text-gray-400">3 developers, 1 designer, 1 PM</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                  <div className="flex items-center mb-2">
                    <GlobeAltIcon className="w-5 h-5 text-secondary mr-2" />
                    <span className="text-white font-semibold">Client</span>
                  </div>
                  <p className="text-gray-400">TechFlow Retail (Bangalore, India)</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                  <div className="flex items-center mb-2">
                    <ShoppingCartIcon className="w-5 h-5 text-secondary mr-2" />
                    <span className="text-white font-semibold">Industry</span>
                  </div>
                  <p className="text-gray-400">E-commerce & Retail</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image
                  src="/portfolio/ecommerce.jpg"
                  alt="TechFlow E-commerce Platform"
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

      {/* Indian E-commerce Market Analysis */}
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
              Indian E-commerce <span className="text-secondary">Market Analysis</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Understanding the unique challenges and opportunities in India's rapidly growing e-commerce landscape
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
              <h3 className="text-xl font-bold text-white mb-4">Mobile-First Market</h3>
              <p className="text-gray-300">
                India has 750+ million smartphone users with 85% of e-commerce transactions happening on mobile. 
                Our platform was designed mobile-first with optimized performance for slower networks.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                <CreditCardIcon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Payment Diversity</h3>
              <p className="text-gray-300">
                Indian consumers use diverse payment methods - UPI, digital wallets, COD, and traditional cards. 
                We integrated 15+ payment gateways to ensure maximum convenience.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                <TruckIcon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Logistics Challenges</h3>
              <p className="text-gray-300">
                India's diverse geography requires sophisticated logistics. We built real-time tracking, multiple 
                delivery options, and integration with major courier services across 500+ cities.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Technical Features */}
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
              Advanced <span className="text-secondary">Technical Features</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Cutting-edge technology stack designed for Indian market requirements
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
              { title: "UPI Integration", description: "Seamless UPI payments with QR codes, deep linking, and instant payment notifications" },
              { title: "AI Recommendations", description: "Machine learning algorithms suggesting products based on Indian consumer behavior patterns" },
              { title: "Real-time Inventory", description: "Live stock updates across 50+ warehouses with automated reorder notifications" },
              { title: "Multi-language Support", description: "Support for 12 Indian languages with regional content and currency display" }
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
              How we overcame technical and market challenges to deliver exceptional results
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
                  'Integrating 15+ payment gateways for diverse Indian payment preferences',
                  'Optimizing performance for slower mobile networks in tier-2/3 cities',
                  'Managing inventory across 50+ warehouses with real-time synchronization',
                  'Building trust with first-time online shoppers in smaller cities'
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
                  'Developed unified payment API supporting all major Indian payment methods',
                  'Implemented progressive web app with offline capabilities and optimized loading',
                  'Built microservices architecture with real-time inventory management system',
                  'Created trust-building features like video reviews, live chat, and COD options'
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
              Measurable outcomes that demonstrate the success of our e-commerce platform
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
              { metric: "Sales Growth", value: "250%", icon: ShoppingCartIcon, color: "text-blue-400", description: "Increase in online sales within 6 months" },
              { metric: "Mobile Traffic", value: "85%", icon: DevicePhoneMobileIcon, color: "text-pink-400", description: "Percentage of traffic from mobile devices" },
              { metric: "Payment Success", value: "98%", icon: CreditCardIcon, color: "text-green-400", description: "Successful payment transaction rate" },
              { metric: "Delivery Time", value: "24hr", icon: TruckIcon, color: "text-purple-400", description: "Average delivery time across major cities" }
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
                "Enovet Media delivered an exceptional e-commerce platform that perfectly caters to Indian consumers. 
                The UPI integration, mobile-first design, and real-time inventory management have transformed our business. 
                Our sales have increased by 250% and we're now competing with the biggest players in the market."
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                  <UserGroupIcon className="w-8 h-8 text-secondary" />
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold">Rajesh Kumar</div>
                  <div className="text-gray-400">CEO, TechFlow Retail</div>
                  <div className="text-secondary text-sm">Bangalore, India</div>
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
                Ready to Build Your <span className="text-secondary">E-commerce Platform?</span>
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss how Enovet Media Private Limited can create a powerful, mobile-first e-commerce solution 
                that drives sales and provides exceptional user experience for Indian consumers.
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