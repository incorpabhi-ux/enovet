'use client'

import * as React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { 
  CodeBracketIcon, 
  MegaphoneIcon, 
  PaintBrushIcon, 
  ChartBarIcon,
  ShareIcon,
  VideoCameraIcon,
  ArrowTrendingUpIcon,
  UserGroupIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  RocketLaunchIcon,
  WrenchScrewdriverIcon,
  ChartPieIcon,
  PresentationChartLineIcon,
  CurrencyDollarIcon,
  UserIcon,
  CommandLineIcon,
  CursorArrowRaysIcon,
  SwatchIcon,
  FilmIcon,
  HashtagIcon,
  MagnifyingGlassIcon,
  CogIcon,
  DocumentTextIcon,
  EyeIcon,
  HeartIcon,
  ClockIcon,
  BuildingStorefrontIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  ShoppingBagIcon,
  TruckIcon,
  BeakerIcon,
  CreditCardIcon
} from '@heroicons/react/24/outline'

// Service feature interface
interface ServiceFeature {
  icon: React.ComponentType<any>
  title: string
  description: string
}

// Service features type
type ServiceFeaturesType = {
  [key: string]: ServiceFeature[]
}

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
    icon: CodeBracketIcon,
    title: 'Web Development',
    description: 'Create stunning, responsive websites that convert visitors into customers. We build custom solutions that align with your brand and business objectives.',
    features: ['Custom Design', 'E-commerce', 'WordPress', 'Performance Optimization'],
    href: '/services/web-development',
    stats: [
      { label: 'Projects Completed', value: '100+' },
      { label: 'Client Satisfaction', value: '98%' },
      { label: 'Average Load Time', value: '< 2s' }
    ]
  },
  {
    icon: CurrencyDollarIcon,
    title: 'PPC Advertising',
    description: 'Maximize your ROI with targeted paid advertising campaigns. We create and optimize PPC campaigns that drive qualified traffic and conversions.',
    features: ['Google Ads', 'Facebook Ads', 'Remarketing', 'Conversion Tracking'],
    href: '/services/ppc-advertising',
    stats: [
      { label: 'ROI Increase', value: '300%' },
      { label: 'Campaigns Managed', value: '200+' },
      { label: 'Client Growth', value: '150%' }
    ]
  },
  {
    icon: PaintBrushIcon,
    title: 'Branding',
    description: 'Build a strong, memorable brand identity that resonates with your audience. We create cohesive brand experiences across all touchpoints.',
    features: ['Brand Strategy', 'Visual Identity', 'Brand Guidelines', 'Brand Voice'],
    href: '/services/branding',
    stats: [
      { label: 'Brands Created', value: '100+' },
      { label: 'Market Recognition', value: '85%' },
      { label: 'Client Retention', value: '95%' }
    ]
  },
  {
    icon: ChartBarIcon,
    title: 'SEO Optimization',
    description: 'Improve your search rankings and drive organic traffic with our data-driven SEO strategies. We optimize your content and technical elements.',
    features: ['Keyword Research', 'On-page SEO', 'Technical SEO', 'Content Strategy'],
    href: '/services/seo',
    stats: [
      { label: 'Traffic Increase', value: '200%' },
      { label: 'Keywords Ranked', value: '1000+' },
      { label: 'Conversion Rate', value: '45%' }
    ]
  },
  {
    icon: ShareIcon,
    title: 'Social Media',
    description: 'Build your brand presence and engage with your audience across all social platforms. We create content that connects and converts.',
    features: ['Content Creation', 'Community Management', 'Paid Advertising', 'Analytics'],
    href: '/services/social-media',
    stats: [
      { label: 'Engagement Rate', value: '8.5%' },
      { label: 'Followers Growth', value: '300%' },
      { label: 'Campaign ROI', value: '400%' }
    ]
  },
  {
    icon: VideoCameraIcon,
    title: 'Video Editing',
    description: 'Create engaging video content that captivates your audience and tells your brand story. We transform raw footage into compelling narratives.',
    features: ['Commercial Videos', 'Social Media Clips', 'Product Showcases', 'Motion Graphics'],
    href: '/services/video-editing',
    stats: [
      { label: 'Videos Produced', value: '100+' },
      { label: 'View Retention', value: '75%' },
      { label: 'Client Satisfaction', value: '99%' }
    ]
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
    icon: DevicePhoneMobileIcon,
    title: 'Implementation',
    description: 'We execute the strategy with precision, using the latest tools and technologies.'
  },
  {
    icon: RocketLaunchIcon,
    title: 'Optimization',
    description: 'Continuous monitoring and optimization ensure maximum performance and ROI.'
  }
]

const stats = [
  {
    icon: ChartPieIcon,
    value: '98%',
    label: 'Client Satisfaction',
    description: 'Based on client feedback and reviews'
  },
  {
    icon: PresentationChartLineIcon,
    value: '300%',
    label: 'Average ROI',
    description: 'Across all digital marketing campaigns'
  },
  {
    icon: CurrencyDollarIcon,
    value: '$2M+',
    label: 'Revenue Generated',
    description: 'For our clients through digital strategies'
  },
  {
    icon: UserIcon,
    value: '100+',
    label: 'Happy Clients',
    description: 'Served across various industries'
  }
]

