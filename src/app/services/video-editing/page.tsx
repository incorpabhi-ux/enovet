'use client'

import * as React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  VideoCameraIcon,
  FilmIcon,
  CameraIcon,
  MicrophoneIcon,
  MusicalNoteIcon,
  PresentationChartLineIcon,
  RocketLaunchIcon,
  SparklesIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  BuildingOfficeIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  ShoppingBagIcon,
  PhotoIcon,
  SpeakerWaveIcon,
  CursorArrowRaysIcon,
  ClockIcon,
  UserGroupIcon,
  EyeIcon,
  HeartIcon,
  ShareIcon,
  BuildingStorefrontIcon,
  WrenchScrewdriverIcon,
  TruckIcon,
  BeakerIcon,
  CreditCardIcon,
  GlobeAltIcon,
  UserIcon,
  CogIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline'
import PricingPlans from '@/components/PricingPlans'
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

const services = [
  {
    name: 'Commercial Videos',
    icon: VideoCameraIcon,
    description: 'Professional commercial production for businesses',
    features: [
      'Brand Storytelling',
      'Product Showcases',
      'Corporate Videos',
      'Promotional Content'
    ]
  },
  {
    name: 'Social Media Content',
    icon: FilmIcon,
    description: 'Engaging content for social platforms',
    features: [
      'Short-form Videos',
      'Reels Production',
      'Story Videos',
      'Platform Optimization'
    ]
  },
  {
    name: 'Event Coverage',
    icon: CameraIcon,
    description: 'Comprehensive event documentation',
    features: [
      'Live Event Coverage',
      'Highlight Reels',
      'After-movie Production',
      'Multi-camera Setup'
    ]
  },
  {
    name: 'Motion Graphics',
    icon: SparklesIcon,
    description: 'Dynamic animated content',
    features: [
      'Logo Animations',
      'Infographic Videos',
      'Text Animations',
      'Visual Effects'
    ]
  }
]

const features = [
  {
    name: 'Professional Editing',
    icon: FilmIcon,
    description: 'High-quality video editing services',
    features: [
      'Color Grading',
      'Audio Enhancement',
      'Transitions & Effects',
      'Motion Graphics'
    ]
  },
  {
    name: 'Audio Production',
    icon: MicrophoneIcon,
    description: 'Complete audio solutions',
    features: [
      'Voice-over Recording',
      'Sound Design',
      'Music Composition',
      'Audio Mixing'
    ]
  },
  {
    name: 'Visual Effects',
    icon: SparklesIcon,
    description: 'Advanced visual enhancements',
    features: [
      'Special Effects',
      'Green Screen',
      '3D Elements',
      'Compositing'
    ]
  },
  {
    name: 'Content Strategy',
    icon: PresentationChartLineIcon,
    description: 'Strategic content planning',
    features: [
      'Content Planning',
      'Platform Strategy',
      'Audience Analysis',
      'Performance Tracking'
    ]
  }
]

const metrics = [
  {
    name: 'Client Satisfaction',
    icon: SparklesIcon,
    value: '98%',
    description: 'Client satisfaction rate'
  },
  {
    name: 'Project Delivery',
    icon: RocketLaunchIcon,
    value: '100%',
    description: 'On-time delivery rate'
  },
  {
    name: 'Video Quality',
    icon: FilmIcon,
    value: '4K',
    description: 'Maximum resolution'
  },
  {
    name: 'Turnaround Time',
    icon: ArrowRightIcon,
    value: '48h',
    description: 'Average delivery time'
  }
]

const industries = [
  {
    icon: BuildingOfficeIcon,
    title: 'Corporate',
    description: 'Professional video solutions for businesses'
  },
  {
    icon: ShoppingBagIcon,
    title: 'E-commerce',
    description: 'Product videos and promotional content'
  },
  {
    icon: BriefcaseIcon,
    title: 'Marketing',
    description: 'Advertising and promotional videos'
  },
  {
    icon: AcademicCapIcon,
    title: 'Education',
    description: 'Educational and training videos'
  }
]

const processSteps = [
  {
    phase: 'Planning',
    icon: PresentationChartLineIcon,
    steps: [
      'Content Strategy',
      'Script Development',
      'Storyboarding',
      'Timeline Planning'
    ]
  },
  {
    phase: 'Production',
    icon: CameraIcon,
    steps: [
      'Video Shooting',
      'Audio Recording',
      'B-roll Capture',
      'Raw Footage'
    ]
  },
  {
    phase: 'Editing',
    icon: FilmIcon,
    steps: [
      'Video Editing',
      'Color Grading',
      'Audio Mixing',
      'Visual Effects'
    ]
  },
  {
    phase: 'Delivery',
    icon: RocketLaunchIcon,
    steps: [
      'Quality Check',
      'Format Optimization',
      'Platform Delivery',
      'Performance Tracking'
    ]
  }
]

