'use client'

import React from 'react'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { 
  SparklesIcon,
  UserGroupIcon,
  RocketLaunchIcon,
  HeartIcon,
  ShieldCheckIcon,
  LightBulbIcon,
  ChartBarIcon,
  GlobeAltIcon,
  ClockIcon,
  StarIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  PlayIcon,
  TrophyIcon
} from '@heroicons/react/24/outline'

// Animation variants
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

// Company stats
const companyStats = [
  { value: '1.5+', label: 'Years Experience', icon: ClockIcon },
  { value: '100+', label: 'Projects Completed', icon: CheckCircleIcon },
  { value: '200+', label: 'Happy Clients', icon: HeartIcon },
  { value: '10+', label: 'Team Members', icon: UserGroupIcon },
  { value: '98%', label: 'Client Satisfaction', icon: StarIcon },
  { value: '15+', label: 'Awards Won', icon: TrophyIcon }
]

// Comapany Timeline
const timelineData = [
  {
    year: "2014",
    title: "Company Founded",
    description: "Enovet Media was established with a vision to transform businesses through innovative digital solutions.Enovet Media was established with a vision to transform businesses through innovative digital solutions.",
    icon: RocketLaunchIcon,
  },
  {
    year: "2016",
    title: "First Major Client",
    description: "Secured our first enterprise client, marking the beginning of our growth journey.",
    icon: UserGroupIcon,
  },
  {
    year: "2018",
    title: "Team Expansion",
    description: "Expanded our team to 15 members and opened our second office location.",
    icon: UserGroupIcon,
  },
  {
    year: "2020",
    title: "Digital Transformation",
    description: "Pioneered remote work culture and launched our comprehensive digital transformation services.",
    icon: LightBulbIcon,
  },
  {
    year: "2022",
    title: "International Recognition",
    description: "Received multiple industry awards and expanded our client base globally.",
    icon: TrophyIcon,
  },
  {
    year: "2024",
    title: "Innovation Hub",
    description: "Launched our innovation hub and AI-powered solutions division.",
    icon: ShieldCheckIcon,
  },
];

