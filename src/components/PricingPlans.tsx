'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
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

interface PricingPlan {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  cta: string
  popular?: boolean
}

interface PricingPlansProps {
  title: string
  subtitle: string
  plans: PricingPlan[]
}

export default function PricingPlans({ title, subtitle, plans }: PricingPlansProps) {
  return (
    <>
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
          {title}
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="text-xl text-gray-300"
        >
          {subtitle}
        </motion.p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
      >
        {plans.map((plan, index) => (
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
    </>
  )
} 