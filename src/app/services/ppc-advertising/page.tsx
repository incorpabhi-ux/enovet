'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  MagnifyingGlassIcon,
  ChartBarIcon,
  DevicePhoneMobileIcon,
  ShoppingBagIcon,
  MapPinIcon,
  UserGroupIcon,
  HeartIcon,
  DeviceTabletIcon,
  ChartPieIcon,
  CurrencyDollarIcon,
  ArrowPathIcon,
  StarIcon,
  RocketLaunchIcon,
  ArrowTrendingUpIcon,
  CurrencyBangladeshiIcon,
  ArrowPathRoundedSquareIcon,
  PresentationChartLineIcon,
  DocumentChartBarIcon,
  AdjustmentsHorizontalIcon,
  ShieldCheckIcon,
  ClockIcon,
  ChartBarSquareIcon,
  ArrowUpCircleIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'
import PricingPlans from '@/components/PricingPlans'
import Link from 'next/link'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const platforms = [
  {
    name: "Google Ads",
    description: "Reach potential customers actively searching for your products or services.",
    icon: MagnifyingGlassIcon,
    features: [
      "Search Network",
      "Display Network",
      "Video Ads",
      "Shopping Ads"
    ]
  },
  {
    name: "Facebook Ads",
    description: "Target users based on their interests, behaviors, and demographics.",
    icon: ChartBarIcon,
    features: [
      "News Feed Ads",
      "Stories Ads",
      "Carousel Ads",
      "Lead Generation"
    ]
  },
  {
    name: "LinkedIn Ads",
    description: "Connect with professional audiences and B2B decision-makers.",
    icon: UserGroupIcon,
    features: [
      "Sponsored Content",
      "InMail Ads",
      "Text Ads",
      "Dynamic Ads"
    ]
  },
  {
    name: "Instagram Ads",
    description: "Engage with a visually-driven audience through compelling imagery.",
    icon: DevicePhoneMobileIcon,
    features: [
      "Photo Ads",
      "Video Ads",
      "Carousel Ads",
      "Stories Ads"
    ]
  }
]

const campaignTypes = [
  {
    name: "Search Campaigns",
    description: "Target users actively searching for your products or services.",
    icon: MagnifyingGlassIcon,
    features: [
      "Keyword targeting",
      "Ad extensions",
      "Quality score optimization",
      "Conversion tracking",
      "Negative keywords",
      "Bid strategies"
    ]
  },
  {
    name: "Display Campaigns",
    description: "Reach potential customers across websites and apps.",
    icon: ChartBarIcon,
    features: [
      "Banner ads",
      "Responsive ads",
      "Remarketing",
      "Audience targeting",
      "Contextual targeting",
      "Placement targeting"
    ]
  },
  {
    name: "Video Campaigns",
    description: "Engage users with compelling video content.",
    icon: DevicePhoneMobileIcon,
    features: [
      "YouTube ads",
      "In-stream ads",
      "Video discovery",
      "Brand awareness",
      "Bumper ads",
      "Outstream ads"
    ]
  },
  {
    name: "Shopping Campaigns",
    description: "Showcase your products with rich visual listings.",
    icon: ShoppingBagIcon,
    features: [
      "Product listings",
      "Dynamic ads",
      "Price comparison",
      "Shopping feed",
      "Smart shopping",
      "Local inventory"
    ]
  }
]

const targetingOptions = [
  {
    name: "Geographic Targeting",
    description: "Reach customers in specific locations.",
    icon: MapPinIcon,
    features: [
      "Country targeting",
      "City targeting",
      "Radius targeting",
      "Location exclusions",
      "Custom areas",
      "Demographic data"
    ]
  },
  {
    name: "Demographic Targeting",
    description: "Target based on age, gender, and other demographics.",
    icon: UserGroupIcon,
    features: [
      "Age groups",
      "Gender targeting",
      "Income levels",
      "Education targeting",
      "Marital status",
      "Parental status"
    ]
  },
  {
    name: "Interest-based Targeting",
    description: "Reach users based on their interests and behaviors.",
    icon: HeartIcon,
    features: [
      "Interest categories",
      "Behavioral targeting",
      "Custom audiences",
      "Lookalike audiences",
      "Life events",
      "Purchase intent"
    ]
  },
  {
    name: "Device Targeting",
    description: "Optimize for specific devices and platforms.",
    icon: DeviceTabletIcon,
    features: [
      "Mobile targeting",
      "Desktop targeting",
      "Tablet optimization",
      "App targeting",
      "Operating systems",
      "Connection types"
    ]
  }
]

