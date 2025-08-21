'use client'

import * as React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { 
  CodeBracketIcon, 
  DevicePhoneMobileIcon, 
  RocketLaunchIcon, 
  WrenchScrewdriverIcon,
  GlobeAltIcon,
  CommandLineIcon,
  CursorArrowRaysIcon,
  ChartBarIcon,
  PresentationChartLineIcon,
  ShieldCheckIcon,
  ServerIcon,
  CloudIcon,
  BoltIcon,
  ArrowPathIcon,
  UserGroupIcon,
  CogIcon,
  DocumentTextIcon,
  CubeIcon,
  BeakerIcon,
  SparklesIcon,
  SwatchIcon,
  CurrencyDollarIcon
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

const technologies = [
  // Frontend Technologies
  { name: 'HTML5', icon: CommandLineIcon, description: 'Modern markup language for web structure', category: 'Frontend' },
  { name: 'CSS3', icon: SwatchIcon, description: 'Advanced styling and animations', category: 'Frontend' },
  { name: 'JavaScript', icon: CodeBracketIcon, description: 'Dynamic web programming language', category: 'Frontend' },
  { name: 'React', icon: CubeIcon, description: 'Modern UI development with component-based architecture', category: 'Frontend' },
  { name: 'Next.js', icon: ArrowPathIcon, description: 'Server-side rendering and static site generation', category: 'Frontend' },
  { name: 'Vue.js', icon: SparklesIcon, description: 'Progressive JavaScript framework', category: 'Frontend' },
  { name: 'Tailwind CSS', icon: SparklesIcon, description: 'Utility-first CSS framework', category: 'Frontend' },
  { name: 'Sass/SCSS', icon: SwatchIcon, description: 'Advanced CSS preprocessor', category: 'Frontend' },
  
  // Backend Technologies
  { name: 'PHP', icon: CommandLineIcon, description: 'Server-side scripting language', category: 'Backend' },
  { name: 'Node.js', icon: ServerIcon, description: 'JavaScript runtime for server-side applications', category: 'Backend' },
  { name: 'Python', icon: CommandLineIcon, description: 'Versatile programming language', category: 'Backend' },
  { name: 'Express.js', icon: ArrowPathIcon, description: 'Fast web framework for Node.js', category: 'Backend' },
  { name: 'Laravel', icon: CubeIcon, description: 'PHP framework for web artisans', category: 'Backend' },
  { name: 'Django', icon: CommandLineIcon, description: 'High-level Python web framework', category: 'Backend' },
  { name: 'GraphQL', icon: BeakerIcon, description: 'Query language for APIs', category: 'Backend' },
  { name: 'REST APIs', icon: GlobeAltIcon, description: 'Architectural style for APIs', category: 'Backend' },
  
  // Database Technologies
  { name: 'MySQL', icon: ServerIcon, description: 'Reliable relational database', category: 'Database' },
  { name: 'PostgreSQL', icon: ServerIcon, description: 'Advanced open-source database', category: 'Database' },
  { name: 'MongoDB', icon: ServerIcon, description: 'NoSQL database for modern apps', category: 'Database' },
  { name: 'Redis', icon: BoltIcon, description: 'In-memory data structure store', category: 'Database' },
  
  // DevOps & Cloud
  { name: 'AWS', icon: CloudIcon, description: 'Comprehensive cloud platform', category: 'Cloud' },
  { name: 'Azure', icon: CloudIcon, description: 'Microsoft cloud computing platform', category: 'Cloud' },
  { name: 'Google Cloud', icon: CloudIcon, description: 'Google cloud infrastructure', category: 'Cloud' },
  { name: 'Digital Ocean', icon: CloudIcon, description: 'Developer-friendly cloud platform', category: 'Cloud' },
  { name: 'Docker', icon: CubeIcon, description: 'Containerization platform', category: 'DevOps' },
  { name: 'Kubernetes', icon: ServerIcon, description: 'Container orchestration', category: 'DevOps' },
  { name: 'CI/CD', icon: ArrowPathIcon, description: 'Continuous Integration/Deployment', category: 'DevOps' },
  { name: 'Terraform', icon: CommandLineIcon, description: 'Infrastructure as Code tool', category: 'DevOps' }
]

const developmentCapabilities = [
  {
    category: 'Custom Development',
    items: [
      'Single Page Applications (SPAs)',
      'Progressive Web Apps (PWAs)',
      'Custom Web Applications',
      'Real-time Applications',
      'Social Media Platforms',
      'Enterprise Solutions'
    ]
  },
  {
    category: 'WordPress Development',
    items: [
      'Custom Theme Development',
      'Plugin Development',
      'WooCommerce Integration',
      'Multilingual Sites',
      'Performance Optimization',
      'Security Hardening'
    ]
  },
  {
    category: 'Shopify Development',
    items: [
      'Custom Theme Design',
      'App Development',
      'Store Setup & Migration',
      'Payment Integration',
      'Inventory Management',
      'Marketing Automation'
    ]
  },
  {
    category: 'Mobile Solutions',
    items: [
      'Responsive Web Design',
      'Mobile-First Development',
      'Cross-platform Compatibility',
      'Touch-optimized Interfaces',
      'Offline Capabilities',
      'Push Notifications'
    ]
  }
]

const platformFeatures = {
  'WordPress': [
    { icon: GlobeAltIcon, title: 'Content Management', description: 'Easy-to-use CMS for content updates' },
    { icon: UserGroupIcon, title: 'User Management', description: 'Role-based access control' },
    { icon: CogIcon, title: 'Plugin Ecosystem', description: 'Extensive plugin library' },
    { icon: SwatchIcon, title: 'Theme Customization', description: 'Flexible design options' },
    { icon: ChartBarIcon, title: 'SEO Friendly', description: 'Built-in SEO features' },
    { icon: ShieldCheckIcon, title: 'Security', description: 'Regular security updates' }
  ],
  'Shopify': [
    { icon: CubeIcon, title: 'E-commerce Ready', description: 'Complete online store solution' },
    { icon: CurrencyDollarIcon, title: 'Payment Processing', description: 'Multiple payment gateways' },
    { icon: ChartBarIcon, title: 'Analytics', description: 'Detailed sales and customer insights' },
    { icon: UserGroupIcon, title: 'Customer Management', description: 'Customer profiles and history' },
    { icon: CogIcon, title: 'App Integration', description: 'Extensive app marketplace' },
    { icon: GlobeAltIcon, title: 'Multi-channel', description: 'Sell across multiple platforms' }
  ]
}

const performanceMetrics = [
  { label: 'Page Load Time', value: '< 2s', icon: BoltIcon },
  { label: 'Core Web Vitals', value: '90+', icon: ChartBarIcon },
  { label: 'Mobile Score', value: '95+', icon: DevicePhoneMobileIcon },
  { label: 'SEO Score', value: '98+', icon: PresentationChartLineIcon }
]

const securityFeatures = [
  { title: 'SSL Encryption', description: 'Secure data transmission', icon: ShieldCheckIcon },
  { title: 'DDoS Protection', description: 'Advanced attack prevention', icon: CloudIcon },
  { title: 'Regular Updates', description: 'Security patches and maintenance', icon: CogIcon },
  { title: 'Backup Systems', description: 'Automated data protection', icon: ServerIcon }
]

const developmentProcess = [
  {
    phase: 'Planning',
    icon: DocumentTextIcon,
    steps: [
      'Requirement Analysis',
      'Technical Planning',
      'Architecture Design',
      'Timeline Creation'
    ]
  },
  {
    phase: 'Development',
    icon: CodeBracketIcon,
    steps: [
      'Frontend Development',
      'Backend Integration',
      'Database Setup',
      'API Development'
    ]
  },
  {
    phase: 'Testing',
    icon: BeakerIcon,
    steps: [
      'Unit Testing',
      'Integration Testing',
      'Performance Testing',
      'Security Testing'
    ]
  },
  {
    phase: 'Deployment',
    icon: RocketLaunchIcon,
    steps: [
      'Environment Setup',
      'CI/CD Pipeline',
      'Monitoring Setup',
      'Launch Preparation'
    ]
  }
]

const webDevPricingPlans = [
  {
    name: 'Starter',
    price: '₹19,999',
    period: 'month',
    description: 'Perfect for small businesses and startups',
    features: [
      'Responsive Website Design',
      '5 Pages Development',
      'Basic SEO Setup',
      'Contact Form Integration',
      'Social Media Integration',
      'Basic Analytics Setup'
    ],
    cta: 'Start with Starter'
  },
  {
    name: 'Professional',
    price: '₹49,999',
    period: 'month',
    description: 'Ideal for growing businesses with advanced needs',
    features: [
      'Everything in Starter',
      'Custom Web Application',
      'E-commerce Integration',
      'Advanced SEO Setup',
      'Performance Optimization',
      'Security Implementation',
      'Monthly Maintenance',
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
      'Custom Software Development',
      'API Development',
      'Advanced Security Features',
      'Scalable Architecture',
      'Dedicated Development Team',
      '24/7 Support',
      'Quarterly Strategy Sessions'
    ],
    cta: 'Contact Sales'
  }
]

export default function WebDevelopmentPage() {
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
            <span className="text-white">Web Development</span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-secondary to-white bg-clip-text text-transparent"
          >
            Custom Web Development Solutions
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            From custom web applications to WordPress and Shopify solutions, we create high-performance websites that drive business growth.
          </motion.p>
        </motion.div>

        {/* Technologies Section */}
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
            Technologies We Use
          </motion.h2>

          {['Frontend', 'Backend', 'Database', 'Cloud', 'DevOps'].map((category) => (
            <motion.div
              key={category}
              variants={fadeInUp}
              className="mb-12"
            >
              <h3 className="text-2xl font-bold text-white mb-6">{category} Technologies</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {technologies
                  .filter(tech => tech.category === category)
                  .map((tech, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      <tech.icon className="w-12 h-12 text-secondary mb-4" />
                      <h4 className="text-xl font-bold text-white mb-2">{tech.name}</h4>
                      <p className="text-gray-300">{tech.description}</p>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Platform Options */}
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
            Choose Your Platform
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Custom Development */}
            <motion.div
              variants={fadeInUp}
              className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Custom Development</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CodeBracketIcon className="w-6 h-6 text-secondary mt-1" />
                  <div>
                    <h4 className="text-white font-medium">Full-Stack Development</h4>
                    <p className="text-sm text-gray-400">Custom solutions using modern technologies</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CubeIcon className="w-6 h-6 text-secondary mt-1" />
                  <div>
                    <h4 className="text-white font-medium">Framework-Based</h4>
                    <p className="text-sm text-gray-400">React, Vue, Angular, and more</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <ServerIcon className="w-6 h-6 text-secondary mt-1" />
                  <div>
                    <h4 className="text-white font-medium">Backend Solutions</h4>
                    <p className="text-sm text-gray-400">Node.js, PHP, Python, and more</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <DevicePhoneMobileIcon className="w-6 h-6 text-secondary mt-1" />
                  <div>
                    <h4 className="text-white font-medium">Responsive Design</h4>
                    <p className="text-sm text-gray-400">Mobile-first approach for all devices</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <BoltIcon className="w-6 h-6 text-secondary mt-1" />
                  <div>
                    <h4 className="text-white font-medium">Performance Optimization</h4>
                    <p className="text-sm text-gray-400">Fast loading and smooth user experience</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <ShieldCheckIcon className="w-6 h-6 text-secondary mt-1" />
                  <div>
                    <h4 className="text-white font-medium">Security Implementation</h4>
                    <p className="text-sm text-gray-400">Advanced security measures and best practices</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* WordPress */}
            {Object.entries(platformFeatures).map(([platform, features]) => (
              <motion.div
                key={platform}
                variants={fadeInUp}
                className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-6">{platform}</h3>
                <div className="grid grid-cols-1 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <feature.icon className="w-6 h-6 text-secondary mt-1" />
                      <div>
                        <h4 className="text-white font-medium">{feature.title}</h4>
                        <p className="text-sm text-gray-400">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Development Capabilities */}
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
            Development Capabilities
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {developmentCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-4">{capability.category}</h3>
                <ul className="space-y-3">
                  {capability.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-300">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Performance Metrics */}
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
            {performanceMetrics.map((metric, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/10 rounded-full blur-2xl" />
                <metric.icon className="w-12 h-12 text-secondary mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                <div className="text-lg text-gray-300">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Development Process */}
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
            Our Development Process
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {developmentProcess.map((phase, index) => (
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

        {/* Pricing Section */}
        <PricingPlans
          title="Pricing Plans"
          subtitle="Choose the perfect plan for your business"
          plans={webDevPricingPlans}
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
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Your Website?</h2>
            <p className="text-gray-300 mb-8">
              Let's discuss your project and create a solution that perfectly fits your needs.
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