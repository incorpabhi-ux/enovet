'use client'

import { motion } from 'framer-motion'
import { SparklesIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

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

const projects = [
  {
    title: 'E-commerce Growth',
    description: '300% increase in online sales through strategic digital marketing',
    image: '/portfolio/ecommerce.jpg',
    category: 'Digital Marketing',
    results: ['300% Sales Increase', '50% Lower CAC', '2x ROAS']
  },
  {
    title: 'Brand Transformation',
    description: 'Complete brand overhaul leading to 200% increase in engagement',
    image: '/portfolio/brand.jpg',
    category: 'Branding',
    results: ['200% Engagement', '150% Brand Awareness', '3x Social Growth']
  },
  {
    title: 'Website Redesign',
    description: 'Modern website redesign resulting in 400% conversion increase',
    image: '/portfolio/website.jpg',
    category: 'Web Development',
    results: ['400% Conversions', '60% Bounce Rate Drop', '2.5x Time on Site']
  },
  {
    title: 'Social Media Campaign',
    description: 'Viral social media campaign reaching 1M+ audience',
    image: '/portfolio/social.jpg',
    category: 'Social Media',
    results: ['1M+ Reach', '500% Engagement', '200% Follower Growth']
  },
  {
    title: 'SEO Optimization',
    description: 'Comprehensive SEO strategy leading to 500% organic traffic',
    image: '/portfolio/seo.jpg',
    category: 'SEO',
    results: ['500% Traffic', 'Top 10 Rankings', '200% Leads']
  },
  {
    title: 'PPC Campaign',
    description: 'Targeted PPC campaign achieving 300% ROI',
    image: '/portfolio/ppc.jpg',
    category: 'PPC',
    results: ['300% ROI', '50% Lower CPC', '2x Conversion Rate']
  }
]

export default function Portfolio() {
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
            <span className="text-white">Our Portfolio</span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-secondary to-white bg-clip-text text-transparent"
          >
            Success Stories
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Discover how we've helped businesses achieve remarkable growth through our digital solutions.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-secondary/20 backdrop-blur-sm text-sm font-medium text-secondary mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-300 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.results.map((result, resultIndex) => (
                    <span
                      key={resultIndex}
                      className="inline-block px-3 py-1 rounded-full bg-white/5 text-sm text-gray-300"
                    >
                      {result}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 