export default function AboutPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-primary/30">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background with animated elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-white/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="text-center lg:text-left"
            >
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium mb-6"
              >
                <SparklesIcon className="w-4 h-4 text-secondary" />
                <span className="text-white">About Us</span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              >
                <span className="bg-gradient-to-r from-white via-secondary to-white bg-clip-text text-transparent">
                  We Create Digital
                </span>
                <br />
                <span className="text-white">Excellence</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0"
              >
                Enovet Media is a full-service digital agency that transforms businesses through innovative web development, strategic marketing, and creative branding solutions.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 rounded-full bg-secondary text-white font-medium hover:bg-secondary/90 transition-colors duration-300"
                >
                  Get in Touch
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </Link>
                <button className="inline-flex items-center px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm text-white font-medium hover:bg-white/20 transition-colors duration-300">
                  <PlayIcon className="w-5 h-5 mr-2" />
                  Watch Our Story
                </button>
              </motion.div>
            </motion.div>

            {/* Image/Visual */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              className="relative"
            >
              <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                {/* Placeholder for company image/video */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center">
                  <div className="text-center">
                    <UserGroupIcon className="w-24 h-24 text-white/50 mx-auto mb-4" />
                    <p className="text-white/70 text-lg">Our Team at Work</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
          >
            {companyStats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center group"
              >
                <div className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-secondary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* End Company Stats */}

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our <span className="text-secondary">Mission</span> & Vision
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We're driven by a clear purpose and vision for the future of digital business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative p-8 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent backdrop-blur-sm border border-white/10"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl" />
              <div className="relative">
                <RocketLaunchIcon className="w-12 h-12 text-secondary mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  To empower businesses with innovative digital solutions that drive growth, enhance customer experiences, and create lasting impact in the digital landscape.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-secondary mr-3" />
                    Deliver exceptional digital experiences
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-secondary mr-3" />
                    Drive measurable business results
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-secondary mr-3" />
                    Foster long-term client partnerships
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative p-8 rounded-2xl bg-gradient-to-br from-secondary/20 to-transparent backdrop-blur-sm border border-white/10"
            >
              <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
              <div className="relative">
                <LightBulbIcon className="w-12 h-12 text-secondary mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  To be the leading digital agency that sets industry standards for innovation, creativity, and business transformation in the digital age.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-secondary mr-3" />
                    Pioneer cutting-edge digital solutions
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-secondary mr-3" />
                    Shape the future of digital marketing
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-secondary mr-3" />
                    Create sustainable business growth
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our <span className="text-secondary">Values</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              The core principles that guide everything we do and shape our company culture
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: HeartIcon,
                title: 'Client-Centric',
                description: 'We put our clients first, understanding their unique needs and delivering solutions that exceed expectations.',
                color: 'text-red-400'
              },
              {
                icon: LightBulbIcon,
                title: 'Innovation',
                description: 'We embrace cutting-edge technologies and creative solutions to stay ahead of industry trends.',
                color: 'text-yellow-400'
              },
              {
                icon: ShieldCheckIcon,
                title: 'Quality',
                description: 'We maintain the highest standards of quality in every project, ensuring excellence in delivery.',
                color: 'text-green-400'
              },
              {
                icon: UserGroupIcon,
                title: 'Collaboration',
                description: 'We believe in the power of teamwork and foster strong partnerships with clients and team members.',
                color: 'text-blue-400'
              },
              {
                icon: RocketLaunchIcon,
                title: 'Results-Driven',
                description: 'We focus on measurable outcomes and tangible results that drive business growth.',
                color: 'text-purple-400'
              },
              {
                icon: GlobeAltIcon,
                title: 'Global Perspective',
                description: 'We bring international best practices and diverse perspectives to every project.',
                color: 'text-indigo-400'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-secondary/50"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                <div className="relative">
                  <value.icon className={`w-12 h-12 ${value.color} mb-6`} />
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Company Timeline */}
      {/* <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our <span className="text-secondary">Story</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              A decade of innovation, growth, and digital transformation
            </p>
          </motion.div> */}

          {/* Timeline Data */}
          {/* <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-secondary to-primary" />
            <div className="space-y-16">
              {[
                {
                  year: '2014',
                  title: 'Company Founded',
                  description: 'Enovet Media was established with a vision to transform businesses through innovative digital solutions.',
                  icon: RocketLaunchIcon
                },
                {
                  year: '2016',
                  title: 'First Major Client',
                  description: 'Secured our first enterprise client, marking the beginning of our growth journey.',
                  icon: UserGroupIcon
                },
                {
                  year: '2018',
                  title: 'Team Expansion',
                  description: 'Expanded our team to 15 members and opened our second office location.',
                  icon: UserGroupIcon
                },
                {
                  year: '2020',
                  title: 'Digital Transformation',
                  description: 'Pioneered remote work culture and launched our comprehensive digital transformation services.',
                  icon: LightBulbIcon
                },
                {
                  year: '2022',
                  title: 'International Recognition',
                  description: 'Received multiple industry awards and expanded our client base globally.',
                  icon: TrophyIcon
                },
                {
                  year: '2024',
                  title: 'Innovation Hub',
                  description: 'Launched our innovation hub and AI-powered solutions division.',
                  icon: ShieldCheckIcon
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                > */}
                  {/* Timeline dot */}
                  {/* <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-secondary rounded-full border-4 border-gray-900 z-10" /> */}
                  {/* Content */}
                  {/* <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                      <div className="flex items-center mb-4">
                        <item.icon className="w-6 h-6 text-secondary mr-3" />
                        <span className="text-2xl font-bold text-secondary">{item.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div> */}
          {/* End Timeline Data */}
        {/* </div>
      </section> */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6 relative">

          {/* Center Line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-secondary to-primary"></div>

          {/* 2014 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 flex justify-end pr-10 relative"
          >
            <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-secondary border-4 border-gray-900 z-10"></div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl w-1/2 text-right hover:bg-white/10 transition">
              <div className="flex justify-end items-center gap-3 mb-3">
                <span className="text-3xl font-bold text-secondary">2014</span>
                <RocketLaunchIcon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-white">Company Founded</h3>
              <p className="text-gray-300">Enovet Media was established with a vision to transform businesses through innovative digital solutions.</p>
            </div>
          </motion.div>

          {/* 2016 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 flex justify-start pl-10 relative"
          >
            <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-secondary border-4 border-gray-900 z-10"></div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl w-1/2 text-left hover:bg-white/10 transition">
              <div className="flex items-center gap-3 mb-3">
                <UserGroupIcon className="w-7 h-7 text-secondary" />
                <span className="text-3xl font-bold text-secondary">2016</span>
              </div>
              <h3 className="text-xl font-bold text-white">First Major Client</h3>
              <p className="text-gray-300">Secured our first enterprise client, marking the beginning of our growth journey.</p>
            </div>
          </motion.div>

          {/* Keep going for 2018, 2020, 2022, 2024 */}

        </div>
      </section>
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white">
              Our <span className="text-secondary">Story</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              A decade of innovation, growth, and digital transformation
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-secondary to-primary" />

            <div className="space-y-20">
              {timelineData.map((item, index) => {
                const isActive = activeIndex === index;
                const isLeft = index % 2 === 0;

                return (
                  <div
                    key={index}
                    className={`relative flex items-center ${isLeft ? "flex-row" : "flex-row-reverse"}`}
                  >
                    {/* Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-secondary rounded-full border-4 border-gray-900 z-10" />

                    {/* Card */}
                    <div className={`w-1/2 ${isLeft ? "pr-8 text-right" : "pl-8 text-left"}`}>
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
                      >
                        <div className="flex items-center mb-4">
                          <item.icon className="w-6 h-6 text-secondary mr-3" />
                          <span className="text-2xl font-bold text-secondary">{item.year}</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                    
                        {/* Toggle button */}
                        <button
                          onClick={() => setActiveIndex(isActive ? null : index)}
                          className="mt-2 px-4 py-2 rounded-xl bg-secondary text-white font-medium hover:bg-secondary/80 transition"
                        >
                          {isActive ? "Close" : "Know More"}
                        </button>
                      </motion.div>
                    </div>
                                    
                    {/* Opposite side panel */}
                    <div className={`w-1/2 ${isLeft ? "pl-8 text-left" : "pr-8 text-right"}`}>
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            key="details"
                            initial={{ x: isLeft ? "100%" : "-100%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: isLeft ? "100%" : "-100%", opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="p-6 rounded-2xl bg-black/90 border border-white/20"
                          >
                            <h3 className="text-xl font-bold text-secondary mb-2">{item.title}</h3>
                            <p className="text-gray-300">{item.description}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* End Company Timeline */}

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Meet Our <span className="text-secondary">Team</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              The talented professionals behind our success, dedicated to delivering exceptional results
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                name: 'Sarah Johnson',
                role: 'CEO & Founder',
                image: '/testimonials/sarah.jpg',
                bio: 'Visionary leader with 15+ years in digital marketing. Passionate about helping businesses grow through innovative digital solutions.',
                expertise: ['Digital Strategy', 'Business Development', 'Team Leadership'],
                social: {
                  linkedin: '#',
                  twitter: '#',
                  email: 'sarah@enovetmedia.com'
                }
              },
              {
                name: 'Michael Chen',
                role: 'Creative Director',
                image: '/testimonials/michael.jpg',
                bio: 'Award-winning creative director with expertise in brand development, UI/UX design, and visual storytelling.',
                expertise: ['Brand Design', 'UI/UX', 'Creative Strategy'],
                social: {
                  linkedin: '#',
                  behance: '#',
                  email: 'michael@enovetmedia.com'
                }
              },
              {
                name: 'Emily Rodriguez',
                role: 'Technical Lead',
                image: '/testimonials/emma.jpg',
                bio: 'Full-stack developer and technical architect with deep expertise in modern web technologies and scalable solutions.',
                expertise: ['Web Development', 'System Architecture', 'DevOps'],
                social: {
                  linkedin: '#',
                  github: '#',
                  email: 'emily@enovetmedia.com'
                }
              },
              {
                name: 'David Kim',
                role: 'Marketing Director',
                image: '/testimonials/david.jpg',
                bio: 'Data-driven marketing strategist specializing in SEO, PPC, and social media campaigns that deliver measurable ROI.',
                expertise: ['Digital Marketing', 'SEO/PPC', 'Analytics'],
                social: {
                  linkedin: '#',
                  twitter: '#',
                  email: 'david@enovetmedia.com'
                }
              },
              {
                name: 'Lisa Wang',
                role: 'Content Strategist',
                image: '/testimonials/lisa.jpg',
                bio: 'Content marketing expert who creates compelling narratives that engage audiences and drive conversions.',
                expertise: ['Content Strategy', 'Copywriting', 'SEO'],
                social: {
                  linkedin: '#',
                  medium: '#',
                  email: 'lisa@enovetmedia.com'
                }
              },
              {
                name: 'Alex Thompson',
                role: 'Video Producer',
                image: '/testimonials/alex.jpg',
                bio: 'Creative video producer and editor with a passion for storytelling through visual media.',
                expertise: ['Video Production', 'Motion Graphics', 'Post-Production'],
                social: {
                  linkedin: '#',
                  vimeo: '#',
                  email: 'alex@enovetmedia.com'
                }
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative bg-gray-800/50 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10 hover:border-secondary/50 transition-all duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white/80 text-lg font-semibold">{member.name}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-secondary font-medium mb-4">{member.role}</p>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{member.bio}</p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 text-xs bg-white/5 rounded-full text-gray-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <a
                      href={`mailto:${member.social.email}`}
                      className="text-sm text-secondary hover:text-white transition-colors"
                    >
                      {member.social.email}
                    </a>
                    <div className="flex space-x-2">
                      <a href={member.social.linkedin} className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                        <span className="sr-only">LinkedIn</span>
                        <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* End Team Section */}
      
      {/* Awards & Recognition */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Awards & <span className="text-secondary">Recognition</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Industry recognition for our excellence and innovation in digital solutions
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                title: 'Best Digital Agency 2023',
                organization: 'Digital Marketing Awards',
                year: '2023',
                icon: TrophyIcon
              },
              {
                title: 'Excellence in Web Development',
                organization: 'Web Design Awards',
                year: '2023',
                icon: CheckCircleIcon
              },
              {
                title: 'Top SEO Agency',
                organization: 'Search Engine Journal',
                year: '2022',
                icon: ChartBarIcon
              },
              {
                title: 'Innovation in Marketing',
                organization: 'Marketing Excellence Awards',
                year: '2022',
                icon: LightBulbIcon
              }
            ].map((award, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-secondary/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                <div className="relative text-center">
                  <award.icon className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">{award.title}</h3>
                  <p className="text-gray-400 text-sm mb-2">{award.organization}</p>
                  <p className="text-secondary font-medium">{award.year}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-3xl p-12 text-center backdrop-blur-sm border border-white/10 overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            </div>
            
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium mb-6"
              >
                <SparklesIcon className="w-4 h-4 text-secondary" />
                <span className="text-white">Ready to Work Together?</span>
              </motion.div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Let's Create Something Amazing
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-lg">
                Ready to transform your business with innovative digital solutions? 
                Get in touch with our team and let's discuss your project.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 rounded-full bg-secondary text-white font-medium hover:bg-secondary/90 transition-all duration-300 shadow-lg shadow-secondary/20 hover:shadow-xl hover:shadow-secondary/30"
                >
                  Start Your Project
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm text-white font-medium hover:bg-white/20 transition-all duration-300"
                >
                  View Our Work
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 