'use client'

import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ArrowRightIcon, 
  ChartBarIcon,
  UserGroupIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  SparklesIcon,
  RocketLaunchIcon,
  CurrencyDollarIcon,
  ClockIcon,
  EyeIcon,
  HeartIcon,
  ShareIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  PlayIcon,
  CheckCircleIcon,
  ArrowTrendingUpIcon,
  CursorArrowRaysIcon,
  CodeBracketIcon,
  PaintBrushIcon,
  MegaphoneIcon,
  VideoCameraIcon,
  PhotoIcon
} from '@heroicons/react/24/outline'

import { StarIcon } from '@heroicons/react/24/solid'

// Project interface
interface Project {
  id: number
  title: string
  category: string
  subcategory: string
  image: string
  description: string
  longDescription: string
  technologies: string[]
  client: string
  industry: string
  duration: string
  team: string
  results: Array<{
    metric: string
    value: string
    icon: React.ComponentType<any>
  }>
  challenges: string[]
  solutions: string[]
  link: string
  featured: boolean
  videoUrl: string
}

// Animation variants
const fadeIn = {
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

// Enhanced portfolio projects data
const projects: Project[] = [
  {
    id: 1,
    title: "TechFlow E-commerce Platform",
    category: "Web Development",
    subcategory: "E-commerce",
    image: "/portfolio/ecommerce.jpg",
    description: "A comprehensive e-commerce platform built for a leading tech retailer, featuring advanced product filtering, real-time inventory management, and seamless payment processing.",
    longDescription: "TechFlow needed a modern, scalable e-commerce solution that could handle high traffic and provide an exceptional user experience. We built a custom platform using Next.js and Node.js with MongoDB for the database. The platform includes advanced features like AI-powered product recommendations, real-time inventory tracking, and integrated analytics dashboard.",
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe", "Redis", "AWS"],
    client: "TechFlow Inc.",
    industry: "Technology Retail",
    duration: "4 months",
    team: "6 developers, 2 designers, 1 PM",
    results: [
      { metric: "Revenue Increase", value: "340%", icon: CurrencyDollarIcon },
      { metric: "Conversion Rate", value: "4.2%", icon: ChartBarIcon },
      { metric: "Page Load Speed", value: "1.8s", icon: RocketLaunchIcon },
      { metric: "Mobile Traffic", value: "65%", icon: DevicePhoneMobileIcon }
    ],
    challenges: [
      "High traffic handling during peak seasons",
      "Complex inventory management system",
      "Integration with multiple payment gateways"
    ],
    solutions: [
      "Implemented microservices architecture",
      "Built custom inventory management system",
      "Created unified payment processing layer"
    ],
    link: "/portfolio/techflow-ecommerce",
    featured: true,
    videoUrl: "https://www.youtube.com/watch?v=example1"
  },
  {
    id: 2,
    title: "GreenLife Brand Transformation",
    category: "Branding",
    subcategory: "Brand Identity",
    image: "/portfolio/brand.jpg",
    description: "Complete brand overhaul for an eco-friendly lifestyle company, including logo design, visual identity, and comprehensive brand guidelines.",
    longDescription: "GreenLife wanted to reposition themselves as a premium eco-friendly lifestyle brand. We conducted extensive market research and created a complete brand identity system that resonated with environmentally conscious consumers. The project included logo design, color palette, typography, packaging design, and comprehensive brand guidelines.",
    technologies: ["Brand Strategy", "Logo Design", "Visual Identity", "Packaging Design"],
    client: "GreenLife Co.",
    industry: "Lifestyle & Wellness",
    duration: "3 months",
    team: "2 designers, 1 strategist, 1 copywriter",
    results: [
      { metric: "Brand Recognition", value: "85%", icon: EyeIcon },
      { metric: "Customer Engagement", value: "200%", icon: HeartIcon },
      { metric: "Market Share", value: "150%", icon: ChartBarIcon },
      { metric: "Social Growth", value: "300%", icon: ShareIcon }
    ],
    challenges: [
      "Differentiating from competitors in crowded market",
      "Creating appeal across different age demographics",
      "Maintaining eco-friendly messaging"
    ],
    solutions: [
      "Developed unique brand positioning strategy",
      "Created versatile visual system",
      "Established clear brand voice guidelines"
    ],
    link: "/portfolio/greenlife-branding",
    featured: true,
    videoUrl: "https://www.youtube.com/watch?v=example2"
  },
  {
    id: 3,
    title: "SocialBoost Campaign Suite",
    category: "Social Media",
    subcategory: "Campaign Management",
    image: "/portfolio/social.jpg",
    description: "Multi-platform social media campaign that generated viral content and significantly increased brand engagement across all channels.",
    longDescription: "SocialBoost needed a comprehensive social media strategy to increase their online presence and engage with their target audience. We created a multi-platform campaign that included content creation, community management, influencer partnerships, and paid advertising. The campaign was designed to be scalable and measurable with clear KPIs.",
    technologies: ["Content Strategy", "Community Management", "Influencer Marketing", "Paid Advertising"],
    client: "SocialBoost",
    industry: "Digital Marketing",
    duration: "6 months",
    team: "3 content creators, 2 community managers, 1 strategist",
    results: [
      { metric: "Engagement Rate", value: "8.5%", icon: HeartIcon },
      { metric: "Follower Growth", value: "300%", icon: UserGroupIcon },
      { metric: "Reach", value: "2.5M+", icon: EyeIcon },
      { metric: "Campaign ROI", value: "400%", icon: CurrencyDollarIcon }
    ],
    challenges: [
      "Managing multiple social media platforms",
      "Creating consistent brand voice",
      "Measuring campaign effectiveness"
    ],
    solutions: [
      "Developed unified content calendar",
      "Created comprehensive brand guidelines",
      "Implemented advanced analytics tracking"
    ],
    link: "/portfolio/socialboost-campaign",
    featured: false,
    videoUrl: "https://www.youtube.com/watch?v=example3"
  },
  {
    id: 4,
    title: "SearchMaster SEO Optimization",
    category: "SEO",
    subcategory: "Technical SEO",
    image: "/portfolio/seo.jpg",
    description: "Comprehensive SEO strategy that improved organic traffic by 250% and achieved top rankings for competitive keywords.",
    longDescription: "SearchMaster was struggling with low organic traffic and poor search rankings. We conducted a complete SEO audit and implemented a comprehensive optimization strategy that included technical SEO improvements, content optimization, and link building. The project focused on both on-page and off-page optimization techniques.",
    technologies: ["Technical SEO", "Content Optimization", "Link Building", "Analytics"],
    client: "SearchMaster",
    industry: "SaaS",
    duration: "8 months",
    team: "2 SEO specialists, 1 content writer, 1 developer",
    results: [
      { metric: "Organic Traffic", value: "250%", icon: ArrowTrendingUpIcon },
      { metric: "Keyword Rankings", value: "Top 10", icon: ChartBarIcon },
      { metric: "Conversion Rate", value: "45%", icon: CursorArrowRaysIcon },
      { metric: "Domain Authority", value: "75", icon: GlobeAltIcon }
    ],
    challenges: [
      "Competitive keyword landscape",
      "Technical website issues",
      "Content quality improvement"
    ],
    solutions: [
      "Implemented comprehensive technical fixes",
      "Created high-quality, optimized content",
      "Built strategic backlink profile"
    ],
    link: "/portfolio/searchmaster-seo",
    featured: false,
    videoUrl: "https://www.youtube.com/watch?v=example4"
  },
  {
    id: 5,
    title: "CinemaPro Video Production",
    category: "Video Editing",
    subcategory: "Commercial Production",
    image: "/portfolio/video.jpg",
    description: "Professional video production for a major product launch campaign, including commercials, social media content, and promotional videos.",
    longDescription: "CinemaPro needed a comprehensive video production package for their flagship product launch. We created multiple video assets including TV commercials, social media content, product demos, and promotional videos. The project required high production values and tight deadlines.",
    technologies: ["Video Editing", "Motion Graphics", "Color Grading", "Sound Design"],
    client: "CinemaPro",
    industry: "Entertainment",
    duration: "2 months",
    team: "2 video editors, 1 motion designer, 1 sound engineer",
    results: [
      { metric: "View Retention", value: "75%", icon: EyeIcon },
      { metric: "Engagement Rate", value: "12%", icon: HeartIcon },
      { metric: "Brand Recall", value: "85%", icon: EyeIcon },
      { metric: "Sales Impact", value: "180%", icon: CurrencyDollarIcon }
    ],
    challenges: [
      "Tight production timeline",
      "Multiple video formats required",
      "Maintaining brand consistency"
    ],
    solutions: [
      "Streamlined production workflow",
      "Created modular video assets",
      "Established brand style guide"
    ],
    link: "/portfolio/cinemapro-video",
    featured: false,
    videoUrl: "https://www.youtube.com/watch?v=example5"
  },
  {
    id: 6,
    title: "AdMax PPC Campaign",
    category: "PPC Advertising",
    subcategory: "Google Ads",
    image: "/portfolio/ppc.jpg",
    description: "ROI-focused PPC campaign that achieved 400% return on ad spend with targeted audience segmentation and continuous optimization.",
    longDescription: "AdMax wanted to increase their online sales through paid advertising while maintaining a positive ROI. We developed a comprehensive PPC strategy that included Google Ads, Facebook Ads, and remarketing campaigns. The strategy focused on audience targeting, ad optimization, and conversion tracking.",
    technologies: ["Google Ads", "Facebook Ads", "Remarketing", "Analytics"],
    client: "AdMax",
    industry: "E-commerce",
    duration: "6 months",
    team: "2 PPC specialists, 1 copywriter, 1 designer",
    results: [
      { metric: "ROI", value: "400%", icon: CurrencyDollarIcon },
      { metric: "Conversion Rate", value: "5.2%", icon: CursorArrowRaysIcon },
      { metric: "Cost per Click", value: "$0.85", icon: ChartBarIcon },
      { metric: "Revenue Growth", value: "280%", icon: ArrowTrendingUpIcon }
    ],
    challenges: [
      "High competition in target keywords",
      "Limited budget constraints",
      "Complex conversion tracking"
    ],
    solutions: [
      "Implemented long-tail keyword strategy",
      "Created high-converting landing pages",
      "Set up advanced conversion tracking"
    ],
    link: "/portfolio/admax-ppc",
    featured: false,
    videoUrl: "https://www.youtube.com/watch?v=example6"
  }
]

// Enhanced testimonials data
const testimonials = [
  {
    name: 'Aarav Sharma',
    role: 'Founder, TechNova India',
    image: '/testimonials/aarav.jpg',
    content: "Enovet Media's digital strategies helped us reach new markets across India. Our online leads have doubled!",
    rating: 5,
    project: 'TechNova Expansion',
    results: ['2x Online Leads', '300% Traffic Growth', 'Top 5 Google Ranking']
  },
  {
    name: 'Priya Mehra',
    role: 'Marketing Head, GreenLeaf Organics',
    image: '/testimonials/priya.jpg',
    content: "The Enovet team's social media campaigns brought our brand to life. We saw a huge boost in engagement and sales.",
    rating: 5,
    project: 'GreenLeaf Social Campaign',
    results: ['400% Social Engagement', '150% Sales Growth', 'Brand Awareness Up']
  },
  {
    name: 'Rohan Verma',
    role: 'CTO, FinEdge Solutions',
    image: '/testimonials/rohan.jpg',
    content: "Their web development expertise gave us a robust, scalable platform. Support is always prompt and professional.",
    rating: 5,
    project: 'FinEdge Platform',
    results: ['99.9% Uptime', 'Fast Deployment', 'Excellent Support']
  },
  {
    name: 'David Kim',
    role: 'CTO, FinTech Solutions (USA)',
    image: '/testimonials/david.jpg',
    content: "Enovet's web team built us a cutting-edge platform that handles millions of transactions seamlessly.",
    rating: 5,
    project: 'FinTech Payment Platform',
    results: ['99.9% Uptime', '2s Load Time', '500% User Growth']
  },
  {
    name: 'Lisa Wang',
    role: 'VP Marketing, HealthTech Pro (Singapore)',
    image: '/testimonials/lisa.jpg',
    content: 'Their SEO and content marketing strategies helped us dominate our niche and generate qualified leads consistently.',
    rating: 5,
    project: 'HealthTech SEO Campaign',
    results: ['350% Organic Traffic', '45% Lead Increase', '4x ROI']
  },
  {
    name: 'Alex Thompson',
    role: 'Founder, Creative Studios (UK)',
    image: '/testimonials/alex.jpg',
    content: 'The branding and social media work Enovet did for us completely transformed our market position.',
    rating: 5,
    project: 'Creative Studios Brand Launch',
    results: ['250% Brand Recognition', '180% Social Growth', '3.5x Engagement']
  }
]

// Enhanced stats data
const stats = [
  { label: "Projects Completed", value: "100+", icon: CheckCircleIcon },
  { label: "Happy Clients", value: "200+", icon: UserGroupIcon },
  { label: "Awards Won", value: "25+", icon: StarIcon },
  { label: "Years Experience", value: "1.5+", icon: ClockIcon }
]

// Categories for filtering
const categories = [
  { id: 'all', name: 'All Projects', icon: SparklesIcon },
  { id: 'web-development', name: 'Web Development', icon: CodeBracketIcon },
  { id: 'branding', name: 'Branding', icon: PaintBrushIcon },
  { id: 'social-media', name: 'Social Media', icon: ShareIcon },
  { id: 'seo', name: 'SEO', icon: MagnifyingGlassIcon },
  { id: 'ppc-advertising', name: 'PPC Advertising', icon: MegaphoneIcon },
  { id: 'video-editing', name: 'Video Editing', icon: VideoCameraIcon }
]

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Filter projects based on selected category
  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'all') return projects
    return projects.filter(project => 
      project.category.toLowerCase().replace(' ', '-') === selectedCategory
    )
  }, [selectedCategory])

  // Featured projects
  const featuredProjects = projects.filter(project => project.featured)

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
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium mb-6"
            >
              <SparklesIcon className="w-4 h-4 text-secondary" />
              <span className="text-white">Our Portfolio</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-white via-secondary to-white bg-clip-text text-transparent">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover our successful projects and case studies across web development, 
              digital marketing, branding, and more. Each project tells a story of innovation, 
              creativity, and measurable results.
            </p>
            
            {/* Quick stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                  <stat.icon className="w-6 h-6 text-secondary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
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
              Featured <span className="text-secondary">Projects</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our most impactful and innovative projects that showcase our expertise and creativity
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={fadeIn}
                className="group relative bg-gray-800/50 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10 hover:border-secondary/50 transition-all duration-300"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                  
                  {/* Project badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/20 backdrop-blur-sm text-sm font-medium text-secondary">
                      <SparklesIcon className="w-4 h-4 mr-1" />
                      Featured
                    </span>
                  </div>

                  {/* Play button for video */}
                  {project.videoUrl && (
                    <div className="absolute top-4 right-4">
                      <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
                        <PlayIcon className="w-5 h-5 text-white" />
                      </button>
                    </div>
                  )}

                  {/* Project info overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-sm text-secondary mb-2">{project.category}</div>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 text-sm mb-3">{project.description}</p>
                    
                    {/* Results preview */}
                    <div className="flex flex-wrap gap-2">
                      {project.results.slice(0, 2).map((result, resultIndex) => (
                        <span
                          key={resultIndex}
                          className="inline-flex items-center px-2 py-1 rounded-full bg-white/10 text-xs text-gray-300"
                        >
                          <result.icon className="w-3 h-3 mr-1" />
                          {result.value}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="text-sm text-gray-400">
                        <span className="font-medium">Client:</span> {project.client}
                      </div>
                      <div className="text-sm text-gray-400">
                        <span className="font-medium">Duration:</span> {project.duration}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm bg-white/5 rounded-full text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1 text-sm bg-white/5 rounded-full text-gray-300">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <Link
                      href={project.link}
                      className="inline-flex items-center text-secondary hover:text-white transition-colors duration-300"
                    >
                      View Case Study
                      <ArrowRightIcon className="w-4 h-4 ml-2" />
                    </Link>
                    
                    <div className="flex items-center space-x-2">
                      <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                        <HeartIcon className="w-4 h-4 text-gray-400" />
                      </button>
                      <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                        <ShareIcon className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Filter by Category</h3>
          </motion.div>

          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                variants={fadeIn}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-secondary text-white shadow-lg shadow-secondary/20'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span className="font-medium">{category.name}</span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div 
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  className="group relative bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm border border-white/10 hover:border-secondary/50 transition-all duration-300 hover:shadow-xl hover:shadow-secondary/10"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                    
                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium text-white">
                        {project.category}
                      </span>
                    </div>

                    {/* Results preview */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex flex-wrap gap-1">
                        {project.results.slice(0, 2).map((result, resultIndex) => (
                          <span
                            key={resultIndex}
                            className="inline-flex items-center px-2 py-1 rounded-full bg-secondary/20 text-xs text-secondary"
                          >
                            <result.icon className="w-3 h-3 mr-1" />
                            {result.value}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-secondary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm text-gray-400">
                        <span className="font-medium">Client:</span> {project.client}
                      </div>
                      <div className="text-sm text-gray-400">
                        <span className="font-medium">Duration:</span> {project.duration}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 text-xs bg-white/5 rounded-full text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 text-xs bg-white/5 rounded-full text-gray-300">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <Link
                        href={project.link}
                        className="inline-flex items-center text-secondary hover:text-white transition-colors duration-300 text-sm font-medium"
                      >
                        View Details
                        <ArrowRightIcon className="w-4 h-4 ml-2" />
                      </Link>
                      
                      <div className="flex items-center space-x-1">
                        <button className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                          <HeartIcon className="w-3 h-3 text-gray-400" />
                        </button>
                        <button className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                          <ShareIcon className="w-3 h-3 text-gray-400" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
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
              Client <span className="text-secondary">Testimonials</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Hear what our clients have to say about their experience working with us
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="group relative bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-white/10 hover:border-secondary/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 ring-2 ring-secondary/20">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                      <p className="text-secondary text-xs font-medium">{testimonial.project}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-secondary" />
                    ))}
                  </div>
                  
                  <blockquote className="text-gray-300 mb-6 italic leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>
                  
                  <div className="space-y-2">
                    {testimonial.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircleIcon className="w-4 h-4 text-secondary mr-2" />
                        {result}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
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
              Our <span className="text-secondary">Services</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Comprehensive digital solutions to help your business grow and succeed online
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeIn} className="group relative bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-white/10 hover:border-secondary/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <div className="relative">
                <GlobeAltIcon className="w-12 h-12 text-secondary mb-6" />
                <h3 className="text-xl font-semibold text-white mb-4">Web Development</h3>
                <p className="text-gray-300 mb-6">Custom websites and web applications built with modern technologies and best practices</p>
                <Link href="/services/web-development" className="inline-flex items-center text-secondary hover:text-white transition-colors">
                  Learn More <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="group relative bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-white/10 hover:border-secondary/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <div className="relative">
                <ChartBarIcon className="w-12 h-12 text-secondary mb-6" />
                <h3 className="text-xl font-semibold text-white mb-4">Digital Marketing</h3>
                <p className="text-gray-300 mb-6">Strategic marketing solutions to grow your online presence and drive results</p>
                <Link href="/services" className="inline-flex items-center text-secondary hover:text-white transition-colors">
                  Learn More <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="group relative bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-white/10 hover:border-secondary/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <div className="relative">
                <UserGroupIcon className="w-12 h-12 text-secondary mb-6" />
                <h3 className="text-xl font-semibold text-white mb-4">Branding</h3>
                <p className="text-gray-300 mb-6">Complete brand identity and strategy development for lasting impact</p>
                <Link href="/services/branding" className="inline-flex items-center text-secondary hover:text-white transition-colors">
                  Learn More <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="group relative bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-white/10 hover:border-secondary/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <div className="relative">
                <DevicePhoneMobileIcon className="w-12 h-12 text-secondary mb-6" />
                <h3 className="text-xl font-semibold text-white mb-4">Social Media</h3>
                <p className="text-gray-300 mb-6">Engaging social media management and content creation that connects</p>
                <Link href="/services/social-media" className="inline-flex items-center text-secondary hover:text-white transition-colors">
                  Learn More <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
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
                <span className="text-white">Ready to Start?</span>
              </motion.div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Let's Create Something Amazing Together
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-lg">
                Ready to transform your digital presence? Get in touch with us to discuss your project 
                and discover how we can help you achieve your goals.
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
                  href="/services"
                  className="inline-flex items-center px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm text-white font-medium hover:bg-white/20 transition-all duration-300"
                >
                  View Our Services
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-gray-900 rounded-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal content would go here - this is a placeholder for the detailed project view */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white">{selectedProject.title}</h2>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <ArrowRightIcon className="w-6 h-6 text-white rotate-45" />
                  </button>
                </div>
                <p className="text-gray-300 mb-6">{selectedProject.longDescription}</p>
                {/* Add more detailed content here */}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 