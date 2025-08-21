'use client'

import * as React from 'react'
import { motion, LazyMotion, domAnimation } from 'framer-motion'
import {
  PaintBrushIcon,
  SwatchIcon,
  DocumentTextIcon,
  PhotoIcon,
  GlobeAltIcon,
  SparklesIcon,
  LightBulbIcon,
  UserGroupIcon,
  ArrowRightIcon,
  CursorArrowRaysIcon,
  ShareIcon,
  StarIcon,
  ChartBarIcon,
  RocketLaunchIcon,
  CheckCircleIcon,
  BuildingOfficeIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  ShoppingBagIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import Head from 'next/head'
import PricingPlans from '@/components/PricingPlans'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3, ease: 'easeOut' }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.05
    }
  }
}

const brandingStats = [
  { label: 'Brands Created', value: '100+' },
  { label: 'Market Recognition', value: '85%' },
  { label: 'Client Retention', value: '95%' }
]

const brandingOverview = {
  icon: PaintBrushIcon,
  title: 'Branding',
  description:
    'Build a strong, memorable brand identity that resonates with your audience. We create cohesive brand experiences across all touchpoints.',
  features: [
    'Brand Strategy',
    'Visual Identity',
    'Brand Guidelines',
    'Brand Voice'
  ]
}

const brandingFeatureCards = [
  {
    icon: SwatchIcon,
    title: 'Visual Identity',
    description: 'Cohesive brand design system'
  },
  {
    icon: PaintBrushIcon,
    title: 'Brand Guidelines',
    description: 'Comprehensive style guides'
  },
  {
    icon: GlobeAltIcon,
    title: 'Brand Strategy',
    description: 'Strategic brand positioning'
  },
  {
    icon: UserGroupIcon,
    title: 'Brand Voice',
    description: 'Consistent messaging across channels'
  },
  {
    icon: CursorArrowRaysIcon,
    title: 'Logo Design',
    description: 'Memorable and versatile logos'
  },
  {
    icon: ShareIcon,
    title: 'Brand Assets',
    description: 'Complete brand asset library'
  }
]

const processSteps = [
  {
    icon: UserGroupIcon,
    title: 'Discovery',
    description: 'We begin by understanding your business goals, target audience, and unique challenges.'
  },
  {
    icon: GlobeAltIcon,
    title: 'Strategy',
    description: 'Our team develops a customized strategy aligned with your objectives and market position.'
  },
  {
    icon: LightBulbIcon,
    title: 'Design',
    description: 'We craft a unique visual identity and brand assets.'
  },
  {
    icon: SparklesIcon,
    title: 'Delivery',
    description: 'We deliver a comprehensive brand system and guidelines.'
  }
]

const caseStudies = [
  {
    title: 'TechStart Pro',
    industry: 'Technology',
    icon: BuildingOfficeIcon,
    description: 'Complete brand transformation for a leading tech startup',
    results: [
      '300% increase in brand recognition',
      '85% improvement in customer engagement',
      '50% growth in market share'
    ]
  },
  {
    title: 'EcoLife',
    industry: 'Sustainability',
    icon: GlobeAltIcon,
    description: 'Brand development for an eco-friendly product line',
    results: [
      '200% increase in social media following',
      '90% positive brand sentiment',
      '40% growth in customer base'
    ]
  },
  {
    title: 'EduSmart',
    industry: 'Education',
    icon: AcademicCapIcon,
    description: 'Brand identity creation for an educational platform',
    results: [
      '150% increase in student enrollment',
      '95% brand awareness in target market',
      '60% improvement in user engagement'
    ]
  }
]

const industries = [
  {
    icon: BuildingOfficeIcon,
    title: 'Technology',
    description: 'Branding solutions for tech startups and enterprises'
  },
  {
    icon: ShoppingBagIcon,
    title: 'Retail',
    description: 'Creating memorable shopping experiences'
  },
  {
    icon: BriefcaseIcon,
    title: 'Professional Services',
    description: 'Building trust and credibility'
  },
  {
    icon: AcademicCapIcon,
    title: 'Education',
    description: 'Engaging educational brands'
  }
]

const benefits = [
  {
    icon: ChartBarIcon,
    title: 'Increased Recognition',
    description: 'Build a memorable brand that stands out in your market'
  },
  {
    icon: UserGroupIcon,
    title: 'Customer Loyalty',
    description: 'Create emotional connections with your audience'
  },
  {
    icon: RocketLaunchIcon,
    title: 'Market Growth',
    description: 'Expand your reach and market share'
  },
  {
    icon: StarIcon,
    title: 'Premium Positioning',
    description: 'Command higher prices and better margins'
  }
]

const brandingPricingPlans = [
  {
    name: 'Starter',
    price: '₹24,999',
    period: 'month',
    description: 'Perfect for small businesses starting their brand journey',
    features: [
      'Brand Identity Design',
      'Logo Design',
      'Color Palette',
      'Typography Selection',
      'Basic Brand Guidelines',
      'Social Media Templates'
    ],
    cta: 'Start with Starter'
  },
  {
    name: 'Professional',
    price: '₹49,999',
    period: 'month',
    description: 'Ideal for growing businesses with established brands',
    features: [
      'Everything in Starter',
      'Complete Brand Strategy',
      'Brand Voice Development',
      'Marketing Materials',
      'Website Design',
      'Print Collateral',
      'Brand Guidelines',
      'Priority Support'
    ],
    cta: 'Choose Professional',
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'month',
    description: 'Tailored solutions for large organizations',
    features: [
      'Everything in Professional',
      'Brand Architecture',
      'Brand Experience Design',
      'Internal Brand Training',
      'Brand Implementation',
      'Brand Monitoring',
      '24/7 Support',
      'Quarterly Strategy Sessions'
    ],
    cta: 'Contact Sales'
  }
]

