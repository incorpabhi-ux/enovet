'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline'

const services = [
  { name: 'Web Development', href: '/services/web-development' },
  { name: 'PPC Advertising', href: '/services/ppc-advertising' },
  { name: 'Branding', href: '/services/branding' },
  { name: 'SEO Optimization', href: '/services/seo' },
  { name: 'Social Media', href: '/services/social-media' },
  { name: 'Video Editing', href: '/services/video-editing' }
]

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services', hasDropdown: true },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' }
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleDropdown = (linkName: string) => {
    setActiveDropdown(activeDropdown === linkName ? null : linkName)
  }

  if (!mounted) {
    return null
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`sticky top-0 left-0 right-0 z-[100] w-full transition-all duration-300 ${
        isScrolled 
          ? 'py-3 shadow-lg shadow-black/20' 
          : 'py-5'
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-primary/30 backdrop-blur-md border-b border-white/10" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-white via-secondary to-white bg-clip-text text-transparent"
            >
              Enovet Media
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative group"
                onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
              >
                {link.hasDropdown ? (
                  <div>
                    <Link
                      href={link.href}
                      className="flex items-center space-x-1 text-gray-200 hover:text-white transition-colors duration-300 font-medium"
                    >
                      <span>{link.name}</span>
                      <ChevronDownIcon className="w-4 h-4" />
                    </Link>
                    <AnimatePresence>
                      {activeDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute top-full left-0 mt-2 w-56 rounded-xl bg-gray-900/95 backdrop-blur-md shadow-xl border border-white/10 overflow-hidden"
                        >
                          <div className="py-2">
                            <Link
                              href="/services"
                              className="group flex items-center px-4 py-3 text-sm text-gray-200 hover:text-white hover:bg-white/5 transition-all duration-300 border-b border-white/5"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <span className="relative">
                                All Services
                                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300" />
                              </span>
                            </Link>
                            {services.map((service, index) => (
                              <Link
                                key={service.name}
                                href={service.href}
                                className="group flex items-center px-4 py-3 text-sm text-gray-200 hover:text-white hover:bg-white/5 transition-all duration-300"
                                onClick={() => setActiveDropdown(null)}
                              >
                                <span className="relative">
                                  {service.name}
                                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300" />
                                </span>
                              </Link>
                            ))}
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-transparent pointer-events-none" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="relative group"
                  >
                    <span className="text-gray-200 hover:text-white transition-colors duration-300 font-medium">
                      {link.name}
                    </span>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300" />
                  </Link>
                )}
              </div>
            ))}
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 rounded-full bg-secondary text-white font-medium hover:bg-secondary/90 transition-colors duration-300 shadow-lg shadow-secondary/20"
              >
                Get Started
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative z-10 p-2 text-gray-200 hover:text-white transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-md border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(link.name)}
                        className="flex items-center justify-between w-full text-gray-200 hover:text-white transition-colors duration-300 font-medium"
                      >
                        <span>{link.name}</span>
                        <ChevronDownIcon className="w-4 h-4" />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === link.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="mt-2 ml-4 space-y-1 bg-white/5 rounded-lg overflow-hidden"
                          >
                            <Link
                              href="/services"
                              className="group block px-4 py-3 text-gray-200 hover:text-white hover:bg-white/5 transition-all duration-300 border-b border-white/5"
                              onClick={() => {
                                setIsMobileMenuOpen(false)
                                setActiveDropdown(null)
                              }}
                            >
                              <span className="relative">
                                All Services
                                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300" />
                              </span>
                            </Link>
                            {services.map((service) => (
                              <Link
                                key={service.name}
                                href={service.href}
                                className="group block px-4 py-3 text-gray-200 hover:text-white hover:bg-white/5 transition-all duration-300"
                                onClick={() => {
                                  setIsMobileMenuOpen(false)
                                  setActiveDropdown(null)
                                }}
                              >
                                <span className="relative">
                                  {service.name}
                                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300" />
                                </span>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className="block text-gray-200 hover:text-white transition-colors duration-300 font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link href="/contact">
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full px-6 py-2.5 rounded-full bg-secondary text-white font-medium hover:bg-secondary/90 transition-colors duration-300 shadow-lg shadow-secondary/20"
                >
                  Get Started
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
} 