'use client'

import * as React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  ChatBubbleLeftRightIcon,
  ShareIcon,
  ChartBarIcon,
  UserGroupIcon,
  RocketLaunchIcon,
  SparklesIcon,
  CameraIcon,
  VideoCameraIcon,
  DocumentTextIcon,
  HashtagIcon,
  MegaphoneIcon,
  HeartIcon,
  GlobeAltIcon,
  ArrowPathIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  BuildingOfficeIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  ShoppingBagIcon,
  EyeIcon,
  ArrowTrendingUpIcon,
  BuildingStorefrontIcon,
  WrenchScrewdriverIcon,
  TruckIcon,
  BeakerIcon,
  CreditCardIcon,
  UserIcon,
  CogIcon,
  PresentationChartLineIcon
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

const platforms = [
  {
    name: 'Facebook',
    icon: GlobeAltIcon,
    description: 'Connect with billions of users worldwide',
    features: [
      'Page Management',
      'Content Creation',
      'Community Engagement',
      'Paid Advertising'
    ]
  },
  {
    name: 'Instagram',
    icon: CameraIcon,
    description: 'Visual storytelling platform',
    features: [
      'Post Creation',
      'Story Management',
      'Reels Production',
      'IGTV Content'
    ]
  },
  {
    name: 'LinkedIn',
    icon: BuildingOfficeIcon,
    description: 'Professional networking platform',
    features: [
      'Company Page',
      'Content Strategy',
      'Lead Generation',
      'B2B Marketing'
    ]
  },
  {
    name: 'Twitter',
    icon: ChatBubbleLeftRightIcon,
    description: 'Real-time engagement platform',
    features: [
      'Tweet Management',
      'Trend Monitoring',
      'Engagement Strategy',
      'Crisis Management'
    ]
  }
]

const contentTypes = [
  {
    name: 'Visual Content',
    icon: CameraIcon,
    description: 'Engaging visual content for social media',
    features: [
      'Image Creation',
      'Infographic Design',
      'Photo Editing',
      'Visual Branding'
    ]
  },
  {
    name: 'Video Content',
    icon: VideoCameraIcon,
    description: 'Dynamic video content creation',
    features: [
      'Short-form Videos',
      'Reels Production',
      'Story Videos',
      'Live Streaming'
    ]
  },
  {
    name: 'Written Content',
    icon: DocumentTextIcon,
    description: 'Compelling written content',
    features: [
      'Post Copywriting',
      'Blog Content',
      'Caption Writing',
      'Hashtag Strategy'
    ]
  },
  {
    name: 'Engagement Content',
    icon: ChatBubbleLeftRightIcon,
    description: 'Interactive content for engagement',
    features: [
      'Polls & Surveys',
      'Quizzes',
      'User-generated Content',
      'Community Management'
    ]
  }
]

const strategyAreas = [
  {
    name: 'Content Strategy',
    icon: DocumentTextIcon,
    description: 'Strategic content planning and execution',
    features: [
      'Content Calendar',
      'Theme Planning',
      'Content Mix',
      'Platform Strategy'
    ]
  },
  {
    name: 'Growth Strategy',
    icon: RocketLaunchIcon,
    description: 'Platform growth and audience building',
    features: [
      'Audience Targeting',
      'Growth Tactics',
      'Engagement Strategy',
      'Follower Growth'
    ]
  },
  {
    name: 'Engagement Strategy',
    icon: HeartIcon,
    description: 'Community engagement and interaction',
    features: [
      'Comment Management',
      'Message Handling',
      'Community Building',
      'Crisis Management'
    ]
  },
  {
    name: 'Analytics Strategy',
    icon: ChartBarIcon,
    description: 'Data-driven performance tracking',
    features: [
      'Performance Metrics',
      'ROI Tracking',
      'Audience Insights',
      'Competitor Analysis'
    ]
  }
]

const metrics = [
  {
    name: 'Engagement Rate',
    icon: HeartIcon,
    value: '4.5%',
    description: 'Average engagement across platforms'
  },
  {
    name: 'Follower Growth',
    icon: UserGroupIcon,
    value: '200%',
    description: 'Year-over-year growth'
  },
  {
    name: 'Content Reach',
    icon: ShareIcon,
    value: '1M+',
    description: 'Monthly content reach'
  },
  {
    name: 'Conversion Rate',
    icon: ChartBarIcon,
    value: '3.2%',
    description: 'Average conversion rate'
  }
]

