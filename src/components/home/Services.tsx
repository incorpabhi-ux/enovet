'use client'

import { motion } from 'framer-motion'
import { 
  ChartBarIcon, 
  RocketLaunchIcon, 
  SparklesIcon, 
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  MegaphoneIcon
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

export default function Services() {
  const services = [
    {
      icon: ChartBarIcon,
      title: 'SEO Optimization',
      description: 'Improve your search rankings and drive organic traffic with our data-driven SEO strategies.',
      features: ['Keyword Research', 'On-page SEO', 'Technical SEO', 'Content Strategy']
    },
    {
      icon: RocketLaunchIcon,
      title: 'Social Media Marketing',
      description: 'Build your brand presence and engage with your audience across all social platforms.',
      features: ['Content Creation', 'Community Management', 'Paid Advertising', 'Analytics & Reporting']
    },
    {
      icon: SparklesIcon,
      title: 'Content Marketing',
      description: 'Create compelling content that resonates with your audience and drives conversions.',
      features: ['Blog Writing', 'Video Production', 'Email Marketing', 'Content Strategy']
    },
    {
      icon: GlobeAltIcon,
      title: 'Web Development',
      description: 'Build stunning, responsive websites that convert visitors into customers.',
      features: ['Custom Design', 'E-commerce', 'WordPress', 'Performance Optimization']
    },
    {
      icon: DevicePhoneMobileIcon,
      title: 'PPC Advertising',
      description: 'Maximize your ROI with targeted paid advertising campaigns.',
      features: ['Google Ads', 'Facebook Ads', 'Remarketing', 'Conversion Tracking']
    },
    {
      icon: MegaphoneIcon,
      title: 'Digital Strategy',
      description: 'Develop a comprehensive digital strategy aligned with your business goals.',
      features: ['Market Analysis', 'Competitor Research', 'Goal Setting', 'Performance Tracking']
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
            <span className="text-white">Our Services</span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-secondary to-white bg-clip-text text-transparent"
          >
            Comprehensive Digital Solutions
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            We offer a full suite of digital marketing services to help your business grow and succeed online.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              
              <div className="relative">
                <service.icon className="w-12 h-12 text-secondary mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <SparklesIcon className="w-4 h-4 text-secondary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 