const serviceFeatures: ServiceFeaturesType = {
  'Web Development': [
    { icon: CommandLineIcon, title: 'Custom Development', description: 'Tailored solutions built with modern technologies' },
    { icon: CursorArrowRaysIcon, title: 'UI/UX Design', description: 'Intuitive and engaging user interfaces' },
    { icon: DevicePhoneMobileIcon, title: 'Mobile-First', description: 'Responsive designs for all devices' },
    { icon: RocketLaunchIcon, title: 'Performance', description: 'Optimized for speed and efficiency' },
    { icon: WrenchScrewdriverIcon, title: 'Maintenance', description: 'Regular updates and technical support' },
    { icon: GlobeAltIcon, title: 'Hosting', description: 'Secure and reliable hosting solutions' }
  ],
  'PPC Advertising': [
    { icon: ChartBarIcon, title: 'Campaign Strategy', description: 'Data-driven PPC campaign planning' },
    { icon: MegaphoneIcon, title: 'Ad Creation', description: 'Compelling ad copy and creative' },
    { icon: PresentationChartLineIcon, title: 'Analytics', description: 'Comprehensive performance tracking' },
    { icon: CurrencyDollarIcon, title: 'Budget Management', description: 'Optimal budget allocation' },
    { icon: UserGroupIcon, title: 'Audience Targeting', description: 'Precise demographic targeting' },
    { icon: ArrowTrendingUpIcon, title: 'Conversion Optimization', description: 'Continuous campaign improvement' }
  ],
  'Branding': [
    { icon: SwatchIcon, title: 'Visual Identity', description: 'Cohesive brand design system' },
    { icon: PaintBrushIcon, title: 'Brand Guidelines', description: 'Comprehensive style guides' },
    { icon: GlobeAltIcon, title: 'Brand Strategy', description: 'Strategic brand positioning' },
    { icon: UserGroupIcon, title: 'Brand Voice', description: 'Consistent messaging across channels' },
    { icon: CursorArrowRaysIcon, title: 'Logo Design', description: 'Memorable and versatile logos' },
    { icon: ShareIcon, title: 'Brand Assets', description: 'Complete brand asset library' }
  ],
  'SEO Optimization': [
    { icon: ChartPieIcon, title: 'Technical SEO', description: 'Website optimization for search engines' },
    { icon: CommandLineIcon, title: 'On-page SEO', description: 'Content and structure optimization' },
    { icon: GlobeAltIcon, title: 'Local SEO', description: 'Geographic targeting and optimization' },
    { icon: PresentationChartLineIcon, title: 'Performance', description: 'Search ranking improvements' },
    { icon: MegaphoneIcon, title: 'Content Strategy', description: 'SEO-optimized content creation' },
    { icon: ChartBarIcon, title: 'Keyword Research', description: 'Strategic keyword targeting' }
  ],
  'Social Media': [
    { icon: ShareIcon, title: 'Content Creation', description: 'Engaging social media content' },
    { icon: HashtagIcon, title: 'Community Management', description: 'Active audience engagement' },
    { icon: ChartBarIcon, title: 'Analytics', description: 'Performance tracking and insights' },
    { icon: MegaphoneIcon, title: 'Advertising', description: 'Targeted social media ads' },
    { icon: UserGroupIcon, title: 'Influencer Marketing', description: 'Strategic influencer partnerships' },
    { icon: CursorArrowRaysIcon, title: 'Visual Content', description: 'Eye-catching graphics and videos' }
  ],
  'Video Editing': [
    { icon: FilmIcon, title: 'Commercial Videos', description: 'Professional business videos' },
    { icon: VideoCameraIcon, title: 'Social Media', description: 'Engaging short-form content' },
    { icon: SwatchIcon, title: 'Motion Graphics', description: 'Dynamic visual elements' },
    { icon: CursorArrowRaysIcon, title: 'Post-Production', description: 'Professional editing and effects' },
    { icon: ShareIcon, title: 'Content Distribution', description: 'Multi-platform video distribution' },
    { icon: MegaphoneIcon, title: 'Video Marketing', description: 'Strategic video marketing campaigns' }
  ]
}

export default function ServicesPage() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])

  return (
    <>
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
              <span className="text-white">Our Services</span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-secondary to-white bg-clip-text text-transparent"
            >
              Comprehensive Digital Solutions
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              We offer a full suite of digital services to help your business grow and succeed online.
            </motion.p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/10 rounded-full blur-2xl" />
                  <stat.icon className="w-12 h-12 text-secondary mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-lg text-gray-300 mb-2">{stat.label}</div>
                  <div className="text-sm text-gray-400">{stat.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mb-24"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="mb-16 last:mb-0"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                    
                    <div className="relative">
                      <service.icon className="w-12 h-12 text-secondary mb-6" />
                      <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                      <p className="text-gray-300 mb-6">{service.description}</p>
                      
                      <ul className="space-y-3 mb-8">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-300">
                            <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <div className="grid grid-cols-3 gap-4 mb-8">
                        {service.stats.map((stat, statIndex) => (
                          <div key={statIndex} className="text-center">
                            <div className="text-2xl font-bold text-secondary mb-1">{stat.value}</div>
                            <div className="text-sm text-gray-400">{stat.label}</div>
                          </div>
                        ))}
                      </div>

                      <Link 
                        href={service.href}
                        className="inline-flex items-center space-x-2 text-secondary hover:text-secondary/80 transition-colors"
                      >
                        <span>Know More</span>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                    {serviceFeatures[service.title].map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        variants={fadeInUp}
                        className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                      >
                        <feature.icon className="w-8 h-8 text-secondary mb-4" />
                        <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                        <p className="text-sm text-gray-300">{feature.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
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
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm"
                >
                  <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <step.icon className="w-12 h-12 text-secondary mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

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
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Grow Your Business?</h2>
              <p className="text-gray-300 mb-8">
                Let's discuss how our services can help you achieve your business goals.
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
    </>
  )
} 