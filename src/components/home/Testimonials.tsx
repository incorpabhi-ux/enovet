'use client'

import * as React from 'react'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { StarIcon } from '@heroicons/react/24/solid'
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

const testimonials = [
  {
    name: 'Aarav Sharma',
    role: 'Founder, TechNova India',
    image: '/testimonials/aarav.jpg',
    rating: 5,
    quote: "Enovet Media's digital strategies helped us reach new markets across India. Our online leads have doubled!",
    results: ['2x Online Leads', '300% Traffic Growth', 'Top 5 Google Ranking']
  },
  {
    name: 'Priya Mehra',
    role: 'Marketing Head, GreenLeaf Organics',
    image: '/testimonials/priya.jpg',
    rating: 5,
    quote: "The Enovet team's social media campaigns brought our brand to life. We saw a huge boost in engagement and sales.",
    results: ['400% Social Engagement', '150% Sales Growth', 'Brand Awareness Up']
  },
  {
    name: 'Rohan Verma',
    role: 'CTO, FinEdge Solutions',
    image: '/testimonials/rohan.jpg',
    rating: 5,
    quote: "Their web development expertise gave us a robust, scalable platform. Support is always prompt and professional.",
    results: ['99.9% Uptime', 'Fast Deployment', 'Excellent Support']
  },
  {
    name: 'David Kim',
    role: 'CTO, FinTech Solutions (USA)',
    image: '/testimonials/david.jpg',
    rating: 5,
    quote: "Enovet's web team built us a cutting-edge platform that handles millions of transactions seamlessly.",
    results: ['99.9% Uptime', '2s Load Time', '500% User Growth']
  },
  {
    name: 'Lisa Wang',
    role: 'VP Marketing, HealthTech Pro (Singapore)',
    image: '/testimonials/lisa.jpg',
    rating: 5,
    quote: "Their SEO and content marketing strategies helped us dominate our niche and generate qualified leads consistently.",
    results: ['350% Organic Traffic', '45% Lead Increase', '4x ROI']
  },
  {
    name: 'Alex Thompson',
    role: 'Founder, Creative Studios (UK)',
    image: '/testimonials/alex.jpg',
    rating: 5,
    quote: "The branding and social media work Enovet did for us completely transformed our market position.",
    results: ['250% Brand Recognition', '180% Social Growth', '3.5x Engagement']
  }
]

const Testimonials = () => {
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
          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-secondary to-white bg-clip-text text-transparent"
          >
            Client Testimonials
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Hear from our satisfied clients about their success stories with Enovet.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              
              <div className="relative">
                {/* Client Image */}
                <div className="relative w-20 h-20 rounded-full overflow-hidden mb-6">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Rating Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-300 mb-6">
                  "{testimonial.quote}"
                </blockquote>

                {/* Client Info */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white">{testimonial.name}</h3>
                  <p className="text-gray-400">{testimonial.role}</p>
                </div>

                {/* Results */}
                <div className="flex flex-wrap gap-2">
                  {testimonial.results.map((result, resultIndex) => (
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

export default dynamic(() => Promise.resolve(Testimonials), { ssr: false }) 