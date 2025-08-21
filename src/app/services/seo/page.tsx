'use client'

import * as React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  ChartBarIcon,
  MagnifyingGlassIcon,
  RocketLaunchIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  CurrencyDollarIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  UserGroupIcon,
  DocumentTextIcon,
  PresentationChartLineIcon,
  AdjustmentsHorizontalIcon,
  CogIcon,
  SparklesIcon,
  ArrowTrendingUpIcon,
  EyeIcon,
  ClockIcon,
  BuildingStorefrontIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  ShoppingBagIcon,
  WrenchScrewdriverIcon,
  TruckIcon,
  BeakerIcon,
  CreditCardIcon,
  UserIcon
} from '@heroicons/react/24/outline'
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

const seoStats = [
  { label: 'Average Traffic Increase', value: '300%' },
  { label: 'Keyword Rankings', value: '100+' },
  { label: 'Client Satisfaction', value: '98%' }
]

const seoFeatures = [
  {
    icon: MagnifyingGlassIcon,
    title: 'Keyword Research & Analysis',
    description: 'In-depth keyword research to identify high-value opportunities and optimize your content strategy.'
  },
  {
    icon: ChartBarIcon,
    title: 'Technical SEO',
    description: 'Comprehensive technical optimization including site speed, mobile responsiveness, and crawlability.'
  },
  {
    icon: DocumentTextIcon,
    title: 'Content Optimization',
    description: 'Strategic content creation and optimization to improve rankings and engage your target audience.'
  },
  {
    icon: GlobeAltIcon,
    title: 'Local SEO',
    description: 'Optimize your online presence for local searches and improve visibility in your target market.'
  },
  {
    icon: DevicePhoneMobileIcon,
    title: 'Mobile Optimization',
    description: 'Ensure your website performs optimally on mobile devices and provides a great user experience.'
  },
  {
    icon: PresentationChartLineIcon,
    title: 'Performance Tracking',
    description: 'Regular monitoring and reporting of your SEO performance with actionable insights.'
  }
]

const seoProcess = [
  {
    step: '01',
    title: 'Audit & Analysis',
    description: 'We start with a comprehensive SEO audit to identify opportunities and challenges.'
  },
  {
    step: '02',
    title: 'Strategy Development',
    description: 'Based on the audit, we create a customized SEO strategy aligned with your business goals.'
  },
  {
    step: '03',
    title: 'Implementation',
    description: 'We implement technical optimizations and content improvements to enhance your visibility.'
  },
  {
    step: '04',
    title: 'Monitoring & Optimization',
    description: 'Continuous monitoring and optimization to ensure sustainable growth in search rankings.'
  }
]

const caseStudies = [
  {
    title: 'E-commerce Growth',
    description: 'Increased organic traffic by 450% for an online retail store',
    metrics: [
      { label: 'Traffic Growth', value: '450%' },
      { label: 'Conversion Rate', value: '35%' },
      { label: 'Revenue Increase', value: '280%' }
    ],
    image: '/images/case-study-1.jpg'
  },
  {
    title: 'Local Business Success',
    description: 'Achieved #1 rankings for 25+ local keywords',
    metrics: [
      { label: 'Local Rankings', value: '25+' },
      { label: 'Map Pack Visibility', value: '85%' },
      { label: 'Lead Generation', value: '200%' }
    ],
    image: '/images/case-study-2.jpg'
  },
  {
    title: 'B2B Lead Generation',
    description: 'Generated 100+ qualified leads through organic search',
    metrics: [
      { label: 'Organic Leads', value: '100+' },
      { label: 'Cost per Lead', value: '-75%' },
      { label: 'ROI', value: '320%' }
    ],
    image: '/images/case-study-3.jpg'
  }
]