const optimizationStrategies = [
  {
    name: "Performance Tracking",
    description: "Monitor and analyze campaign performance metrics.",
    icon: ChartPieIcon,
    features: [
      "Conversion tracking",
      "ROI analysis",
      "Cost per acquisition",
      "Click-through rates",
      "Attribution models",
      "Custom reports"
    ]
  },
  {
    name: "Budget Optimization",
    description: "Maximize ROI through smart budget allocation.",
    icon: CurrencyDollarIcon,
    features: [
      "Bid adjustments",
      "Budget pacing",
      "Cost control",
      "ROI optimization",
      "Campaign scheduling",
      "Budget forecasting"
    ]
  },
  {
    name: "A/B Testing",
    description: "Test and optimize ad variations for better performance.",
    icon: ArrowPathIcon,
    features: [
      "Ad copy testing",
      "Landing page testing",
      "Creative testing",
      "Audience testing",
      "Bid testing",
      "Placement testing"
    ]
  },
  {
    name: "Quality Score Improvement",
    description: "Enhance ad relevance and landing page experience.",
    icon: StarIcon,
    features: [
      "Keyword optimization",
      "Landing page quality",
      "Ad relevance",
      "Click-through rate",
      "Conversion rate",
      "User experience"
    ]
  }
]

const campaignProcess = [
  {
    name: "Strategy Development",
    description: "Create a comprehensive PPC strategy aligned with your goals.",
    icon: RocketLaunchIcon,
    features: [
      "Goal setting",
      "Budget planning",
      "Platform selection",
      "Timeline creation",
      "Competitor analysis",
      "Market research"
    ]
  },
  {
    name: "Campaign Setup",
    description: "Set up and configure your PPC campaigns for success.",
    icon: ArrowTrendingUpIcon,
    features: [
      "Account structure",
      "Campaign creation",
      "Ad group setup",
      "Keyword research",
      "Ad copywriting",
      "Landing page setup"
    ]
  },
  {
    name: "Budget Management",
    description: "Optimize your ad spend for maximum return on investment.",
    icon: CurrencyBangladeshiIcon,
    features: [
      "Budget allocation",
      "Bid management",
      "Cost control",
      "ROI tracking",
      "Performance monitoring",
      "Budget adjustments"
    ]
  },
  {
    name: "Performance Optimization",
    description: "Continuously improve campaign performance.",
    icon: ArrowPathRoundedSquareIcon,
    features: [
      "Performance analysis",
      "A/B testing",
      "Bid adjustments",
      "Quality score improvement",
      "Ad rotation",
      "Keyword refinement"
    ]
  }
]

const analyticsMetrics = [
  {
    name: "Conversion Tracking",
    description: "Measure and optimize your campaign conversions.",
    icon: PresentationChartLineIcon,
    features: [
      "Goal tracking",
      "E-commerce tracking",
      "Event tracking",
      "Conversion attribution",
      "Multi-channel funnels",
      "Custom metrics"
    ]
  },
  {
    name: "Performance Analytics",
    description: "Analyze campaign performance in detail.",
    icon: DocumentChartBarIcon,
    features: [
      "ROI analysis",
      "Cost metrics",
      "Engagement metrics",
      "Quality metrics",
      "Performance trends",
      "Custom reports"
    ]
  },
  {
    name: "Audience Insights",
    description: "Understand your target audience better.",
    icon: AdjustmentsHorizontalIcon,
    features: [
      "Demographic data",
      "Behavior analysis",
      "Interest insights",
      "Device usage",
      "Location data",
      "Audience segments"
    ]
  },
  {
    name: "Competitive Analysis",
    description: "Monitor and analyze competitor strategies.",
    icon: ShieldCheckIcon,
    features: [
      "Market positioning",
      "Share of voice",
      "Competitor keywords",
      "Ad copy analysis",
      "Landing page insights",
      "Price comparison"
    ]
  }
]

const successMetrics = [
  {
    name: "ROI Tracking",
    description: "Measure return on investment across campaigns.",
    icon: ChartBarSquareIcon,
    features: [
      "Revenue tracking",
      "Cost analysis",
      "Profit margins",
      "ROAS calculation",
      "LTV analysis",
      "Attribution modeling"
    ]
  },
  {
    name: "Performance KPIs",
    description: "Track key performance indicators.",
    icon: ArrowUpCircleIcon,
    features: [
      "Conversion rates",
      "Click-through rates",
      "Cost per click",
      "Quality scores",
      "Ad position",
      "Impression share"
    ]
  },
  {
    name: "Time-based Analysis",
    description: "Analyze performance over time.",
    icon: ClockIcon,
    features: [
      "Trend analysis",
      "Seasonal patterns",
      "Time-based optimization",
      "Historical data",
      "Forecasting",
      "Performance cycles"
    ]
  },
  {
    name: "Quality Metrics",
    description: "Monitor and improve quality scores.",
    icon: CheckCircleIcon,
    features: [
      "Ad relevance",
      "Landing page quality",
      "Expected CTR",
      "User experience",
      "Account health",
      "Policy compliance"
    ]
  }
]