const industries = [
  {
    icon: BuildingOfficeIcon,
    title: 'Technology',
    description: 'Social media solutions for tech companies'
  },
  {
    icon: ShoppingBagIcon,
    title: 'Retail',
    description: 'E-commerce and retail social media'
  },
  {
    icon: BriefcaseIcon,
    title: 'Professional Services',
    description: 'B2B social media management'
  },
  {
    icon: AcademicCapIcon,
    title: 'Education',
    description: 'Educational institution social media'
  }
]

const processSteps = [
  {
    phase: 'Strategy',
    icon: DocumentTextIcon,
    steps: [
      'Platform Analysis',
      'Content Planning',
      'Audience Research',
      'Goal Setting'
    ]
  },
  {
    phase: 'Creation',
    icon: CameraIcon,
    steps: [
      'Content Creation',
      'Visual Design',
      'Copywriting',
      'Asset Production'
    ]
  },
  {
    phase: 'Management',
    icon: ChatBubbleLeftRightIcon,
    steps: [
      'Content Scheduling',
      'Community Management',
      'Engagement Monitoring',
      'Crisis Management'
    ]
  },
  {
    phase: 'Analysis',
    icon: ChartBarIcon,
    steps: [
      'Performance Tracking',
      'ROI Analysis',
      'Strategy Refinement',
      'Report Generation'
    ]
  }
]

const caseStudies = [
  {
    title: 'TechStart Pro',
    industry: 'Technology',
    icon: BuildingOfficeIcon,
    description: 'Complete social media transformation for a tech startup',
    results: [
      '300% increase in engagement',
      '85% improvement in brand awareness',
      '50% growth in leads'
    ]
  },
  {
    title: 'EcoLife',
    industry: 'Sustainability',
    icon: GlobeAltIcon,
    description: 'Social media strategy for an eco-friendly brand',
    results: [
      '200% increase in followers',
      '90% positive sentiment',
      '40% growth in website traffic'
    ]
  },
  {
    title: 'EduSmart',
    industry: 'Education',
    icon: AcademicCapIcon,
    description: 'Social media management for an educational platform',
    results: [
      '150% increase in student engagement',
      '95% brand awareness',
      '60% improvement in conversions'
    ]
  }
]

const socialMediaPricingPlans = [
  {
    name: 'Starter',
    price: '₹14,999',
    period: 'month',
    description: 'Perfect for small businesses starting with social media',
    features: [
      '2 Social Media Platforms',
      'Content Creation',
      'Basic Analytics',
      'Community Management',
      'Monthly Strategy',
      'Weekly Reports'
    ],
    cta: 'Start with Starter'
  },
  {
    name: 'Professional',
    price: '₹29,999',
    period: 'month',
    description: 'Ideal for growing businesses with established presence',
    features: [
      '4 Social Media Platforms',
      'Advanced Content Strategy',
      'Paid Advertising',
      'Influencer Marketing',
      'Crisis Management',
      'Weekly Optimization',
      'Priority Support',
      'Custom Reports'
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
      'All Social Platforms',
      'Custom Strategy',
      'Dedicated Team',
      'Advanced Analytics',
      'Cross-platform Integration',
      'Custom Reporting',
      '24/7 Support',
      'Quarterly Strategy Sessions'
    ],
    cta: 'Contact Sales'
  }
]

export default function SocialMediaPage() {
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
            <span className="text-white">Social Media</span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-secondary to-white bg-clip-text text-transparent"
          >
            Social Media Management Solutions
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Transform your social media presence with our comprehensive management solutions. From strategy to execution, we help you build meaningful connections with your audience.
          </motion.p>
        </motion.div>

        {/* Platforms Section */}
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
            Social Media Platforms
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <platform.icon className="w-12 h-12 text-secondary mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{platform.name}</h3>
                <p className="text-gray-300 mb-4">{platform.description}</p>
                <ul className="space-y-2">
                  {platform.features.map((feature, idx) => (
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

        {/* Content Types Section */}
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
            Content Types
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contentTypes.map((type, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <type.icon className="w-12 h-12 text-secondary mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{type.name}</h3>
                <p className="text-gray-300 mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature, idx) => (
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

        {/* Strategy Areas Section */}
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
            Strategy Areas
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {strategyAreas.map((area, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <area.icon className="w-12 h-12 text-secondary mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{area.name}</h3>
                <p className="text-gray-300 mb-4">{area.description}</p>
                <ul className="space-y-2">
                  {area.features.map((feature, idx) => (
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
          subtitle="Choose the perfect plan for your business"
          plans={socialMediaPricingPlans}
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
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Social Media Presence?</h2>
            <p className="text-gray-300 mb-8">
              Let's create a social media strategy that drives engagement and grows your business.
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