const pricingPlans = [
  {
    name: 'Starter',
    price: '₹9,999',
    period: 'month',
    description: 'Perfect for small businesses starting their SEO journey',
    features: [
      'Keyword Research & Analysis',
      'On-page SEO Optimization',
      'Technical SEO Audit',
      'Monthly Performance Report',
      'Basic Content Optimization',
      'Google Analytics Setup'
    ],
    cta: 'Start with Starter'
  },
  {
    name: 'Professional',
    price: '₹14,999',
    period: 'month',
    description: 'Ideal for growing businesses with established online presence',
    features: [
      'Everything in Starter',
      'Advanced Technical SEO',
      'Content Strategy & Creation',
      'Link Building Campaign',
      'Competitor Analysis',
      'Local SEO Optimization',
      'Weekly Performance Reports',
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
      'Custom SEO Strategy',
      'Dedicated SEO Team',
      'Advanced Analytics & Reporting',
      'International SEO',
      'Custom Tool Development',
      '24/7 Priority Support',
      'Quarterly Strategy Sessions'
    ],
    cta: 'Contact Sales'
  }
]

const faqs = [
  {
    question: 'How long does it take to see SEO results?',
    answer: 'While some improvements can be seen within 3-6 months, significant results typically take 6-12 months. This timeline varies based on your industry, competition, and current website status.'
  },
  {
    question: 'What makes your SEO services different?',
    answer: 'We combine data-driven strategies with creative content approaches, focusing on sustainable growth rather than quick wins. Our team stays updated with the latest SEO trends and algorithm changes.'
  },
  {
    question: 'Do you guarantee first-page rankings?',
    answer: 'While we can\'t guarantee specific rankings (as this would violate Google\'s guidelines), we do guarantee improved visibility, traffic, and conversion rates through our proven SEO strategies.'
  },
  {
    question: 'How do you measure SEO success?',
    answer: 'We track multiple KPIs including organic traffic, keyword rankings, conversion rates, and ROI. You\'ll receive detailed monthly reports showing your progress and growth.'
  },
  {
    question: 'What industries do you specialize in?',
    answer: 'We have experience across various industries including e-commerce, B2B, healthcare, real estate, and professional services. Our strategies are customized for each industry\'s unique challenges.'
  }
]

export default function SEOPage() {
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
            <span className="text-white">Search Engine Optimization</span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-secondary to-white bg-clip-text text-transparent"
          >
            Boost Your Online Visibility
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Drive organic traffic and improve search rankings with our comprehensive SEO services.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {seoStats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Section */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
          >
            Comprehensive SEO Services
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-300"
          >
            Our holistic approach to SEO ensures sustainable growth in search rankings
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {seoFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <feature.icon className="w-12 h-12 text-secondary mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Process Section */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
          >
            Our SEO Process
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-300"
          >
            A systematic approach to achieving sustainable SEO results
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {seoProcess.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-4xl font-bold text-secondary mb-4">{step.step}</div>
              <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
              {index < seoProcess.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-secondary" />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Case Studies Section */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
          >
            Success Stories
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-300"
          >
            Real results from our SEO campaigns
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-4">{study.title}</h3>
              <p className="text-gray-300 mb-6">{study.description}</p>
              <div className="space-y-4">
                {study.metrics.map((metric, idx) => (
                  <div key={idx} className="flex justify-between items-center">
                    <span className="text-gray-400">{metric.label}</span>
                    <span className="text-secondary font-bold">{metric.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pricing Section */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
          >
            Pricing Plans
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-300"
          >
            Choose the perfect plan for your business
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className={`p-8 rounded-2xl bg-white/5 backdrop-blur-sm border ${
                plan.popular ? 'border-secondary' : 'border-white/10'
              } hover:bg-white/10 transition-all duration-300 relative`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full bg-secondary text-white text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-gray-400">/{plan.period}</span>
              </div>
              <p className="text-gray-300 mb-6">{plan.description}</p>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-secondary mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-full ${
                    plan.popular
                      ? 'bg-secondary text-white'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  } font-medium transition-colors duration-300`}
                >
                  {plan.cta}
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-300"
          >
            Everything you need to know about our SEO services
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-4xl mx-auto space-y-6 mb-20"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
              <p className="text-gray-300">{faq.answer}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-4xl mx-auto text-center p-12 rounded-3xl bg-gradient-to-br from-gray-800 to-primary/20 backdrop-blur-md border border-white/10"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold text-white mb-6"
          >
            Ready to Boost Your Search Rankings?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-300 mb-8"
          >
            Let's work together to improve your online visibility and drive organic traffic to your website.
          </motion.p>
          <Link href="/contact">
            <motion.button
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-secondary text-white font-medium hover:bg-secondary/90 transition-colors duration-300"
            >
              Get Started
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
} 