const caseStudies = [
  {
    title: 'TechCorp',
    industry: 'Technology',
    icon: BuildingOfficeIcon,
    description: 'Complete video production for a tech company',
    results: [
      '300% increase in engagement',
      '85% improvement in brand awareness',
      '50% growth in leads'
    ]
  },
  {
    title: 'EcoStyle',
    industry: 'Fashion',
    icon: ShoppingBagIcon,
    description: 'Product showcase videos for sustainable fashion brand',
    results: [
      '200% increase in sales',
      '90% positive feedback',
      '40% growth in social following'
    ]
  },
  {
    title: 'EduPro',
    industry: 'Education',
    icon: AcademicCapIcon,
    description: 'Educational video series for online learning platform',
    results: [
      '150% increase in course completion',
      '95% student satisfaction',
      '60% improvement in retention'
    ]
  }
]

const videoEditingPricingPlans = [
  {
    name: 'Basic',
    price: '₹19,999',
    period: 'project',
    description: 'Perfect for small businesses and startups',
    features: [
      'Up to 2 minutes video',
      'Basic Color Grading',
      'Simple Transitions',
      'Background Music',
      '2 Revisions',
      'HD Quality'
    ],
    cta: 'Start with Basic'
  },
  {
    name: 'Professional',
    price: '₹39,999',
    period: 'project',
    description: 'Ideal for growing businesses',
    features: [
      'Up to 5 minutes video',
      'Advanced Color Grading',
      'Custom Transitions',
      'Voice-over Recording',
      'Motion Graphics',
      '4K Quality',
      '4 Revisions',
      'Priority Support'
    ],
    cta: 'Choose Professional',
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'project',
    description: 'Tailored solutions for large organizations',
    features: [
      'Custom Duration',
      'Premium Color Grading',
      'Advanced VFX',
      'Custom Music',
      'Multiple Revisions',
      '8K Quality',
      'Dedicated Team',
      '24/7 Support'
    ],
    cta: 'Contact Sales'
  }
]

export default function VideoEditingPage() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])

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
        {/* Hero Section */}
        <motion.div
          style={{ opacity, scale }}
          className="text-center mb-16"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium mb-4"
          >
            <span className="text-white">Video Editing</span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-secondary to-white bg-clip-text text-transparent"
          >
            Professional Video Editing Services
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Transform your raw footage into compelling visual stories with our expert video editing services. From commercial videos to social media content, we bring your vision to life.
          </motion.p>
        </motion.div>

        {/* Services Section */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-24"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-white via-secondary to-white bg-clip-text text-transparent"
          >
            Our Services
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <service.icon className="w-12 h-12 text-secondary mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircleIcon className="w-5 h-5 text-secondary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-24"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-white via-secondary to-white bg-clip-text text-transparent"
          >
            Key Features
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <feature.icon className="w-12 h-12 text-secondary mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{feature.name}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircleIcon className="w-5 h-5 text-secondary mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Metrics Section */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-24"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-white via-secondary to-white bg-clip-text text-transparent"
          >
            Performance Metrics
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <metric.icon className="w-12 h-12 text-secondary mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                <div className="text-lg text-gray-300 mb-2">{metric.name}</div>
                <div className="text-sm text-gray-400">{metric.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Industries Section */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-24"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-white via-secondary to-white bg-clip-text text-transparent"
          >
            Industries We Serve
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <industry.icon className="w-12 h-12 text-secondary mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{industry.title}</h3>
                <p className="text-gray-300">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process Section */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-24"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-white via-secondary to-white bg-clip-text text-transparent"
          >
            Our Process
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((phase, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm"
              >
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <phase.icon className="w-12 h-12 text-secondary mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">{phase.phase}</h3>
                <ul className="space-y-2">
                  {phase.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="text-gray-300 flex items-center">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2" />
                      {step}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Case Studies Section */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-24"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-white via-secondary to-white bg-clip-text text-transparent"
          >
            Success Stories
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <study.icon className="w-12 h-12 text-secondary mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{study.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{study.industry}</p>
                <p className="text-gray-300 mb-6">{study.description}</p>
                <ul className="space-y-2">
                  {study.results.map((result, resultIndex) => (
                    <li key={resultIndex} className="flex items-center text-gray-300">
                      <CheckCircleIcon className="w-5 h-5 text-secondary mr-2" />
                      {result}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pricing Section */}
        <PricingPlans
          title="Pricing Plans"
          subtitle="Choose the perfect plan for your video needs"
          plans={videoEditingPricingPlans}
        />

        {/* CTA Section */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            variants={fadeInUp}
            className="max-w-3xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-secondary/20 to-primary/20 backdrop-blur-sm"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Video Content?</h2>
            <p className="text-gray-300 mb-8">
              Let's create compelling video content that engages your audience and grows your business.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full bg-secondary text-white font-medium hover:bg-secondary/90 transition-colors duration-300"
              >
                Get Started
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 