const ppcPricingPlans = [
  {
    name: 'Starter',
    price: '₹12,999',
    period: 'month',
    description: 'Perfect for small businesses starting with PPC',
    features: [
      'Google Ads Setup',
      'Campaign Strategy',
      'Keyword Research',
      'Ad Copy Creation',
      'Basic Analytics',
      'Monthly Reports'
    ],
    cta: 'Start with Starter'
  },
  {
    name: 'Professional',
    price: '₹29,999',
    period: 'month',
    description: 'Ideal for businesses with established PPC presence',
    features: [
      'Everything in Starter',
      'Multiple Platform Ads',
      'Advanced Targeting',
      'Conversion Optimization',
      'A/B Testing',
      'Remarketing Campaigns',
      'Weekly Optimization',
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
      'Custom Campaign Strategy',
      'Dedicated Account Manager',
      'Advanced Analytics',
      'Cross-channel Integration',
      'Custom Reporting',
      '24/7 Support',
      'Quarterly Strategy Sessions'
    ],
    cta: 'Contact Sales'
  }
]

export default function PPCAdvertisingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-primary/20 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          className="text-center mb-20"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium mb-6 border border-white/10"
          >
            <span className="text-white">PPC Advertising</span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-secondary to-white bg-clip-text text-transparent leading-tight"
          >
            Pay-Per-Click Advertising Solutions
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Drive targeted traffic and maximize ROI with our data-driven PPC advertising strategies across multiple platforms.
          </motion.p>
        </motion.div>

        {/* Platforms Section */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">PPC Platforms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {platforms.map((platform) => (
              <motion.div
                key={platform.name}
                variants={fadeInUp}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10"
              >
                <platform.icon className="h-10 w-10 text-secondary mb-6" />
                <h3 className="text-2xl font-bold text-white mb-3">{platform.name}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{platform.description}</p>
                <ul className="space-y-3">
                  {platform.features.map((feature) => (
                    <li key={feature} className="text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Campaign Types Section */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Campaign Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {campaignTypes.map((campaign) => (
              <motion.div
                key={campaign.name}
                variants={fadeInUp}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10"
              >
                <campaign.icon className="h-10 w-10 text-secondary mb-6" />
                <h3 className="text-xl font-bold text-white mb-3">{campaign.name}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{campaign.description}</p>
                <ul className="space-y-3">
                  {campaign.features.map((feature) => (
                    <li key={feature} className="text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Targeting Options Section */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Advanced Targeting Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {targetingOptions.map((option) => (
              <motion.div
                key={option.name}
                variants={fadeInUp}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10"
              >
                <option.icon className="h-10 w-10 text-secondary mb-6" />
                <h3 className="text-xl font-bold text-white mb-3">{option.name}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{option.description}</p>
                <ul className="space-y-3">
                  {option.features.map((feature) => (
                    <li key={feature} className="text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Optimization Strategies Section */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Optimization Strategies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {optimizationStrategies.map((strategy) => (
              <motion.div
                key={strategy.name}
                variants={fadeInUp}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10"
              >
                <strategy.icon className="h-10 w-10 text-secondary mb-6" />
                <h3 className="text-xl font-bold text-white mb-3">{strategy.name}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{strategy.description}</p>
                <ul className="space-y-3">
                  {strategy.features.map((feature) => (
                    <li key={feature} className="text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Campaign Process Section */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Campaign Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {campaignProcess.map((process) => (
              <motion.div
                key={process.name}
                variants={fadeInUp}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10"
              >
                <process.icon className="h-10 w-10 text-secondary mb-6" />
                <h3 className="text-xl font-bold text-white mb-3">{process.name}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{process.description}</p>
                <ul className="space-y-3">
                  {process.features.map((feature) => (
                    <li key={feature} className="text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Analytics Metrics Section */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Analytics & Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {analyticsMetrics.map((metric) => (
              <motion.div
                key={metric.name}
                variants={fadeInUp}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10"
              >
                <metric.icon className="h-10 w-10 text-secondary mb-6" />
                <h3 className="text-xl font-bold text-white mb-3">{metric.name}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{metric.description}</p>
                <ul className="space-y-3">
                  {metric.features.map((feature) => (
                    <li key={feature} className="text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Success Metrics Section */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Success Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((metric) => (
              <motion.div
                key={metric.name}
                variants={fadeInUp}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10"
              >
                <metric.icon className="h-10 w-10 text-secondary mb-6" />
                <h3 className="text-xl font-bold text-white mb-3">{metric.name}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{metric.description}</p>
                <ul className="space-y-3">
                  {metric.features.map((feature) => (
                    <li key={feature} className="text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                      {feature}
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
          plans={ppcPricingPlans}
        />

        {/* CTA Section */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl p-12 border border-white/10 backdrop-blur-sm">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Boost Your ROI?</h2>
            <p className="text-gray-300 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
              Let's create a customized PPC strategy that drives results for your business.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group bg-gradient-to-r from-[#FF6B00] to-[#FF8533] text-white px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-[#FF6B00]/30 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get Started
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF8533] to-[#FF6B00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 