export default function BrandingPage() {
  return (
    <>
      <Head>
        <title>Branding Services | Enovet Media - Professional Brand Development</title>
        <meta name="description" content="Transform your brand with our comprehensive branding services. From brand strategy to visual identity, we help businesses create memorable and impactful brand experiences." />
        <meta name="keywords" content="branding services, brand development, brand strategy, visual identity, brand guidelines, logo design, brand voice, brand assets" />
        <meta property="og:title" content="Branding Services | Enovet Media" />
        <meta property="og:description" content="Transform your brand with our comprehensive branding services. Create a memorable and impactful brand identity." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Branding Services | Enovet Media" />
        <meta name="twitter:description" content="Transform your brand with our comprehensive branding services. Create a memorable and impactful brand identity." />
      </Head>

      <LazyMotion features={domAnimation}>
        <section className="relative py-24 overflow-hidden" role="main" aria-label="Branding Services">
          {/* Background with gradient */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-primary/20">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent animate-pulse" />
              <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
            </div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Hero Section */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium mb-4"
              >
                <SparklesIcon className="w-4 h-4 text-secondary" aria-hidden="true" />
                <span className="text-white">Branding</span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-secondary to-white bg-clip-text text-transparent"
              >
                Build a Memorable Brand
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-xl text-gray-300 max-w-3xl mx-auto"
              >
                Build a strong, memorable brand identity that resonates with your audience. We create cohesive brand experiences across all touchpoints.
              </motion.p>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-24"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {brandingStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 text-center"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-lg text-gray-300 mb-2">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Benefits Section */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-24"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-white via-secondary to-white bg-clip-text text-transparent"
              >
                Why Invest in Branding?
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <benefit.icon className="w-12 h-12 text-secondary mb-4" aria-hidden="true" />
                    <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Main Branding Section */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-24"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Left: Overview */}
                <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <brandingOverview.icon className="w-12 h-12 text-secondary mb-6" aria-hidden="true" />
                  <h3 className="text-2xl font-bold text-white mb-4">{brandingOverview.title}</h3>
                  <p className="text-gray-300 mb-6">{brandingOverview.description}</p>
                  <ul className="space-y-3 mb-8">
                    {brandingOverview.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {brandingStats.map((stat, statIndex) => (
                      <div key={statIndex} className="text-center">
                        <div className="text-2xl font-bold text-secondary mb-1">{stat.value}</div>
                        <div className="text-sm text-gray-400">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  <Link 
                    href="/contact"
                    className="inline-flex items-center space-x-2 text-secondary hover:text-secondary/80 transition-colors"
                  >
                    <span>Contact for Branding</span>
                    <ArrowRightIcon className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
                {/* Right: Features */}
                <div className="grid grid-cols-2 gap-4">
                  {brandingFeatureCards.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      variants={fadeInUp}
                      className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      <feature.icon className="w-8 h-8 text-secondary mb-4" aria-hidden="true" />
                      <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                      <p className="text-sm text-gray-300">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Industries Section */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
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
                    className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <industry.icon className="w-12 h-12 text-secondary mb-4" aria-hidden="true" />
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
              viewport={{ once: true, margin: "-100px" }}
              className="mb-24"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-white via-secondary to-white bg-clip-text text-transparent"
              >
                Our Branding Process
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm"
                  >
                    <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <step.icon className="w-12 h-12 text-secondary mb-4" aria-hidden="true" />
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Case Studies Section */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
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
                    className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <study.icon className="w-12 h-12 text-secondary mb-4" aria-hidden="true" />
                    <h3 className="text-xl font-bold text-white mb-2">{study.title}</h3>
                    <p className="text-sm text-gray-400 mb-4">{study.industry}</p>
                    <p className="text-gray-300 mb-6">{study.description}</p>
                    <ul className="space-y-2">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center text-gray-300">
                          <CheckCircleIcon className="w-5 h-5 text-secondary mr-2" aria-hidden="true" />
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
              subtitle="Choose the perfect plan for your business"
              plans={brandingPricingPlans}
            />

            {/* CTA Section */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center"
            >
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium mb-4"
              >
                <SparklesIcon className="w-4 h-4 text-secondary" aria-hidden="true" />
                <span className="text-white">Get Started</span>
              </motion.div>

              <motion.h2
                variants={fadeInUp}
                className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-secondary to-white bg-clip-text text-transparent"
              >
                Ready to Elevate Your Brand?
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
              >
                Let's create a powerful brand identity that resonates with your audience and drives business growth.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex items-center justify-center"
              >
                <motion.a
                  href="/contact"
                  className="bg-secondary text-white px-8 py-3 rounded-full font-semibold hover:bg-secondary/90 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </LazyMotion>
    </>
  )
} 